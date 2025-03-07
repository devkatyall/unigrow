"use server";

import { prisma } from "@/lib/prisma";

export async function submitForm(data) {
  const response = await prisma.formEnquiry.create({
    data: {
      name: data.name,
      email: data.email,
      number: data.number,
      enquiry: data.enquiry,
      message: data.message,
      ownsWebsite: data.ownsWebsite,
      budget: data.budget,
      preference: data.preference,
    },
  });

  console.log(response);
}

export async function landingPage(formData) {
  const response = await prisma.AdEnquiry.create({
    data: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      companyName: formData.companyName || "",
      companySize: formData.companySize || "",
      industry: formData.industry || "",
      budget: formData.budget || "",
      message: formData.message || "",
      marketingConsent: formData.marketingConsent || false,
    },
  });
  console.log(response);
}
