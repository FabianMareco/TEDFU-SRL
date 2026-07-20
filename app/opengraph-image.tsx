import { ImageResponse } from "next/og";

export const alt =
  "TEDFU S.R.L. — Constructora con 10 años de trayectoria en obras públicas y privadas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#2B2B35",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: 96, fontWeight: 700 }}>TEDFU</span>
          <span style={{ fontSize: 96, fontWeight: 700, color: "#F0A030" }}>.</span>
          <span style={{ fontSize: 40, marginLeft: 20, opacity: 0.7 }}>S.R.L.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 40,
            lineHeight: 1.3,
            maxWidth: 900,
            display: "flex",
          }}
        >
          Constructora con 10 años de trayectoria en obras públicas y privadas
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "#F0A030",
            display: "flex",
          }}
        >
          Infraestructura ferroviaria · Obra civil · Instituciones · Edificios
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 16,
            backgroundColor: "#F0A030",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
