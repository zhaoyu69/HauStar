import React from 'react';
import styles from './SearchInput.less';

const SearchInput = () => {
  return (
    <div className={styles.search_wrapper}>
      <div role="button" className={styles.search}>
        <a className={styles.content}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={styles.search_icon}>
            <path fillOpacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
          </svg>
          <span className={styles.search_word}>搜索饿了么商家、商品名称</span>
        </a>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
};

export default SearchInput;
