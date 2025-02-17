"use client";

import { submitForm } from "@/app/api/formEnquiry";
import React, { useState } from "react";
import { z } from "zod";
import { SubHeading, SubText } from "../services/Sub";
import { ShineBorder } from "../magicui/shine-border";
import { PulsatingButton } from "../ui/pulsating-button";

// Define the Zod schema for our form data
const enquirySchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email format." }),
  // We'll accept the phone number as a string then transform it to a number
  number: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine((val) => !isNaN(Number(val)), {
      message: "Phone number must be numeric.",
    }),
  enquiry: z.string().min(1, { message: "Enquiry is required." }),
  message: z.string().optional(),
  ownsWebsite: z.boolean(),
  budget: z.string().min(1, { message: "Budget is required." }),
  preference: z.string().min(1, { message: "Contact preference is required." }),
});

export default function EnquiryForm() {
  const Enquiry = [
    "New e-commerce website development",
    "Redesign of an existing store",
    "Platform migration (Shopify, WooCommerce, etc.)",
    "E-commerce SEO & marketing",
    "Custom features & API integrations",
    "Other (please specify)",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    enquiry: "",
    message: "",
    ownsWebsite: false,
    budget: "",
    preference: "",
  });

  // We'll store errors as an object where each key maps to an array of messages
  const [errors, setErrors] = useState({});

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate the data using the Zod schema
      const validatedData = enquirySchema.parse(formData);
      await submitForm(validatedData);
      console.log("Form submitted successfully", validatedData);
      // Reset the form and errors if needed
      setFormData({
        name: "",
        email: "",
        number: "",
        enquiry: "",
        message: "",
        ownsWebsite: false,
        budget: "",
        preference: "",
      });
      setErrors({});
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Flatten the Zod errors for easier access:
        const fieldErrors = err.flatten().fieldErrors;
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <ShineBorder className={"lg:w-[50vw] h-fit"}>
      <div className="lg:w-[50vw] px-[4vw] py-[1vw]">
        {/* <SubHeading className="">Lets Get Started!</SubHeading>
        <SubText>
          You are few details away from the best decision for your business
        </SubText> */}
        <form onSubmit={handleSubmit} className="space-y-4 h-full">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-base text-white/70">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
              )}
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="number" className="block text-base text-white/70">
                Phone
              </label>
              <input
                type="text"
                id="number"
                name="number"
                placeholder="Your phone number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              />
              {errors.number && (
                <p className="text-red-500 text-sm mt-1">{errors.number[0]}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base text-white/70">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
            )}
          </div>

          {/* Contact Preference */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="preference"
                className="block text-base text-white/70"
              >
                Contact Preference
              </label>
              <select
                id="preference"
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              >
                <option value="">Select your contact preference</option>
                <option value="phone">I prefer phone call</option>
                <option value="email">I prefer email</option>
                <option value="email">I prefer Whatsapp</option>
              </select>
              {errors.preference && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.preference[0]}
                </p>
              )}
            </div>

            {/* Enquiry */}
            <div>
              <label
                htmlFor="enquiry"
                className="block text-base text-white/70"
              >
                What services do you need?
              </label>
              <select
                id="enquiry"
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
              >
                <option value="">Select your contact preference</option>
                {Enquiry.map((enquiry, index) => (
                  <option key={index} value={enquiry}>
                    {enquiry}
                  </option>
                ))}
              </select>

              {errors.enquiry && (
                <p className="text-red-500 text-sm mt-1">{errors.enquiry[0]}</p>
              )}
            </div>
          </div>
          {/* Owns Website */}

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block text-base text-white/70">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            >
              <option value="">Select your budget</option>
              <option value="low">Under $1000</option>
              <option value="medium">Under $2000</option>
              <option value="high">Flexible</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget[0]}</p>
            )}
          </div>

          {/* Message (Optional) */}
          <div>
            <label htmlFor="message" className="block text-base text-white/70">
              Please tell us something about your project or business
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Unigrow will get back to you within 24 hours."
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="ownsWebsite"
              name="ownsWebsite"
              checked={formData.ownsWebsite}
              onChange={handleChange}
              className="mr-2 rounded-full w-4 h-4"
            />
            <label htmlFor="ownsWebsite" className="text-lg text-white/70">
              Do you already own a website?
            </label>
          </div>

          {/* Submit Button */}
          <PulsatingButton
            type="submit"
            className="w-full font-semibold text-blue-500 text-lg mt-auto"
          >
            Submit
          </PulsatingButton>
        </form>
      </div>
    </ShineBorder>
  );
}
