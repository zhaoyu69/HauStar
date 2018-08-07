import React from 'react';
import styles from './ShopListItems.less';
/*
address_text	string	餐厅地址
agent_fee	float	配送费
busy_level	int	餐厅繁忙状态，具体参考：餐厅营业状态
city_id	int	城市id，详见附录
city_code	string	(废弃) 城市区号
close_description	string	关闭原因
deliver_amount	float	起送价
deliver_spent	int	2周内的平均送餐时间
description	string	餐厅描述
flavors	string	餐厅口味
image_url	string	餐厅Logo地址
invoice	int	是否支持开发票: 1, 是; 2, 否.
  invoice_min_amount	float	最小发票金额
is_bookable	int	是否支持预定
deliver_times	list<string>	预定时间选项 预订单说明
is_open	bool	是否正在营业, 在营业的前提下，再通过total_status字段判断商家的具体营业状态 餐厅整体营业状态
is_phone_hidden	int	是否隐藏电话号码
is_premium	int	是否品牌馆餐厅
is_time_ensure	int	(废弃) 是否支持超时赔付
is_on_time	int	是否支持准时达
time_ensure_full_description	string	(废弃) 超时赔付详细信息
latitude	float	纬度
longitude	float	经度
mobile	string	餐厅接收饿了么短信的号码
no_agent_fee_total	float	免配送费的最低消费额度
num_ratings	list<int>	餐厅评价，依次为1-5星评价的数目
order_mode	int	订单模式，详见附录
online_payment	int	是否支持在线支付
promotion_info	string	促销信息或者商家公告
recent_food_popularity	int	最近一个月美食销量
restaurant_name	string	餐厅名称
serving_time	list<string>	营业时间
support_online	bool	是否支持在线订餐
total_status	int	餐厅整体营业状态 餐厅整体营业状态
support_coupon	bool	餐厅是否支持抵价券
recent_order_num	int	最近一个月订单量
payment_method	int	餐厅支持的支付方式, 参考 餐厅支付方式说明
restaurant_license	json 餐厅执照，内部字段
business_license_image: 营业执照图片
catering_service_license_image: 餐厅服务许可证图片
support_insurance	bool	是否支持外卖保
new_restaurant	bool	是否新店
is_dist_rst	int	是否蜂鸟专送餐厅
activities	list	活动, 参考餐厅活动
name_for_url	string	店铺唯一名称alias
phone_list	list<string>	店铺联系方式
restaurant_id	int	店铺 ID
restaurant_url	string	饿了么 web 地址
category_ids	list<int>	餐厅分类, 参考餐厅分类
*/
const data = [{
  image_url:"//fuss10.elemecdn.com/e/1c/45064364b28a545e45855fb902c04jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
  is_premium: 1,
  restaurant_name:"香达克汉堡奶茶(殷巷店)",
  supports:[],
  num_ratings: 4.7,
  recent_food_popularity: 1239,
  delivery_mode: 1,
  deliver_amount: 20,
  agent_fee: 3,
  tags: ["汉堡", "品质联盟"],
  recommendTag: ["口碑人气好店"],
  activities: [{
    type: "满减",
    text: "满25减11，满36减15，满68减20"
  }, {
    type: "首单",
    text: "新用户下单立减17元"
  }]
}];

const ShopListItems = () => {
  return (
    <div className={styles.container}>
      {data.map((d, idx) => {
        return (
          <div className={styles.item_con} key={idx}>
            <div className={styles.shopInfo}>
              <div className={styles.logo}>
                <img src={d.image_url} alt=""/>
              </div>
              <div className={styles.main}>
                <div className={styles.line}>
                  <h3 className={styles.shopname}>
                    {d.is_premium?<i content="品牌" className={styles.premiumTag}>品牌</i>:null}
                    <span>{d.restaurant_name}</span>
                  </h3>
                  <ul className={styles.supportWrap}>
                    {d.supports.map(support => null)}
                  </ul>
                </div>
                <div className={styles.line}>
                  <div className={styles.rateWrap}>
                    <div className={styles.stars}>
                      <div className={styles.grays}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt=""/>
                      </div>
                      <div className={styles.rateActived} style={{width: "94%"}}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt=""/>
                      </div>
                    </div>
                    <span className={styles.rate}>{d.num_ratings}</span>
                    <span>月售{d.recent_food_popularity}单</span>
                  </div>
                  <div className={styles.delivery}>
                    <div content="蜂鸟专送" className={styles.deliveryIcon}>蜂鸟专送</div>
                  </div>
                </div>
                <div className={styles.line}>

                </div>
              </div>
            </div>
            <div className={styles.activityWrap}>

            </div>
          </div>
        )
      })}
    </div>
  );
};

ShopListItems.propTypes = {
};

export default ShopListItems;
