import { ThemeContext } from "@/utils/theme";
import { useContext } from "react";

type TagProps = React.PropsWithChildren<{}>;

export const Tag = (props: TagProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      style={{
        background: themeContext.theme === "light" ? "#E8EFFD" : "#222C3C",
        color: themeContext.theme === "light" ? "#6C86AD" : "#FFFFFF80",
        borderRadius: "3px",
        alignItems: "center",
        padding: "2px 8px",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "12px",
      }}
    >
      {props.children}
    </div>
  );
};
