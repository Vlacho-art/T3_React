import { useEffect, useState } from "react";

export const useFavorites = () => {

  const [favorites, setFavorites] = useState(() => {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {

    const updateFavorites = () => {
      const data = localStorage.getItem("favorites");
      setFavorites(data ? JSON.parse(data) : []);
    };

    window.addEventListener("favoritesUpdated", updateFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", updateFavorites);
    };

  }, []);

  const addFavorite = (product) => {

    const exist = favorites.find((item) => item.id === product.id);

    if (!exist) {

      const newFavorites = [...favorites, product];

      setFavorites(newFavorites);

      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      window.dispatchEvent(new Event("favoritesUpdated"));
    }
  };

  const removeFavorite = (id) => {

    const newFavorites = favorites.filter((item) => item.id !== id);

    setFavorites(newFavorites);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};