import { Breadcrumbs } from "../components/Breadcrumbs";
import { Button } from "../components/Button/Button";
import { CountUp } from "../components/CountUp";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { institute } from "../data/institute";
import { breadcrumbSchema, organizationSchema } from "../lib/schema";
import { whatsappHref, whatsappMessages } from "../lib/whatsapp";
import engineeringWorkspace from "../assets/images/engineering-workspace.jpg";
import pcbCloseup from "../assets/images/pcb-closeup.jpg";
import labBreadboard from "../assets/images/lab-breadboard.jpg";

export function About() {
  return (
    <>
      <Seo
        title="About RAMS Embedded IT Solutions | Embedded Systems Institute in Bengaluru"
        description="Learn about RAMS Embedded IT Solutions in Bengaluru — more than 35 batches completed, Automotive Software Technologies, and practical Embedded Systems training for freshers and professionals."
        path="/about"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
          ]),
        ]}
      />

      <section className="bg-navy py-14 text-white sm:py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
          <h1 className="mt-6 max-w-3xl font-heading text-3xl font-semibold text-white sm:text-5xl">
            An Embedded Systems training institute in Bengaluru
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            RAMS Embedded IT Solutions teaches practical technical programmes for
            engineering students, freshers, and working professionals.{" "}
            {institute.batchesLabel}.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Our journey
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Institute background</h2>
            <p className="mt-4 text-[0.95rem] leading-7 text-ink">
              At Rams Embedded, the journey began in {institute.foundedNarrativeYear},
              and the organisation later established itself as RAMS Embedded IT
              Solutions Private Limited in {institute.companyEstablishedYear}. Since
              then the institute has focused on Embedded Systems development, with a
              stated specialisation in Automotive Software Technologies.
            </p>
            <p className="mt-4 text-[0.95rem] leading-7 text-ink">
              The team describes its work as helping both enthusiasts and
              professionals navigate modern technology through structured training,
              expert mentorship, and an industry-aligned curriculum.
            </p>
            <div className="mt-8 rounded-xl bg-navy px-6 py-5 text-white">
              <p className="font-heading text-4xl font-semibold">
                <CountUp to={institute.batchesCompleted} suffix="+" />
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Batches successfully completed
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src={engineeringWorkspace}
              alt="Technical workspace illustrating the kind of environment Embedded Systems learners work in"
              width={1400}
              height={933}
              loading="lazy"
              className="rounded-xl object-cover"
            />
            <p className="mt-2 text-xs text-muted">
              Illustrative photograph, not a RAMS classroom image.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <article className="rounded-xl bg-white p-8">
            <h2 className="text-2xl font-semibold">Training philosophy</h2>
            <p className="mt-4 text-sm leading-7 text-ink">
              RAMS presents its programmes as tailored technical training. The
              published course list is deliberately specific: Embedded C and data
              structures, Linux and RTOS, C/C++ with STL, and interview guidance with
              mock experience. The intent is a stronger technical foundation rather
              than a generic overview of the industry.
            </p>
          </article>
          <article className="rounded-xl bg-white p-8">
            <h2 className="text-2xl font-semibold">Practical methodology</h2>
            <p className="mt-4 text-sm leading-7 text-ink">
              Learning is framed around concepts used in Embedded Systems software,
              including automotive software technologies. Practical sessions and mock
              interviews are part of the offering. Exact lab equipment, project lists,
              and batch hours are confirmed when you enquire, because those details
              are not published on the current website.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <h2 className="text-3xl font-semibold">Mission and vision</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-sm leading-7 text-ink">
                The team is focused on equipping enthusiasts and professionals with
                current technical insight so they can work more confidently with
                modern technology and grow in their careers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-ink">
                RAMS describes a longer aim of contributing to indigenous products
                and technologies, including work with academic institutions, to
                support India’s industrial landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Why students consider RAMS</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-ink">
              <li>
                More than 35 batches have been completed in Embedded Systems training.
              </li>
              <li>
                Location in Bengaluru, a major centre for Embedded Systems and
                automotive software work.
              </li>
              <li>
                Course list covering Embedded C, data structures, Linux, RTOS, C, C++,
                STL, and interview practice.
              </li>
              <li>
                Stated alumni destinations include Mercedes-Benz, Wipro, and Bosch.
                Individual outcomes still depend on the learner and the hiring market.
              </li>
              <li>
                Trainer details are shared during enquiry. Named faculty profiles were
                not published on the current site, so they are not invented here.
              </li>
            </ul>
            <Button
              href={whatsappHref(whatsappMessages.general)}
              variant="navy"
              className="mt-8"
            >
              Enquire Now
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src={pcbCloseup}
              alt="Circuit board used in electronics development"
              width={700}
              height={500}
              loading="lazy"
              className="h-full rounded-lg object-cover"
            />
            <img
              src={labBreadboard}
              alt="Embedded development board and tools"
              width={700}
              height={500}
              loading="lazy"
              className="h-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
