import InstitutionalLayout from "@/components/InstitutionalLayout";
export default function TermsOfService() {
  return (
    <InstitutionalLayout title="Terms of Service" label="Terms of Service">
      <section className="site-container legal-content">
        <div className="prose prose-lg max-w-none text-[#0F120F]/80">
          <p>Last updated: August 30, 2026</p>
          <h3>1. Introduction</h3>
          <p>
            Welcome to Lombard HoldCo Plc. These Terms of Service govern your
            use of our website and services.
          </p>
          <h3>2. Use of Services</h3>
          <p>
            By accessing our website, you agree to be bound by these terms. Our
            services are intended for general informational purposes and
            professional engagement.
          </p>
          <h3>3. Intellectual Property</h3>
          <p>
            All content, trademarks, and data on this website are the property
            of Lombard HoldCo Plc or its licensors.
          </p>
          <h3>4. Limitation of Liability</h3>
          <p>
            Lombard HoldCo Plc shall not be liable for any direct, indirect,
            incidental, or consequential damages resulting from the use of our
            services.
          </p>
          <h3>5. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at
            legal@lombardholdco.com.
          </p>
        </div>
      </section>
    </InstitutionalLayout>
  );
}
