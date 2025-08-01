import React, { useEffect, useState } from "react";
import { useTheme } from "../components/ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "theme2";
  const isColorful = theme === "theme3";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      id: 1,
      image:
        "https://previews.123rf.com/images/vecstock/vecstock2007/vecstock200704006/151966484-tea-mug-icon-over-white-background-line-fill-style-vector-illustration.jpg",
      title: "Our Mission",
      text: "We strive to deliver top-tier solutions that bring real value to our users.",
    },
    {
      id: 2,
      image:
        "https://previews.123rf.com/images/vecstock/vecstock2007/vecstock200704005/151966483-juice-bottle-icon-over-white-background-line-fill-style-vector-illustration.jpg",
      title: "Our Vision",
      text: "To become the most trusted software company through innovation and quality.",
    },
    {
      id: 3,
      image:
        "https://previews.123rf.com/images/vecstock/vecstock2007/vecstock200704004/151966482-water-glass-icon-over-white-background-line-fill-style-vector-illustration.jpg",
      title: "Our Values",
      text: "Transparency, collaboration, and continuous improvement guide our work.",
    },
  ];

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    padding: "40px",
    gap: "20px",
    marginTop: "100px",
    background: isDark
      ? ""
      : isColorful
      ? ""
      : undefined,
    color: isDark ? "#f0f0f0" : undefined,
    fontFamily: isDark
      ? "Georgia, serif"
      : isColorful
      ? "'Pacifico', cursive"
      : undefined,
  };

  const cardStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: isDark ? "#2a2a2a" : "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
  };

  const imageStyle: React.CSSProperties = {
    width: "80px",
    height: "80px",
    marginRight: "16px",
    objectFit: "cover",
    filter: isDark
      ? "brightness(0.9)"
      : isColorful
      ? "saturate(1.2) hue-rotate(-10deg)"
      : "none",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  };

  const textStyle: React.CSSProperties = {
    fontSize: "14px",
    color: isDark ? "#ccc" : "#555",
    marginTop: "8px",
  };

  return (
    <div style={containerStyle}>
      {cards.map((card) => (
        <div key={card.id} style={cardStyle}>
          <div style={contentStyle}>
            <img src={card.image} alt="Icon" style={imageStyle} />
            <div>
              <h3 style={titleStyle}>{card.title}</h3>
              <p style={textStyle}>{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
