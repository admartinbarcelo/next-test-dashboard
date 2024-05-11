import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect to the counter page
  redirect("/dashboard/counter");
}
