# RAMS Embedded IT Solutions

Four-page website for **RAMS Embedded IT Solutions**, an Embedded Systems training institute in Bengaluru, Karnataka.

Stack: React, Vite, TypeScript, Tailwind CSS, React Router, Framer Motion, Lucide, React Hook Form, and Zod.

## Pages

- `/` Home
- `/courses` Courses
- `/about` About Us
- `/contact` Contact Us

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Editable institute content

Keep business copy in:

- `src/data/institute.ts` — name, phone, WhatsApp, email, address, 35+ batches, site URL
- `src/data/courses.ts` — course titles and syllabus notes
- `src/data/faqs.ts` — frequently asked questions
- `src/data/projects.ts` — Bluetooth, infotainment and HFP learning domains
- `src/lib/whatsapp.ts` — WhatsApp message templates and `wa.me` URL helper

### Contact details

Configured in `src/data/institute.ts`:

- Phone: `+91 99169 75115` (`tel:+919916975115`)
- WhatsApp: `919916975115` (`https://wa.me/919916975115`)
- Email: `ramsembedded@gmail.com`

Enquire Now buttons, course cards, the floating WhatsApp button, and the contact form all use the helper in `src/lib/whatsapp.ts`.

The enquiry form validates fields, then opens WhatsApp with a pre-filled message. The visitor must press Send in WhatsApp. The site does not claim that RAMS has already received the enquiry.

The registered office shown on the contact page comes from public company records (CIN `U72900KA2021PTC145254`) in Devasandra, K.R. Puram, Bengaluru 560036. Confirm the training-centre address if it differs.

### Google Search Console

Add the verification token to `institute.searchConsoleVerification` in `src/data/institute.ts`, then deploy and submit `https://ramsembedded.com/sitemap.xml`.

### Images

Replace files in `src/assets/images` with institute photography when available. Hero, gallery and project images currently use Unsplash electronics photographs and are labelled as illustrative, not RAMS classroom photos.

`src/assets/images/rams-logo.png` is the logo from the existing website.

## Deployment

This is a static Vite app.

- **Netlify:** connect the repo; publish directory `dist`. `public/_redirects` already includes the SPA fallback.
- **Vercel:** `vercel.json` rewrites all routes to `index.html`.
- **Any static host:** upload `dist` and route unknown paths to `index.html`.

Update `institute.siteUrl` if the production domain is not `https://ramsembedded.com`.

## Content policy

Course names, alumni company names, founding years, and the 35+ batches figure come from the existing RAMS website or public company records. Fees, exact durations, trainer CVs, testimonials, and placement percentages are not presented as verified facts. Bluetooth, infotainment and HFP are shown as practical learning domains, not as guaranteed student projects or commercial products.
