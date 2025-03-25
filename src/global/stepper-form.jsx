"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { landingPage } from "@/app/api/formEnquiry";

// Form schemas for each step
const step1Schema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

const step2Schema = z.object({
  companyName: z.string().min(2, { message: "Company name is required" }),
  companySize: z.string().min(1, { message: "Please select company size" }),
  industry: z.string().min(1, { message: "Please select your industry" }),
});

const step3Schema = z.object({
  budget: z.string().min(1, { message: "Please select your budget range" }),
  message: z.string().optional(),
  marketingConsent: z.boolean(),
});

// Combined schema for all steps
const formSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
});

export function StepperForm({ onClose, analyticalName = "Google_Ad_Lead" }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize the form with the current step's schema
  const currentSchema =
    step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema;

  const form = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: {
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

  const onSubmit = async (data) => {
    // Update form data with current step data
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);

    if (step < 3) {
      // Move to next step
      setStep(step + 1);
    } else {
      // Submit the form
      setIsSubmitting(true);

      try {
        // Simulate API call
        await landingPage(updatedData);
        console.log("Form submitted:");
        if (window.dataLayer && typeof window.dataLayer.push === "function") {
          window.dataLayer.push({
            event: analyticalName, // your custom event name
            event_category: "Forms",
            event_label: "Contact Form",
            value: 1,
            hashed_email: updatedData.email, // Consider hashing this if it’s PII
            form_type: "lead_capture",
          });
        } else {
          console.error("dataLayer.push is not defined. Event not sent.");
        }
        setIsSuccess(true);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className="bg-black/70 ring-1 ring-muted-foreground rounded-lg shadow-lg w-full max-w-xl relative shadow-sm shadow-white">
      {onClose && (
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      )}
      <div className="p-6  m-1 rounded-lg">
        {!isSuccess ? (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold ">
                {step === 1
                  ? "Personal Information"
                  : step === 2
                  ? "Company Details"
                  : "Your Interests"}
              </h2>
              <p className="mb-4 text-muted-foreground text-sm">
                Fill this form to get started
              </p>
              <div className="flex items-center mb-4">
                <div
                  className={`h-2 rounded-full ${
                    step >= 1 ? "bg-foreground" : "bg-muted-foreground/20"
                  } flex-1`}
                ></div>
                <div className="mx-2"></div>
                <div
                  className={`h-2 rounded-full ${
                    step >= 2 ? "bg-foreground" : "bg-muted-foreground/20"
                  } flex-1`}
                ></div>
                <div className="mx-2"></div>
                <div
                  className={`h-2 rounded-full ${
                    step >= 3 ? "bg-foreground" : "bg-muted-foreground/20"
                  } flex-1`}
                ></div>
              </div>
              <p className="text-sm text-gray-500">Step {step} of 3</p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                {...field}
                                className="border-dashed"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                {...field}
                                className="border-dashed"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                              className="border-dashed"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(123) 456-7890"
                              {...field}
                              className="border-dashed"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Acme Inc."
                              {...field}
                              className="border-dashed"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companySize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Size</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-dashed">
                                <SelectValue placeholder="Select company size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">
                                1-10 employees
                              </SelectItem>
                              <SelectItem value="11-50">
                                11-50 employees
                              </SelectItem>
                              <SelectItem value="51-200">
                                51-200 employees
                              </SelectItem>
                              <SelectItem value="201-500">
                                201-500 employees
                              </SelectItem>
                              <SelectItem value="501+">
                                501+ employees
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-dashed">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="technology">
                                Technology
                              </SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="healthcare">
                                Healthcare
                              </SelectItem>
                              <SelectItem value="education">
                                Education
                              </SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="manufacturing">
                                Manufacturing
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem className="space-y-3  border-gray-200 p-4 rounded-lg">
                          <FormLabel>Budget Range</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="less-5k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Less than $5,000
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="5k-10k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  $5,000 - $10,000
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="10k-25k" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  $10,000 - $25,000
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="25k+" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  $25,000+
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Additional Information (Optional)
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your needs..."
                              className="resize-none border-dashed"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="marketingConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row  items-center space-x-3 space-y-0   rounded-lg">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to receive marketing communications
                            </FormLabel>
                            <FormDescription>
                              You can unsubscribe at any time.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <div className="flex justify-between pt-4  mt-6">
                  {step > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                      className="border-dashed"
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-muted/20 text-white hover:bg-gray-800"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : step < 3
                      ? "Next"
                      : "Submit"}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your information has been submitted successfully. One of our
              representatives will contact you shortly.
            </p>
            {onClose && (
              <Button
                onClick={handleClose}
                className="rounded-md bg-black text-white hover:bg-gray-800"
              >
                Close
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function StepperButton({ children, className }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className} variant="outline">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogTitle className="sr-only hidden">
          Share your needs with us
        </DialogTitle>
        <StepperForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
