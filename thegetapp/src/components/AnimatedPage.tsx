import { MotionDiv } from "./common/motion";

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute inset-0 bg-white z-20 overflow-auto shadow-lg"
    >
      {children}
    </MotionDiv>
  );
}
