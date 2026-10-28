import InstitutionalLayout from "@/components/InstitutionalLayout";
export default function CookiePolicy() {
  return (
    <InstitutionalLayout title="Cookie Policy" label="Cookie Policy">
      <section className="site-container legal-content">
        <div className="prose prose-lg max-w-none text-[#0F120F]/80">
          <p>Last updated: August 30, 2026</p>
          <h3>1. What Are Cookies?</h3>
          <p>
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and provide information to the owners
            of the site.
          </p>
          <h3>2. How We Use Cookies</h3>
          <p>
            We use cookies to understand how you use our site, personalize
            content, and improve your experience. This includes essential
            cookies, analytics cookies, and marketing cookies.
          </p>
          <h3>3. Managing Cookies</h3>
          <p>
            You can control and/or delete cookies as you wish. You can delete
            all cookies that are already on your computer and you can set most
            browsers to prevent them from being placed.
          </p>
        </div>
      </section>
    </InstitutionalLayout>
  );
}
