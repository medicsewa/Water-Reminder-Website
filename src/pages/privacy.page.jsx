import { Link } from "react-router-dom";
const PrivacyPage = () => {
  return (
    <main className="w-[80%] py-16 mx-auto my-auto">
      <div className="flex flex-col">
        <p className="text-lg font-bold">
          Privacy Policy for Sip It - Water Reminder
        </p>
        <p className="text-sm">Effective Date: July 12, 2025</p>

        <p className="mt-8">
          This Privacy Policy describes how Sip It ("we," "us," or "our")
          collects, uses, and protects your information when you use our mobile
          application ("App"). Your privacy is important to us, and we are
          committed to protecting it.
        </p>
        <p className="mt-4">
          By using the Sip It App, you agree to the collection and use of
          information in accordance with this policy.
        </p>

        <h2 className="mt-4 font-bold">1. Information We Collect</h2>
        <p>
          We collect information in the following ways to provide and improve
          our App:
        </p>

        <h3 className="mt-4 font-bold">a) Information You Provide to Us</h3>
        <ul className="mt-2">
          <li>
            <span className="font-medium italic underline">
              Account Information:
            </span>{" "}
            When you create an account to use our App, we use Supabase for user
            authentication. The information we collect for this purpose includes
            your email address and a securely hashed version of your password.
            This information is used solely for identifying you, securing your
            account, and allowing you to sign in.
          </li>
        </ul>

        <h3 className="mt-4 font-bold">
          b) Information We Collect Automatically
        </h3>
        <ul>
          <li>
            <strong>Usage and Analytics Data:</strong> We use Google Analytics
            for Firebase to understand how our users interact with the App. This
            helps us improve user experience and app functionality. This service
            collects anonymized data such as your device type, operating system,
            features you use, session durations, and crash reports. It does not
            include personally identifiable information.
          </li>
          <li>
            <strong>Advertising Data:</strong> Our App is supported by
            advertisements provided by Google AdMob. AdMob may collect and use
            data to provide personalized ads. This can include device
            identifiers (like Google's Advertising ID), IP address for coarse
            location, and app usage information.
          </li>
        </ul>

        <h2 className="mt-4 font-bold">2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide, operate, and maintain our App.</li>
          <li>To authenticate users and secure accounts.</li>
          <li>
            To improve, personalize, and expand our App's features based on
            analytics.
          </li>
          <li>
            To understand and analyze how you use our App to fix bugs and
            improve performance.
          </li>
          <li>
            To display relevant advertisements to support the App's development.
          </li>
          <li>
            To communicate with you, for instance, for password resets or to
            respond to support inquiries.
          </li>
        </ul>

        <h2 className="mt-4 font-bold">
          3. Data Sharing and Third-Party Services
        </h2>
        <p>
          We are committed to not sharing your data, with the specific
          exceptions required to operate our App. We do not sell your personal
          data to third parties.
        </p>
        <p>
          Your data is shared with the following third-party service providers
          only to the extent necessary for them to provide their services:
        </p>
        <ul>
          <li>
            <strong>Supabase:</strong> For database and user authentication
            services. You can view Supabase's privacy policy{" "}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </li>
          <li>
            <strong>Google Analytics for Firebase:</strong> For app usage
            analytics.
          </li>
          <li>
            <strong>Google AdMob:</strong> For serving advertisements.
          </li>
        </ul>
        <p>
          These services are governed by Google's Privacy Policy, which you can
          review{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . We encourage you to read their policies to understand how they
          handle your data.
        </p>

        <h2 className="mt-4 font-bold">4. Data Security</h2>
        <p>
          We value your trust in providing us your information and strive to use
          commercially acceptable means of protecting it. We rely on the robust
          security measures of Supabase and Google for data storage and
          processing. However, please remember that no method of transmission
          over the internet or method of electronic storage is 100% secure and
          reliable, and we cannot guarantee its absolute security.
        </p>

        <h2 className="mt-4 font-bold">5. Children's Privacy</h2>
        <p>
          Our App is not intended for use by anyone under the age of 13. We do
          not knowingly collect personally identifiable information from
          children under 13. If we discover that a child under 13 has provided
          us with personal information, we will immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us.
        </p>

        <h2 className="mt-4 font-bold">6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          Changes are effective when they are posted on this page.
        </p>

        <h2 className="mt-4 font-bold">7. Contact Us</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at: <strong>info@medicsewa.com</strong>
        </p>
        <div className="text-center mt-8">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
