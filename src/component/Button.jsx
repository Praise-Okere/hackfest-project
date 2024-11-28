import { cva } from "class-variance-authority";

const Button = ({ variant, children, icon }) => {
  const ButtonStyle = cva(
    [
      "flex",
      "justify-center",
      "items-center",
      "gap-5",
      "px-6",
      "py-[10px]",
      "rounded-full",
      "text-nowrap",
      "cursor-pointer",
    ],
    {
      variants: {
        variant: {
          default: ["px-0", "py-0"],
          primary: [
            "bg-primary",
            "hover:border",
            "hover:border-black",
            "hover:bg-white",
          ],
          light: [
            "bg-white",
            "text-black",
            "border",
            "border-black",
            "hover:bg-black",
            "hover:text-white",
          ],
          dark: [
            "bg-black",
            "text-white",
            "border",
            "border-black",
            "hover:bg-white",
            "hover:text-black",
          ],
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  const variantClass = ButtonStyle({ variant });

  return <div className={variantClass}>{children}</div>;
};

export default Button;
