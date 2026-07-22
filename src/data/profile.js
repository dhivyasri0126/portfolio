export const profile = {
  name: "Dhivyasri M",
  role: "Java Full Stack Developer",
  resume: "/dhivyasri-resume.pdf",

  socials: {
    github: "https://github.com/dhivyasri0126",
    linkedin: "https://linkedin.com/in/dhivyasri",
    leetcode: "https://leetcode.com/u/dhivyasri_m",
  },

  projects: [
    {
      title: "ZeroWaste Connect",
      type: "Social Impact | Full Stack Web Application",
      description:
        "ZeroWaste Connect is a full-stack web application that connects donors and recipients, featuring location-based donation discovery with OpenStreetMap and Leaflet, along with email notifications for a seamless donation experience.",
      features: [
        "User authentication and role-based access",
        "Donors can publish donations",
        "Recipients can browse donations and create need requests",
        "Email notifications using Spring Boot Mail",
        "RESTful APIs with secure backend",
      ],
      stack: [
        "React.js",
        "Spring Boot",
        "PostgreSQL",
        "OpenStreetMap",
        "Leaflet",
        "Spring Boot Mail",
        "REST APIs",
      ],
      github: "https://github.com/dhivyasri0126/ZeroWaste-Connect",
      demo: "https://zerowaste-connect.vercel.app/",
    },

    {
      title: "YumSpot",
      type: "MERN Restaurant Booking Platform",
      description:
        "A polished restaurant booking experience with responsive UX, real-time reservation flow, and strong frontend-backend integration.",
      features: [
        "Booking workflow",
        "Restaurant discovery",
        "Responsive dashboard",
      ],
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/dhivyasri0126/YumSpot",
      demo: "",
    },

    {
      title: "Local Service Connection",
      type: "Django + PostgreSQL",
      description:
        "A marketplace-style platform that connects local service seekers with service providers through booking, authentication, ratings, and reviews.",
      features: [
        "Service listings",
        "Role-based authentication",
        "Ratings & Reviews",
        "Search and filtering",
      ],
      stack: ["Django", "PostgreSQL", "Python"],
      github: "https://github.com/dhivyasri0126/LocalConnect",
      demo: "",
    },
  ],
};

export const heroRoles = [
  "Java Developer",
  "React Developer",
  "Full Stack Developer",
  "Problem Solver",
  "AI Enthusiast",
];