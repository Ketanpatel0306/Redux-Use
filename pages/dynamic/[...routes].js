import { useRouter } from "next/router";
import React from "react";

const RoutesNext = () => {
  const router = useRouter();
  const data = router.query.routes || [];
  // const [state, city, store_id] = data;
  // const slug = router.query.slug || [];
  // console.log("router", router.query.routes);
  return <div>dynamic Routes {data.join("/")}</div>;
};

export default RoutesNext;
