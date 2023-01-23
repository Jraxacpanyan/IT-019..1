import React from "react";
import { useContext } from "react";
import AppContext from "../context";
import Card from "../components/Card/Card";

function Favorites() {
  const { favorites, onAddToFavorite } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="sneakers d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={(obj) => onAddToFavorite(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
