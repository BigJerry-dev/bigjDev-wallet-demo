import type { ReactNode } from "react";

// On a real phone the app fills the screen. On a bigger screen it sits inside a phone shape.
export default function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative flex flex-col w-full max-w-[390px] min-h-[560px] overflow-hidden bg-white rounded-[28px] border border-line
        md:w-[390px] md:h-[min(800px,calc(100vh-190px))] md:rounded-[44px] md:border-[10px] md:border-ink md:shadow-xl"
    >
      <div className="hidden md:block absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true"></div>
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </div>
  );
}
