import React from 'react';
import { connect } from 'dva';
import Location from "../components/index/Location";
import SearchInput from "../components/index/SearchInput";
import FoodEntry from "../components/index/FoodEntry";
// import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div>
      {/*定位*/}
      <Location />
      {/*搜索栏*/}
      <SearchInput />
      {/*美食分类*/}
      <FoodEntry />
      {/*广告*/}
      {/*推荐商家列表*/}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
