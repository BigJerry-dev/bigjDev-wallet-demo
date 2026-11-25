export type View = "mobile" | "desktop";

type Props = {
  view: View;
  onChange: (view: View) => void;
};

const options: { value: View; label: string; icon: React.ReactNode }[] = [
  {
    value: "mobile",
    label: "Mobile",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
  },
  {
    value: "desktop",
    label: "Desktop",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
];

// Hidden on small screens, where the app already fills the whole phone.
export default function ViewSwitch({ view, onChange }: Props) {
  return (
    <div
      role="group"
      aria-label="Preview size"
      className="hidden md:flex items-center bg-white border border-line p-1 rounded-full text-xs font-semibold"
    >
      {options.map((option) => {
        const active = option.value === view;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
              active ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {option.icon}
            </svg>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
