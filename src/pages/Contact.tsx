import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InstitutionalLayout from "@/components/InstitutionalLayout";

import { businesses } from "@/data/editorial";
import tower from "@/assets/curated/hq11.webp";
export default function Contact() {
  const [params] = useSearchParams();
  const business = businesses.find(
    (item) => item.id === params.get("business"),
  );
  const [prepared, setPrepared] = useState(false);
  const [topic, setTopic] = useState(business?.name ?? "General enquiries");
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const recipient =
      topic === "Investor relations"
        ? "investor.relations@lombardholdco.com"
        : topic === "Media enquiries"
          ? "media@lombardholdco.com"
          : "info@lombardholdco.com";
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("company")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return (
    <InstitutionalLayout title="Contact" label="Contact">
      <section className="site-container contact-layout">
        <div>
          <span className="eyebrow section-label">Group contacts</span>
          <h2>Corporate enquiries</h2>
          <div className="contact-channels">
            {[
              ["General enquiries", "info@lombardholdco.com"],
              ["Investor relations", "investor.relations@lombardholdco.com"],
              ["Media enquiries", "media@lombardholdco.com"],
            ].map(([label, email]) => (
              <div key={email}>
                <h3 className="eyebrow">{label}</h3>
                <a href={`mailto:${email}`}>
                  {email}
                  <ArrowUpRight size={15} />
                </a>
              </div>
            ))}
          </div>
          <figure className="contact-location">
            <img src={tower} alt="The Lombard Tower in Lagos" loading="lazy" />
            <figcaption>
              <span className="eyebrow">Our headquarters</span>
              <address>
                The Lombard Tower
                <br />
                44 Marina, Lagos Island
                <br />
                Lagos, Nigeria
              </address>
            </figcaption>
          </figure>
        </div>
        <div className="contact-form-panel">
          <span className="eyebrow section-label">Correspondence</span>
          <h2>Enquiry details</h2>
          <p className="text-sm leading-relaxed text-[#586059] mt-5 mb-8">
            Complete the details below to prepare an email to our team. Your
            email application will open so you can review and send it.
          </p>
          <form onSubmit={submit} className="contact-form">
            <label>
              Full name
              <input name="name" autoComplete="name" required maxLength={150} />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
            <label>
              Organisation <span>(optional)</span>
              <input
                name="company"
                autoComplete="organization"
                maxLength={200}
              />
            </label>
            <label>
              Enquiry about
              <select
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                {[
                  "General enquiries",
                  "Investor relations",
                  "Media enquiries",
                  ...businesses.map((item) => item.name),
                ].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              Your message
              <textarea name="message" rows={5} required maxLength={4000} />
            </label>
            <button className="design-button" type="submit">
              Prepare enquiry email <ArrowUpRight size={17} />
            </button>
            <p className="text-xs leading-relaxed text-[#586059]">
              Please avoid including account numbers or sensitive financial
              information.{" "}
              <a href="/privacy" className="underline">
                Privacy policy
              </a>
            </p>
            {prepared && (
              <p
                role="status"
                className="text-sm leading-relaxed text-[#52796f]"
              >
                Your email draft is ready in your email application. Send it
                there to complete your enquiry. If it did not open, use one of
                the email links on this page.
              </p>
            )}
          </form>
        </div>
      </section>
    </InstitutionalLayout>
  );
}
