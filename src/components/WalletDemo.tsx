"use client";
import { useState } from "react";
import DesktopFrame from "./DesktopFrame";
import MobileFrame from "./MobileFrame";
import ViewSwitch from "./ViewSwitch";
import type { View } from "./ViewSwitch";
import WalletApp from "./WalletApp";

export default function WalletDemo() {
  const [view, setView] = useState<View>("mobile");

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center gap-8 px-4 py-8 md:px-8">
      <header className="flex w-full flex-wrap items-center justify-between gap-4">
        <div>
          <a
            href="https://bigj-dev-portfolio.pages.dev"
            className="text-xs font-semibold text-muted transition-colors hover:text-ink"
          >
            ← Back to portfolio
          </a>
          <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            BigJDev Wallet<span className="text-accent">.</span>
          </h1>
          <p className="mt-1 text-sm text-muted">An interactive wallet demo. No real funds and no real blockchain.</p>
        </div>
        <ViewSwitch view={view} onChange={setView} />
      </header>

      <div key={view} className="fade-up flex w-full justify-center">
        {view === "mobile" ? (
          <MobileFrame>
            <WalletApp layout="mobile" />
          </MobileFrame>
        ) : (
          <DesktopFrame>
            <WalletApp layout="desktop" />
          </DesktopFrame>
        )}
      </div>
    </main>
  );
}
