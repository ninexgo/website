import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

interface OgImageProps {
  title: string;
  description?: string;
}

export function generateOgImage({ title, description }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#0065FF",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            NINEXGO
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 20 ? "58px" : "72px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                color: "#71717a",
                fontSize: "30px",
                lineHeight: 1.5,
                maxWidth: "900px",
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ color: "#0065FF", fontSize: "22px", fontWeight: 500 }}
          >
            ninexgo.com
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "18px" }}>
            Independent software studio
          </span>
        </div>

        {/* Blue accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#0065FF",
          }}
        />
      </div>
    ),
    { ...OG_SIZE }
  );
}
