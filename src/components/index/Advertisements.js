import React from 'react';
import styles from './Advertisements.less';

const Advertisements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <h3 className={styles.title}>品质套餐</h3>
        <div className={styles.description}>搭配齐全吃得好</div>
        <div className={styles.linkto}>立即抢购 &gt;</div>
        <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/>
      </div>
      <div className={styles.rightBox}>
        <h3 className={styles.title} style={{color:"red"}}>限量抢购</h3>
        <div className={styles.description}>超值美味 9.9元起</div>
        <div className={styles.linkto} style={{color:"black"}}><span style={{color:"red"}}>460人</span>正在抢 &gt;</div>
        <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/>
      </div>
    </div>
  );
};

Advertisements.propTypes = {
};

export default Advertisements;
