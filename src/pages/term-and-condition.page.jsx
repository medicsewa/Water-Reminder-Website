import { Link } from "react-router-dom";

const TermAndConditionPage = () => {
  return (
    <main className="w-[80%] py-16 mx-auto my-auto">
      <div className="flex flex-col">
        <p className="text-lg font-bold">
          Terms and Conditions for Sip It - Water Reminder
        </p>
        <p className="text-sm">Effective Date: July 12, 2025</p>

        <p className="mt-8">
          Please read these Terms and Conditions ("Terms") carefully before
          using the Sip It mobile application (the "App") operated by us.
        </p>
        <p>
          Your access to and use of the App is conditioned on your acceptance of
          and compliance with these Terms. These Terms apply to all visitors,
          users, and others who access or use the App. By accessing or using the
          App, you agree to be bound by these Terms. If you disagree with any
          part of the terms, then you may not access the App.
        </p>

        <h2 className="mt-4 font-bold">1. User Accounts</h2>
        <p>
          To use certain features of the App, you must register for an account.
          When you create an account with us, you must provide information that
          is accurate and complete. You are responsible for safeguarding the
          password that you use to access the App and for any activities or
          actions under your password. You agree not to disclose your password
          to any third party. You must notify us immediately upon becoming aware
          of any breach of security or unauthorized use of your account.
        </p>

        <h2 className="mt-4 font-bold">2. Use of the App</h2>
        <p>
          You agree not to use the App for any purpose that is illegal or
          prohibited by these Terms. You agree not to:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Attempt to decompile, reverse engineer, or disassemble the App.
          </li>
          <li>
            Use the App in any way that could damage, disable, or impair the
            service.
          </li>
          <li>Use the App to distribute spam or other unsolicited messages.</li>
          <li>Violate any applicable laws or regulations.</li>
        </ul>

        <h2 className="mt-4 font-bold">3. Advertisements</h2>
        <p>
          The App is a free service supported by advertisements. By using the
          App, you agree to see advertisements from third-party networks, such
          as Google AdMob. These ads are a condition of using the App.
        </p>

        <h2 className="mt-4 font-bold">4. Intellectual Property</h2>
        <p>
          The App and its original content (excluding content provided by
          users), features, functionality, and logo are and will remain the
          exclusive property of the App's creators. Our trademarks and trade
          dress may not be used in connection with any product or service
          without our prior written consent.
        </p>

        <h2 className="mt-4 font-bold">5. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the App
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever and without limitation,
          including but not limited to a breach of the Terms.
        </p>
        <p>
          If you wish to terminate your account, you may simply discontinue
          using the App and can request account deletion by contacting us.
        </p>

        <h2 className="mt-4 font-bold">6. Disclaimer of Warranty</h2>
        <p>
          The App is provided on an "AS IS" and "AS AVAILABLE" basis. We do not
          warrant that the App will be uninterrupted, error-free, or secure. The
          use of the App is at your own risk. We make no guarantees as to the
          accuracy of health-related information or suggestions provided by the
          App; it is for informational purposes only and is not a substitute for
          professional medical advice.
        </p>

        <h2 className="mt-4 font-bold">7. Limitation of Liability</h2>
        <p>
          In no event shall we, nor our directors, employees, partners, or
          agents, be liable for any indirect, incidental, special,
          consequential, or punitive damages, including without limitation, loss
          of profits, data, use, goodwill, or other intangible losses, resulting
          from your access to or use of or inability to access or use the App.
        </p>

        <h2 className="mt-4 font-bold">8. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of [Your Country/State], without regard to its conflict of law
          provisions.
        </p>

        <h2 className="mt-4 font-bold">9. Changes to These Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. We will provide notice of any changes by
          posting the new Terms within the App or on our Play Store listing. By
          continuing to access or use our App after any revisions become
          effective, you agree to be bound by the revised terms.
        </p>

        <h2 className="mt-4 font-bold">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:{" "}
          <strong>info@medicsewa.com</strong>
        </p>
        <div className="text-center mt-8">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </main>
  );
};

export default TermAndConditionPage;
