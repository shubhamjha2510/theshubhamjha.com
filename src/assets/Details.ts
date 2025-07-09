import sseMin from "@/assets/icons/sse.min.webp";
import sse from "@/assets/icons/sse.webp";
import srmMin from "@/assets/icons/srm.min.webp";
import srm from "@/assets/icons/srm.webp";
import maha from "@/assets/icons/maha.webp";
import mahaMin from "@/assets/icons/maha.min.webp";
import skanskaMin from "@/assets/icons/skanska.min.webp";
import skanska from "@/assets/icons/skanska.webp";
import insdag from "@/assets/icons/insdag.webp";
import insdagMin from "@/assets/icons/insdag.webp";



const details = {
  name: {
    first: "Shubham",
    last: "Jha",
    nickname: "शुभ",
  },
  title: "Structural Engineer",
  biography: "Skilled **Structural engineer** with expertise in the design and analysis of **reinforced concrete, steel, and composite structures.** Delivers safe, efficient, and innovative solutions across **residential, commercial, and infrastructure projects.** Adapt at solving complex structural challenges and collaborating with architects, contractors, and consultants. Strong grip on **manual structural design** and practical engineering methods.",
  Education: [
    {
      school: "SRM Institute of Science & Technology",
      url: "https://www.srmist.edu.in/",
      icon: srm,
      iconMin: srmMin,
      location: "Chennai, TamilNadu",
      degree: "Master's degree in Civil Engineering",
      major: "(GPA-9.43)",
      start: "Jun 2023",
      end: "May 2025",
    },
    {
      school: "Saveetha School of Engineering",
      url: "https://saveetha.ac.in/",
      icon: sse,
      iconMin: sseMin,
      location: "Chennai, TamilNadu",
      degree: "Bachelor's degree in Civil Engineering",
      major: "(GPA-7.4)",
      start: "Jun 2017",
      end: "Aug 2021",
    },
    {
      school: "Brijlal Biyani Science College",
      url: "",
      icon: maha,
      iconMin: mahaMin,
      location: "Amravati, Maharashtra",
      degree: "Maharashtra State Board ",
      major: "Higher Secondary Certificate - 12th",
      start: "Apr 2015",
      end: "Mar 2017",
    },
    {
      school: "Takhatmal English High School",
      url: "",
      icon: maha,
      iconMin: mahaMin,
      location: "Amravati, Maharashtra",
      degree: "Maharashtra State Board ",
      major: "Secondary School Certificate - 10th",
      start: "Mar 2014",
      end: "Mar 2015",
    },
  ],
  Experience: [
     //add expiriance here shubham
    {
      company: "Skanska India Private Limited",
      url: "",
      icon: skanska,
      iconMin: skanskaMin,
      location: "Mumbai, Maharashtra",
      contract: "Internship",
      position: "Site engineer",
      start: "Jun 2021",
      end: "Nov 2021",
      description: [
        "Structural analysis of commercial and residential buildings, ensuring compliance with safety regulations and project specifications.",
        "Collaborated with architects and contractors to develop innovative solutions, which improved structural integrity while cutting costs by 10%.",
        "Implemented advanced modeling software, which enhanced our team's efficiency and reduced design errors.",
        "Conducted site inspections and assessments, ensuring that construction adhered to engineering standards, ultimately increasing client satisfaction.",
      ],
      skills: [
        "Site Inspections",
        "Safety Compliance",
        "RCC Design",
        "Structural Analysis",
        
      ],
    },
  ],
   Certification: [
  {
    company: "INSDAG",
    url: "",
    icon: insdag,
    iconMin: insdagMin,
    location: "Mumbai, Maharashtra",
    contract: "Internship",
    position: "Site Engineer",
    pdf: "https://files.theshubhamjha.com/download.php?file=Insdag.pdf",
    description: [
      "Structural analysis of commercial and residential buildings, ensuring compliance with safety regulations and project specifications.",
      "Collaborated with architects and contractors to develop innovative solutions, which improved structural integrity while cutting costs by 10%.",
      "Implemented advanced modeling software, which enhanced our team's efficiency and reduced design errors.",
      "Conducted site inspections and assessments, ensuring that construction adhered to engineering standards, ultimately increasing client satisfaction.",
    ],
    skills: ["Site Inspections", "Safety Compliance", "RCC Design", "Structural Analysis"],
  },
],
  languages: [
    {
      name: "English",
      level: "C2",
    },
    {
      name: "Hindi",
      level: "C2",
    },
    {
      name: "Marathi",
      level: "C2",
    },
    {
      name: "Telugu",
      level: "B1",
    },
    {
      name: "Tamil",
      level: "A1",
    },
  ],
  contact: {
    location: "Amravati, Maharashtra",
    email: "Shubhamjha2510@gmail.com",
    phone: "+91 70385 21801",
    website: "https://www.theshubhamjha.com",
    linkedin: "https://www.linkedin.com/in/shubh2510/",
    github: "",
    researchgate: "https://www.researchgate.net/profile/Shubham-Jha-26",
    gitlab: "",
    RCC: "",
  },
  projects: [
    {
      name: "Fire Resistance Analysis of Hybrid Rebar RC Beams",
      image: srm,
      imageMin: srmMin,
      duration: "Feb 2024 – May 2024",
      description:
        "This research-focused project analyzes the flexural behavior of RC beams reinforced with hybrid GFRP-steel rebars and fiber blends (steel & polypropylene). It simulates fire exposure conditions to assess structural performance under extreme temperature variations.",
      tech: [
        "ANSYS",
        "ETABS",
        "AutoCAD",
        "MATLAB",
        "Hybrid Rebar Design",
        "Finite Element Analysis",
      ],
      link: "",
    },
    {
      name: "Skanska India Private Limited",
      image: skanska,
      imageMin: skanskaMin,
      duration: "Jun 2021 – Nov 2021",
      description:
        "Designed sustainable grasscrete-based pavement units aimed at reducing urban stress and enhancing psychological well-being. Integrated material testing and behavioral analysis under service conditions.",
      tech: ["AutoCAD", "SketchUp", "Sustainable Design", "Grasscrete", "Research"],
      link: "",
    },
  ],
};



export default details;
