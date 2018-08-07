import React from 'react';
import { connect } from 'dva';
import Location from "../components/index/Location";
import SearchInput from "../components/index/SearchInput";
import FoodEntry from "../components/index/FoodEntry";
import Advertisements from "../components/index/Advertisements";
import ShopList from "../components/index/ShopList";
// import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div style={{ marginBottom: "1.3rem" }}>
      {/*定位*/}
      <Location />
      {/*搜索栏*/}
      <SearchInput />
      {/*美食分类*/}
      <FoodEntry />
      {/*广告*/}
      <Advertisements />
      {/*推荐商家列表*/}
      <ShopList />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
