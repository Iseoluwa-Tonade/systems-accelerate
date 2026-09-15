/**
 * Crops the combined agents.png sprite into individual circular portraits.
 * Image: 1448 × 1086 px
 *   v=1  left  – man, red shirt    – face center ≈ (24.9%, 33.6%)
 *   v=2  center – woman, braids    – face center ≈ (50.0%, 57.1%)
 *   v=3  right  – man, floral shirt – face center ≈ (75.3%, 33.6%)
 * bg-size 380% → displayed image 364.8 × 273.6 px (at 96 px container).
 * bg-position formula: offset / (img_displayed - container) × 100
 */

const POSITIONS: Record<1 | 2 | 3, string> = {
  1: "16% 25%",
  2: "50% 61%",
  3: "84% 25%",
};

export function AgentAvatar({ v, size = 80 }: { v: 1 | 2 | 3; size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full shadow-[0_0_0_3px_rgba(255,184,0,0.35),0_6px_20px_rgba(0,0,0,0.12)]"
      style={{
        width: size,
        height: size,
        backgroundImage: "url('/agents.png')",
        backgroundSize: "380%",
        backgroundPosition: POSITIONS[v],
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        borderRadius: "50%",
      }}
    />
  );
}
