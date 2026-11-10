import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

const variants = {
  primary:
    "bg-accent text-white hover:bg-[#1d6ad4] shadow-[0_8px_18px_-12px_rgba(40,120,229,0.9)]",
  navy: "bg-navy text-white hover:bg-navy-2",
  outline:
    "border border-navy/20 bg-white text-navy hover:border-accent hover:text-accent",
  invert: "bg-white text-navy hover:bg-paper",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
} as const;

const sizes = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-[0.95rem]",
} as const;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };

type ButtonAsLink = Common & { to: string; href?: undefined };

type ButtonAsAnchor = Common & { href: string; to?: undefined };

export function Button(props: ButtonAsButton | ButtonAsLink | ButtonAsAnchor) {
  const {
    children,
    className,
    variant = "primary",
    size = "md",
  } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    const { href } = props;
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  const native = props as ButtonAsButton;
  return (
    <button
      type={native.type ?? "button"}
      className={classes}
      disabled={native.disabled}
      onClick={native.onClick}
      aria-busy={native["aria-busy"]}
      aria-expanded={native["aria-expanded"]}
    >
      {children}
    </button>
  );
}
