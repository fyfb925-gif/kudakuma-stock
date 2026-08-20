import { fetchGood } from '../../../services/good/fetchGood';
Page({
  data: { details: { images: [] }, navigation: { type: 'fraction' } },
  async onLoad(query) {
    const productId = query.productId || query.spuId;
    const details = await fetchGood(productId);
    this.setData({ details });
  },
  showCurImg(e) {
    const { images } = this.data.details;
    wx.previewImage({ current: images[e.detail.index], urls: images });
  },
  consultPurchase() {
    wx.showModal({
      title: '咨询购买',
      content: `请联系客服并提供商品编号：${this.data.details.productId}`,
      showCancel: false,
    });
  },
  copyProductId() {
    wx.setClipboardData({ data: this.data.details.productId });
  },
  onShareAppMessage() {
    const { productId, brand, name, images } = this.data.details;
    return {
      title: `${brand} ${name}`,
      imageUrl: images[0],
      path: `/pages/goods/details/index?productId=${productId}`,
    };
  },
});
