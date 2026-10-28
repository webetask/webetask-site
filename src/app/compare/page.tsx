import { redirect } from "next/navigation";

// /compare has no page of its own; send people to the first comparison.
export default function CompareIndex() {
  redirect("/compare/asana");
}
