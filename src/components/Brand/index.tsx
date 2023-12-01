import React from "react";
import Image from "next/image";
import brand from "../../../public/logos/brand.png";

export const Brand: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "350px", height: "100px" }}>
      <Image
        src={brand}
        alt="Brand"
        priority
        // sizes="100vw"
        // width={700}
        // height={475}
        // style={{
        //   width: "100%",
        //   height: "auto",
        // }}

        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "none",
        }}
      />
    </div>
  );
};

// import styles from "./theme-image.module.css";
// import Image, { ImageProps } from "next/image";

// type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image
//         {...rest}
//         src={srcLight}
//         className={styles.imgLight}
//       />
//       <Image
//         {...rest}
//         src={srcDark}
//         className={styles.imgDark}
//       />
//     </>
//   );
// };

// .imgDark {
//   display: none;
// }

// @media (prefers-color-scheme: dark) {
//   .imgLight {
//     display: none;
//   }
//   .imgDark {
//     display: unset;
//   }
// }
