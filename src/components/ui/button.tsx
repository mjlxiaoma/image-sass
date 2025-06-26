import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// 添加基本样式
const baseStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  outline: none;
`;

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[hsl(var(--ring))] focus-visible:ring-[hsl(var(--ring))]/50 focus-visible:ring-[3px] aria-invalid:ring-[hsl(var(--destructive))]/20 dark:aria-invalid:ring-[hsl(var(--destructive))]/40 aria-invalid:border-[hsl(var(--destructive))]",
  {
    variants: {
      variant: {
        default:
          "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-xs hover:bg-[hsl(var(--primary))]/90",
        destructive:
          "bg-[hsl(var(--destructive))] text-white shadow-xs hover:bg-[hsl(var(--destructive))]/90 focus-visible:ring-[hsl(var(--destructive))]/20 dark:focus-visible:ring-[hsl(var(--destructive))]/40 dark:bg-[hsl(var(--destructive))]/60",
        outline:
          "border border-[hsl(var(--border))] bg-[hsl(var(--background))] shadow-xs hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] dark:bg-[hsl(var(--input))]/30 dark:border-[hsl(var(--input))] dark:hover:bg-[hsl(var(--input))]/50",
        secondary:
          "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-xs hover:bg-[hsl(var(--secondary))]/80",
        ghost:
          "hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] dark:hover:bg-[hsl(var(--accent))]/50",
        link: "text-[hsl(var(--primary))] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  // 根据变体设置样式
  const getStyle = () => {
    let style: React.CSSProperties = {};
    
    // 默认样式
    if (variant === "default" || !variant) {
      style.backgroundColor = "hsl(var(--primary))";
      style.color = "hsl(var(--primary-foreground))";
    }
    
    // outline样式
    else if (variant === "outline") {
      style.border = "1px solid hsl(var(--border))";
      style.backgroundColor = "hsl(var(--background))";
    }
    
    // 设置尺寸
    if (size === "default" || !size) {
      style.height = "2.25rem"; // h-9
      style.padding = "0.5rem 1rem"; // px-4 py-2
    } else if (size === "sm") {
      style.height = "2rem"; // h-8
      style.padding = "0.375rem 0.75rem"; // px-3 py-1.5
    } else if (size === "lg") {
      style.height = "2.5rem"; // h-10
      style.padding = "0.5rem 1.5rem"; // px-6 py-2
    }
    
    return style;
  };

  return (
    <Comp
      data-slot="button"
      className={cn(className)}
      style={{...getStyle()}}
      {...props}
    />
  )
}

export { Button, buttonVariants }
