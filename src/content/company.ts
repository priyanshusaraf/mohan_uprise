export type Project = {
  name: string;
  location?: string;
  description?: string;
  image?: string;
};

export type Client = {
  name: string;
  logo: string;
  note?: string;
};

export type Company = {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
    country: string;
  };
  about: string[];
  valuedClients: Client[];
  consultants: {
    structural: string[];
    architectural: string[];
  };
  team: Array<{
    name: string;
    role: string;
    bio: string[];
    image?: string;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
  projects: {
    ongoing: Project[];
    completed: Project[];
    note: string;
  };
};

export const company: Company = {
  name: "Mohan Uprise Pvt Ltd",
  email: "mohanuprisepvtltd@gmail.com",
  phone: "9831116667",
  address: {
    line1: "18, Rabindra Sarani",
    line2: "Poddar Court, Gate No. 1, Room No. 527",
    city: "Kolkata",
    postalCode: "700001",
    country: "India",
  },
  about: [
    "We are committed to delivering high-quality, durable, and cost-efficient projects. With a strong foundation built on integrity, technical expertise, and customer satisfaction, we specialize in executing residential, commercial, and infrastructural projects that meet modern standards and exceeds client’s expectations.",
    "Our approach combines thoughtful planning, skilled workmanship, and the use of quality materials to ensure long-lasting structures. We follow strict safety protocols and quality control measures at every stage of construction, ensuring projects are completed on time without compromising on standards.",
    "We believe in transparency, ethical practices, and clear communication with our clients and consultants. From project conceptualization to final handover, we maintain a collaborative process that allows us to understand client’s requirements and deliver customized solutions.",
    "Driven by a dedicated team of engineers, supervisors, and skilled professionals, we continuously strive for excellence in execution. Our goal is not just to construct buildings, but to create safe, functional, and value-driven spaces that contribute positively to communities and stand the test of time.",
  ],
  valuedClients: [
    {
      name: "Srijan Realty Pvt Ltd",
      logo: "/Client/Srijan.jpg",
    },
    {
      name: "Merlin Group",
      logo: "/Client/Merlin.jpg",
    },
    {
      name: "Natural Group",
      logo: "/Client/Natural Group.jpg",
    },
    {
      name: "Bengal Greenfield",
      logo: "/Client/Bengal Greenfield.jpg",
    },
    {
      name: "Bengal Greenfield",
      logo: "/Client/Bengal Greenfield.png",
      note: "Alternate logo",
    },
    {
      name: "Auricas",
      logo: "/Client/Auricas.jpg",
    },
    {
      name: "IRC Group",
      logo: "/Client/IRC.jpg",
    },
    {
      name: "Poddar Projects Limited",
      logo: "/Client/Poddar Project Ltd.jpg",
    },
    {
      name: "Bhatter Projects Pvt Ltd",
      logo: "/Client/Bhatter.jpg",
    },
  ],
  consultants: {
    structural: [
      "Engineers Forum",
      "M.N. Consultants Pvt Ltd",
      "C.P. Khanra and Associates",
      "S.P.A. Consultants",
    ],
    architectural: [
      "Raj Agarwal and Associates",
      "M.N. Consultants Pvt. Ltd.",
      "Anjan Ukil",
      "Subir Basu",
      "Mass & Void",
    ],
  },
  team: [
    {
      name: "Mohan Tibrewal",
      role: "Founder and Director",
      image: "/placeholder-hero.svg",
      bio: [
        "With over 25 years of extensive experience in the construction and real estate industry, he has been a driving force behind the company's steady growth, strong reputation, and commitment to excellence. Over the years, he has successfully led and delivered a wide range of residential, commercial, and infrastructural projects, consistently adhering to the highest standards of quality, safety, and timely execution.",
        "What began as the vision of a young graduate stepping into the construction industry has, through unwavering determination, hard work, and perseverance, evolved into a trusted and respected enterprise.",
        "His deep understanding of construction management, project planning, cost control, and regulatory compliance has enabled the organization to undertake complex projects with confidence and precision. Known for his strategic vision and hands-on leadership approach, he emphasizes innovation, sustainable construction practices, and the use of modern technologies to enhance efficiency and durability.",
        "Under his guidance, the company has built long-term relationships with clients, consultants, and stakeholders, founded on trust, transparency, and ethical business practices.",
      ],
    },
    {
      name: "Varsha Tibrewal",
      role: "Director",
      image: "/placeholder-hero.svg",
      bio: [
        "One of the Directors of the company, while being a dedicated homemaker and family anchor, has been an integral partner in the company's journey. A woman of strong character, determination, and vision, she has consistently balanced personal responsibilities with professional commitment.",
        "Her unwavering belief, ambitious outlook, and steadfast support have played a vital role in strengthening the company and driving its growth toward greater heights.",
      ],
    },
    {
      name: "Yuvraj Tibrewal",
      role: "Leadership",
      image: "/placeholder-hero.svg",
      bio: [
        "Representing the next generation of leadership, he has recently joined the company with a strong commitment to carrying forward its legacy of quality, trust, and excellence in the construction industry.",
        "He is actively involved in understanding on-ground operations, project execution, and client relations, ensuring that traditional strengths are complemented by innovation, efficiency, and contemporary management approaches.",
        "His focus on technology adoption, sustainable development, and continuous improvement reflects the company's vision of building not just structures, but long-term value.",
      ],
    },
  ],
  services: [
    {
      title: "Civil Construction",
      description:
        "Durable, reliable execution for residential and commercial structures with disciplined planning and skilled workmanship.",
    },
    {
      title: "Infrastructure Development",
      description:
        "End-to-end infrastructure works with quality materials, safety protocols, and on-time delivery.",
    },
    {
      title: "Project Planning & Coordination",
      description:
        "Transparent communication from conceptualization to handover, aligned to client requirements and modern standards.",
    },
    {
      title: "Quality & Safety",
      description:
        "Strict quality control and safety measures at every stage to ensure long-lasting structures without compromises.",
    },
  ],
  projects: {
    ongoing: [
      {
        name: "Aqua Waves",
        image: "/Ongoing/Aqua Waves.jpg",
      },
      {
        name: "GKB Gariahat",
        image: "/Ongoing/GKB-Gariahat.jpg",
      },
      {
        name: "GKB Office Building Kasba",
        image: "/Ongoing/GKB-Office Building Kasba.jpg",
      },
      {
        name: "Greenfield City Phase 2",
        image: "/Ongoing/Greenfield City Phase 2.jpg",
      },
      {
        name: "Greenfield City Phase 1",
        image: "/Ongoing/Greenfiled City Phase 1.avif",
      },
      {
        name: "Natural City Madhyamgram",
        image: "/Ongoing/Natural City Madhyamgram.jpg",
      },
      {
        name: "Natural Luxuria",
        image: "/Ongoing/Natural Luxuria.jpg",
      },
      {
        name: "Natural Majesty",
        image: "/Ongoing/natural majesty.jpg",
      },
      {
        name: "Nevada",
        image: "/Ongoing/Nevada.png",
      },
      {
        name: "Omya",
        image: "/Ongoing/Omya.png",
      },
      {
        name: "Upantika Township",
        image: "/Ongoing/upantika Township.jpg",
      },
    ],
    completed: [
      {
        name: "B.P. Poddar Hospital - New Wing",
        image: "/Completed/B.P. Poddar Hospital - New Wing.png",
      },
      {
        name: "Merlin Uttara",
        image: "/Completed/Merlin Uttara.avif",
      },
      {
        name: "Metro Heights",
        image: "/Completed/Metro Heights.avif",
      },
      {
        name: "Natural City Birati",
        image: "/Completed/Natural City Birati.jpg",
      },
      {
        name: "Natural Sarvapriya",
        image: "/Completed/Natural Sarvapriya.jpg",
      },
      {
        name: "Shantikunj",
        image: "/Completed/Shantikunj.jpeg",
      },
      {
        name: "Vivek Vihar",
        image: "/Completed/Vivek Vihar.webp",
      },
    ],
    note:
      "Our project portfolio is being updated. Please contact us for detailed project references and site visits.",
  },
};


