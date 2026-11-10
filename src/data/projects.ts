import labBreadboard from "../assets/images/lab-breadboard.jpg";
import engineeringWorkspace from "../assets/images/engineering-workspace.jpg";
import codeHardware from "../assets/images/code-hardware.jpg";

export type ProjectDomain = {
  slug: string;
  title: string;
  shortDescription: string;
  topics: string[];
  detail: string;
  image: string;
  imageAlt: string;
};

export const projectDomains: ProjectDomain[] = [
  {
    slug: "bluetooth-embedded-systems",
    title: "Bluetooth-Based Embedded Systems",
    shortDescription:
      "A practical learning domain covering wireless links between microcontrollers and nearby devices using Bluetooth communication.",
    topics: [
      "Bluetooth communication",
      "Device connectivity",
      "Microcontroller integration",
      "Wireless data transmission",
      "Hardware interfacing",
    ],
    detail:
      "Bluetooth is widely used in Embedded Systems to connect sensors, control boards and mobile devices over short range. Learners typically study how a microcontroller exchanges data with a Bluetooth module, how pairing and simple profiles work, and how firmware handles incoming and outgoing packets. This is presented as a project domain for practical study, not as a guaranteed student assignment or commercial product delivered by RAMS.",
    image: labBreadboard,
    imageAlt: "Development board illustrating microcontroller and wireless hardware work",
  },
  {
    slug: "automotive-infotainment",
    title: "Automotive Infotainment Systems",
    shortDescription:
      "An introduction to in-vehicle infotainment ideas: embedded software, multimedia integration and connectivity inside the car.",
    topics: [
      "Automotive infotainment concepts",
      "Embedded software",
      "Multimedia system integration",
      "Vehicle connectivity",
      "Hardware and software interaction",
    ],
    detail:
      "Automotive infotainment systems combine display, audio, connectivity and vehicle information on embedded platforms. Study in this area usually looks at how software talks to hardware, how media and user interfaces are organised, and how the head unit sits alongside other vehicle electronics. RAMS lists Automotive Software Technologies as a specialisation; these notes explain the domain for learners and do not claim that every batch builds a production infotainment stack.",
    image: engineeringWorkspace,
    imageAlt: "Technical workspace representing automotive embedded software study",
  },
  {
    slug: "hands-free-profile",
    title: "Hands-Free Profile (HFP)",
    shortDescription:
      "A focused look at Bluetooth Hands-Free Profile used for in-call audio between a phone and an embedded hands-free unit.",
    topics: [
      "Bluetooth Hands-Free Profile",
      "Hands-free communication",
      "Bluetooth device pairing",
      "Audio communication concepts",
      "Embedded Bluetooth integration",
    ],
    detail:
      "Hands-Free Profile (HFP) is a Bluetooth profile that lets a phone place and receive calls through another device, such as a car kit or headset. Embedded work in this area covers pairing, audio path setup and the control messages that start or end a call. It is a useful example of how a standard wireless profile is implemented on a microcontroller. Coverage in training should be confirmed with the institute; this is a learning domain, not a statement that RAMS ships commercial HFP products.",
    image: codeHardware,
    imageAlt: "Hardware and software setup representing Bluetooth audio integration study",
  },
];
