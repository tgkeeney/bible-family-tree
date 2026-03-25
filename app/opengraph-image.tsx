import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Lineage — Biblical Family Tree: Adam to David";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#110e08",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Warm radial glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "900px",
            height: "500px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, rgba(200,168,76,0.08) 0%, rgba(200,168,76,0.02) 40%, transparent 70%)",
          }}
        />

        {/* Top decorative line */}
        <div
          style={{
            width: "80px",
            height: "1px",
            background: "rgba(200,168,76,0.3)",
            marginBottom: "32px",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "#bfb08a",
            letterSpacing: "0.1em",
            marginBottom: "12px",
          }}
        >
          From the Garden of Eden
        </div>

        {/* Title — The */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "24px",
            fontStyle: "italic",
            color: "#c8b890",
            letterSpacing: "0.35em",
            marginBottom: "2px",
          }}
        >
          The
        </div>

        {/* Title — Lineage */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "82px",
            fontWeight: 700,
            color: "#ede5d0",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          LINEAGE
        </div>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(200,168,76,0.25)",
            marginBottom: "24px",
          }}
        />

        {/* Description */}
        <div
          style={{
            fontFamily: "serif",
            fontSize: "20px",
            color: "#8a7d60",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: "600px",
          }}
        >
          An interactive journey through the biblical genealogy
          from Adam to King David
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "serif",
            }}
          >
            <span style={{ fontSize: "28px", color: "#c9a84c", fontWeight: 600 }}>
              185+
            </span>
            <span style={{ fontSize: "12px", color: "#8a7d60", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Figures
            </span>
          </div>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(200,168,76,0.3)" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "serif",
            }}
          >
            <span style={{ fontSize: "28px", color: "#c9a84c", fontWeight: 600 }}>
              13
            </span>
            <span style={{ fontSize: "12px", color: "#8a7d60", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Branches
            </span>
          </div>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(200,168,76,0.3)" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "serif",
            }}
          >
            <span style={{ fontSize: "28px", color: "#c9a84c", fontWeight: 600 }}>
              20+
            </span>
            <span style={{ fontSize: "12px", color: "#8a7d60", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Generations
            </span>
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontFamily: "serif",
            fontSize: "14px",
            letterSpacing: "0.2em",
            color: "rgba(200,168,76,0.4)",
            textTransform: "uppercase",
          }}
        >
          lineage.bible
        </div>
      </div>
    ),
    { ...size }
  );
}
