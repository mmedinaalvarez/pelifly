import React from "react";
// Componets
import ItemListcontainer from "../../components/ItemListContainer/ItemListcontainer";
import SearchMovie from "../../components/SearchMovie/SearchMovie";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      {/* <SearchMovie /> */}
      <ItemListcontainer />
    </div>
  );
};

export default HomePage;
