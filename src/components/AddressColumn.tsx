import { ThemeContext } from "@/utils/theme";
import Image from "next/image";
import cosmos from "public/cosmos.png";
import editWhite from "public/edit-white.svg";
import edit from "public/edit.svg";
import { useContext } from "react";
import { ThemedText } from "./ThemedText";

interface AddressColumnProps {
  width: string;
  label: string;
  showEdit?: boolean;
}

export const AddressColumn = (props: AddressColumnProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      style={{
        width: props.width || "auto",
      }}
    >
      <ThemedText type="secondary" fontWeight={500}>
        {props.label}
      </ThemedText>

      <div
        style={{
          marginTop: "6px",
          background: themeContext.theme === "light" ? "#E8EFFD" : "#222C3C",
          borderRadius: "6px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          padding: "6px 10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              position: "relative",
              marginRight: "4px",
            }}
          >
            <Image src={cosmos} alt="close" layout="fill" />
          </div>

          <ThemedText type="secondary">cosmos...n3vn6</ThemedText>
        </div>

        {props.showEdit && (
          <div
            style={{
              minWidth: "16px",
              width: "16px",
              height: "16px",
              position: "relative",
              marginLeft: "10px",
            }}
          >
            <Image
              src={themeContext.theme === "light" ? edit : editWhite}
              alt="close"
              layout="fill"
            />
          </div>
        )}
      </div>
    </div>
  );
};
