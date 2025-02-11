import Faq from "@/components/Common/Faq";
import { questions } from "@/data";
import React from "react";

export default function page() {
  return <Faq questions={questions.use_of_cookies}>Questions</Faq>;
}
