export const institute = {
  name: "RAMS Embedded IT Solutions",
  legalName: "RAMS EMBEDDED IT SOLUTIONS PRIVATE LIMITED",
  shortName: "RAMS Embedded",
  tagline: "Practical Embedded Systems training in Bengaluru",
  locationCity: "Bengaluru",
  locationState: "Karnataka",
  locationCountry: "India",
  locationLabel: "Bengaluru, Karnataka",
  batchesCompleted: 35,
  batchesLabel: "35+ Batches Successfully Completed",
  siteUrl: "https://ramsembedded.com",
  existingSiteUrl: "https://ramsembedded.com/",
  email: "ramsembedded@gmail.com",
  phoneDisplay: "+91 99169 75115",
  phoneTel: "+919916975115",
  whatsappNumber: "919916975115",
  /**
   * Registered office from public company records (CIN U72900KA2021PTC145254).
   * Confirm the classroom / training-centre address with the institute before visits.
   */
  addressLines: [
    "No. 172, Sai Sagar Nilaya",
    "12th Cross, Rajarajeshwari Temple Street",
    "Devasandra, K.R. Puram",
    "Bengaluru, Karnataka 560036",
  ],
  addressQuery:
    "No. 172, Sai Sagar Nilaya, 12th Cross, Rajarajeshwari Temple Street, Devasandra K.R. Puram, Bengaluru 560036",
  addressNote:
    "Registered office, Devasandra, K.R. Puram. Please confirm the training-centre location when you enquire.",
  cin: "U72900KA2021PTC145254",
  foundedNarrativeYear: 2012,
  companyEstablishedYear: 2017,
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  alumniCompanies: ["Mercedes-Benz", "Wipro", "Bosch"] as const,
  searchConsoleVerification: "",
} as const;

export const seoDefaults = {
  titleTemplate: "%s | RAMS Embedded IT Solutions",
  defaultTitle:
    "RAMS Embedded IT Solutions | Embedded Systems Training in Bengaluru",
  defaultDescription:
    "Explore Embedded Systems training at RAMS Embedded IT Solutions, Bengaluru. Discover practical technical courses for engineering freshers and working professionals.",
  ogImagePath: "/og-image.jpg",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
