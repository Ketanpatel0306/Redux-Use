import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Style from "../styles/header.module.scss";
import { MetaData } from "./meta";

export const Header = (props) => {
  const getData = useSelector((state) => state.CartReducer.cart);
  return (
    <div>
      <MetaData />
      <div style={{ backgroundColor: "red" }} className={Style.herderMainDiv}>
        <Link href="/">
          <h2>{props.title} </h2>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link href="/single-card">
            <h2>SingleCard : {getData !== undefined ? getData.length : ""} </h2>
          </Link>
          <Link href="/new-data" style={{ marginLeft: "10px" }}>
            <h2>NewData</h2>
          </Link>
          <Link
            href={`/dynamic/index`}
            // as="/dynamic/routes/name"
            style={{ marginLeft: "10px" }}
          >
            <h2>dynamic</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

// const Link = ({ children, href }) => {
//   const router = useRouter();
//   return (
//     <a
//       href="#"
//       onClick={(e) => {
//         e.preventDefault();
//         router.push(href);
//       }}
//     >
//       {children}
//     </a>
//   );
// };
