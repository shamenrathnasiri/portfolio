import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const DEV_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes dv-shimmer {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes dv-pulse-dot {
    0%,100% { opacity:1;  transform:scale(1);    box-shadow:0 0 0 0   rgba(196,83,6,0.55); }
    50%      { opacity:.7; transform:scale(1.18); box-shadow:0 0 0 7px rgba(196,83,6,0);    }
  }
  @keyframes dv-orbit {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes dv-rise {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes dv-card-in {
    from { opacity:0; transform:translateY(28px) scale(0.97); }
    to   { opacity:1; transform:translateY(0)    scale(1);    }
  }
  @keyframes dv-bounce-dot {
    0%,100% { transform:translateY(0);    }
    50%      { transform:translateY(-6px); }
  }
  @keyframes dv-glow-pulse {
    0%,100% { opacity:0.55; }
    50%      { opacity:1;    }
  }
  @keyframes dv-divider-grow {
    from { width:0; }
    to   { width:100%; }
  }

  .dv-root { font-family:'DM Sans',sans-serif; }

  /* page bg */
  .dv-page {
    min-height:100vh; position:relative; overflow:hidden;
    background:linear-gradient(160deg,
      #330A05 0%, #550F05 20%, #761305 42%, #550F05 68%, #330A05 100%);
  }

  /* grid overlay */
  .dv-grid {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(196,83,6,0.07) 1px,transparent 1px),
      linear-gradient(90deg,rgba(196,83,6,0.05) 1px,transparent 1px);
    background-size:52px 52px;
    mask-image:radial-gradient(ellipse 90% 80% at 50% 30%, black 0%, transparent 75%);
  }

  /* bloom glows */
  .dv-bloom {
    position:absolute; border-radius:50%; pointer-events:none;
    filter:blur(90px);
    animation:dv-glow-pulse 5s ease-in-out infinite;
  }

  /* orbit ring */
  .dv-ring {
    position:absolute; border-radius:50%; pointer-events:none;
    border:1px dashed rgba(196,83,6,0.09);
    animation:dv-orbit 70s linear infinite;
  }

  /* heading shimmer */
  .dv-heading-grad {
    background:linear-gradient(90deg,#f5e6cc 0%,#f0c070 30%,#C45306 55%,#f0c070 80%,#f5e6cc 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:dv-shimmer 5s linear infinite;
  }

  /* back button */
  .dv-back-btn {
    display:inline-flex; align-items:center; gap:8px;
    padding:10px 22px; border-radius:999px;
    background:linear-gradient(135deg,rgba(118,19,5,0.55),rgba(85,15,5,0.70));
    border:1px solid rgba(196,83,6,0.35);
    color:rgba(245,230,204,0.80);
    font-size:0.88rem; font-weight:600; letter-spacing:0.03em;
    text-decoration:none;
    box-shadow:0 4px 16px rgba(51,10,5,0.50);
    transition:background 0.25s, border-color 0.25s, color 0.25s, transform 0.22s, box-shadow 0.25s;
  }
  .dv-back-btn:hover {
    background:linear-gradient(135deg,rgba(196,83,6,0.35),rgba(118,19,5,0.60));
    border-color:rgba(196,83,6,0.60);
    color:#f0c070;
    transform:translateY(-2px);
    box-shadow:0 8px 24px rgba(51,10,5,0.60);
  }

  /* ornament */
  .dv-orn { display:flex; align-items:center; justify-content:center; gap:10px; }
  .dv-orn-line { width:44px; height:1px; background:linear-gradient(90deg,transparent,#C45306,transparent); }
  .dv-orn-gem  { width:6px; height:6px; border:1.5px solid #C45306; transform:rotate(45deg); flex-shrink:0; }
  .dv-orn-dot  { width:5px; height:5px; border-radius:50%; background:#C45306; flex-shrink:0;
    animation:dv-pulse-dot 2.8s ease-in-out infinite; }

  /* badge pill */
  .dv-badge {
    display:inline-flex; align-items:center; gap:7px;
    padding:5px 16px; border-radius:999px;
    font-size:0.68rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;
    background:rgba(196,83,6,0.12); border:1px solid rgba(196,83,6,0.38);
    color:rgba(240,192,112,0.80);
  }

  /* section heading row */
  .dv-section-row {
    display:flex; align-items:center; gap:14px; margin-bottom:1.75rem;
  }
  .dv-section-icon {
    width:46px; height:46px; border-radius:12px; flex-shrink:0;
    background:linear-gradient(135deg,#761305,#C45306);
    border:1px solid rgba(196,83,6,0.35);
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 4px 14px rgba(51,10,5,0.45);
    font-size:1.3rem;
  }
  .dv-section-title {
    font-family:'Playfair Display',serif;
    font-size:clamp(1.3rem,2.5vw,1.75rem); font-weight:700;
  }
  .dv-section-divider {
    flex:1; height:1px;
    background:linear-gradient(90deg,rgba(196,83,6,0.45),transparent);
  }

  /* ── Project Card ── */
  .dv-card {
    position:relative;
    background:linear-gradient(145deg,rgba(85,15,5,0.82),rgba(51,10,5,0.92));
    border:1px solid rgba(196,83,6,0.22);
    border-radius:18px;
    backdrop-filter:blur(18px);
    box-shadow:0 12px 40px rgba(51,10,5,0.60), inset 0 1px 0 rgba(240,192,112,0.05);
    overflow:hidden;
    display:flex; flex-direction:column; height:100%;
    transition:border-color 0.32s, box-shadow 0.32s, transform 0.32s;
    animation:dv-card-in 0.65s cubic-bezier(0.22,1,0.36,1) both;
  }
  .dv-card:hover {
    border-color:rgba(196,83,6,0.52);
    box-shadow:0 20px 56px rgba(51,10,5,0.72), 0 0 0 1px rgba(196,83,6,0.18);
    transform:translateY(-5px) scale(1.015);
  }

  /* card shimmer bar */
  .dv-card-bar {
    height:2px;
    background:linear-gradient(90deg,#761305,#C45306,#f0c070,#C45306,#761305);
    background-size:200% auto;
    animation:dv-shimmer 5s linear infinite;
  }

  /* corner arcs */
  .dv-corner-tr {
    position:absolute; top:0; right:0;
    width:80px; height:80px;
    background:linear-gradient(to bottom left,rgba(196,83,6,0.16),transparent);
    border-radius:0 18px 0 80px;
    opacity:0; transition:opacity 0.35s; pointer-events:none;
  }
  .dv-card:hover .dv-corner-tr { opacity:1; }
  .dv-corner-bl {
    position:absolute; bottom:0; left:0;
    width:80px; height:80px;
    background:linear-gradient(to top right,rgba(196,83,6,0.12),transparent);
    border-radius:0 80px 0 18px;
    opacity:0; transition:opacity 0.35s; pointer-events:none;
  }
  .dv-card:hover .dv-corner-bl { opacity:1; }

  /* type badge */
  .dv-type-badge {
    display:inline-flex; align-items:center; gap:5px;
    padding:4px 12px; border-radius:999px;
    font-size:0.68rem; font-weight:700; letter-spacing:0.10em; text-transform:uppercase;
  }

  /* divider grow line */
  .dv-grow-line {
    height:2px; border-radius:999px;
    background:linear-gradient(90deg,#C45306,transparent);
    width:52px;
    transition:width 0.5s cubic-bezier(0.22,1,0.36,1);
  }
  .dv-card:hover .dv-grow-line { width:100%; }

  /* tech tag */
  .dv-tag {
    display:inline-block;
    padding:4px 11px; border-radius:7px;
    font-size:0.72rem; font-weight:600;
    background:rgba(118,19,5,0.40);
    border:1px solid rgba(196,83,6,0.22);
    color:rgba(245,230,204,0.72);
    transition:background 0.22s,border-color 0.22s,color 0.22s,transform 0.22s;
  }
  .dv-tag:hover {
    background:rgba(196,83,6,0.22);
    border-color:rgba(196,83,6,0.50);
    color:#f0c070;
    transform:scale(1.05);
  }

  /* card footer */
  .dv-card-footer {
    background:linear-gradient(90deg,rgba(51,10,5,0.70),rgba(85,15,5,0.55));
    border-top:1px solid rgba(196,83,6,0.20);
    padding:14px 20px;
    display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;
    transition:border-color 0.28s;
  }
  .dv-card:hover .dv-card-footer { border-color:rgba(196,83,6,0.40); }

  /* footer link */
  .dv-footer-link {
    display:inline-flex; align-items:center; gap:6px;
    padding:7px 14px; border-radius:9px;
    font-size:0.80rem; font-weight:600;
    color:rgba(196,83,6,0.80);
    background:rgba(118,19,5,0.30);
    border:1px solid rgba(196,83,6,0.20);
    text-decoration:none;
    transition:color 0.22s,background 0.22s,border-color 0.22s,transform 0.22s;
  }
  .dv-footer-link:hover {
    color:#f0c070;
    background:rgba(196,83,6,0.20);
    border-color:rgba(196,83,6,0.48);
    transform:translateY(-1px);
  }

  /* footer type label */
  .dv-footer-label {
    font-size:0.68rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;
    color:rgba(196,83,6,0.60);
    padding:5px 11px; border-radius:7px;
    background:rgba(51,10,5,0.55);
    border:1px solid rgba(196,83,6,0.18);
    margin-left:auto;
  }

  @media (max-width: 640px) {
    .dv-section-divider { display:none; }
    .dv-section-row { align-items:flex-start; }
    .dv-card-footer { justify-content:flex-start; }
    .dv-footer-label { margin-left:0; }
  }

  /* bounce dots */
  .dv-bounce { animation:dv-bounce-dot ease-in-out infinite; }

  .dv-rise   { animation:dv-rise 0.7s ease both; }
  .dv-rise-2 { animation:dv-rise 0.7s ease 0.12s both; }
  .dv-rise-3 { animation:dv-rise 0.7s ease 0.22s both; }
`;

const projects = [
  {
    type:"system",
    title:"Inhouse Patient Management System",
    subtitle:"For Private Hospitals",
    description:"Designed and developed a comprehensive Patient Management System using React with Tailwind CSS, Flask, and MySQL. Features include full patient lifecycle tracking, history and treatment modules, digital signature approval, real-time chat between doctor and nurse, and role-based access control with a responsive UI.",
    tags:["React","Flask","MySQL","Tailwind CSS"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/Inhouse-patient-management-system-for-private-hospitals",
    backendGithubUrl:"",
  },
  {
    type:"system",
    title:"Booking Website for Hotel",
    subtitle:"Cabana Haven",
    description:"Cabana Haven is a full-stack hotel booking platform with a modern React + TypeScript frontend and a secure Laravel 12 REST API backend (PHP 8.2). The system enables users to browse rooms and manage reservations through a fast, responsive UI while the backend handles authentication with Laravel Sanctum, booking CRUD operations, validation, and database management using MySQL.",
    tags:["React","Laravel","MySQL"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/cabana-haven-design",
    backendGithubUrl:"https://github.com/shamenrathnasiri/cabana-haven-backend",
  },
  {
    type:"system",
    title:"Farm Management System",
    subtitle:"Agro Pulse",
    description:"Built a Farm Management System using React, Flask, MySQL, and Tailwind CSS to handle crops, expenses, income, and stock. Implemented CRUD operations, REST APIs, responsive frontend, and modular design for easy scalability.",
    tags:["React","Flask","MySQL","Tailwind CSS"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/Farm-Management-System",
    backendGithubUrl:"",
  },
  {
    type:"system",
    title:"Inventory & Order Management System",
    subtitle:"Inventory Master",
    description:"Developed a full-featured inventory and order management platform with Angular, ExpressJS, and MongoDB. Features include product categorization, live stock tracking, order handling, user authentication, and secure API integration.",
    tags:["Angular","ExpressJS","MongoDB"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/Inventory-Order-Management-System",
    backendGithubUrl:"",
  },
  {
    type:"system",
    title:"Web Page for Graphic Design Freelancer",
    subtitle:"ABC Graphics",
    description:"ABC Beyond Creative is a modern creative agency and portfolio website built with Vite, React, and TypeScript. Features smooth routing, dynamic portfolio galleries, editable service descriptions stored in localStorage, and a polished UI using utility-first styling and reusable components.",
    tags:["React"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/Note-Master",
    backendGithubUrl:"",
    websiteUrl:"https://www.abcgraphics.lk",
  },
  {
    type:"system",
    title:"API for Expense Tracker",
    subtitle:"Expense Tracker",
    description:"A RESTful API for tracking expenses and incomes with a clean, extensible design. Implemented CRUD endpoints, validation, authentication, and persistence so it's easy to integrate with web or mobile frontends.",
    tags:["Node.JS","Prisma","MySQL"],
    frontendGithubUrl:"",
    backendGithubUrl:"https://github.com/shamenrathnasiri/API-expense-tracker",
  },
  {
    type:"web",
    title:"Hotel Website",
    subtitle:"Hotel Butterfly",
    description:"Designed and developed a responsive hotel website using React and Tailwind CSS. Includes room showcase, booking inquiry form, photo gallery, and location integration.",
    tags:["React","Tailwind CSS"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/hotel-website",
    backendGithubUrl:"",
  },
  {
    type:"web",
    title:"Pizza Shop Website",
    subtitle:"Pizza Delight",
    description:"Built an engaging pizza shop website with React and Tailwind CSS, featuring a product catalog, responsive layout, and interactive animations for an appealing user experience.",
    tags:["React","Tailwind CSS"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/Pizza-shop-website",
    backendGithubUrl:"",
  },
  {
    type:"web",
    title:"Cafe Shop Website",
    subtitle:"Cozy Bean Cafe",
    description:"Created a modern, minimal coffee shop landing page using Figma. Included interactive menus, contact section, and branding-focused visuals.",
    tags:["React","Tailwind CSS","MySQL","Flask"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/Cafe-shop-website",
    backendGithubUrl:"",
  },
  {
    type:"web",
    title:"Portfolio Website",
    subtitle:"My Portfolio",
    description:"Developed my personal portfolio using NextJS and Tailwind CSS to showcase projects, skills, and contact form. Deployed with Vercel.",
    tags:["NextJs","Tailwind CSS"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/protfolio",
    backendGithubUrl:"",
  },
  {
    type:"beginner",
    title:"Simple Calculator",
    subtitle:"Basic Arithmetic Operations",
    description:"A beginner-friendly calculator application built with Java that performs basic arithmetic operations like addition, subtraction, multiplication, and division with a clean interface.",
    tags:["Java"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/simple-calculator",
    backendGithubUrl:"",
  },
  {
    type:"beginner",
    title:"Sign In Page",
    subtitle:"User Authentication Form",
    description:"A responsive sign-in page with form validation, built using Java. Includes username and password fields with basic validation and a remember me checkbox.",
    tags:["Java"],
    frontendGithubUrl:"https://github.com/shamenrathnasiri/sign-in-sign-up-page",
    backendGithubUrl:"",
  },
  {
    type:"beginner",
    title:"To-Do App",
    subtitle:"Only API",
    description:"Create a TO-DO app API using Flask and test with Postman.",
    tags:["Flask","Postman"],
    frontendGithubUrl:"",
    backendGithubUrl:"https://github.com/shamenrathnasiri/To_Do-App",
  },
];

/* ── Section heading row ── */
function SectionHeading({ emoji, label, delay = '0s' }) {
  return (
    <div className="dv-section-row" style={{ animationDelay: delay }}>
      <div className="dv-section-icon">{emoji}</div>
      <h2 className="dv-section-title dv-heading-grad">{label}</h2>
      <div className="dv-section-divider" />
    </div>
  );
}

/* ── Type badge config ── */
const TYPE_CONFIG = {
  system:  { label:'🎯 System',   bg:'rgba(196,83,6,0.18)',  border:'rgba(196,83,6,0.40)',  color:'#f0c070',                footer:'Full-stack' },
  web:     { label:'🌐 Web',      bg:'rgba(157,51,6,0.18)',  border:'rgba(157,51,6,0.40)',  color:'rgba(240,192,112,0.80)', footer:'Frontend'   },
  beginner:{ label:'✨ Beginner', bg:'rgba(118,19,5,0.25)',  border:'rgba(196,83,6,0.30)',  color:'rgba(240,192,112,0.65)', footer:'Beginner'   },
};

function ProjectCard({ project, index }) {
  const frontendUrl = project.frontendGithubUrl?.trim();
  const backendUrl  = project.backendGithubUrl?.trim();
  const websiteUrl  = project.websiteUrl?.trim();
  const hasFrontend = Boolean(frontendUrl);
  const hasBackend  = Boolean(backendUrl);
  const hasWebsite  = Boolean(websiteUrl);
  const cfg         = TYPE_CONFIG[project.type] || TYPE_CONFIG.system;

  return (
    <div className="dv-card" style={{ animationDelay:`${index * 0.08}s` }}>
      <div className="dv-card-bar" />
      <div className="dv-corner-tr" />
      <div className="dv-corner-bl" />

      <div style={{ padding:'1.5rem', display:'flex', flexDirection:'column', flexGrow:1 }}>
        {/* type badge */}
        <span className="dv-type-badge" style={{ background:cfg.bg, border:`1px solid ${cfg.border}`, color:cfg.color, marginBottom:12, alignSelf:'flex-start' }}>
          {cfg.label}
        </span>

        {/* title */}
        <h2 style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:'clamp(1.05rem,2vw,1.25rem)', fontWeight:700,
          color:'#f5e6cc', marginBottom:4, lineHeight:1.3,
          transition:'color 0.25s',
        }}
          className="dv-card-title-el"
        >
          {project.title}
        </h2>
        <h3 style={{ fontSize:'0.82rem', fontWeight:600, color:'#C45306', marginBottom:14 }}>
          {project.subtitle}
        </h3>

        {/* animated grow divider */}
        <div className="dv-grow-line" style={{ marginBottom:14 }} />

        {/* description */}
        <p style={{ color:'rgba(245,230,204,0.62)', fontSize:'0.86rem', lineHeight:1.75, flexGrow:1, marginBottom:16 }}>
          {project.description}
        </p>

        {/* tech tags */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:4 }}>
          {project.tags.map((tag, i) => (
            <span key={i} className="dv-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="dv-card-footer">
        <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
          {hasWebsite && (
            <Link href={websiteUrl} target="_blank" rel="noopener noreferrer" className="dv-footer-link">
              <FaExternalLinkAlt style={{ width:12, height:12 }} /> Live
            </Link>
          )}
          {hasFrontend && (
            <Link href={frontendUrl} target="_blank" rel="noopener noreferrer" className="dv-footer-link">
              <FaGithub style={{ width:13, height:13 }} />
              {hasBackend ? 'Frontend' : 'Code'}
            </Link>
          )}
          {hasBackend && (
            <Link href={backendUrl} target="_blank" rel="noopener noreferrer" className="dv-footer-link">
              <FaGithub style={{ width:13, height:13 }} />
              {hasFrontend ? 'Backend' : 'Code'}
            </Link>
          )}
        </div>
        <span className="dv-footer-label">{cfg.footer}</span>
      </div>
    </div>
  );
}

export default function DevelopmentPage() {
  const systemProjects   = projects.filter(p => p.type === 'system');
  const webProjects      = projects.filter(p => p.type === 'web');
  const beginnerProjects = projects.filter(p => p.type === 'beginner');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DEV_STYLES }} />

      <div className="dv-root dv-page px-4 py-10 sm:px-8">

        {/* bg decorations */}
        <div className="dv-grid" aria-hidden="true" />
        <div className="dv-bloom" aria-hidden="true" style={{ top:'10%', left:'5%',  width:300, height:300, background:'rgba(196,83,6,0.16)', animationDelay:'0s'   }} />
        <div className="dv-bloom" aria-hidden="true" style={{ bottom:'8%', right:'4%', width:360, height:360, background:'rgba(157,51,6,0.13)', animationDelay:'2s'   }} />
        <div className="dv-bloom" aria-hidden="true" style={{ top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:540, height:540, background:'rgba(51,10,5,0.45)', animationDelay:'1s' }} />
        <div className="dv-ring" style={{ top:'50%', left:'50%', width:700, height:700 }} aria-hidden="true" />

        <div style={{ maxWidth:1152, margin:'0 auto', position:'relative', zIndex:10 }}>

          {/* back button */}
          <div className="dv-rise" style={{ marginBottom:32 }}>
            <Link href="/#project" className="dv-back-btn">
              <FaArrowLeft style={{ width:13, height:13 }} />
              Back to Projects
            </Link>
          </div>

          {/* ── Page Header ── */}
          <div className="dv-rise-2" style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span className="dv-badge" style={{ marginBottom:18, display:'inline-flex' }}>
              <span style={{ width:5, height:5, borderRadius:'50%', background:'#C45306' }} />
              Portfolio
            </span>

            <h1 style={{
              fontFamily:"'Playfair Display',serif",
              fontSize:'clamp(2.2rem,5.5vw,4rem)', fontWeight:900, lineHeight:1.1,
              marginBottom:18,
            }}>
              <span className="dv-heading-grad">Development Projects</span>
            </h1>

            <div className="dv-orn" style={{ marginBottom:16 }}>
              <div className="dv-orn-line" />
              <div className="dv-orn-gem" />
              <div className="dv-orn-dot" />
              <div className="dv-orn-gem" />
              <div className="dv-orn-line" />
            </div>

            <p style={{ color:'rgba(245,230,204,0.55)', fontSize:'clamp(0.88rem,2vw,1.02rem)', lineHeight:1.8, maxWidth:560, margin:'0 auto 20px' }}>
              A collection of my{' '}
              <span style={{ color:'#C45306', fontWeight:600 }}>innovative</span>
              {' '}development projects from beginner to{' '}
              <span style={{ color:'#f0c070', fontWeight:600 }}>advanced</span> levels.
            </p>

            {/* bounce dots */}
            <div style={{ display:'flex', justifyContent:'center', gap:8 }}>
              {[0, 0.12, 0.24].map((d, i) => (
                <div key={i} className="dv-bounce" style={{
                  width:7, height:7, borderRadius:'50%',
                  background:'#C45306',
                  animationDuration:'1.2s',
                  animationDelay:`${d}s`,
                }} />
              ))}
            </div>
          </div>

          {/* ── System Development ── */}
          <div className="dv-rise-3" style={{ marginBottom:'3.5rem' }}>
            <SectionHeading emoji="🚀" label="System Development" delay="0.1s" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" style={{ gap:22 }}>
              {systemProjects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
            </div>
          </div>

          {/* ── Web Development ── */}
          <div style={{ marginBottom:'3.5rem', animation:'dv-rise 0.7s ease 0.18s both' }}>
            <SectionHeading emoji="💻" label="Web Development" delay="0.18s" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" style={{ gap:22 }}>
              {webProjects.map((p, i) => <ProjectCard key={i} project={p} index={i + systemProjects.length} />)}
            </div>
          </div>

          {/* ── Beginner Projects ── */}
          <div style={{ animation:'dv-rise 0.7s ease 0.26s both' }}>
            <SectionHeading emoji="⭐" label="Beginner Projects" delay="0.26s" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" style={{ gap:22 }}>
              {beginnerProjects.map((p, i) => <ProjectCard key={i} project={p} index={i + systemProjects.length + webProjects.length} />)}
            </div>
          </div>

          {/* bottom ornament */}
          <div className="dv-orn" style={{ marginTop:'4rem', opacity:0.40 }}>
            <div className="dv-orn-line" style={{ width:60 }} />
            <div className="dv-orn-gem" />
            <div className="dv-orn-dot" />
            <div className="dv-orn-gem" />
            <div className="dv-orn-line" style={{ width:60 }} />
          </div>
        </div>
      </div>
    </>
  );
}