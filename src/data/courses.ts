export type Course = {
  slug: string;
  title: string;
  shortDescription: string;
  audience: string;
  duration: string;
  technologies: string[];
  topics: string[];
  syllabus: { title: string; detail: string }[];
  practicalNote: string;
  projectsNote: string;
};

/**
 * Course catalogue taken from the live RAMS site (Available Courses).
 * Duration and batch-specific outlines are confirmed at enquiry.
 */
export const courses: Course[] = [
  {
    slug: "embedded-c-data-structures",
    title: "Embedded C, Data Structures",
    shortDescription:
      "Build a working foundation in Embedded C and data structures for microcontroller-oriented software development.",
    audience:
      "Engineering students, freshers, and professionals who need a stronger C foundation for Embedded Systems work.",
    duration: "Confirmed at enquiry",
    technologies: ["Embedded C", "C", "Data Structures"],
    topics: ["Embedded C", "Data structures used in embedded software"],
    syllabus: [
      {
        title: "Embedded C",
        detail:
          "Embedded C is the C language used with constraints typical of microcontrollers: limited memory, direct register access and close hardware control. Training in this area usually covers data types, pointers, bitwise operations, memory layout and writing firmware-style functions. The exact module sequence for a RAMS batch is shared when you enquire.",
      },
      {
        title: "Data Structures",
        detail:
          "Data structures organise information so firmware can store, search and update it efficiently. Common study includes arrays, linked lists, stacks, queues and simple trees as they appear in embedded software. Coverage for the current batch is confirmed with the institute.",
      },
    ],
    practicalNote:
      "Practical programming is part of RAMS technical training. Lab boards, hours and assignment load are confirmed at enquiry.",
    projectsNote:
      "Project work, when included in a batch, is confirmed during admission. Related study domains on this site include Bluetooth-based systems, automotive infotainment concepts and Hands-Free Profile (HFP).",
  },
  {
    slug: "linux-rtos",
    title: "Linux, RTOS",
    shortDescription:
      "Study Linux and real-time operating system concepts used in Embedded Systems software.",
    audience:
      "Learners who already have a C foundation, including working professionals moving into firmware-oriented roles.",
    duration: "Confirmed at enquiry",
    technologies: ["Linux", "RTOS"],
    topics: ["Linux", "RTOS"],
    syllabus: [
      {
        title: "Linux",
        detail:
          "Embedded Linux is used where a device needs process management, filesystems, networking or richer user-space software. Typical topics include the Linux environment, basic shell use, compiling C programmes and how user space talks to the kernel. Detailed RAMS topics are shared during enrolment discussions.",
      },
      {
        title: "RTOS",
        detail:
          "A real-time operating system (RTOS) schedules tasks so time-critical firmware can meet deadlines. Study usually includes tasks, scheduling, inter-task communication and using an RTOS on a microcontroller. The teaching sequence is confirmed with the trainer.",
      },
    ],
    practicalNote:
      "Hands-on practice is part of the institute’s technical training. Exact lab setup is confirmed when you enquire.",
    projectsNote:
      "How Linux or RTOS work is applied in a given batch is confirmed at enquiry. Automotive and connectivity examples on this site are learning domains, not a published project list.",
  },
  {
    slug: "c-cpp-stl",
    title: "C, C++, STL",
    shortDescription:
      "Strengthen C and C++ programming, including the Standard Template Library, for technical software work.",
    audience:
      "Engineering graduates and working professionals who want a clearer programming base for Embedded Systems.",
    duration: "Confirmed at enquiry",
    technologies: ["C", "C++", "STL"],
    topics: ["C", "C++", "STL"],
    syllabus: [
      {
        title: "C",
        detail:
          "C remains the main language for a large share of firmware and system software. This module strengthens structured C: functions, pointers, structures, memory and writing clear, maintainable code for technical work.",
      },
      {
        title: "C++",
        detail:
          "C++ adds classes, objects and stronger type facilities on top of C. In embedded and automotive software it is often used for application-level code. Coverage for the current batch is confirmed with RAMS.",
      },
      {
        title: "STL",
        detail:
          "The Standard Template Library provides containers and algorithms such as vectors, maps and iterators. Understanding STL helps when reading and writing modern C++ used alongside embedded platforms. Detailed topics are shared on enquiry.",
      },
    ],
    practicalNote:
      "Programming practice is included in course delivery. Assignment load is confirmed during enquiry.",
    projectsNote:
      "Application exercises are confirmed per batch. They may draw on general Embedded Systems ideas such as firmware structure and hardware-software interaction.",
  },
  {
    slug: "interview-guidance-mock-experience",
    title: "Interview Guidance & Mock Experience",
    shortDescription:
      "Prepare for technical interviews with guided practice and mock interview experience.",
    audience:
      "Freshers and professionals preparing for Embedded Systems and related technical interviews.",
    duration: "Confirmed at enquiry",
    technologies: ["Interview preparation"],
    topics: ["Interview guidance", "Mock interview experience"],
    syllabus: [
      {
        title: "Interview guidance",
        detail:
          "Technical interviews for Embedded Systems often cover C, microcontrollers, operating-system ideas and how you explain a project. Guidance typically includes how to structure answers and which fundamentals to revise. The exact format is shared when you enquire.",
      },
      {
        title: "Mock experience",
        detail:
          "A mock interview is a practice session that resembles a real technical discussion. It helps you rehearse explaining concepts, code and project work under time pressure. Scheduling is confirmed with the institute.",
      },
    ],
    practicalNote:
      "This course is practice-oriented, with mock interview experience listed on the institute’s course list.",
    projectsNote:
      "Interview practice may use examples from Embedded Systems domains. It is not a product-development course.",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCourseByTitle(title: string) {
  return courses.find((course) => course.title === title);
}
