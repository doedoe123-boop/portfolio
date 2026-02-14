// Portfolio Data Configuration
const portfolioData = {
  // Project data
  projects: [
    {
      id: "personal-blog",
      title: "Personal Blog",
      description:
        "A static blog built with Hugo showcasing my web development journey, technical insights, and learning experiences.",
      status: "live",
      statusClass: "live",
      image: "assets/images/blog-preview.png",
      imageAlt: "Personal Blog Preview",
      link: "https://doedoe123-boop.github.io",
      techStack: ["Hugo", "Go Templates", "SCSS", "Markdown"],
      stats: ["Hugo", "Fast Loading", "SEO Optimized"],
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker",
      description:
        "A comprehensive fitness tracking application with health tips, workout plans, and progress monitoring features.",
      status: "Live",
      statusClass: "live",
      image: "assets/images/fitness-preview.png",
      imageAlt: "Fitness Tracker Preview",
      link: "https://www.fitnesses.lifestyle",
      techStack: ["React", "Node.js", "Next.js", "Supabase"],
      stats: ["React", "Real-time Data", "Mobile Ready"],
    },
    {
      id: "planify",
      title: "Planify",
      description:
        "A modern SaaS platform that streamlines the quotation process for businesses. Generate professional quotes, manage clients, and handle proposals efficiently.",
      status: "In Development",
      statusClass: "development",
      image: null,
      imageAlt: "SaaS Platform Preview",
      link: null,
      techStack: ["Laravel", "AWS", "Vue.js", "NGINX"],
      stats: ["Laravel", "AWS Hosted", "Coming Soon"],
      placeholder: "💼 SaaS Platform Preview",
    },
  ],

  // Skills data
  skills: {
    categories: [
      {
        title: "Programming & Scripting",
        items: ["PHP", "JavaScript", "Shell Scripting (Bash)"],
      },
      {
        title: "Familiar With",
        items: ["Python", "C++", "Java"],
      },
      {
        title: "Markup & Styling Languages",
        items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
      },
      {
        title: "Frameworks & Libraries",
        items: [
          "Laravel",
          "Node.js",
          "PHPMailer",
          "Hugo",
          "React / React Native",
          "Vue.js",
        ],
      },
      {
        title: "Cloud & Server Management",
        items: [
          "AWS",
          "DigitalOcean (DO)",
          "Google Cloud Platform (GCP)",
          "Ubuntu/Debian Server",
          "NGINX",
          "Vercel",
        ],
      },
      {
        title: "CMS & Hosting Platforms",
        items: ["WordPress", "Elementor", "Divi", "WP Residence", "WHM/cPanel"],
      },
      {
        title: "Databases & Cloud Services",
        items: ["MySQL", "MariaDb", "SendGrid", "AWS SES", "CloudFlare"],
      },
      {
        title: "Tools & Collaboration",
        items: ["GitHub", "Bitbucket", "Jira", "Trello", "Confluence"],
      },
    ],
    progressBars: [
      {
        category: "Frontend Development",
        skills: [
          { name: "HTML/CSS", percentage: 95 },
          { name: "JavaScript", percentage: 90 },
          { name: "React", percentage: 85 },
          { name: "Vue.js", percentage: 80 },
        ],
      },
      {
        category: "Backend Development",
        skills: [
          { name: "PHP/Laravel", percentage: 90 },
          { name: "Node.js", percentage: 85 },
          { name: "MySQL/MariaDB", percentage: 88 },
          { name: "RESTful APIs", percentage: 92 },
        ],
      },
      {
        category: "DevOps & Server Administration",
        skills: [
          { name: "Linux/Ubuntu Server", percentage: 88 },
          { name: "AWS Services", percentage: 85 },
          { name: "NGINX/Server Setup", percentage: 90 },
          { name: "CI/CD Pipelines", percentage: 82 },
        ],
      },
    ],
  },

  // Timeline data
  timeline: [
    {
      year: "2021",
      content:
        "My journey began during my college years when I was assigned as a developer for a team project to build a help desk system for our school. Collaborating with other college students was both frustrating and challenging, especially when it came to merging our work since the project was not standalone. Despite the stress, completing the project brought a sense of fulfillment. Seeing my team happy with the outcome made all the hard work worth it.",
    },
    {
      year: "2022",
      content:
        "After graduating, I was eager to start my career as a software engineer. Excited but inexperienced, I humorously applied for senior roles, not realizing how bold (and unrealistic) I was being. Looking back, it's a funny memory that reminds me of my early enthusiasm. Fortunately, I landed my first role as a web developer. It was challenging to find an entry-level job in the Philippines, so I grabbed the opportunity. My first job was filled with hilarious moments and stress, but it was also a valuable learning experience.",
    },
    {
      year: "2023",
      content:
        "As I gained more experience, I worked on diverse projects, including a Laravel API hosted on AWS. This year marked a significant step forward in building my technical skills and confidence. Working with new tools and frameworks pushed me to learn independently, and I began to appreciate the importance of adaptability in this fast-paced field.",
    },
    {
      year: "2024",
      content:
        "My focus this year has been on leveling up my skills and expanding my knowledge of modern tools and technologies. Self-study has been both my greatest challenge and my most rewarding practice. I've realized that learning is a lifelong journey in this field, and I'm committed to staying updated with the latest trends and best practices. I'm excited to continue growing my career and taking on more ambitious projects in the future.",
    },
    {
      year: "2025",
      content:
        "This year marked my transition into more leadership and DevOps responsibilities. I learned how to set up CI/CD pipelines, which revolutionized our deployment process and significantly reduced manual errors. More importantly, I discovered the value of cross-functional collaboration - working closely with frontend developers, designers, and business analysts taught me how different perspectives create better solutions. Leading a team has been both challenging and rewarding, as I've learned to balance technical decision-making with mentoring and project coordination. These experiences have shaped me into a more well-rounded developer who understands that great software is built by great teams.",
    },
    {
      year: "2026",
      content:
        "This year is all about leveling up — gaining new skills, enhancing my development workflow by leveraging AI-powered tools, and doubling down on security best practices. I'm committed to delivering higher-quality work by integrating AI assistants into my daily coding, adopting security-first thinking across every layer of the stack, and continuously refining my craft. The goal is not just to build faster, but to build smarter and more securely, ensuring every project meets the highest standards of reliability and protection.",
    },
  ],

  // Testimonials data
  testimonials: [
    {
      content:
        "I highly recommend Nelson as an exceptional web developer and teammate. He's always reliable whenever I need assistance or have questions and consistently showcases his deep understanding of web development.",
      author: {
        name: "Angeluz Nicole P.",
        title: "Web Developer | QA",
      },
    },
    {
      content:
        "We've worked on several projects, both local and international, and Nelson consistently meets client expectations. His passion for development and continuous learning makes him a valuable asset to any team.",
      author: {
        name: "Alexis B.",
        title: "Marketing Assistant",
      },
    },
    {
      content:
        "I worked with Nelson on a couple of website development projects in our team, and the results are exceptional. Nelson is skilled, and I commend him for ensuring that each detail of every project's vision is executed perfectly. He works with professionalism and makes sure that any problems are communicated clearly, and he lays out solutions that may work to solve it.",
      author: {
        name: "Leanne Danielle M.",
        title: "Marketing Assistant",
      },
    },
    {
      content:
        "Nelson is a talented web developer who's great to work with. He knows his stuff when it comes to modern web technologies and always gets the job done efficiently.",
      author: {
        name: "Veronica G.",
        title: "Content Writer",
      },
    },
    {
      content:
        "I have worked with Nelson across multiple projects in both project management and development capacities. As Project Manager, Nelson maintains excellent communication with the team and regularly checks in to ensure everyone stays aligned. He delegates tasks thoughtfully, matching assignments to each person's strengths and abilities. As a Developer, Nelson brings strong knowledge across different technology stacks. He takes time to thoroughly analyze and review solutions before implementation. His reliability is outstanding — he consistently meets deadlines and is committed to continuous learning. Nelson would be an invaluable asset to any organization seeking a professional who combines technical expertise with people skills and a collaborative approach.",
      author: {
        name: "Javelyn A.",
        title: "Business Analyst | Quality Assurance Analyst",
      },
    },
  ],
};
