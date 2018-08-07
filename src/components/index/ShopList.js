import React from 'react';
import ShopListTitle from "./ShopList/ShopListTitle";
import ShopListFilter from "./ShopList/ShopListFilter";
import ShopListItems from "./ShopList/ShopListItems";

const ShopList = () => {
  return (
    <div>
      <ShopListTitle />
      <ShopListFilter />
      <ShopListItems />
    </div>
  );
};

ShopList.propTypes = {
};

export default ShopList;
