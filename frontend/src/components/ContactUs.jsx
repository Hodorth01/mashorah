import React, { useState } from "react";
import Heading from "./Heading";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    messageReason: "",
    messageContent: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectOption = (value) => {
    setFormData({
      ...formData,
      messageReason: value,
    });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Common input style class to avoid repetition - removed bg color
  const inputStyles =
    "border-[1.3px] border-amethyst-300 rounded-md p-3 text-right focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-indigo-900 font-['Brando-Arabic'] font-normal text-lg";

  const options = [
    { value: "inquiry", label: "استفسار" },
    { value: "complaint", label: "شكوى" },
    { value: "suggestion", label: "اقتراح" },
    { value: "other", label: "أخرى" },
  ];

  return (
    <div id="form" className="max-w-6xl mx-auto p-4 dir-rtl">
      <Heading text="تواصل معنا" />

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Full Name */}
          <div className="flex flex-col flex-1">
            <label className="mb-2 text-right">
              <span className="text-red-800">*</span> الاسم الكامل
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col flex-1">
            <label className="mb-2 text-right">
              <span className="text-red-800">*</span> رقم الجوال
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col flex-1">
            <label className="mb-2 text-right">
              <span className="text-red-800">*</span> البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Message Reason and Subject */}
          <div className="flex-1">
            <div className="mb-6 relative">
              <label className="mb-2 block text-right">
                <span className="text-red-800">*</span> سبب الرسالة
              </label>
              <div className="relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`${inputStyles} w-full cursor-pointer flex justify-between items-center`}
                >
                  <span>
                    {formData.messageReason
                      ? options.find(
                          (opt) => opt.value === formData.messageReason
                        )?.label
                      : "اختر سبب الرسالة..."}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-full right-0 left-0 mt-1 border bg-[#f6f3fc] border-gray-200 rounded-md shadow-lg z-10 font-['Brando-Arabic']">
                    <div className="p-2  text-gray-400 border-b border-gray-100 text-right">
                      اختر سبب الرسالة...
                    </div>
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="p-3 hover:bg-gray-50 cursor-pointer text-right font-['Brando-Arabic'] text-lg"
                        onClick={() => handleSelectOption(option.value)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}

                <input
                  type="hidden"
                  name="messageReason"
                  value={formData.messageReason}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-right">
                <span className="text-red-800">*</span> موضوع الرسالة
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="أدخل موضوع الرسالة..."
                className={`${inputStyles} w-full`}
                required
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="flex-1">
            <label className="mb-2 block text-right">
              <span className="text-red-800">*</span> محتوى الرسالة
            </label>
            <textarea
              name="messageContent"
              value={formData.messageContent}
              onChange={handleChange}
              placeholder="اكتب رسالتك هنا..."
              className={`${inputStyles} w-full h-40`}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-900 text-white py-3 px-12 rounded-md text-lg font-medium hover:bg-indigo-800 transition-colors font-['Brando-Arabic']"
          >
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
