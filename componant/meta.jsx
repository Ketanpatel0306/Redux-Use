import Head from "next/head";
import React, { useEffect, useState } from "react";
import metaData from "../json/meta.json";

export const MetaData = () => {
  const [save, setSave] = useState([]);
  let location = window.location.pathname;
  useEffect(() => {
    metaData.map(() => {
      let data = metaData.filter((i) => {
        return i.path == location;
      });
      setSave(data);
    });
  }, []);
  return (
    <Head>
      {save.map((item, index) => {
        return (
          <>
            <title>{item.title}</title>
            <meta name={item.description} content={item.content} />
            <meta name={item.keywords} content={item.SingleUpdate} />
            <meta name={item.viewport} content={item.widthDeviceWidth} />
          </>
        );
      })}
    </Head>
  );
};
