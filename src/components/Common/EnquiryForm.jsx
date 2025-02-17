"use client";

import { submitForm } from "@/app/api/formEnquiry";
import React, { useState } from "react";
import { z } from "zod";
import { SubHeading, SubText } from "../services/Sub";
import { ShineBorder } from "../magicui/shine-border";
import { PulsatingButton } from "../ui/pulsating-button";
import Hamester from "../Hamster";
import Loader from "../Hamster";
import { motion } from "framer-motion";

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

  const [disable, setDisable] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      setDisable(true);

      // Validate the data using the Zod schema
      const validatedData = enquirySchema.parse(formData);
      await submitForm(validatedData);
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

      setDisable(false);
      setSubmitted(true);
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Flatten the Zod errors for easier access:
        const fieldErrors = err.flatten().fieldErrors;
        setErrors(fieldErrors);
      }
      setDisable(false);
      setSubmitted(false);
    }
  };

  return (
    <ShineBorder className={"lg:w-[50vw] h-fit"}>
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 10 }}
          className="lg:w-[50vw] px-[2vw] lg:px-[4vw] py-[1vw]"
        >
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
                <label
                  htmlFor="number"
                  className="block text-base text-white/70"
                >
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.number[0]}
                  </p>
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.enquiry[0]}
                  </p>
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
                <option value="Under $1000">Under $1000</option>
                <option value="Under $2000">Under $2000</option>
                <option value="Flexible">Flexible</option>
              </select>
              {errors.budget && (
                <p className="text-red-500 text-sm mt-1">{errors.budget[0]}</p>
              )}
            </div>

            {/* Message (Optional) */}
            <div>
              <label
                htmlFor="message"
                className="block text-base text-white/70"
              >
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

            {!disable ? (
              <PulsatingButton
                type="submit"
                className="w-full font-semibold text-blue-500 text-lg mt-auto"
              >
                Submit
              </PulsatingButton>
            ) : (
              <div className=" flex items-center justify-center">
                <Loader />
              </div>
            )}
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 10 }}
          className="lg:w-[40vw] flex flex-col items-center justify-center px-[4vw] py-[1vw] h-[60vh] text-center"
        >
          <motion.svg
            initial={{
              rotate: "20deg",
              opacity: 0.2,
              y: 10,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke=""
            className="size-12 stroke-green-600 drop-shadow-[0px_0px_30px_green]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </motion.svg>
          <p className="text-3xl font-bold my-[1vh]">
            Thank You for Reaching Out!
          </p>
          <p className="text-center text-sm my-[1vh] text-white/50">
            Your submission has been received, and we can’t wait to connect with
            you! Our team is reviewing your details and will get in touch within
            the next 24-48 hours with your personalized recommendations.
          </p>
          <p className="text-center text-sm text-white/50">
            In the meantime, feel free to scroll down to explore more about our
            services, see how we can help you grow your online presence, and
            learn why Unigrow is the right choice for your website and
            e-commerce needs.
          </p>
        </motion.div>
      )}
    </ShineBorder>
  );
}
