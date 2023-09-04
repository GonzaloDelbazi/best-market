import { useEffect, useState } from "react";
import fakeStore from "../../api/apiStore";
import Card from "../../components/card/card";
import { item } from "../../interfaces/fakeApiInterface";
import "./home.scss";

export const Home = () => {
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = async () => {
    const data = await fakeStore.getItems();
    setItems(data);
  };

  return (
    <>
      <h1>CARROUSEL</h1>
      {items.length == 0 && <div>CARGANDO...</div>}
      <div className="listed">
        {items.map((item, index) => {
          return (
            <Card
              key={`${item.title}-${index}`}
              title={item.title}
              description={item.description}
              img={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};
