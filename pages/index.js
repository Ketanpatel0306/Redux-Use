import { Header, CardHome, CartDetail, MetaData } from "../componant";
import styles from "../styles/Home.module.css";
import CardData from "../json/cardData.json";
import { useState } from "react";
import Style from "../styles/cardHome.module.scss";

export default function Home() {
  const [productData] = useState(CardData);
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
