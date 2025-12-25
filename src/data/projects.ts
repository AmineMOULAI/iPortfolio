export interface Project {
  slug: string;
  title: string;
  category: 'university' | 'ai' | 'gamedev';
  summary: string;
  year: string;
  role: string;
  technologies: string[];
  description: string[];
  links?: Array<{ label: string; href: string; external?: boolean }>;
}

export const projects: Project[] = [
  {
    slug: "psycho-robots",
    title: "Psycho-robots",
    category: "university",
    summary: "Simulation of heterogeneous robots on a 2D grid that explore, cooperate, and handle conflicts to model collective behavior inspired by psychology.",
    year: "2025",
    role: "Developer",
    technologies: ["C/C++", "Python"],
    description: [
      "The Psycho-robots project began as a technical exercise in multi-agent simulation but quickly evolved into a meditation on the nature of cooperation itself. Watching artificial agents navigate a shared environment, forming alliances and resolving conflicts, offers unexpected insights into the psychological foundations of collective behavior.",
      "In the simulation, each robot operates with individual goals and limited information about its peers. Cooperation emerges not from centralized command but from local interactions—agents learning through trial and error which strategies yield mutual benefit.",
      "The system implements various psychological models including trust-building mechanisms, reputation systems, and conflict resolution protocols. Each agent maintains internal states that influence their decision-making processes.",
      "This bottom-up emergence mirrors findings from behavioral economics and social psychology about how human groups self-organize. The project serves as both a technical achievement and a philosophical exploration."
    ],
    links: [
      { label: "GitHub", href: "#", external: true },
      { label: "Demo", href: "#", external: true }
    ]
  },
  {
    slug: "rv32i-carcassonne",
    title: "RV32I & Carcassonne",
    category: "university",
    summary: "Design of a 32-bit RISC-V processor and an associated strategic game, combining hardware architecture work with software logic in a team setting.",
    year: "2024",
    role: "Developer",
    technologies: ["VHDL", "C/C++"],
    description: [
      "This dual project combined low-level hardware design with high-level game logic, creating a unique intersection of computer architecture and software engineering.",
      "The RV32I processor implementation involved designing and verifying a complete 32-bit RISC-V CPU, including the instruction fetch unit, decoder, ALU, register file, and memory interface. Each component was carefully designed to meet the RISC-V specification.",
      "Parallel to the hardware work, we developed a digital version of the Carcassonne board game, implementing the complete rule set including tile placement validation, feature scoring, and AI opponents.",
      "The team collaboration aspect taught valuable lessons about project management, code integration, and the importance of clear interfaces between system components."
    ]
  },
  {
    slug: "python-games",
    title: "Python Games",
    category: "gamedev",
    summary: "Development of small games in Python with basic GUIs, focusing on game algorithms, state management, and data structures.",
    year: "2023–2024",
    role: "Developer",
    technologies: ["Python", "Tkinter", "Pygame"],
    description: [
      "A collection of interactive games built to explore fundamental game development concepts. Each project served as a learning exercise in different aspects of game programming.",
      "Projects included classic games reimagined with custom mechanics, puzzle games with procedural generation, and real-time action games requiring efficient input handling.",
      "The development process emphasized clean architecture, separating game logic from presentation layers. This approach allowed for easy modification and extension of game mechanics.",
      "Working with Python's limitations in performance taught valuable lessons about optimization and the trade-offs between development speed and runtime efficiency."
    ],
    links: [
      { label: "GitHub", href: "#", external: true }
    ]
  },
  {
    slug: "automotive-automation",
    title: "Automotive Automation & Book Platform",
    category: "university",
    summary: "Automation of processes for the automotive sector and a community book platform, setting up online management and automation tools.",
    year: "2024",
    role: "Developer",
    technologies: ["n8n", "Web Stack", "APIs"],
    description: [
      "This project addressed real-world automation challenges in the automotive industry, implementing workflow systems that reduced manual data entry and improved process reliability.",
      "The automation platform connected multiple systems including inventory management, customer databases, and scheduling tools. n8n provided the backbone for creating complex workflows without extensive custom code.",
      "Alongside the automotive work, the book platform created a community space for readers to share recommendations, track their reading, and discover new titles based on collaborative filtering.",
      "Both projects demonstrated the power of no-code and low-code tools when applied thoughtfully to well-defined problems."
    ]
  },
  {
    slug: "godot-prototype",
    title: "Godot Prototype",
    category: "gamedev",
    summary: "Experimental game prototype exploring 2D mechanics and player interactions using the Godot engine.",
    year: "Ongoing",
    role: "Developer",
    technologies: ["GDScript", "Godot 4"],
    description: [
      "An ongoing exploration of game design principles using the Godot engine. The project serves as a playground for testing mechanics and visual styles.",
      "Current focus areas include procedural level generation, physics-based interactions, and responsive character controls that feel satisfying to use.",
      "The prototype approach allows for rapid iteration on ideas, testing concepts before committing to full development. Many mechanics explored here may find their way into larger projects.",
      "Godot's open-source nature and approachable scripting language make it an ideal platform for experimentation and learning."
    ]
  }
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(p => p.category === category);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find(p => p.slug === slug);
};
