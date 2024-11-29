import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const Button = ({ variant, children, icon, to }) => {
  const ButtonStyle = cva(
    [
      "flex",
      "justify-center",
      "items-center",
      "gap-1",
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
            "px-6",
            "py-2",
          ],
          light: [
            "bg-white",
            "text-black",
            "border",
            "border-black",
            "hover:bg-black",
            "hover:text-white",
            "px-6",
            "py-2",
          ],
          dark: [
            "bg-black",
            "text-white",
            "border",
            "border-black",
            "hover:bg-white",
            "hover:text-black",
            "px-6",
            "py-2",
          ],
          dashboard: [
            "bg-white",
            "rounded-[5px]",
            "border-[0.3px]",
            "border-black",
            "w-[160px]",
            "py-1",
          ],
          dashboardGray: [
            "bg-[#B6BFC3]",
            "rounded-[5px]",
            "border-[0.3px]",
            "border-[#B6BFC3]",
            "w-[160px]",
            "py-1",
          ],
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  const variantClass = ButtonStyle({ variant });

  return (
    <div className={variantClass}>
      {icon}
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default Button;
