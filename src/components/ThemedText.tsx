import { ThemeContext } from "@/utils/theme";
import { useContext } from "react";

type ThemedTextProps = React.PropsWithChildren<{
  type?: "main" | "secondary";
  fontSize?: string;
  fontWeight?: number;
}>;

export const ThemedText = (props: ThemedTextProps) => {
  const themeContext = useContext(ThemeContext);

  const getColor = () => {
    if (props.type === "main") {
      return themeContext.theme === "light" ? "#222C3C" : "#ffffff";
    } else {
      return themeContext.theme === "light" ? "#6C86AD" : "#FFFFFF80";
    }
  };

  return (
    <div
      style={{
        color: getColor(),
        fontSize: props.fontSize || "14px",
        fontWeight: props.fontWeight || 400,
        minWidth: 0,
      }}
    >
      {props.children}
    </div>
  );
};
