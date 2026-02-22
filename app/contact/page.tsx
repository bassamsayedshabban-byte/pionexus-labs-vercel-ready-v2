import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <div className="container-px py-16">
      <div className="mb-10">
        <PageHero
          title="Contact"
          subtitle="Tell us what you’re building — we’ll respond with next steps and a delivery plan."
        />
      </div>

      <Suspense fallback={<div className="card p-7">Loading…</div>}>
        <ContactClient />
      </Suspense>
    </div>
  );
}
