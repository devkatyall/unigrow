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
