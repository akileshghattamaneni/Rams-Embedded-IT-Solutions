import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { courses } from "../../data/courses";
import { institute } from "../../data/institute";
import { mailHref, telHref } from "../../lib/contact";
import { submitEnquiry } from "../../lib/submitEnquiry";
import { Button } from "../Button/Button";

const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(80),
  email: z.email("Enter a valid email address"),
  mobile: z
    .string()
    .trim()
    .regex(
      /^(\+91[\s-]?)?[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number",
    ),
  course: z.string().min(1, "Select a course"),
  category: z.union([
    z.literal("Fresher"),
    z.literal("Working Professional"),
    z.literal("Other"),
  ]),
  message: z.string().trim().min(10, "Please add a short message").max(1000),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

type EnquiryFormProps = {
  defaultCourse?: string;
};

export function EnquiryForm({ defaultCourse = "" }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      course: defaultCourse,
      category: "Fresher",
      message: "",
    },
  });

  function onSubmit(values: EnquiryValues) {
    const result = submitEnquiry(values);
    if (result.opened) {
      setStatus("ready");
      setFeedback(
        "Your enquiry message is ready in WhatsApp. Please press Send to share it with us.",
      );
      return;
    }

    setStatus("error");
    setFeedback(
      "WhatsApp could not be opened automatically. Please call or email us, or try the WhatsApp button at the bottom of the page. Your form details are still filled in.",
    );
  }

  const fieldClass =
    "mt-1.5 w-full rounded-md border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5"
      aria-describedby="enquiry-status"
    >
      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-navy">
          Full Name
        </label>
        <input
          id="fullName"
          autoComplete="name"
          className={fieldClass}
          {...register("fullName")}
        />
        {errors.fullName ? (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="mobile" className="text-sm font-medium text-navy">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="10-digit mobile number"
            className={fieldClass}
            {...register("mobile")}
          />
          {errors.mobile ? (
            <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="course" className="text-sm font-medium text-navy">
          Interested Course
        </label>
        <select id="course" className={fieldClass} {...register("course")}>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.slug} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
        {errors.course ? (
          <p className="mt-1 text-sm text-red-600">{errors.course.message}</p>
        ) : null}
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-navy">Student Category</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {(["Fresher", "Working Professional", "Other"] as const).map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-line px-3 py-2 text-sm"
            >
              <input type="radio" value={option} {...register("category")} />
              {option}
            </label>
          ))}
        </div>
        {errors.category ? (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={fieldClass}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" variant="navy" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Opening WhatsApp…" : "Submit enquiry"}
      </Button>

      <div
        id="enquiry-status"
        role="status"
        aria-live="polite"
        className={
          status === "ready"
            ? "rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800"
            : status === "error"
              ? "rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
              : "text-sm text-muted"
        }
      >
        {feedback ||
          "Submitting opens WhatsApp with your details. Please press Send in WhatsApp to share the message."}
      </div>

      {status === "error" ? (
        <p className="text-sm text-ink">
          Call{" "}
          <a className="font-medium text-accent hover:underline" href={telHref()}>
            {institute.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a className="font-medium text-accent hover:underline" href={mailHref()}>
            {institute.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
