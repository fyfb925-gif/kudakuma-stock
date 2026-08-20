import { fetchGoodsList } from '../../services/good/fetchGoods';
Page({
  data: { goodsList: [], pageLoading: true },
  onLoad() {
    this.loadProducts();
  },
  onShow() {
    this.getTabBar().init();
  },
  async loadProducts() {
    const goodsList = await fetchGoodsList(0, 20);
    this.setData({ goodsList, pageLoading: false });
    wx.stopPullDownRefresh();
  },
  onPullDownRefresh() {
    this.loadProducts();
  },
  navToSearchPage() {
    wx.navigateTo({ url: '/pages/goods/search/index' });
  },
  goodListClickHandle(e) {
    const { productId } = this.data.goodsList[e.detail.index];
    wx.navigateTo({ url: `/pages/goods/details/index?productId=${productId}` });
  },
});
