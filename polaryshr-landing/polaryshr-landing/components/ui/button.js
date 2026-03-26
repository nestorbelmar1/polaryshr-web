import { cn } from "@/lib/utils";

export function Button({ className = "", variant = "default", size = "default", asChild = false, children, ...props }) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-opacity hover:opacity-95 border-0 cursor-pointer";
  const variants = {
    default: "bg-white text-slate-900",
    secondary: "bg-slate-100 text-slate-900"
  };
  const sizes = {
    default: "px-5 py-3 text-base",
    lg: "px-6 py-3 text-base"
  };

  const classes = cn(base, variants[variant] || variants.default, sizes[size] || sizes.default, className);

  if (asChild && children) {
    return cloneElementWithClass(children, classes, props);
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

function cloneElementWithClass(child, className, props) {
  return {
    ...child,
    props: {
      ...child.props,
      ...props,
      className: cn(child.props?.className || "", className)
    }
  };
}
