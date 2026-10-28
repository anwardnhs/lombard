import InstitutionalLayout from "@/components/InstitutionalLayout";
export default function PrivacyPolicy() {
  return (
    <InstitutionalLayout title="Privacy Policy" label="Privacy Policy">
      <section className="site-container legal-content">
        <div className="prose prose-lg max-w-none text-[#0F120F]/80">
          <p>Last updated: August 30, 2026</p>
          <h3>1. Information We Collect</h3>
          <p>
            We collect personal information that you voluntarily provide to us
            when expressing an interest in obtaining information about us or our
            services.
          </p>
          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect or receive to communicate with
            you, optimize our website, and ensure compliance with legal
            obligations.
          </p>
          <h3>3. Data Security</h3>
          <p>
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process.
          </p>
          <h3>4. Your Privacy Rights</h3>
          <p>
            Depending on your location, you may have the right to request access
            to, correction, or deletion of your personal data.
          </p>
        </div>
      </section>
    </InstitutionalLayout>
  );
}
