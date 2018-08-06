import React from 'react';
import styles from './FoodEntry.less';
import { Carousel, WingBlank } from 'antd-mobile';
import _ from 'lodash';

const data=[{
  src: "//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "美食",
  link: ""
},{
  src: "//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "商超便利",
  link: ""
},{
  src: "//fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "午餐",
  link: ""
},{
  src: "//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "水果",
  link: ""
},{
  src: "//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "医疗健康",
  link: ""
},{
  src: "//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "大牌5折",
  link: ""
},{
  src: "//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "浪漫鲜花",
  link: ""
},{
  src: "//fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "厨房生鲜",
  link: ""
},{
  src: "//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "披萨意面",
  link: ""
},{
  src: "//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "地方小吃",
  link: ""
},{
  src: "//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "麻辣烫",
  link: ""
},{
  src: "//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
  word: "地方菜系",
  link: ""
}];

const FoodEntry = () => {
  //一页10个入口
  const chunk_data = _.chunk(data, 10);
  return (
    <div className={styles.food_wrap}>
      <WingBlank style={{ margin:0 }}>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {chunk_data.map((vals, idx) => (
            <ul key={idx} className={styles.food_con}>
              {vals.map((v, vidx) => (
                <li key={vidx} className={styles.food_item}>
                  <a href={v.link}>
                    <img src={v.src}/>
                    <span>{v.word}</span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  );
};

FoodEntry.propTypes = {
};

export default FoodEntry;
