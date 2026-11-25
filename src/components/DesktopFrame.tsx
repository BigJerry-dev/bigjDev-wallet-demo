import type { ReactNode } from "react";

// A browser window shape, so the wide layout looks like it belongs on a computer.
export default function DesktopFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full max-w-5xl h-[min(720px,calc(100vh-190px))] min-h-[560px] overflow-hidden bg-white rounded-2xl border border-line shadow-xl">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-line bg-surface px-4">
        <span className="size-2.5 rounded-full bg-line"></span>
        <span className="size-2.5 rounded-full bg-line"></span>
        <span className="size-2.5 rounded-full bg-line"></span>
        <span className="mx-auto rounded-full border border-line bg-white px-4 py-1 text-[11px] font-medium text-muted">
          BigJDev Wallet
        </span>
        <span className="w-12"></span>
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </div>
  );
}
