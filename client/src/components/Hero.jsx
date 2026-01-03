import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div
      className="py-5"
      style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
    >
      <Container className="d-flex justify-content-center">
        <Card
          className="p-5 d-flex flex-column align-items-center hero-card shadow-lg"
          style={{
            maxWidth: "600px",
            borderRadius: "20px",
            border: "none",
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="text-center mb-4">
            <h1
              className="mb-3"
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#2d3748",
              }}
            >
              Authentication System
            </h1>
            <p style={{ color: "#718096", fontSize: "1.1rem" }}>
              Secure, Fast, and Reliable
            </p>
          </div>

          {userInfo ? (
            <div className="text-center">
              <h3
                className="mb-3"
                style={{
                  color: "#4a5568",
                  fontWeight: "600",
                }}
              >
                Welcome back,{" "}
                <span style={{ color: "#667eea" }}>{userInfo.name}</span>!
              </h3>
              <p style={{ color: "#718096", marginBottom: "2rem" }}>
                Your account is secure and ready to use
              </p>
            </div>
          ) : (
            <div className="d-flex flex-column flex-sm-row gap-3 w-100 justify-content-center">
              <Button
                variant="primary"
                onClick={() => navigate("/login")}
                size="lg"
                style={{
                  variant: "primary",
                  border: "none",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(102, 126, 234, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(102, 126, 234, 0.4)";
                }}
              >
                <FaSignInAlt className="me-2" /> Sign In
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => navigate("/register")}
                size="lg"
                style={{
                  borderColor: "#667eea",
                  color: "#667eea",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  borderWidth: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "primary";

                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#667eea";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#667eea";
                }}
              >
                <FaUserPlus className="me-2" /> Register
              </Button>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
