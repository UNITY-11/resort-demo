"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

interface AnimatedKathakaliHeadProps {
  className?: string;
  opacity?: number;
  scrollProgress: MotionValue<number>;
  /** Shift the expression order: 0=default, 1=start at wonder, 2=start at fury, 3=start at joy */
  expressionShift?: number;
}

export function AnimatedKathakaliHead({
  className = "",
  opacity = 0.15,
  scrollProgress,
  expressionShift = 0,
}: AnimatedKathakaliHeadProps) {
  // ─── 4 TIME SLOTS — scroll ranges where expressions appear ───
  const slot0 = useTransform(scrollProgress, [0, 0.20, 0.24], [1, 1, 0]);
  const slot1 = useTransform(scrollProgress, [0.22, 0.28, 0.46, 0.50], [0, 1, 1, 0]);
  const slot2 = useTransform(scrollProgress, [0.48, 0.54, 0.72, 0.76], [0, 1, 1, 0]);
  const slot3 = useTransform(scrollProgress, [0.74, 0.80, 0.96, 1.00], [0, 1, 1, 1]);

  const slots = [slot0, slot1, slot2, slot3];

  // Expression order: [neutral, wonder, fury, joy] shifted by expressionShift
  const order = [0, 1, 2, 3].map((i) => (i + expressionShift) % 4);
  // Map: which slot drives which expression
  // order[slotIndex] = expressionIndex => we need the reverse: for each expression, which slot?
  const neutralOpacity = slots[order.indexOf(0)];
  const wonderOpacity = slots[order.indexOf(1)];
  const furyOpacity = slots[order.indexOf(2)];
  const joyOpacity = slots[order.indexOf(3)];

  return (
    <svg
      width="400"
      height="580"
      viewBox="0 0 400 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* ═══ WHITE BACKGROUND MASK — at FULL opacity to block halo ═══ */}
      <g stroke="none" fill="white">
        <rect x="175" y="0" width="50" height="85" />
        <ellipse cx="200" cy="130" rx="60" ry="75" />
        <rect x="105" y="155" width="190" height="90" />
        <rect x="98" y="233" width="204" height="28" />
        <ellipse cx="200" cy="345" rx="110" ry="105" />
        <circle cx="72" cy="310" r="42" />
        <circle cx="328" cy="310" r="42" />
        <ellipse cx="200" cy="475" rx="105" ry="55" />
        <rect x="95" y="435" width="210" height="50" />
      </g>

      {/* ═══ ARTWORK ═══ */}
      <g stroke="currentColor" fill="none" opacity={opacity}>
        {/* ═══ CROWN TOP FINIAL ═══ */}
        <rect x="192" y="8" width="16" height="20" rx="3" strokeWidth="1.5" />
        <path d="M 188 28 L 212 28 L 215 38 L 185 38 Z" strokeWidth="1.5" />
        <line x1="188" y1="33" x2="212" y2="33" strokeWidth="1" />
        <path d="M 185 38 C 175 50, 175 70, 200 80 C 225 70, 225 50, 215 38" strokeWidth="1.5" />
        <path d="M 187 45 C 180 55, 180 68, 200 75 C 220 68, 220 55, 213 45" strokeWidth="0.8" strokeDasharray="2 3" />
        <line x1="200" y1="40" x2="200" y2="75" strokeWidth="0.8" />

        {/* ═══ CROWN DOME ═══ */}
        <path d="M 155 160 C 155 85, 245 85, 245 160" strokeWidth="2" />
        <path d="M 160 155 C 160 95, 240 95, 240 155" strokeWidth="1.5" />
        <line x1="163" y1="115" x2="237" y2="115" strokeWidth="1" />
        <line x1="160" y1="125" x2="240" y2="125" strokeWidth="1" />
        <line x1="158" y1="135" x2="242" y2="135" strokeWidth="1" />
        <line x1="156" y1="145" x2="244" y2="145" strokeWidth="1" />
        <line x1="185" y1="95" x2="180" y2="155" strokeWidth="0.6" />
        <line x1="200" y1="88" x2="200" y2="155" strokeWidth="0.6" />
        <line x1="215" y1="95" x2="220" y2="155" strokeWidth="0.6" />
        <path d="M 185 80 L 155 160" strokeWidth="1.5" />
        <path d="M 215 80 L 245 160" strokeWidth="1.5" />

        {/* ═══ CROWN BASE BANDS ═══ */}
        <rect x="135" y="160" width="130" height="16" rx="2" strokeWidth="1.5" />
        {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
          <circle key={`tb-${i}`} cx={145 + i * 12} cy={168} r="3" fill="currentColor" />
        ))}
        <rect x="130" y="178" width="140" height="14" rx="2" strokeWidth="1.5" />
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
          <circle key={`mb-${i}`} cx={138 + i * 10.5} cy={185} r="2.5" strokeWidth="0.8" />
        ))}
        <rect x="125" y="194" width="150" height="12" rx="2" strokeWidth="1.5" />
        <line x1="128" y1="200" x2="272" y2="200" strokeWidth="0.6" strokeDasharray="4 3" />
        <rect x="120" y="208" width="160" height="16" rx="2" strokeWidth="1.5" />
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => (
          <rect key={`bb-${i}`} x={125 + i * 11} y={211} width="7" height="10" rx="2" strokeWidth="0.8" />
        ))}
        <rect x="115" y="226" width="170" height="10" rx="2" strokeWidth="1.5" />
        {Array.from({ length: 28 }).map((_, i) => (
          <circle key={`bd-${i}`} cx={120 + i * 6} cy={231} r="1.2" fill="currentColor" />
        ))}

        {/* ═══ FOREHEAD BAND ═══ */}
        <path d="M 108 238 L 292 238 L 295 255 L 105 255 Z" strokeWidth="1.5" />
        <line x1="110" y1="246" x2="290" y2="246" strokeWidth="0.8" />
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={`fbd-${i}`} cx={115 + i * 9.2} cy={250} r="2" fill="currentColor" />
        ))}

        {/* Forehead tilak */}
        <path d="M 190 258 L 210 258 L 200 278 Z" fill="currentColor" />
        <ellipse cx="200" cy="265" rx="3" ry="5" stroke="currentColor" strokeWidth="0.8" fill="none" />

        {/* ═══════════════════════════════════════════════ */}
        {/* ═══ EXPRESSION: NEUTRAL (Shanta) ═══ */}
        {/* ═══════════════════════════════════════════════ */}
        <motion.g style={{ opacity: neutralOpacity }}>
          {/* Calm eyebrows — gentle arches */}
          <path d="M 140 292 C 155 275, 175 273, 195 288" strokeWidth="4" strokeLinecap="round" />
          <path d="M 205 288 C 225 273, 245 275, 260 292" strokeWidth="4" strokeLinecap="round" />
          {/* Calm eyes — normal almond shape */}
          <path d="M 145 305 Q 168 293, 192 305 Q 168 312, 145 305" strokeWidth="2" />
          <circle cx="168" cy="304" r="3.5" fill="currentColor" />
          <path d="M 208 305 Q 232 293, 255 305 Q 232 312, 208 305" strokeWidth="2" />
          <circle cx="232" cy="304" r="3.5" fill="currentColor" />
          {/* Calm mouth — gentle closed smile */}
          <path d="M 170 388 Q 200 398, 230 388" strokeWidth="2" />
          <path d="M 178 392 Q 200 400, 222 392" strokeWidth="1.2" />
        </motion.g>

        {/* ═══════════════════════════════════════════════ */}
        {/* ═══ EXPRESSION: WONDER (Adbhuta) ═══ */}
        {/* ═══════════════════════════════════════════════ */}
        <motion.g style={{ opacity: wonderOpacity }}>
          {/* Raised eyebrows — high arches */}
          <path d="M 138 284 C 152 264, 176 262, 196 280" strokeWidth="4" strokeLinecap="round" />
          <path d="M 204 280 C 224 262, 248 264, 262 284" strokeWidth="4" strokeLinecap="round" />
          {/* Wide open eyes — tall almond */}
          <path d="M 142 305 Q 168 282, 194 305 Q 168 318, 142 305" strokeWidth="2" />
          <circle cx="168" cy="302" r="5" fill="currentColor" />
          <circle cx="168" cy="300" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M 206 305 Q 232 282, 258 305 Q 232 318, 206 305" strokeWidth="2" />
          <circle cx="232" cy="302" r="5" fill="currentColor" />
          <circle cx="232" cy="300" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Open mouth — "O" shape */}
          <ellipse cx="200" cy="392" rx="16" ry="12" strokeWidth="2.5" />
          <ellipse cx="200" cy="392" rx="8" ry="6" strokeWidth="0.8" strokeDasharray="2 3" />
        </motion.g>

        {/* ═══════════════════════════════════════════════ */}
        {/* ═══ EXPRESSION: FURY (Raudra) ═══ */}
        {/* ═══════════════════════════════════════════════ */}
        <motion.g style={{ opacity: furyOpacity }}>
          {/* Angry eyebrows — sharp V-shape angling down to center */}
          <path d="M 135 288 C 148 296, 172 292, 195 280" strokeWidth="5" strokeLinecap="round" />
          <path d="M 205 280 C 228 292, 252 296, 265 288" strokeWidth="5" strokeLinecap="round" />
          {/* Intense narrow eyes — squinting */}
          <path d="M 144 305 Q 168 298, 192 305 Q 168 309, 144 305" strokeWidth="2.5" />
          <circle cx="168" cy="304" r="3" fill="currentColor" />
          <path d="M 208 305 Q 232 298, 256 305 Q 232 309, 208 305" strokeWidth="2.5" />
          <circle cx="232" cy="304" r="3" fill="currentColor" />
          {/* Snarling mouth — downturned */}
          <path d="M 165 390 Q 182 384, 200 388 Q 218 384, 235 390" strokeWidth="3" />
          <path d="M 172 394 Q 200 386, 228 394" strokeWidth="1.5" />
          <path d="M 162 388 L 158 393" strokeWidth="2" strokeLinecap="round" />
          <path d="M 238 388 L 242 393" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* ═══════════════════════════════════════════════ */}
        {/* ═══ EXPRESSION: JOY (Hasya) ═══ */}
        {/* ═══════════════════════════════════════════════ */}
        <motion.g style={{ opacity: joyOpacity }}>
          {/* Happy eyebrows — soft high arches */}
          <path d="M 140 286 C 155 270, 175 268, 195 284" strokeWidth="4" strokeLinecap="round" />
          <path d="M 205 284 C 225 268, 245 270, 260 286" strokeWidth="4" strokeLinecap="round" />
          {/* Bright happy eyes — slightly curved crescent */}
          <path d="M 145 305 Q 168 290, 192 305 Q 168 314, 145 305" strokeWidth="2" />
          <circle cx="168" cy="303" r="4" fill="currentColor" />
          <circle cx="168" cy="301" r="1.2" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 208 305 Q 232 290, 255 305 Q 232 314, 208 305" strokeWidth="2" />
          <circle cx="232" cy="303" r="4" fill="currentColor" />
          <circle cx="232" cy="301" r="1.2" fill="none" stroke="currentColor" strokeWidth="0.8" />
          {/* Cheek lines — squinting smile */}
          <path d="M 140 312 C 138 318, 140 322, 145 320" strokeWidth="1.2" />
          <path d="M 260 312 C 262 318, 260 322, 255 320" strokeWidth="1.2" />
          {/* Big beaming smile */}
          <path d="M 158 386 Q 200 416, 242 386" strokeWidth="3" />
          <path d="M 165 390 Q 200 412, 235 390" strokeWidth="1.5" />
          <circle cx="158" cy="386" r="2.5" fill="currentColor" />
          <circle cx="242" cy="386" r="2.5" fill="currentColor" />
        </motion.g>

        {/* ═══ STATIC FEATURES ═══ */}
        {/* Eye extensions — always visible */}
        <path d="M 140 302 L 125 295" strokeWidth="2" strokeLinecap="round" />
        <path d="M 260 302 L 275 295" strokeWidth="2" strokeLinecap="round" />

        {/* Nose — always visible */}
        <path d="M 195 308 L 192 345 C 196 352, 204 352, 208 345 L 205 308" strokeWidth="1.5" />
        <path d="M 188 342 C 182 348, 182 355, 190 358" strokeWidth="1.5" />
        <path d="M 212 342 C 218 348, 218 355, 210 358" strokeWidth="1.5" />

        {/* Chutti jawline — always visible */}
        <path d="M 105 258 C 85 350, 85 420, 200 440 C 315 420, 315 350, 295 258" strokeWidth="8" />
        <path d="M 110 262 C 92 348, 92 415, 200 433 C 308 415, 308 348, 290 262" strokeWidth="2" />

        {/* Chin mark */}
        <path d="M 190 415 Q 200 425, 210 415" strokeWidth="1.5" />

        {/* ═══ EAR ORNAMENTS ═══ */}
        <circle cx="72" cy="310" r="35" strokeWidth="4" />
        <circle cx="72" cy="310" r="28" strokeWidth="1.5" />
        <circle cx="72" cy="310" r="20" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="72" cy="310" r="12" strokeWidth="1.5" />
        <circle cx="72" cy="310" r="5" fill="currentColor" />
        {[0, 45, 90, 135].map((a) => {
          const rad = (a * Math.PI) / 180;
          return <line key={`ls-${a}`} x1={72 + 12 * Math.cos(rad)} y1={310 + 12 * Math.sin(rad)} x2={72 + 28 * Math.cos(rad)} y2={310 + 28 * Math.sin(rad)} strokeWidth="0.8" />;
        })}
        <circle cx="328" cy="310" r="35" strokeWidth="4" />
        <circle cx="328" cy="310" r="28" strokeWidth="1.5" />
        <circle cx="328" cy="310" r="20" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="328" cy="310" r="12" strokeWidth="1.5" />
        <circle cx="328" cy="310" r="5" fill="currentColor" />
        {[0, 45, 90, 135].map((a) => {
          const rad = (a * Math.PI) / 180;
          return <line key={`rs-${a}`} x1={328 + 12 * Math.cos(rad)} y1={310 + 12 * Math.sin(rad)} x2={328 + 28 * Math.cos(rad)} y2={310 + 28 * Math.sin(rad)} strokeWidth="0.8" />;
        })}

        {/* ═══ NECK / COLLAR ═══ */}
        <path d="M 130 440 C 130 480, 270 480, 270 440" strokeWidth="6" />
        <path d="M 125 450 C 125 495, 275 495, 275 450" strokeWidth="3" />
        <path d="M 120 460 C 120 510, 280 510, 280 460" strokeWidth="2" />
        <path d="M 100 470 C 80 530, 120 560, 160 540" strokeWidth="2" />
        <path d="M 300 470 C 320 530, 280 560, 240 540" strokeWidth="2" />
        <path d="M 160 540 Q 200 560, 240 540" strokeWidth="2" />
      </g>
    </svg>
  );
}
