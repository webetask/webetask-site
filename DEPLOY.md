# Deploy webetask.app on your Hostinger VPS (CloudPanel)

The website runs as a Node.js app behind CloudPanel. The product itself stays on Vercel at `app.webetask.app`.

**Time:** about 45 minutes the first time. Updates after that take one command.

---

## 0. Before you start

You need:

- CloudPanel login (`https://YOUR-VPS-IP:8443`)
- Access to the DNS settings for webetask.app (where you bought the domain)
- Your Supabase project (the same one the app uses)
- A GitHub account (to hold the website code)

---

## 1. Point the domain at the VPS

In your domain's DNS settings:

| Type  | Name  | Value              | Notes |
|-------|-------|--------------------|-------|
| A     | `@`   | YOUR-VPS-IP        | webetask.app → website |
| A     | `www` | YOUR-VPS-IP        | www.webetask.app → website |
| CNAME | `app` | the value Vercel shows you | app.webetask.app → the product |

For **webetask.online / .org / .cloud**, use your registrar's **domain forwarding** with a **301 permanent redirect** to `https://webetask.app`.

DNS can take from a few minutes up to a few hours to update.

---

## 2. Create the contact messages table in Supabase

1. Supabase dashboard → **SQL Editor** → **New query**
2. Paste everything from `supabase/contact_messages.sql` → **Run**
3. Go to **Project Settings → API** and copy:
   - **Project URL**
   - **anon public** key (NOT the service_role key)

The table only lets the website add messages. It can't read them back, so the public key is safe on the server. You read messages in **Table Editor → contact_messages**.

---

## 3. Put the code on GitHub

1. On GitHub, create a **new private repository** called `webetask-site` (empty, no README).
2. On your computer, unzip the project, open a terminal in the folder and run:

```bash
git init
git add .
git commit -m "Webetask website"
git branch -M main
git remote add origin https://github.com/webetask/webetask-site.git
git push -u origin main
```

---

## 4. Create the Node.js site in CloudPanel

1. CloudPanel → **Sites** → **Add Site** → **Create a Node.js Site**
2. Fill in:
   - **Domain Name:** `webetask.app`
   - **Node.js Version:** 22 LTS
   - **App Port:** `3000` (if another app already uses 3000, pick another, like `3010`, and use the same number in `ecosystem.config.cjs`)
   - **Site User / Password:** for example `webetask` and a strong password (save it in Bitwarden)
3. **Create**
4. Open the new site → **Domains** → add `www.webetask.app` as an alias.

---

## 5. Get the code onto the server

SSH in **as the site user** (not root):

```bash
ssh webetask@YOUR-VPS-IP
cd ~/htdocs
rm -rf webetask.app            # remove the empty starter folder
git clone https://github.com/webetask/webetask-site.git webetask.app
cd webetask.app
```

For a private repo, GitHub will ask you to sign in. Use a **fine-grained personal access token** with read-only access to this one repo as the password (GitHub → Settings → Developer settings → Personal access tokens).

---

## 6. Add the settings file

```bash
cp .env.example .env.local
nano .env.local
```

Fill in:

- `SUPABASE_URL` and `SUPABASE_ANON_KEY` from step 2
- The `SMTP_` values for the mailbox that sends the notification (see step 10 for Mailcow)

Save with **Ctrl+O**, Enter, then **Ctrl+X**.

Until email is ready, leave the SMTP lines empty. Messages are still saved in Supabase, so nothing is lost.

---

## 7. Install, build and start

```bash
npm install
npm run build
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
```

Check it's running:

```bash
pm2 status            # should show webetask-site "online"
curl -I localhost:3000 # should show HTTP/1.1 200
```

### Keep it running after a server restart

1. Over SSH, run `dirname $(which pm2)` and copy the folder it prints (something like `/home/webetask/.nvm/versions/node/v22.x.x/bin`).
2. CloudPanel → your site → **Cron Jobs** → **Add Cron Job**:
   - **Schedule:** `@reboot`
   - **Command:** `PATH=FOLDER_YOU_COPIED:$PATH pm2 resurrect`

`pm2 resurrect` brings back whatever you last saved with `pm2 save`.

---

## 8. Turn on HTTPS

`.app` domains only work over HTTPS, so do this before testing in a browser.

CloudPanel → your site → **SSL/TLS** → **Actions** → **New Let's Encrypt Certificate** → include both `webetask.app` and `www.webetask.app` → **Create and Install**.

Then open **https://webetask.app**. 🎉

---

## 9. Test the contact form

1. Open https://webetask.app/contact and send a test message.
2. Check Supabase → Table Editor → `contact_messages`. Your message should be there.
3. If SMTP is set, check the support inbox too.
4. If something fails: `pm2 logs webetask-site` shows the reason (lines starting with `[contact]`).

---

## 10. Email with Mailcow: read this first

Mailcow and CloudPanel **both want ports 80 and 443** and both run their own web server. Putting them on the same VPS works, but it takes extra setup and a mistake can take the website offline.

**Recommended:** run Mailcow on a separate small VPS (Mailcow asks for at least 6 GB of RAM).

Whichever server runs it, the website only needs these settings in `.env.local`:

```
SMTP_HOST=mail.webetask.app
SMTP_PORT=465
SMTP_USER=support@webetask.app
SMTP_PASS=the mailbox password
SMTP_FROM=Webetask website <support@webetask.app>
CONTACT_TO=support@webetask.app
```

So your email actually arrives (and doesn't land in spam), set these DNS records for webetask.app. Mailcow shows the exact values under **Configuration → Mail Setup → Domains → DNS**:

- **MX** → `mail.webetask.app`
- **SPF** (TXT) → `v=spf1 mx a -all`
- **DKIM** (TXT) → the key Mailcow generates
- **DMARC** (TXT on `_dmarc`) → start with `v=DMARC1; p=none; rua=mailto:support@webetask.app`
- **PTR / reverse DNS** for the mail server IP → `mail.webetask.app` (set in your Hostinger VPS panel)

After changing `.env.local`, restart: `pm2 reload webetask-site`.

---

## 11. Tell Google about the site

1. Go to **Google Search Console** → add property `webetask.app` (Domain type; it gives you a TXT record to add to DNS).
2. **Sitemaps** → submit `https://webetask.app/sitemap.xml`

---

## Updating the site later

1. Change the code on your computer (or ask Claude Code to) and push to GitHub.
2. On the server:

```bash
ssh webetask@YOUR-VPS-IP
cd ~/htdocs/webetask.app
bash deploy.sh
```

---

## Before launch checklist

- [ ] Fill every `[BRACKETED]` item in `src/lib/legal.tsx` and have a lawyer read the legal pages
- [ ] Re-check competitor prices in `src/lib/competitors.ts` (last checked October 2026)
- [ ] Contact form tested end to end
- [ ] `https://webetask.app/sitemap.xml` opens
- [ ] Sitemap submitted in Google Search Console
- [ ] Share a link in WhatsApp to check the preview image shows

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm run build` fails on fonts | The server needs internet access to download the Plus Jakarta Sans font during the build. Try again; check the VPS firewall allows outgoing HTTPS. |
| Site shows "502 Bad Gateway" | The app isn't running. `pm2 status`, then `pm2 logs webetask-site`. Check the App Port in CloudPanel matches `ecosystem.config.cjs`. |
| Browser says the site isn't secure | The SSL certificate isn't installed yet (step 8). |
| Contact form says it couldn't send | Both Supabase and email failed. `pm2 logs webetask-site` shows why. |
| Old version still showing | Run `bash deploy.sh` again, then hard-refresh the browser. |
