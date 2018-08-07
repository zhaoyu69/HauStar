import React from 'react';
import styles from './ShopListFilter.less';

const ShopListFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filter_item}>
        <span>综合排序</span>
        <svg viewBox="0 0 72 32" className={styles.dropdown_icon}><path d="M36 32l36-32h-72z"></path></svg>
      </div>
      <div className={styles.filter_item}>
        <span>距离最近</span>
      </div>
      <div className={styles.filter_item}>
        <span>品质联盟</span>
      </div>
      <div className={styles.filter_item}>
        <span>筛选</span>
        <svg viewBox="0 0 26 26" className={styles.filter_icon}><path d="M9.001 15.009V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.981l7.788-10.01a1 1 0 0 0-1.578-1.228l-8 10.28a1 1 0 0 0-.21.615V22h-4v-7.324a1 1 0 0 0-.2-.6L4.001 5h14a1 1 0 0 0 0-2H2a1 1 0 0 0-.8 1.6L9 15.009z"></path></svg>
      </div>
    </div>
  );
};

ShopListFilter.propTypes = {
};

export default ShopListFilter;
