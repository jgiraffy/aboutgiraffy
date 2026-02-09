interface FlowDividerProps {
  variant?: "light" | "dark" | "accent";
}

const FlowDivider = ({ variant = "light" }: FlowDividerProps) => {
  const bgMap = {
    light: "bg-background",
    dark: "bg-primary",
    accent: "bg-secondary",
  };

  const dotColor = {
    light: "bg-primary/20",
    dark: "bg-primary-foreground/20",
    accent: "bg-primary/20",
  };

  const lineColor = {
    light: "bg-primary/10",
    dark: "bg-primary-foreground/10",
    accent: "bg-primary/10",
  };

  const chevronColor = {
    light: "text-primary/30",
    dark: "text-primary-foreground/30",
    accent: "text-primary/30",
  };

  return (
    <div className={`${bgMap[variant]} flex flex-col items-center py-4 gap-1`}>
      <div className={`w-px h-6 ${lineColor[variant]}`} />
      <div className={`w-1.5 h-1.5 rounded-full ${dotColor[variant]}`} />
      <div className={`w-px h-4 ${lineColor[variant]}`} />
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        className={chevronColor[variant]}
      >
        <path
          d="M1 1L8 8L15 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FlowDivider;
