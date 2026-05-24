"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("../framer-features").then((m) => m.default);

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
