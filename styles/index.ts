export const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

export const containerStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: 8,
  width: "min(600px, 90vw)", 
  maxHeight: "90vh",
  overflowY: "auto",
  padding: 20,
  boxSizing: "border-box",
};

export const sectionStyle: React.CSSProperties = {
  marginBottom: 40,
};

export const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontWeight: 600,
};

export const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 8,
  marginBottom: 12,
  boxSizing: "border-box",
  border: "1px solid #d3d3d3",
  borderRadius: "8px",
};

export const checkboxContainer: React.CSSProperties = {
  gap: 10,
  marginBottom: 12,
};

export const buttonStyle: React.CSSProperties = {
  backgroundColor: "#e26d39",
  color: "#fff",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  margin: "0px auto",
  marginTop: "30px",
  cursor: "pointer",
};
