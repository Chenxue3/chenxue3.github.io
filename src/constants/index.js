import { meta, shopify, starbucks, tesla, nuseum, hero, siesta, net, python, springboot, vue } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "Frontend",
    },
    {
        imageUrl: net,
        name: "Net",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Database Specialist Intern",
        company_name: "NUSEUM (AI-driven Digital Museum)",
        icon: nuseum,
        iconBg: "#accbe1",
        date: "Dec 2024 – Feb 2025",
        points: [
            "At NUSEUM, I wasn't just organizing data — I was making sure an AI docent always had the right answers ready at its fingertips.",
            "Wrote Python scripts to automate data collection and standardization, improving database integrity and accessibility.",
            "Designed and optimized database structures to enhance system performance and scalability.",
            "Collaborated with a cross-national team to synchronize database updates and maintain data consistency."
        ],
    },
    {
        title: "Full-Stack Developer Intern",
        company_name: "JumBox",
        icon: hero,
        iconBg: "#fbc3bc",
        date: "Oct 2020 – Jun 2021",
        points: [
            "Developed a mini-program for university Stress Relief Week using Vue.js (frontend) and Java Spring Boot (backend).",
            "Implemented Canvas.js API features, resulting in over 3,000 concurrent users during event week.",
            "Built RESTful APIs for CRUD operations and ensured high-quality releases through unit and system testing.",
            "Coordinated closely with UI/UX designers and product teams in an Agile environment."
        ],
    },
    {
        title: "Motel Receptionist (Part-Time)",
        company_name: "Siesta Motel",
        icon: siesta,
        iconBg: "#b7e4c7",
        date: "Sep 2023 - Current",
        points: [
            "Managing daily operations, including check-ins, check-outs, and room assignments.",
            "Providing exceptional customer service to guests, ensuring a comfortable and welcoming environment.",
            "Working with Work and Income New Zealand to process government emergency accommodation claims."
        ],
    },
    {
        title: "Python Tutor (Volunteer)",
        company_name: "Teach Girls Coding Program ",
        icon: hero,
        iconBg: "#b7e4c7",
        date: "Sep 2021 – Mar 2022",
        points: [
            "Mentored over 30 women from diverse industries, helping them start their journey into Python programming.",
            "Delivered personalized coding lessons, tailored to different backgrounds and learning paces.",
            "Created instructional materials and hands-on exercises to reinforce learning and build confidence."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Chenxue3',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/xueshan-chen-48a0b82ba/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AI for Good Hackathon - InnoveLeaf',
        description: 'Led a team at Google\'s "AI for Good" hackathon to design an AI-powered platform that generates personalized storybooks for individuals with autism. Focused on template design and frontend development, delivering a highly customizable and inclusive user experience. Ranked in the Top 10 finalists.',
        link: 'https://github.com/LinjingSUN/InnovLeaf/tree/dev-front-end',
        videoUrl: 'https://youtu.be/43oBTdXDoR0',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'GenGPT-X',
        description: 'Developed a web application using Java, Spring Boot, JavaScript, Vue, and MySQL to address the lack of user-friendly Goal-Plan-Tree generators for agent research. Improved the generator structure and applied it to real-world scenarios, helping researchers simulate decision-making processes with significantly less coding effort.',
        link: 'https://github.com/Chenxue3/gen-gpt-x',
        videoUrl: 'https://youtu.be/i_ZFhoxsFcM',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Stress Relief Week Mini-Program',
        description: 'As a full-stack development intern at a startup, developed a mental health awareness mini-program using Vue.js and Java Spring Boot. Created interactive personalized posters via Canvas.js API, leading to over 3,000 alumni engaging online simultaneously during the launch week.',
        videoUrl: 'https://youtube.com/shorts/YnzerL91iBM?feature=share',
        
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Speaking Events Daily',
        description: 'The project fetches and parses event information about "Speaking Group" events, which always full, then sends a daily email notification with the details to specified recipients. The script is fully automated and configured to run twice daily using GitHub Actions.',
        link: 'https://github.com/Chenxue3/speaking-events-daily',
    },
    
];