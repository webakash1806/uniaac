import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="mb-4 text-4xl font-bold text-center text-main">Privacy Policy</h1>
                <p className="text-sm text-center text-gray-600">Effective Date: [Insert Date]</p>

                <section className="my-8">
                    <p className="text-lg text-gray-700">
                        At <strong>UNIAC</strong>, we take your privacy seriously. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use our website and services, including our online learning platform for digital marketing courses (referred to as "Services"). By using our Services, you agree to the terms outlined in this policy.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
                    <p className="text-lg text-gray-700">
                        We collect information to provide better services to our users and to enhance your experience with our digital marketing courses. The types of information we collect include:
                    </p>
                    <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-800">1.1 Personal Information</h3>
                    <ul className="text-lg text-gray-700 list-disc list-inside">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Payment details (when purchasing a course)</li>
                        <li>Account details (username, password)</li>
                    </ul>

                    <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-800">1.2 Usage Information</h3>
                    <p className="text-lg text-gray-700">
                        We may collect non-personal information about how you interact with our platform, such as:
                    </p>
                    <ul className="text-lg text-gray-700 list-disc list-inside">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Operating system</li>
                        <li>Pages viewed and time spent on our platform</li>
                        <li>Clickstream data (how you navigate through the site)</li>
                    </ul>

                    <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-800">1.3 Cookies and Tracking Technologies</h3>
                    <p className="text-lg text-gray-700">
                        We use cookies and similar tracking technologies to track activity on our platform and improve our services. You can control cookie preferences through your browser settings.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                    <p className="text-lg text-gray-700">
                        We use the information we collect to:
                    </p>
                    <ul className="text-lg text-gray-700 list-disc list-inside">
                        <li>Provide access to digital marketing courses and resources</li>
                        <li>Process payments</li>
                        <li>Communicate with you regarding updates, promotions, and announcements</li>
                        <li>Analyze usage data to improve our platform and services</li>
                        <li>Ensure legal and regulatory compliance</li>
                    </ul>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">3. Sharing Your Information</h2>
                    <p className="text-lg text-gray-700">
                        We do not sell your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in operating our website, conducting business, or servicing you.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">4. Protecting Your Information</h2>
                    <p className="text-lg text-gray-700">
                        We implement a variety of security measures to maintain the safety of your personal information. Your account information is protected by a secure password, and sensitive data like payment information is encrypted during transmission.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">5. Your Rights</h2>
                    <p className="text-lg text-gray-700">
                        You have the right to request access to, correction of, or deletion of your personal data. You may also unsubscribe from our communications at any time.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">6. Changes to This Privacy Policy</h2>
                    <p className="text-lg text-gray-700">
                        We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this page. We encourage you to review this page periodically to stay informed about how we protect your information.
                    </p>
                </section>

                <section className="my-8">
                    <h2 className="mb-2 text-2xl font-semibold text-gray-800">7. Contact Us</h2>
                    <p className="text-lg text-gray-700">
                        If you have any questions regarding this Privacy Policy, please contact us at: <br />
                        Email: <strong>support@uniac.com</strong>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
