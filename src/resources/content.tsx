import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Bader",
  lastName: "Almutairi",
  name: `Bader Almutairi`,
  role: "Computer Science & Cybersecurity Student",
  avatar: "/images/avatar.jpg",
  email: "baderalmshari@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about cybersecurity and software engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BaderAlmutairi123",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bader-almutairi-0a1a34157",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Securing systems and building full-stack solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Pantry Tracker</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/pantry-tracker",
  },
  subline: (
    <>
    I'm Bader, a Computer Science & Cybersecurity student at <Text as="span" size="xl" weight="strong">Hofstra University</Text>, passionate about building secure, full-stack applications and exploring offensive security.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Bader is a Computer Science and Cybersecurity student at Hofstra University with a passion
        for building full-stack applications and exploring offensive security techniques. His work
        spans web development, system administration, and cybersecurity research.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kuwait Oil Company",
        timeframe: "May 2022 - August 2022",
        role: "Technical Intern",
        achievements: [
          <>
            Administered user access management system, creating new user accounts and configuring
            role-based permissions to ensure secure system access.
          </>,
          <>
            Developed and executed SQL queries to manage database operations, generate reports, and
            optimize data retrieval processes for improved system performance.
          </>,
          <>
            Provided first-line technical support to end users, resolving access-related issues and
            system queries while maintaining a professional response time.
          </>,
        ],
        images: [],
      },
      {
        company: "Hofstra University",
        timeframe: "September 2023 - August 2024",
        role: "Vice President, Muslim Student Association",
        achievements: [
          <>
            Orchestrated weekly Friday prayer services for two semesters, coordinating logistics,
            space requirements, and participant communications.
          </>,
          <>
            Established and maintained relationships with campus faculty and administration to
            advocate for MSA needs and resources.
          </>,
          <>
            Led event planning and execution for cultural and religious programming, strengthening
            the Muslim community on campus.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hofstra University",
        description: <>Bachelor of Science in Computer Science and Cybersecurity (Sep 2022 – May 2026)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>Proficient in multiple programming languages for web, systems, and data work.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Java", icon: "java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "C/C++", icon: "cpp" },
          { name: "Rust", icon: "rust" },
          { name: "SQL", icon: "sql" },
        ],
        images: [],
      },
      {
        title: "Frameworks & Tools",
        description: (
          <>Building full-stack applications with modern frameworks and developer tools.</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Next.js", icon: "nextjs" },
          { name: "FastAPI", icon: "fastapi" },
          { name: "Git", icon: "github" },
          { name: "GCP", icon: "gcp" },
        ],
        images: [],
      },
      {
        title: "Cybersecurity",
        description: (
          <>Experienced in offensive security, exploit development, and Linux system administration.</>
        ),
        tags: [
          { name: "Metasploit", icon: "shield" },
          { name: "Linux", icon: "linux" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about cybersecurity and software engineering...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
