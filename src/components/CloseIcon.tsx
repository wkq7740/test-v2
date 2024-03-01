import { ThemeContext } from "@/utils/theme";
import Image from "next/image";
import close from "public/close.svg";
import closeWhite from "public/close-white.svg";
import { useContext } from "react";

export const CloseIcon = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        position: "relative",
        padding: "2px",
        borderRadius: "3px",
        background: themeContext.theme === "light" ? "#E8EFFD" : "#222C3C",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          src={themeContext.theme === "light" ? close : closeWhite}
          alt="close"
          layout="fill"
        />
      </div>
    </div>
  );
};
