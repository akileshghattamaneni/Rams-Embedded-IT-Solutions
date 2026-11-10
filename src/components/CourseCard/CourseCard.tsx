import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Course } from "../../data/courses";
import { whatsappHref, whatsappMessages } from "../../lib/whatsapp";
import { Button } from "../Button/Button";

export function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-(--shadow-card) transition-transform duration-200 hover:-translate-y-0.5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        Course {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 font-heading text-xl font-semibold text-navy">
        {course.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-ink">
        {course.shortDescription}
      </p>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Topics
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <li
              key={topic}
              className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-navy-2"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-sm text-muted">
        Duration: <span className="text-ink">{course.duration}</span>
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button to={`/courses#${course.slug}`} variant="navy" size="md">
          View Details
        </Button>
        <Button
          href={whatsappHref(whatsappMessages.course(course.title))}
          variant="outline"
        >
          Enquire Now
        </Button>
      </div>
      <Link
        to={`/courses#${course.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
      >
        Full syllabus
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
