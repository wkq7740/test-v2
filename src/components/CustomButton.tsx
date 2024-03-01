import { ThemeContext } from "@/utils/theme";
import { useContext } from "react";

type CustomButtonProps = React.PropsWithChildren<{}>;

export const CustomButton = (props: CustomButtonProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      style={{
        background: themeContext.theme === "light" ? "#222C3C" : "#E8EFFD",
        color: themeContext.theme === "light" ? "#E8EFFD" : "#222C3C",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {props.children}
    </div>
  );
};
