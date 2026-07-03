import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const alt = `${company.shortName} — Premium Commercial Cleaning Services in Dubai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fontsDir = path.join(process.cwd(), "src", "assets", "fonts");
  const [fraunces, manrope, manropeBold] = await Promise.all([
    readFile(path.join(fontsDir, "fraunces-600.ttf")),
    readFile(path.join(fontsDir, "manrope-400.ttf")),
    readFile(path.join(fontsDir, "manrope-800.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#062a1b",
          color: "#fdfcf9",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: 56,
            letterSpacing: -4,
          }}
        >
          <span style={{ color: "#c34b5c" }}>R</span>
          <span style={{ color: "#48a276" }}>A</span>
          <span style={{ color: "#5a94d6" }}>J</span>
        </div>
        <div
          style={{
            marginTop: 36,
            width: 120,
            height: 2,
            background:
              "linear-gradient(to right, transparent, #c2a263, transparent)",
          }}
        />
        <div
          style={{
            marginTop: 36,
            fontFamily: "Fraunces",
            fontSize: 68,
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          Rawdah Al Jazira
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: 24,
            letterSpacing: 8,
            color: "#c2a263",
          }}
        >
          T A CLEANING SERVICES
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: "Manrope",
            fontSize: 26,
            color: "rgba(250, 247, 240, 0.75)",
          }}
        >
          Premium Commercial Cleaning · Dubai, UAE
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Manrope", data: manrope, weight: 400, style: "normal" },
        { name: "Manrope", data: manropeBold, weight: 800, style: "normal" },
      ],
    },
  );
}
