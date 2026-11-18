"use client";

import { useState } from "react";
import { motion } from "motion/react";

type Language = "ar" | "en";

const copy = {
  ar: {
    nav: ["نبذة", "المهارات", "الأتمتة", "الشهادات", "المشاريع"],
    eyebrow: "تكنولوجيا المعلومات والاتصالات · الذكاء الاصطناعي · الأتمتة",
    titleA: "أفهم التقنية،",
    titleB: "وأحوّلها إلى حلول.",
    intro:
      "مصطفى عادل — طالب تكنولوجيا المعلومات والاتصالات، مهتم بالذكاء الاصطناعي وأتمتة العمليات وبناء حلول تقنية عملية.",
    explore: "اكتشف ملفي",
    projectsCta: "شاهد المشاريع",
    location: "واسط، العراق",
    status: "أتعلم · أجرّب · أبني",
    visualLabel: "من الفكرة إلى النتيجة",
    visualSub: "تدفّق عمل ذكي",
    flow: ["مدخلات", "معالجة", "أتمتة", "نتيجة"],
    aboutTag: "01 / نبذة",
    aboutTitle: "تقنية بغاية واضحة",
    aboutText:
      "أدرس تكنولوجيا المعلومات والاتصالات في الجامعة التقنية الوسطى – كلية البوليتكنك الهندسية. يجذبني الجانب العملي من التقنية: فهم المشكلة، اختيار الأدوات المناسبة، ثم بناء حل يساعد على إنجاز العمل بصورة أفضل.",
    educationLabel: "المسار الأكاديمي",
    education: "الجامعة التقنية الوسطى",
    college: "كلية البوليتكنك الهندسية · قسم تكنولوجيا المعلومات والاتصالات",
    stage: "المرحلة الثانية",
    skillTag: "02 / المهارات",
    skillTitle: "مجالات أعمل على تطويرها",
    skillIntro:
      "مجالات تقنية أمتلك فيها أساسيات وخبرة تطبيقية متفاوتة، وأطوّرها بالتعلّم والممارسة.",
    skills: [
      { title: "البرمجة بمساعدة الذكاء الاصطناعي", desc: "أساسيات البرمجة، والاستفادة من أدوات الذكاء الاصطناعي في فهم الأكواد وكتابتها وتطويرها وتصحيحها." },
      { title: "الذكاء الاصطناعي", desc: "توظيف أدوات الذكاء الاصطناعي في التعلّم، والبحث، وتطوير الحلول التقنية." },
      { title: "الشبكات", desc: "أساسيات شبكات الحاسوب ومفاهيم الاتصال وإعدادات أجهزة الشبكات." },
      { title: "أجهزة الحاسوب", desc: "مكونات الحاسوب وتجميعها وصيانتها وتشخيص المشكلات الفنية." },
      { title: "تطبيقات الحاسوب", desc: "التعامل مع تطبيقات الحاسوب المكتبية والإنتاجية ومختلف البرامج المستخدمة في العمل." },
      { title: "أتمتة العمليات", desc: "بناء تدفقات عمل آلية وربط الخدمات والأدوات باستخدام n8n." },
    ],
    automationTag: "03 / الأتمتة",
    automationTitle: "من خطوات متفرقة إلى تدفّق واحد",
    automationText:
      "أهتم بتقليل الأعمال المتكررة وربط الأدوات ببعضها، بحيث تنتقل البيانات بين الخطوات بوضوح وتقلّ المعالجة اليدوية.",
    automationCaption: "تصوّر مبسّط لتدفّق أتمتة",
    automationNodes: [
      { name: "بداية", detail: "حدث أو طلب" },
      { name: "معالجة", detail: "بيانات وقواعد" },
      { name: "n8n", detail: "ربط وأتمتة" },
      { name: "مخرجات", detail: "نتيجة وإشعار" },
    ],
    certTag: "04 / الشهادات",
    certTitle: "الشهادات والمؤهلات",
    certs: [
      { title: "دبلوم تكنولوجيا المعلومات والاتصالات", issuer: "ICT · دبلوم" },
      { title: "دبلوم الذكاء الاصطناعي", issuer: "جامعة CIS اللبنانية" },
      { title: "شهادة في الذكاء الاصطناعي", issuer: "Cisco" },
    ],
    pathTag: "05 / التدريب والمشاركات",
    pathTitle: "تعلّم يتجاوز المحاضرة",
    trainingTitle: "التدريب العملي",
    trainingOrg: "وزارة التعليم العالي والبحث العلمي",
    trainingText: "أساسيات شبكات الحاسوب",
    trainingDuration: "شهران",
    eventsTitle: "الدورات والندوات",
    eventsText:
      "المشاركة في العديد من الدورات التطويرية والندوات وورش العمل المتخصصة في الذكاء الاصطناعي وتكنولوجيا المعلومات والمجالات التقنية.",
    projectsTag: "06 / تطبيقات ومشاريع",
    projectsTitle: "أفكار تحوّلت إلى تجارب عملية",
    projectsIntro:
      "نماذج من المجالات والمشاريع التقنية التي عملت عليها أو شاركت في تطويرها.",
    projects: [
      { number: "01", title: "أتمتة استفسارات متجر", desc: "سير عمل يربط رسائل العملاء ببيانات المخزون ومعلومات المنتجات لتسهيل الردود.", tags: "n8n · Google Sheets · AI" },
      { number: "02", title: "استخراج درجات بالـ OCR", desc: "تجربة لاستخراج النصوص والدرجات من أوراق الامتحانات وتنظيم النتائج رقمياً.", tags: "OCR · Google Vision · Sheets" },
      { number: "03", title: "منصة تعليمية", desc: "المساهمة في تطوير منصة لإدارة المحتوى التعليمي وتسجيل دخول الطلبة والمدرسين.", tags: "Next.js · Supabase" },
    ],
    personalTag: "07 / أسلوب العمل",
    personalTitle: "كيف أتعامل مع التحديات؟",
    personalItems: [
      "تشخيص المشكلات الفنية ومعالجتها لتقليل تأخير الأعمال.",
      "تعلّم ذاتي مستمر ومتابعة التقنيات الحديثة.",
      "توظيف الذكاء الاصطناعي لتسريع الفهم والوصول إلى الحلول.",
    ],
    contactTag: "08 / تواصل",
    contactTitle: "لنتواصل حول فكرة تقنية",
    contactText:
      "للاستفسارات أو مناقشة فكرة أو فرصة تعاون تقنية، يمكنكم التواصل معي عبر القنوات التالية.",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "رقم الهاتف",
    linkedinLabel: "حساب LinkedIn",
    linkedinAction: "زيارة الملف الشخصي",
    footer: "صُمّم ليعكس اهتمامي بالتقنية والأتمتة.",
    top: "العودة للأعلى",
  },
  en: {
    nav: ["About", "Skills", "Automation", "Credentials", "Projects"],
    eyebrow: "INFORMATION & COMMUNICATION TECHNOLOGY · AI · AUTOMATION",
    titleA: "I understand technology,",
    titleB: "then turn it into solutions.",
    intro:
      "Mustafa Adil — ICT student interested in artificial intelligence, workflow automation, and practical technology solutions.",
    explore: "Explore profile",
    projectsCta: "View projects",
    location: "Wasit, Iraq",
    status: "Learn · Explore · Build",
    visualLabel: "From idea to outcome",
    visualSub: "Intelligent workflow",
    flow: ["INPUT", "PROCESS", "AUTOMATE", "OUTPUT"],
    aboutTag: "01 / ABOUT",
    aboutTitle: "Technology with a purpose",
    aboutText:
      "I study Information and Communications Technology at Middle Technical University – Engineering Polytechnic College. I am drawn to the practical side of technology: understanding a problem, choosing suitable tools, and building a solution that helps work move forward.",
    educationLabel: "Academic path",
    education: "Middle Technical University",
    college: "Engineering Polytechnic College · Information & Communications Technology",
    stage: "Second year",
    skillTag: "02 / SKILLS",
    skillTitle: "Areas I keep developing",
    skillIntro:
      "Technical areas where I have foundational knowledge and varying levels of hands-on experience, strengthened through practice and learning.",
    skills: [
      { title: "AI-assisted programming", desc: "Programming fundamentals and using AI tools to understand, write, improve, and debug code." },
      { title: "Artificial intelligence", desc: "Using AI tools for learning, research, and developing technical solutions." },
      { title: "Networking", desc: "Computer networking fundamentals, connectivity concepts, and network device configuration." },
      { title: "Computer hardware", desc: "Computer components, assembly, maintenance, and troubleshooting." },
      { title: "Computer applications", desc: "Working with office, productivity, and commonly used computer applications." },
      { title: "Workflow automation", desc: "Building automated workflows and connecting tools and services with n8n." },
    ],
    automationTag: "03 / AUTOMATION",
    automationTitle: "From separate steps to one workflow",
    automationText:
      "I am interested in reducing repetitive work and connecting tools, so information moves clearly between steps with less manual handling.",
    automationCaption: "A simplified automation workflow",
    automationNodes: [
      { name: "Trigger", detail: "Event or request" },
      { name: "Process", detail: "Data and rules" },
      { name: "n8n", detail: "Connect and automate" },
      { name: "Outcome", detail: "Result and notice" },
    ],
    certTag: "04 / CREDENTIALS",
    certTitle: "Certificates & Diplomas",
    certs: [
      { title: "Information & Communications Technology Diploma", issuer: "ICT · Diploma" },
      { title: "Artificial Intelligence Diploma", issuer: "CIS University, Lebanon" },
      { title: "Artificial Intelligence Certificate", issuer: "Cisco" },
    ],
    pathTag: "05 / TRAINING & PARTICIPATION",
    pathTitle: "Learning beyond the classroom",
    trainingTitle: "Practical training",
    trainingOrg: "Ministry of Higher Education and Scientific Research",
    trainingText: "Computer Networking Fundamentals",
    trainingDuration: "Two months",
    eventsTitle: "Courses & seminars",
    eventsText:
      "Participation in various development courses, seminars, and workshops focused on AI, information technology, and technical fields.",
    projectsTag: "06 / WORK & PROJECTS",
    projectsTitle: "Ideas turned into practical experiments",
    projectsIntro:
      "Examples of technical areas and projects I have worked on or contributed to developing.",
    projects: [
      { number: "01", title: "Retail inquiry automation", desc: "A workflow connecting customer messages with stock data and product information to support responses.", tags: "n8n · Google Sheets · AI" },
      { number: "02", title: "OCR grade extraction", desc: "An experiment to extract text and grades from exam sheets and organize the results digitally.", tags: "OCR · Google Vision · Sheets" },
      { number: "03", title: "Educational platform", desc: "Contributing to a platform for learning content and student/teacher access management.", tags: "Next.js · Supabase" },
    ],
    personalTag: "07 / APPROACH",
    personalTitle: "How I approach challenges",
    personalItems: [
      "Diagnosing and resolving technical issues to reduce work delays.",
      "Continuous self-learning and keeping up with emerging technologies.",
      "Using AI to accelerate understanding and problem-solving.",
    ],
    contactTag: "08 / CONTACT",
    contactTitle: "Let’s talk about a technical idea",
    contactText:
      "For inquiries, technical ideas, or collaboration opportunities, you can reach me through the channels below.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    linkedinLabel: "LinkedIn profile",
    linkedinAction: "View profile",
    footer: "Designed to reflect my interest in technology and automation.",
    top: "Back to top",
  },
};

function NetworkArtwork({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <div className="artwork" aria-label={t.visualLabel}>
      <div className="artwork-topline">
        <span className="live-dot" />
        <span>{t.visualSub}</span>
        <span className="artwork-index">FLOW / 001</span>
      </div>
      <svg className="network-svg" viewBox="0 0 620 430" role="img" aria-label={t.visualLabel}>
        <defs>
          <linearGradient id="flowLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#9caf98" stopOpacity=".25" />
            <stop offset="50%" stopColor="#5f806c" stopOpacity=".8" />
            <stop offset="100%" stopColor="#c3ae83" stopOpacity=".4" />
          </linearGradient>
          <radialGradient id="coreFill">
            <stop offset="0%" stopColor="#d5e0d0" />
            <stop offset="100%" stopColor="#e9ede4" />
          </radialGradient>
        </defs>
        <g className="grid-dots">
          {Array.from({ length: 11 }).map((_, row) =>
            Array.from({ length: 15 }).map((__, col) => (
              <circle key={`${row}-${col}`} cx={30 + col * 40} cy={28 + row * 37} r="1.35" />
            )),
          )}
        </g>
        <g fill="none" stroke="url(#flowLine)" strokeWidth="1.8" strokeLinecap="round">
          <path className="flow-path path-a" d="M62 105 H168 Q190 105 190 127 V185 Q190 210 215 210 H285" />
          <path className="flow-path path-b" d="M65 325 H145 Q170 325 170 300 V255 Q170 230 195 230 H285" />
          <path className="flow-path path-c" d="M335 210 H405 Q430 210 430 185 V122 Q430 96 456 96 H555" />
          <path className="flow-path path-d" d="M335 230 H405 Q430 230 430 255 V308 Q430 333 455 333 H555" />
          <path d="M310 55 V145 M310 285 V375" strokeDasharray="3 8" opacity=".45" />
        </g>
        <g className="satellite-nodes">
          <circle cx="62" cy="105" r="6" /><circle cx="65" cy="325" r="6" />
          <circle cx="555" cy="96" r="6" /><circle cx="555" cy="333" r="6" />
          <circle cx="190" cy="105" r="3.5" /><circle cx="170" cy="300" r="3.5" />
          <circle cx="430" cy="122" r="3.5" /><circle cx="430" cy="308" r="3.5" />
        </g>
        <g className="core-orbit">
          <circle cx="310" cy="220" r="104" fill="none" stroke="#9caf98" strokeOpacity=".32" strokeDasharray="2 8" />
          <circle cx="310" cy="220" r="82" fill="none" stroke="#6c8974" strokeOpacity=".32" />
          <circle cx="310" cy="220" r="63" fill="url(#coreFill)" stroke="#819b83" strokeWidth="1.5" />
          <circle cx="310" cy="220" r="51" fill="none" stroke="#9caf98" strokeOpacity=".45" strokeDasharray="3 5" />
          <circle cx="310" cy="220" r="7" fill="#55745e" />
          <circle cx="310" cy="220" r="17" fill="none" stroke="#55745e" strokeOpacity=".25" />
        </g>
        <g className="orbit-points">
          <circle cx="310" cy="116" r="5" /><circle cx="414" cy="220" r="5" />
          <circle cx="310" cy="324" r="5" /><circle cx="206" cy="220" r="5" />
        </g>
        <g className="data-packets">
          <circle r="4"><animateMotion dur="5.5s" repeatCount="indefinite" path="M62 105 H168 Q190 105 190 127 V185 Q190 210 215 210 H285" /></circle>
          <circle r="4"><animateMotion dur="6.5s" repeatCount="indefinite" path="M65 325 H145 Q170 325 170 300 V255 Q170 230 195 230 H285" /></circle>
          <circle r="4"><animateMotion dur="5.8s" repeatCount="indefinite" path="M335 210 H405 Q430 210 430 185 V122 Q430 96 456 96 H555" /></circle>
          <circle r="4"><animateMotion dur="7s" repeatCount="indefinite" path="M335 230 H405 Q430 230 430 255 V308 Q430 333 455 333 H555" /></circle>
        </g>
      </svg>
      <div className="art-label label-input"><b>01</b><span>{t.flow[0]}</span></div>
      <div className="art-label label-process"><b>02</b><span>{t.flow[1]}</span></div>
      <div className="art-label label-output"><b>03</b><span>{t.flow[2]}</span></div>
      <div className="artwork-foot"><span>AI / ICT / AUTOMATION</span><span>CONNECTED SYSTEMS</span></div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("ar");
  const t = copy[language];
  const isArabic = language === "ar";

  function changeLanguage(next: Language) {
    setLanguage(next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }

  return (
    <main className={isArabic ? "site ar" : "site en"}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Mustafa Adil home">
          <span className="brand-mark">MA</span>
          <span className="brand-name">MUSTAFA <i>ADIL</i></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">{t.nav[0]}</a>
          <a href="#skills">{t.nav[1]}</a>
          <a href="#automation">{t.nav[2]}</a>
          <a href="#credentials">{t.nav[3]}</a>
          <a href="#projects">{t.nav[4]}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Choose language">
            <button className={language === "ar" ? "active" : ""} onClick={() => changeLanguage("ar")} type="button">عربي</button>
            <span />
            <button className={language === "en" ? "active" : ""} onClick={() => changeLanguage("en")} type="button">EN</button>
          </div>
          <a className="header-contact" href="#contact">{isArabic ? "تواصل" : "Contact"}<span>↗</span></a>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow-pill" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="eyebrow-line" />{t.eyebrow}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08 }}>
            {t.titleA}<br /><span>{t.titleB}</span>
          </motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .18 }}>{t.intro}</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .28 }}>
            <a className="button button-primary" href="#about">{t.explore}<span>↗</span></a>
            <a className="button button-quiet" href="#projects">{t.projectsCta}<span>⌄</span></a>
          </motion.div>
          <div className="hero-meta"><span><i className="tiny-pin" />{t.location}</span><span className="meta-divider" /><span>{t.status}</span></div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .12 }}>
          <NetworkArtwork language={language} />
          <div className="visual-note"><span className="note-icon">✳</span><span>{isArabic ? "أنظمة مترابطة، نتائج أوضح" : "Connected systems. Clearer outcomes."}</span></div>
        </motion.div>
        <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 08</span></div>
      </section>

      <section className="about-section section-wrap section-block" id="about">
        <div className="section-side-label">PROFILE / 01</div>
        <div className="about-layout">
          <SectionHeading eyebrow={t.aboutTag} title={t.aboutTitle} />
          <div className="about-content">
            <p className="about-text">{t.aboutText}</p>
            <div className="education-card">
              <div className="education-icon">⌂</div>
              <div className="education-copy"><span>{t.educationLabel}</span><strong>{t.education}</strong><p>{t.college}</p></div>
              <span className="stage-chip">{t.stage}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-wrap section-block" id="skills">
        <SectionHeading eyebrow={t.skillTag} title={t.skillTitle} intro={t.skillIntro} />
        <div className="skills-grid">
          {t.skills.map((skill, index) => (
            <motion.article className="skill-card" key={skill.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .5, delay: index * .06 }}>
              <span className="skill-number">0{index + 1}</span>
              <div className="skill-symbol">{["⌘", "✳", "⌁", "▤", "▦", "⤳"][index]}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <span className="card-rule" />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="automation-section section-wrap section-block" id="automation">
        <div className="automation-panel">
          <div className="automation-copy">
            <span className="section-eyebrow">{t.automationTag}</span>
            <h2>{t.automationTitle}</h2>
            <p>{t.automationText}</p>
            <div className="automation-footnote"><span className="mini-pulse" />{t.automationCaption}</div>
          </div>
          <div className="workflow-area">
            <div className="workflow-grid-bg" />
            <div className="workflow-line" />
            <div className="workflow-nodes">
              {t.automationNodes.map((node, index) => (
                <div className={`workflow-node node-${index + 1}`} key={node.name}>
                  <span className="node-index">0{index + 1}</span>
                  <span className="node-symbol">{["↳", "◇", "n8n", "✓"][index]}</span>
                  <strong>{node.name}</strong>
                  <small>{node.detail}</small>
                </div>
              ))}
            </div>
            <span className="workflow-caption">TRIGGER → PROCESS → AUTOMATE → RESULT</span>
          </div>
        </div>
      </section>

      <section className="credentials-section section-wrap section-block" id="credentials">
        <SectionHeading eyebrow={t.certTag} title={t.certTitle} />
        <div className="credentials-list">
          {t.certs.map((cert, index) => (
            <motion.div className="credential-row" key={cert.title} initial={{ opacity: 0, x: isArabic ? 16 : -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .45, delay: index * .08 }}>
              <span className="credential-index">0{index + 1}</span>
              <div className="credential-seal">✳</div>
              <strong>{cert.title}</strong>
              <span className="credential-issuer">{cert.issuer}</span>
              <span className="credential-arrow">↗</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="training-section section-wrap section-block">
        <SectionHeading eyebrow={t.pathTag} title={t.pathTitle} />
        <div className="training-grid">
          <article className="training-card training-main">
            <span className="training-kicker">{t.trainingTitle}</span>
            <div className="training-mark">وزارة</div>
            <h3>{t.trainingOrg}</h3>
            <p>{t.trainingText}</p>
            <span className="duration-chip">{t.trainingDuration}</span>
          </article>
          <article className="training-card events-card">
            <span className="training-kicker">LEARNING / COMMUNITY</span>
            <div className="events-icon">◌</div>
            <h3>{t.eventsTitle}</h3>
            <p>{t.eventsText}</p>
          </article>
        </div>
      </section>

      <section className="projects-section section-wrap section-block" id="projects">
        <SectionHeading eyebrow={t.projectsTag} title={t.projectsTitle} intro={t.projectsIntro} />
        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: index * .08 }}>
              <div className="project-top"><span>{project.number} / CASE</span><span className="project-mark">↗</span></div>
              <div className={`project-illustration illustration-${index + 1}`}>
                {index === 0 && <div className="mini-flow"><i /> <i /> <i /> <i /><b>n8n</b></div>}
                {index === 1 && <div className="ocr-sheet"><span /><span /><span /><span /><b>OCR</b></div>}
                {index === 2 && <div className="platform-window"><i /><i /><i /><b>ICT</b></div>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">{project.tags.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="approach-section section-wrap section-block">
        <div className="approach-panel">
          <div><span className="section-eyebrow">{t.personalTag}</span><h2>{t.personalTitle}</h2></div>
          <div className="approach-list">
            {t.personalItems.map((item, index) => <div className="approach-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap section-block" id="contact">
        <div className="contact-card">
          <div className="contact-orbit"><span>MA</span><i /><i /><i /></div>
          <div className="contact-copy">
            <span className="section-eyebrow">{t.contactTag}</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="contact-links">
              <a className="contact-link" href="mailto:mos2007.com@gmail.com">
                <span>{t.emailLabel}</span><strong>mos2007.com@gmail.com</strong>
              </a>
              <a className="contact-link" href="tel:+9647882997012">
                <span>{t.phoneLabel}</span><strong dir="ltr">07882997012</strong>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/mostafa-adil-32897738a/" target="_blank" rel="noreferrer">
                <span>{t.linkedinLabel}</span><strong>{t.linkedinAction} ↗</strong>
              </a>
            </div>
          </div>
          <div className="contact-side">ICT<br />AI<br />AUTOMATION</div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a href="#home" className="footer-brand">MA<span>.</span></a>
        <p>{t.footer}</p>
        <a href="#home" className="back-top">{t.top} ↑</a>
        <span className="copyright">© {new Date().getFullYear()} MUSTAFA ADIL</span>
      </footer>
    </main>
  );
}
