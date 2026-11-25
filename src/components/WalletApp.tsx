type Props = {
  layout: "mobile" | "desktop";
};

// The wallet screens are added here step by step.
export default function WalletApp({ layout }: Props) {
  return (
    <div className="flex h-full min-h-[480px] flex-col items-center justify-center gap-4 p-8 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-accent text-xl font-extrabold">B</span>
      <h2 className="text-xl font-bold">Your wallet, simple and safe</h2>
      <p className="max-w-xs text-sm text-muted">
        The wallet screens are being added step by step. You are looking at the {layout} layout.
      </p>
    </div>
  );
}
