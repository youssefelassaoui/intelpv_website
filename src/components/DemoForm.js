"use client";

import { useState } from "react";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    interest: "Product Demo",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });

    try {
      // Instead of using a server API, we'll use a client-side approach
      // Format the email content for display
      const emailContent = `
        <h2>New Demo Request from Intel.PV Website</h2>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.fullName}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone || "Not provided"}</li>
          <li><strong>Company:</strong> ${
            formData.company || "Not provided"
          }</li>
        </ul>
        
        <h3>Request Details:</h3>
        <p><strong>Interest:</strong> ${formData.interest}</p>
        
        <h3>Message:</h3>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `;

      // Create a mailto link with the form data
      const subject = encodeURIComponent(
        `New Demo Request from ${formData.fullName}`
      );
      const body = encodeURIComponent(`
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Interest: ${formData.interest}

Message:
${formData.message}
      `);

      // Open the user's email client
      window.open(
        `mailto:elassaoui@greenenergypark.ma?subject=${subject}&body=${body}`
      );

      // Reset form on success
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        interest: "Product Demo",
        message: "",
      });

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message:
          "Thank you for your interest! Your email client has been opened to send your request. Please send the email to complete your submission.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: true,
        message:
          "There was an error submitting your request. Please try contacting us directly at elassaoui@greenenergypark.ma",
      });
    }
  };

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Demo Request
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Interested in Our Solution?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Fill out the form below to request a demo or discuss collaboration
            opportunities.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {formStatus.isSubmitted && !formStatus.isError ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">{formStatus.message}</p>
                </div>
              </div>
            </div>
          ) : formStatus.isSubmitted && formStatus.isError ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{formStatus.message}</p>
                </div>
              </div>
            </div>
          ) : null}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white shadow-md rounded-lg p-8"
          >
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    className="pl-10 focus:ring-green-500 focus:border-green-500 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company/Organization
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="pl-10 focus:ring-green-500 focus:border-green-500 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="pl-10 focus:ring-green-500 focus:border-green-500 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="pl-10 focus:ring-green-500 focus:border-green-500 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="+123 456 7890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="interest"
                className="block text-sm font-medium text-gray-700"
              >
                I'm Interested In <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="pl-10 focus:ring-green-500 focus:border-green-500 block w-full rounded-md border-gray-300 shadow-sm"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="Product Demo">Product Demo</option>
                  <option value="Partnership Opportunity">
                    Partnership Opportunity
                  </option>
                  <option value="Technical Collaboration">
                    Technical Collaboration
                  </option>
                  <option value="Consulting Services">
                    Consulting Services
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="focus:ring-green-500 focus:border-green-500 block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-sm text-gray-500">
                <span className="text-red-500">*</span> Required fields
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus.isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Request Demo"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
