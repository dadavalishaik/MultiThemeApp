import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDark = theme === "theme2";
  const isColorful = theme === "theme3";

  const navStyle: React.CSSProperties = {
    backgroundColor: isDark ? "#111" : isColorful ? "#ff6f61" : "blue",
    color: "white",
    padding: "16px 24px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    margin: "8px 0",
    fontSize: "16px",
    fontFamily: isDark
      ? "Georgia, serif"
      : isColorful
      ? "'Pacifico', cursive"
      : "Segoe UI, sans-serif",
  };

  const logoStyle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    fontFamily: linkStyle.fontFamily,
  };

  const selectStyle: React.CSSProperties = {
    marginTop: "12px",
    padding: "8px",
    borderRadius: "6px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          MyApp
        </Link>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: "24px",
                background: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              ☰
            </button>

            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  right: "16px",
                  backgroundColor: isDark
                    ? "#1e1e1e"
                    : isColorful
                    ? "#ff8f75"
                    : "#0055aa",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  minWidth: "180px",
                }}
              >
                <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  About
                </Link>
                <Link to="/services" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/contact" style={linkStyle} onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
                <select
                  value={theme}
                  onChange={(e) => {
                    setTheme(e.target.value as any);
                    setMenuOpen(false);
                  }}
                  style={selectStyle}
                >
                  <option value="theme1">Theme 1</option>
                  <option value="theme2">Theme 2</option>
                  <option value="theme3">Theme 3</option>
                </select>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
            <Link to="/services" style={linkStyle}>
              Services
            </Link>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              style={{ ...selectStyle, marginTop: 0 }}
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;






















