import { Header, CardHome, CartDetail, MetaData } from "../componant";
import styles from "../styles/Home.module.css";
import CardData from "../json/cardData.json";
import { useEffect, useState } from "react";
import Style from "../styles/cardHome.module.scss";
import { Config } from "../config";

function Home() {
  // console.log("data", data);
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [extra, setExtra] = useState(0);
  const DataFetch = async () => {
    try {
      const response = await fetch(`${Config.BaseUrl}/products`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setSearchData(data);
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
      <div className={Style.homeCardDiv}>
        {searchData.map((Item, Index) => {
          return (
            <CardHome
              item={Item}
              key={Index + "passDataToCardHome"}
              ChangeColor={() => {
                let LetsItem;
                const SizeOfSelection = searchData.filter(
                  (filterItem, filterIndex) => {
                    if (filterItem.isSelected) {
                      LetsItem = filterIndex;
                    }
                    return filterItem.isSelected;
                  }
                );
                if (
                  SizeOfSelection.length == 1 &&
                  Item.id != SizeOfSelection[0].id
                ) {
                  let newArray;
                  if (LetsItem > Index) {
                    // for Revers
                    newArray = searchData.map((ReversItem, ReversIndex) => {
                      if (ReversIndex < LetsItem && Index <= ReversIndex) {
                        ReversItem.isSelected = true;
                      }
                      // console.log("ReversItem", ReversItem);
                      return ReversItem;
                    });
                  } else {
                    // for Start
                    newArray = searchData.map((item, index) => {
                      if (index > LetsItem && Index >= index) {
                        item.isSelected = true;
                      }
                      // console.log("item", item);
                      return item;
                    });
                  }
                  setSearchData(newArray);
                  // console.log("newArray", newArray);
                } else {
                  searchData[Index].isSelected = !Item.isSelected;
                  setSearchData(searchData);
                  setExtra(extra + 1);
                }
              }}
            />
          );
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
