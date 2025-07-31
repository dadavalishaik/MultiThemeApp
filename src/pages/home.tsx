import React from "react";
import { useTheme } from "../components/ThemeContext";

const Home: React.FC = () => {
    const { theme } = useTheme(); // get current theme
    const isDark = theme === "theme2";
    const isColorful = theme === "theme3";

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100vw",
                overflow: "hidden",
                background: isDark
                    ? "#1a1a1a"
                    : isColorful
                        ? "#fff8f0"
                        : "linear-gradient(to bottom right, #e8e9fd, #d8ccfc)",
                padding: "40px",
                fontFamily: isDark
                    ? "Georgia, serif"
                    : isColorful
                        ? "'Pacifico', cursive"
                        : "Segoe UI, sans-serif",
                color: isDark ? "#f0f0f0" : "#1f1f1f",
                boxSizing: "border-box",
            }}
        >
            {/* Left Section */}
            <div
                style={{
                    flex: 1,
                    paddingRight: "40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                    }}
                >
                    Welcome to Power Pages,
                </h1>
                <p
                    style={{
                        fontSize: "16px",
                        marginBottom: "24px",
                    }}
                >
                    We'll start with a few questions that will help us customize your
                    product experience and build your new site.
                </p>
                <button
                    style={{
                        backgroundColor: isDark
                            ? "#444"
                            : isColorful
                                ? "green"
                                : "#605dec",
                        color: "#fff",
                        padding: "12px 24px",
                        borderRadius: "6px",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        marginBottom: "16px",
                        width: "fit-content",
                    }}
                >
                    Get started
                </button>
                <p
                    style={{
                        fontSize: "12px",
                        lineHeight: "1.6",
                        maxWidth: "400px",
                    }}
                >
                    0 questions • about 2 min to complete
                    <br />
                    By accessing this service, you agree to the{" "}
                    <a
                        href="#"
                        style={{
                            color: "#8aa0ff",
                            textDecoration: "underline",
                        }}
                    >
                        terms of service
                    </a>{" "}
                    and{" "}
                    <a
                        href="#"
                        style={{
                            color: "#8aa0ff",
                            textDecoration: "underline",
                        }}
                    >
                        Preview terms
                    </a>
                    .<br />
                    <a
                        href="#"
                        style={{
                            color: "#8aa0ff",
                            textDecoration: "underline",
                        }}
                    >
                        Microsoft Privacy Statement
                    </a>
                </p>
            </div>

            {/* Right Section */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5775/5775996.png"
                    alt="illustration"
                    style={{
                        width: "80%",
                        maxWidth: "400px",
                        filter: isDark
                            ? "brightness(10)"
                            : isColorful
                                ? "brightness(1.05) saturate(1.2) hue-rotate(-10deg)"
                                : "none",
                    }}
                />

            </div>
        </div>
    );
};

export default Home;













// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh", // Full screen height
//         width: "100vw", // Full screen width
//         overflow: "hidden", // Prevent scroll
//         background: "linear-gradient(to bottom right, #e8e9fd, #d8ccfc)",
//         padding: "40px",
//         fontFamily: "Segoe UI, sans-serif",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Left Section */}
//       <div
//         style={{
//           flex: 1,
//           paddingRight: "40px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "32px",
//             fontWeight: "bold",
//             marginBottom: "16px",
//             color: "#1f1f1f",
//           }}
//         >
//           Welcome to Power Pages,
//         </h1>
//         <p
//           style={{
//             fontSize: "16px",
//             color: "#333",
//             marginBottom: "24px",
//           }}
//         >
//           We'll start with a few questions that will help us customize your
//           product experience and build your new site.
//         </p>
//         <button
//           style={{
//             backgroundColor: "#605dec",
//             color: "#fff",
//             padding: "12px 24px",
//             borderRadius: "6px",
//             border: "none",
//             fontSize: "16px",
//             cursor: "pointer",
//             marginBottom: "16px",
//             width: "fit-content",
//           }}
//         >
//           Get started
//         </button>
//         <p
//           style={{
//             fontSize: "12px",
//             color: "#444",
//             lineHeight: "1.6",
//             maxWidth: "400px",
//           }}
//         >
//           0 questions • about 2 min to complete
//           <br />
//           By accessing this service, you agree to the{" "}
//           <a href="#" style={{ color: "#605dec", textDecoration: "underline" }}>
//             terms of service
//           </a>{" "}
//           and{" "}
//           <a href="#" style={{ color: "#605dec", textDecoration: "underline" }}>
//             Preview terms
//           </a>
//           .<br />
//           <a href="#" style={{ color: "#605dec", textDecoration: "underline" }}>
//             Microsoft Privacy Statement
//           </a>
//         </p>
//       </div>

//       {/* Right Section */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/5775/5775996.png"
//           alt="illustration"
//           style={{ width: "80%", maxWidth: "400px" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
