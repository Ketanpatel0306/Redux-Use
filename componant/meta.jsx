import Head from "next/head";
import React, { useEffect, useState } from "react";
import metaData from "../json/meta.json";

export const MetaData = () => {
  const [save, setSave] = useState([]);
  let location = window.location.pathname;
  useEffect(() => {
    metaData.map(async () => {
      try {
        let data = await metaData.filter((i) => {
          return i.path == location;
        });
        setSave(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        console.log("Error ", error);
      }
    });
  }, []);
  return (
    <Head>
      {save.map((item, index) => {
        return (
          <>
            <title>{item.title}</title>
            <meta name="description" content={item.content} />
            <meta name="keywords" content={item.SingleUpdate} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </>
        );
      })}
    </Head>
  );
};
