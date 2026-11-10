import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Cpu,
  GraduationCap,
  MapPin,
  MessageSquare,
  Terminal,
} from "lucide-react";
import { Button } from "../components/Button/Button";
import { CountUp } from "../components/CountUp";
import { CourseCard } from "../components/CourseCard/CourseCard";
import { FAQ } from "../components/FAQ/FAQ";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading/SectionHeading";
import { Seo } from "../components/Seo";
import { courses } from "../data/courses";
import { faqs } from "../data/faqs";
import { institute } from "../data/institute";
import { projectDomains } from "../data/projects";
import { whatsappHref, whatsappMessages } from "../lib/whatsapp";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { courseListSchema, organizationSchema } from "../lib/schema";
import heroElectronics from "../assets/images/hero-electronics.jpg";
import engineeringWorkspace from "../assets/images/engineering-workspace.jpg";
import labBreadboard from "../assets/images/lab-breadboard.jpg";
import pcbCloseup from "../assets/images/pcb-closeup.jpg";
import labInstruments from "../assets/images/lab-instruments.jpg";
import codeHardware from "../assets/images/code-hardware.jpg";

const reasons = [
  {
    title: "35+ batches completed",
    body: "The institute has completed more than 35 training batches, giving the programmes a track record of repeated delivery in Bengaluru.",
  },
  {
    title: "Practical, career-focused teaching",
    body: "RAMS presents its work as tailored technical training with an industry-aligned curriculum for people entering or growing in Embedded Systems.",
  },
  {
    title: "Automotive software emphasis",
    body: "The institute specialises in Automotive Software Technologies, alongside Embedded C, Linux, RTOS, and C/C++.",
  },
  {
    title: "Interview preparation included",
    body: "Interview guidance and mock experience are listed as a dedicated course, not only as an afterthought.",
  },
  {
    title: "Structured technical subjects",
    body: "Published courses cover Embedded C, data structures, Linux, RTOS, C, C++, and STL — a clear technical sequence rather than a vague overview.",
  },
  {
    title: "Trainer-led programmes",
    body: "Courses are described as expert-led. Trainer profiles are shared during enquiry rather than listed as unverified credentials here.",
  },
];

const steps = [
  {
    title: "Start with programming foundations",
    body: "Embedded C, data structures, and C/C++ with STL form the published starting layer for technical work.",
  },
  {
    title: "Move into Linux and RTOS",
    body: "Linux and RTOS are listed as a dedicated course for software that has to run under time and platform constraints.",
  },
  {
    title: "Connect learning to automotive software",
    body: "RAMS positions its training around Automotive Software Technologies used in Embedded Systems development.",
  },
  {
    title: "Practise interviews",
    body: "Interview guidance and mock experience round out the published course list for people preparing to discuss their skills.",
  },
];

export function Home() {
  const reduce = usePrefersReducedMotion();

  return (
    <>
      <Seo
        title="RAMS Embedded IT Solutions | Embedded Systems Training in Bengaluru"
        description="Explore Embedded Systems training at RAMS Embedded IT Solutions, Bengaluru. Discover practical technical courses for engineering freshers and working professionals."
        path="/"
        jsonLd={[organizationSchema(), ...courseListSchema()]}
      />

      <section className="relative isolate -mt-16 overflow-hidden bg-navy pt-16 text-white md:-mt-[4.5rem] md:pt-[4.5rem]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(40,120,229,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(40,120,229,0.12) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cyan">
              <MapPin className="size-3.5" aria-hidden="true" />
              {institute.locationLabel}
            </p>
            <h1 className="mt-5 max-w-xl font-heading text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[3.35rem]">
              Build Your Career in Embedded Systems
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Learn practical Embedded Systems skills through structured technical
              training at RAMS Embedded IT Solutions, Bengaluru. Develop your
              knowledge, work on practical concepts, and strengthen your foundation
              for the technology industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/courses" variant="primary" size="lg">
                Explore Courses
              </Button>
              <Button href={whatsappHref(whatsappMessages.general)} variant="ghost" size="lg">
                Enquire Now
              </Button>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 rounded-md border border-cyan/30 bg-cyan/10 px-4 py-2 font-heading text-sm font-semibold text-cyan sm:text-base">
              {institute.batchesLabel}
            </p>
          </div>
          <motion.figure
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              src={heroElectronics}
              alt="Close view of electronic circuit hardware used in embedded development"
              width={1600}
              height={1067}
              className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-white/15"
              fetchPriority="high"
            />
            <figcaption className="sr-only">
              Illustrative electronics hardware photography for the hero section.
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-page grid gap-8 py-10 sm:grid-cols-3">
          <div>
            <p className="font-heading text-4xl font-semibold text-navy">
              <CountUp to={institute.batchesCompleted} suffix="+" />
            </p>
            <p className="mt-1 text-sm font-medium text-muted">Batches completed</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-semibold text-navy">Bengaluru</p>
            <p className="mt-1 text-sm text-muted">
              Embedded Systems training institute in Karnataka
            </p>
          </div>
          <div>
            <p className="font-heading text-2xl font-semibold text-navy">
              Automotive software
            </p>
            <p className="mt-1 text-sm text-muted">
              Stated specialisation in Automotive Software Technologies
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={engineeringWorkspace}
              alt="Engineer working at a laptop in a technical workspace"
              width={1400}
              height={933}
              loading="lazy"
              className="aspect-[5/4] w-full rounded-xl object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="About RAMS"
              title="Practical Learning for a Stronger Technical Future"
              description="RAMS Embedded IT Solutions is an Embedded Systems training institute in Bengaluru. The team focuses on structured technical programmes for people who want a clearer path into embedded software work."
            />
            <p className="mt-5 text-[0.95rem] leading-7 text-ink">
              The institute’s story begins in 2012, with the company later
              established as RAMS Embedded IT Solutions Private Limited. Training is
              described as tailored, mentor-supported, and aligned with industry
              needs, with a particular emphasis on Automotive Software Technologies.
            </p>
            <p className="mt-4 text-[0.95rem] leading-7 text-ink">
              {institute.batchesLabel}. The same practical orientation is offered to
              engineering freshers building fundamentals and to working professionals
              who want to upgrade their skills.
            </p>
            <Button to="/about" variant="navy" className="mt-7">
              About Us
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Explore Our Embedded Systems Courses"
            description="These are the courses published on the current RAMS website. Duration and a full module list are confirmed when you enquire."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <Reveal key={course.slug} delay={index * 0.06}>
                <CourseCard course={course} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Who can benefit?"
            description="RAMS Embedded IT Solutions trains both new graduates and working professionals looking for Embedded Systems classes in Bangalore."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl bg-navy p-8 text-white">
              <GraduationCap className="size-8 text-cyan" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                Start Your Journey in Embedded Systems
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Structured training can help engineering graduates strengthen
                fundamentals and develop practical technical knowledge before they
                step into embedded software work.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {[
                  "Understanding Embedded Systems fundamentals through Embedded C",
                  "Strengthening programming knowledge in C, C++, and data structures",
                  "Learning Linux and RTOS concepts used in embedded software",
                  "Building technical confidence ahead of interviews",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-xl border border-line bg-paper p-8">
              <Briefcase className="size-8 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-2xl font-semibold">
                Upgrade Your Embedded Systems Skills
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink">
                Technical training can help working professionals strengthen existing
                knowledge and explore Linux, RTOS, and C/C++ in more depth.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink">
                {[
                  "Strengthening technical foundations in C and C++",
                  "Learning Linux and RTOS used in embedded platforms",
                  "Exploring automotive software technologies as taught at RAMS",
                  "Using interview guidance and mock experience to refresh communication of skills",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Why choose RAMS?"
            description="Advantages below are drawn from the institute’s published course list and background, without extra claims."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.04}>
                <article className="h-full rounded-xl bg-white p-6 ring-1 ring-line">
                  <h3 className="font-heading text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink">{reason.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Practical learning in context"
            description="Photographs below show typical electronics development equipment. They are illustrative, not photographs of RAMS classroom sessions."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              {
                src: labBreadboard,
                alt: "Development board and electronics tools on a workbench",
              },
              {
                src: pcbCloseup,
                alt: "Printed circuit board close-up",
              },
              {
                src: labInstruments,
                alt: "Laboratory instruments used in electronics work",
              },
              {
                src: codeHardware,
                alt: "Hardware and software development setup",
              },
            ].map((image) => (
              <figure key={image.alt} className="overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={500}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Illustrative electronics development imagery — not photographs of RAMS
            classroom sessions.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Practical Embedded Systems project domains"
            description="These examples show typical areas of practical study in Embedded Systems. They are learning domains, not a claim that every student completes these projects or that RAMS delivers commercial automotive products."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projectDomains.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            title="Training approach"
            description="A simple sequence based on the courses RAMS currently lists, rather than an invented methodology."
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-line">
              <Terminal className="size-4 text-accent" /> Embedded C
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-line">
              <Cpu className="size-4 text-accent" /> Linux / RTOS
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-line">
              <BookOpen className="size-4 text-accent" /> C, C++, STL
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-line">
              <MessageSquare className="size-4 text-accent" /> Interview practice
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            title="Questions about Embedded Systems training in Bengaluru"
            description="Short answers based on the published course list. Fine details such as fees and batch dates are confirmed by the institute."
          />
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-page text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Take the Next Step Towards Your Embedded Systems Career
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Explore the available courses and connect with RAMS Embedded IT Solutions
            in Bengaluru to learn more.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/courses" variant="primary" size="lg">
              Explore Courses
            </Button>
            <Button href={whatsappHref(whatsappMessages.general)} variant="ghost" size="lg">
              Enquire Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
