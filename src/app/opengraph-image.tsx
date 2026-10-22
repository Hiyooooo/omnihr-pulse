import { ImageResponse } from "next/og";

export const alt = "OmniHR Pulse - HRIS Berbasis Analitik & Metrik Kinerja Real-Time";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#0A0918",
          color: "#F2EFFA",
          fontFamily: "system-ui, sans-serif",
          border: "8px solid #2A2650",
        }}
      >
        {/* Header: Brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#4338CA",
              border: "2px solid #8B5CF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#C4B5FD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 9h3l2-5 3 8 2-5h4" />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "28px",
              fontWeight: "bold",
              letterSpacing: "-0.02em",
            }}
          >
            <span>OmniHR</span>
            <span
              style={{
                color: "#9C97BD",
                fontWeight: "normal",
                marginLeft: "8px",
              }}
            >
              Pulse
            </span>
          </div>
        </div>

        {/* Center: Headline & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#F2EFFA",
            }}
          >
            Setiap keputusan SDM punya angkanya.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              lineHeight: 1.5,
              color: "#9C97BD",
            }}
          >
            Ambil keputusan SDM berbasis data akurat. Pantau analitik absensi, efisiensi payroll, dan evaluasi staf dalam satu layar.
          </div>
        </div>

        {/* Footer: 3 Stat Preview Cards */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 24px",
              backgroundColor: "#14122B",
              border: "1px solid #2A2650",
              borderRadius: "14px",
              minWidth: "200px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "#9C97BD",
                textTransform: "uppercase",
              }}
            >
              Ketepatan Waktu
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#8B5CF6",
              }}
            >
              94,2%
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 24px",
              backgroundColor: "#14122B",
              border: "1px solid #2A2650",
              borderRadius: "14px",
              minWidth: "200px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "#9C97BD",
                textTransform: "uppercase",
              }}
            >
              Anggaran Payroll
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#C4B5FD",
              }}
            >
              Rp 8,4 M
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 24px",
              backgroundColor: "#14122B",
              border: "1px solid #2A2650",
              borderRadius: "14px",
              minWidth: "200px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "#9C97BD",
                textTransform: "uppercase",
              }}
            >
              Produktivitas
            </span>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#22C55E",
              }}
            >
              78 / 100
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
