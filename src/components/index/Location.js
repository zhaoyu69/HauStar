import React from 'react';
import styles from './Location.less';

const Location = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div aria-label="当前地址：糖果宠物会馆南京恒大绿洲北区，轻点两下重新选择" role="button" className={styles.address}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" className={styles.address_icon}><path fill="#FFF" fillRule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
          <span className={styles.address_word}>糖果宠物会馆南京恒大绿洲北区</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" className={styles.address_icon2}><path fill="#FFF" fillRule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
        </div>
      </div>
    </header>
  );
};

Location.propTypes = {
};

export default Location;
