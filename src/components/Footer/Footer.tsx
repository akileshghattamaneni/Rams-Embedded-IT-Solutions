import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/rams-logo.png";
import { courses } from "../../data/courses";
import { institute, navItems } from "../../data/institute";
import { mailHref, mapsLink, telHref, whatsappHref } from "../../lib/contact";
import { whatsappMessages } from "../../lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-md bg-white object-contain"
            />
            <p className="font-heading text-sm font-semibold text-white">
              {institute.name}
            </p>
          </div>
          <p className="mt-4 text-sm leading-6">
            Embedded Systems training institute in Bengaluru, Karnataka. Practical
            technical courses for engineering freshers and working professionals.
            {` ${institute.batchesLabel}.`}
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
            Courses
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link to={`/courses#${course.slug}`} className="hover:text-white">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a href={mapsLink()} className="hover:text-white">
                {institute.addressLines.join(", ")}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a href={telHref()} className="hover:text-white">
                {institute.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a
                href={whatsappHref(whatsappMessages.general)}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {institute.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
              <a href={mailHref()} className="hover:text-white">
                {institute.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">{institute.addressNote}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 pb-20 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between md:pb-5">
          <p>
            © {new Date().getFullYear()} {institute.legalName}. All rights reserved.
          </p>
          <p>Embedded Systems Training Institute in Bengaluru</p>
        </div>
      </div>
    </footer>
  );
}
