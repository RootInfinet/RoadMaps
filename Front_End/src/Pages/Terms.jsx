import React from "react";

export default function TermsAndPrivacy() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#BACCB0] p-10 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-[#37FF14] font-bold mb-10 border-b border-[#37FF14]/30 pb-4">
          LEGAL_DOCUMENTATION
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl text-white mb-4 underline decoration-[#00FFFF]">PRIVACY POLICY</h2>
          <p className="mb-4">Effective Date: June 17, 2026</p>
          <p className="mb-4">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use <strong>RoadMap</strong>.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Information Collection: We collect only the information necessary to provide our services, such as your username and email.</li>
            <li>Usage: We use your data solely to operate and improve our platform functionality.</li>
            <li>Data Protection: We implement standard security measures to protect your information from unauthorized access.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-white mb-4 underline decoration-[#00FFFF]">TERMS OF SERVICE</h2>
          <p className="mb-4">
            By using <strong>RoadMap</strong>, you agree to these terms.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Eligibility: You must be at least 13 years old to use this service.</li>
            <li>User Conduct: You agree not to use this service for any unlawful activities or to disrupt the platform's operation.</li>
            <li>Limitation of Liability: We provide this service "as is" and are not liable for any damages resulting from your use of the platform.</li>
            <li>Termination: We reserve the right to suspend access to your account if you violate these terms.</li>
          </ul>
        </section>

        <div className="mt-10 border-t border-[#37FF14]/20 pt-6">
          <p className="text-center text-[#37FF14]/50">
            CONTACT: rootinfinet@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}