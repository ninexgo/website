import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

interface OgImageProps {
  title: string;
  description?: string;
}

export function generateOgImage({ title, description }: OgImageProps) {
  const titleSize = title.length > 20 ? "64px" : "80px";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 60%, rgba(0,101,255,0.09) 0%, transparent 70%)",
          padding: "56px 72px 0 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Brand mark — logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <svg
            viewBox="0 0 192 128"
            width="57"
            height="38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M136.575 110.414L157.634 82.5656L192 128H151.871C150.618 128 149.437 127.413 148.681 126.414L136.575 110.414Z"
              fill="#0065FF"
            />
            <path
              d="M42 31.6572C42 32.9546 40.7838 33.9087 39.5237 33.5997L6 25.3793V4C6 1.79086 7.79086 0 10 0H42V31.6572Z"
              fill="#0065FF"
            />
            <path
              d="M192 0L157.634 45.4343L136.575 17.6433L148.681 1.5914C149.437 0.589237 150.619 0 151.875 0H192Z"
              fill="rgba(255,255,255,0.55)"
            />
            <path
              d="M89.4948 128C93.1286 128 96.5514 126.299 98.7376 123.406L143.633 63.9998H101.514L53.147 128H89.4948Z"
              fill="rgba(255,255,255,0.55)"
            />
            <path
              d="M89.4948 0C93.1286 0 96.5514 1.70126 98.7376 4.59405L143.633 64.0002H101.514L53.147 0H89.4948Z"
              fill="#ffffff"
            />
            <path
              d="M42 124C42 126.209 40.2091 128 38 128H6V37.5172L40.639 49.1963C41.4523 49.4705 42 50.2331 42 51.0915V124Z"
              fill="#ffffff"
            />
          </svg>
          <span
            style={{
              color: "#ffffff",
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Ninexgo
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                color: "#52525b",
                fontSize: "26px",
                lineHeight: 1.55,
                maxWidth: "760px",
                fontWeight: 400,
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
            paddingTop: "24px",
            paddingBottom: "44px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <span
            style={{
              color: "#0065FF",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            ninexgo.com
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.15)",
              fontSize: "16px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Crafting the future.
          </span>
        </div>

        {/* Blue accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5px",
            backgroundColor: "#0065FF",
          }}
        />
      </div>
    ),
    { ...OG_SIZE }
  );
}
