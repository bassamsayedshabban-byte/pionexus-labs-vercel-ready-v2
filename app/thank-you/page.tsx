import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function ThankYouPage() {
  return (
    <div className="container-px py-24">
      
      <div className="mb-10"><PageHero title="Thank You" subtitle="We received your message. Our team will reach out shortly." /></div>
<div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Thank You!</h1>
        <p className="mt-4 muted">Your message has been received. We’ll get back to you shortly.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services" className="btn-secondary">Explore Services</Link>
        </div>
      </div>
    </div>
  );
}