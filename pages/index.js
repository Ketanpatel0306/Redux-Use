import { Header, CardHome, CartDetail, MetaData } from "../componant";
import styles from "../styles/Home.module.css";
import CardData from "../json/cardData.json";
import { useEffect, useState } from "react";
import Style from "../styles/cardHome.module.scss";
import { Config } from "../config";

function Home() {
  // console.log("data", data);
  const [productData, setProductData] = useState([]);
  const DataFetch = async () => {
    try {
      const response = await fetch(`${Config.BaseUrl}/products`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      if (error.name === "AbortError") return;
      console.log("Error ", error);
    }
  };
  useEffect(() => {
    DataFetch();
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <div className={Style.homeCardDiv}>
        {productData.map((item, index) => {
          return <CardHome item={item} key={index + "passDataToCardHome"} />;
        })}
      </div>
    </div>
  );
}
// Home.getInitialProps = async () => {
//   const response = await fetch(`${Config.BaseUrl}/products`);
//   const data = await response.json();
//   // console.log("response", data);
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// };

export default Home;
