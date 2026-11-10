import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Button } from "../components/Button/Button";
import { Seo } from "../components/Seo";
import { courses, type Course } from "../data/courses";
import { cn } from "../lib/cn";
import { breadcrumbSchema, courseListSchema, organizationSchema } from "../lib/schema";
import { whatsappHref, whatsappMessages } from "../lib/whatsapp";

function Syllabus({ course }: { course: Course }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-6 divide-y divide-line rounded-lg border border-line">
      {course.syllabus.map((module, index) => (
        <SyllabusRow
          key={module.title}
          module={module}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

function SyllabusRow({
  module,
  open,
  onToggle,
}: {
  module: Course["syllabus"][number];
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="font-heading text-sm font-semibold text-navy sm:text-base">
            {module.title}
          </span>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-accent transition-transform",
              open && "rotate-180",
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="px-4 pb-4 text-sm leading-6 text-ink"
      >
        {module.detail}
      </div>
    </div>
  );
}

export function Courses() {
  return (
    <>
      <Seo
        title="Embedded Systems Course in Bangalore | RAMS Embedded IT Solutions"
        description="Review Embedded C, Linux, RTOS, C/C++ STL, and interview guidance courses at RAMS Embedded IT Solutions, an Embedded Systems training institute in Bengaluru."
        path="/courses"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
          ]),
          ...courseListSchema(),
        ]}
      />

      <section className="bg-navy py-14 text-white sm:py-16">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Courses" },
            ]}
          />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-5xl">
            Embedded Systems courses in Bengaluru
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            RAMS Embedded IT Solutions lists four programmes: Embedded C with data
            structures, Linux and RTOS, C/C++ with STL, and interview guidance with
            mock experience. Automotive software technologies are the institute’s
            stated area of specialisation.
          </p>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-page space-y-10">
          {courses.map((course) => (
            <article
              key={course.slug}
              id={course.slug}
              className="scroll-mt-28 rounded-xl bg-white p-6 shadow-(--shadow-card) sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Course
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">
                {course.title}
              </h2>
              <p className="mt-3 max-w-3xl text-[0.95rem] leading-7 text-ink">
                {course.shortDescription}
              </p>

              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-paper p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Duration
                  </dt>
                  <dd className="mt-1 text-sm text-navy">{course.duration}</dd>
                </div>
                <div className="rounded-lg bg-paper p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Suitable for
                  </dt>
                  <dd className="mt-1 text-sm text-navy">{course.audience}</dd>
                </div>
                <div className="rounded-lg bg-paper p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Technologies
                  </dt>
                  <dd className="mt-1 text-sm text-navy">
                    {course.technologies.join(" · ")}
                  </dd>
                </div>
              </dl>

              <h3 className="mt-8 font-heading text-lg font-semibold">Syllabus</h3>
              <p className="mt-1 text-sm text-muted">
                Topics below match the published course titles. The notes explain
                typical Embedded Systems content; the exact RAMS batch outline is
                confirmed when you enquire.
              </p>
              <Syllabus course={course} />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    Practical sessions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{course.practicalNote}</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">Projects</h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{course.projectsNote}</p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  href={whatsappHref(whatsappMessages.course(course.title))}
                  variant="navy"
                >
                  Enquire about {course.title}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
