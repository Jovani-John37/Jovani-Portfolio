import React, { useState, useEffect, useRef } from "react";
import "./EducationTimeline.css";

function EducationTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const data = [
    {
      title: "Computer Science",
      subtitle: "Zagazig University – Sharqia, Egypt",
      date: "2022 - 2025",
      icon: "🎓",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      items: [
        "Faculty of Computers and Information",
        "Software Engineering & AI Fundamentals",
        "Advanced Programming & Data Structures",
        "Expected Graduation: 2025",
      ],
    },
    {
      title: "Web Design Course",
      subtitle: "NTI Creativa – Banha, Egypt",
      date: "2024",
      icon: "💻",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      items: [
        "UI/UX Design Principles & Best Practices",
        "Advanced HTML5, CSS3 & JavaScript",
        "Responsive Design & Mobile-First Approach",
        "Creative Web Design Techniques",
      ],
      cert: "https://drive.google.com/file/d/1lSB1pO8D7fd1wx84M0bU_9Hhth7Xoz41/view?usp=drive_link",
    },
    {
      title: "Full-Stack Web Development",
      subtitle: "IT CRC – Zagazig University",
      date: "2024",
      icon: "⚡",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      items: [
        "Frontend & Backend Development",
        "Server-side Frameworks & Architecture",
        "Database Design & Management",
        "RESTful APIs & Web Services",
      ],
      cert: "https://drive.google.com/file/d/1TexwBOrOQ_GtCnPiuzHQClMuOdIDoqd_/view?usp=drive_link",
    },
    {
      title: "React Development Course",
      subtitle: "Upskilling Program – Egypt",
      date: "2025",
      icon: "⚛️",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      items: [
        "React Fundamentals & Advanced Hooks",
        "Component Architecture & State Management",
        "React Router & Navigation Patterns",
        "Real-world Project Development",
        "API Integration & Data Handling",
      ],
      cert: "https://drive.google.com/your-react-certificate-link",
    },
  ];

  const handleCardHover = (e, isEntering) => {
    if (isMobile) return; // Disable hover effects on mobile

    if (isEntering) {
      e.currentTarget.style.transform =
        "translateX(0) translateY(-8px) scale(1.02)";
      e.currentTarget.style.boxShadow =
        "0 32px 64px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.08)";
    } else {
      e.currentTarget.style.transform = "translateX(0) translateY(0) scale(1)";
      e.currentTarget.style.boxShadow =
        "0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)";
    }
  };

  const handleBadgeHover = (e, isEntering, color) => {
    if (isMobile) return; // Disable hover effects on mobile

    if (isEntering) {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = `0 12px 24px ${color}40`;
    } else {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = `0 8px 16px ${color}30`;
    }
  };

  return (
    <div className={`timeline-wrapper ${isVisible ? "visible" : ""}`}>
      <div className="timeline-header">
        <h1 className="timeline-main-title">Education & Certifications</h1>
        <p className="timeline-main-subtitle">
          My academic journey and professional development through various
          courses and certifications
        </p>
      </div>

      <div ref={timelineRef} className="timeline-container">
        <div className="timeline-line"></div>

        {data.map((el, index) => {
          const isLeft = index % 2 === 0;
          const isItemVisible = visibleItems.has(index);

          return (
            <div
              key={index}
              className="timeline-item"
              ref={(ref) => (itemRefs.current[index] = ref)}
              data-index={index}
            >
              <div className={`timeline-content ${isLeft ? "left" : "right"}`}>
                <div
                  className={`timeline-card ${isItemVisible ? "visible" : ""} ${
                    isLeft ? "left" : "right"
                  }`}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <div
                    className="gradient-overlay"
                    style={{ background: el.gradient }}
                  />

                  <div
                    className={`timeline-arrow ${isLeft ? "left" : "right"}`}
                  ></div>

                  <div className="timeline-date">📅 {el.date}</div>

                  <h3 className="timeline-title">{el.title}</h3>
                  <h5 className="timeline-subtitle">{el.subtitle}</h5>

                  <ul className="timeline-list">
                    {el.items.map((item, i) => (
                      <li key={i} className="timeline-list-item">
                        <div
                          className="timeline-bullet"
                          style={{ background: el.gradient }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {el.cert && (
                    <a
                      href={el.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-badge"
                      style={{ background: el.gradient }}
                      onMouseEnter={(e) => handleBadgeHover(e, true, el.color)}
                      onMouseLeave={(e) => handleBadgeHover(e, false, el.color)}
                    >
                      🏆 View Certificate 🔗
                    </a>
                  )}
                </div>
              </div>

              <div
                className={`timeline-icon ${isItemVisible ? "visible" : ""}`}
                style={{
                  background: el.gradient,
                  boxShadow: `0 0 0 4px ${el.color}20, 0 8px 16px rgba(0, 0, 0, 0.1)`,
                }}
              >
                {el.icon}
              </div>
            </div>
          );
        })}
      </div>

      <div className="timeline-footer">
        <div className="timeline-footer-badge">
          🎓 Continuous Learning Journey
        </div>
      </div>
    </div>
  );
}

export default EducationTimeline;
