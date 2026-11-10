import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { EnquiryForm } from "../components/EnquiryForm/EnquiryForm";
import { Seo } from "../components/Seo";
import { courses } from "../data/courses";
import { institute } from "../data/institute";
import { mailHref, mapsEmbedSrc, mapsLink, telHref, whatsappHref } from "../lib/contact";
import { breadcrumbSchema, organizationSchema } from "../lib/schema";
import { whatsappMessages } from "../lib/whatsapp";

export function Contact() {
  const [params] = useSearchParams();
  const requested = params.get("course") ?? "";
  const defaultCourse = useMemo(() => {
    return courses.some((course) => course.title === requested) ? requested : "";
  }, [requested]);

  return (
    <>
      <Seo
        title="Contact RAMS Embedded | Embedded Systems Training in Bengaluru"
        description="Enquire about Embedded Systems training at RAMS Embedded IT Solutions in Bengaluru. Send a course enquiry for freshers or working professionals."
        path="/contact"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="bg-navy py-14 text-white sm:py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <h1 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-5xl">
            Contact RAMS Embedded IT Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Ask about Embedded Systems classes in Bangalore, batch timing, or the
            right starting course for a fresher or working professional.
          </p>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <article className="rounded-xl bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-semibold">Bengaluru location</h2>
                  <address className="mt-2 not-italic text-sm leading-6 text-ink">
                    {institute.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <p className="mt-2 text-xs text-muted">{institute.addressNote}</p>
                  <a
                    href={mapsLink()}
                    className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-semibold">Phone</h2>
                  <a href={telHref()} className="mt-2 block text-sm text-ink hover:text-accent">
                    {institute.phoneDisplay}
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-semibold">Email</h2>
                  <a href={mailHref()} className="mt-2 block text-sm text-ink hover:text-accent">
                    {institute.email}
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-white p-6">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 size-5 text-accent" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-semibold">WhatsApp</h2>
                  <p className="mt-1 text-sm text-ink">{institute.phoneDisplay}</p>
                  <a
                    href={whatsappHref(whatsappMessages.contactPage)}
                    className="mt-2 inline-block text-sm font-medium text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="rounded-xl bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Course enquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Select a course and submit the form to open WhatsApp with your details
              ready to send. You still need to press Send in WhatsApp.
            </p>
            <div className="mt-6">
              <EnquiryForm key={defaultCourse} defaultCourse={defaultCourse} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-page">
          <h2 className="sr-only">Map</h2>
          <div className="overflow-hidden rounded-xl ring-1 ring-line">
            <iframe
              title="RAMS Embedded IT Solutions registered office on Google Maps"
              src={mapsEmbedSrc()}
              width="600"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
