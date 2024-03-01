import { ThemeContext } from "@/utils/theme";
import { useContext } from "react";
import { ThemedText } from "./ThemedText";
import { CloseIcon } from "./CloseIcon";
import Image from "next/image";
import arrowRight from "public/arrow-right.svg";
import arrowRightWhite from "public/arrow-right-white.svg";
import clock from "public/clock.svg";
import clockWhite from "public/clock-white.svg";
import { AddressColumn } from "./AddressColumn";
import cosmos from "public/cosmos.png";
import { Tag } from "./Tag";
import { CustomButton } from "./CustomButton";

export const DepositCard = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "500px",
        padding: "16px",
        border: "1px solid 6C86AD80",
        borderRadius: "10px",
        background: themeContext.theme === "light" ? "#ffffff" : "#000000",
        boxShadow: "5px 9px 37px -7px rgba(20,18,20,0.61)",
        WebkitBoxShadow: "5px 9px 37px -7px rgba(20,18,20,0.61)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemedText type="main" fontSize="18px" fontWeight={600}>
          Deposit ATOM
        </ThemedText>

        <CloseIcon />
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AddressColumn width="220px" label="From Cosmos Hub" />

        <div
          style={{
            width: "20px",
            height: "20px",
            position: "relative",
            marginTop: "25px",
          }}
        >
          <Image
            src={themeContext.theme === "light" ? arrowRight : arrowRightWhite}
            alt="close"
            layout="fill"
          />
        </div>

        <AddressColumn width="220px" label="To Osmosis" showEdit />
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ThemedText type="secondary" fontSize="16px" fontWeight={600}>
          Select amount
        </ThemedText>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ThemedText type="secondary">Available</ThemedText>

          <div style={{ marginLeft: "4px" }}>
            <ThemedText type="secondary" fontWeight={600}>
              2 ATOM
            </ThemedText>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "6px",
          border: "1px solid #6C86AD80",
          borderRadius: "6px",
          height: "60px",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            borderRight: "1px solid #6C86AD80",
            width: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              position: "relative",
            }}
          >
            <Image src={cosmos} alt="close" layout="fill" />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            margin: "0 12px",
            justifyContent: "space-between",
          }}
        >
          <input
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontWeight: 600,
              color: themeContext.theme === "light" ? "#222C3C" : "#ffffff",
              fontSize: "16px",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ThemedText type="main" fontSize="12px" fontWeight={600}>
              ATOM
            </ThemedText>

            <div style={{ marginLeft: "4px" }}>
              <ThemedText type="secondary" fontSize="12px">
                ~ $1,013
              </ThemedText>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div>
          <Tag>Max</Tag>
        </div>

        <div style={{ marginLeft: "12px" }}>
          <Tag>1/2</Tag>
        </div>

        <div style={{ marginLeft: "12px" }}>
          <Tag>1/3</Tag>
        </div>
      </div>

      <div
        style={{
          background: themeContext.theme === "light" ? "#E8EFFD" : "#222C3C",
          marginTop: "24px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          padding: "10px 12px",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            position: "relative",
          }}
        >
          <Image
            src={themeContext.theme === "light" ? clock : clockWhite}
            alt="close"
            layout="fill"
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "12px",
          }}
        >
          <ThemedText type="secondary">Estimated Time:</ThemedText>

          <div style={{ marginLeft: "4px" }}>
            <ThemedText type="main" fontWeight={600}>
              20 seconds
            </ThemedText>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "12px",
        }}
      >
        <CustomButton>Transfer</CustomButton>
      </div>

      <div
        style={{
          marginBottom: "12px",
          marginTop: "12px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ThemedText type="secondary">Cancel</ThemedText>
      </div>
    </div>
  );
};
