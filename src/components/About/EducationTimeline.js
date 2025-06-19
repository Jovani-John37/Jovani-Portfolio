import React, { useState, useEffect, useRef } from "react";

function EducationTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const timelineContainerStyle = {
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const timelineLineStyle = {
    position: "absolute",
    left: "50%",
    top: "0",
    bottom: "0",
    width: "4px",
    background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
    transform: "translateX(-50%)",
    borderRadius: "2px",
    zIndex: 1,
  };

  const timelineItemStyle = {
    position: "relative",
    marginBottom: "60px",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    minHeight: "120px",
  };

  const timelineContentStyle = (isLeft) => ({
    position: "relative",
    width: "45%",
    padding: "0",
    ...(isLeft 
      ? { marginRight: "auto", paddingRight: "30px" }
      : { marginLeft: "auto", paddingLeft: "30px" }
    ),
  });

  const cardStyle = (isVisible, isLeft) => ({
    background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "20px",
    padding: "32px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)",
    transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? "translateX(0) translateY(0) scale(1)" 
      : `translateX(${isLeft ? '-100px' : '100px'}) translateY(30px) scale(0.9)`,
  });

  const iconContainerStyle = {
    position: "absolute",
    left: "50%",
    top: "40px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateX(-50%)",
    border: "4px solid white",
    zIndex: 10,
    fontSize: "28px",
    fontWeight: "bold",
  };

  const arrowStyle = (isLeft) => ({
    position: "absolute",
    top: "40px",
    width: "0",
    height: "0",
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    zIndex: 5,
    ...(isLeft 
      ? {
          right: "-15px",
          borderLeft: "15px solid white",
        }
      : {
          left: "-15px",
          borderRight: "15px solid white",
        }
    ),
  });

  const gradientOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    borderRadius: "20px 20px 0 0",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "20px",
    padding: "12px 20px",
    fontSize: "14px",
    color: "#fff",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 8px 16px rgba(102, 126, 234, 0.3)",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  const dateStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 16px",
    fontSize: "13px",
    background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
    borderRadius: "24px",
    color: "#475569",
    marginBottom: "16px",
    fontWeight: "600",
    border: "1px solid rgba(148, 163, 184, 0.2)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "8px",
    background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "20px",
    fontWeight: "500",
  };

  const listStyle = {
    paddingLeft: "0",
    marginBottom: "0",
    listStyle: "none",
  };

  const listItemStyle = {
    padding: "8px 0",
    color: "#475569",
    fontSize: "15px",
    position: "relative",
    paddingLeft: "24px",
  };

  const bulletStyle = {
    position: "absolute",
    left: "0",
    top: "16px",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  };

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
    if (isEntering) {
      e.currentTarget.style.transform = "translateX(0) translateY(-8px) scale(1.02)";
      e.currentTarget.style.boxShadow = "0 32px 64px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.08)";
    } else {
      e.currentTarget.style.transform = "translateX(0) translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)";
    }
  };

  const handleBadgeHover = (e, isEntering, color) => {
    if (isEntering) {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = `0 12px 24px ${color}40`;
    } else {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = `0 8px 16px ${color}30`;
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(to left, #0A1E3B, #0A162C)",
      padding: "40px 0",
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: "60px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s ease-out",
      }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "800",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "16px",
        }}>
          Education & Certifications
        </h1>
        <p style={{
          fontSize: "18px",
          color: "#64748b",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}>
          My academic journey and professional development through various courses and certifications
        </p>
      </div>

      <div ref={timelineRef} style={timelineContainerStyle}>
        <div style={timelineLineStyle}></div>
        
        {data.map((el, index) => {
          const isLeft = index % 2 === 0;
          const isItemVisible = visibleItems.has(index);
          
          return (
            <div 
              key={index} 
              style={timelineItemStyle}
              ref={(ref) => itemRefs.current[index] = ref}
              data-index={index}
            >
              <div style={timelineContentStyle(isLeft)}>
                <div
                  style={cardStyle(isItemVisible, isLeft)}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <div style={{
                    ...gradientOverlay,
                    background: el.gradient,
                  }} />
                  
                  <div style={arrowStyle(isLeft)}></div>
                  
                  <div style={dateStyle}>
                    📅 {el.date}
                  </div>
                  
                  <h3 style={titleStyle}>{el.title}</h3>
                  <h5 style={subtitleStyle}>{el.subtitle}</h5>
                  
                  <ul style={listStyle}>
                    {el.items.map((item, i) => (
                      <li key={i} style={listItemStyle}>
                        <div style={{
                          ...bulletStyle,
                          background: el.gradient,
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {el.cert && (
                    <a
                      href={el.cert}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...badgeStyle,
                        background: el.gradient,
                      }}
                      onMouseEnter={(e) => handleBadgeHover(e, true, el.color)}
                      onMouseLeave={(e) => handleBadgeHover(e, false, el.color)}
                    >
                      🏆 View Certificate 🔗
                    </a>
                  )}
                </div>
              </div>
              
              <div style={{
                ...iconContainerStyle,
                background: el.gradient,
                boxShadow: `0 0 0 4px ${el.color}20, 0 8px 16px rgba(0, 0, 0, 0.1)`,
                opacity: isItemVisible ? 1 : 0,
                transform: isItemVisible 
                  ? "translateX(-50%) scale(1)" 
                  : "translateX(-50%) scale(0.5)",
                transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s",
              }}>
                {el.icon}
              </div>
            </div>
          );
        })}
      </div>
      
      <div style={{
        textAlign: "center",
        marginTop: "60px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s ease-out 1s",
      }}>
        <div style={{
          display: "inline-block",
          padding: "16px 32px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "16px",
          color: "white",
          fontWeight: "600",
          fontSize: "16px",
          boxShadow: "0 8px 16px rgba(102, 126, 234, 0.3)",
        }}>
          🎓 Continuous Learning Journey
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            align-items: center !important;
          }
          .timeline-content {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            padding-top: 80px !important;
            max-width: 400px;
          }
          .timeline-line {
            display: none !important;
          }
          .timeline-icon {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            margin-bottom: 20px;
          }
          .timeline-arrow {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default EducationTimeline;