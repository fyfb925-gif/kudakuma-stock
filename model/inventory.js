const images = {
  helmet: 'https://tdesign.gtimg.com/miniprogram/template/retail/goods/nz-09a.png',
  jersey: 'https://tdesign.gtimg.com/miniprogram/template/retail/goods/nz-08a.png',
  shoes: 'https://tdesign.gtimg.com/miniprogram/template/retail/goods/nz-08b.png',
  gloves: 'https://tdesign.gtimg.com/miniprogram/template/retail/goods/muy-3b.png',
  glasses: 'https://tdesign.gtimg.com/miniprogram/template/retail/goods/mz-20a1.png',
};

export const inventoryProducts = [
  {
    productId: 'KK-HELMET-001',
    brand: 'OGK KABUTO',
    name: 'AERO-R2 公路骑行头盔',
    model: 'AERO-R2',
    category: '头盔',
    color: '哑光黑',
    size: 'M/L',
    priceRmb: 1680,
    stock: 3,
    stockStatus: '少量',
    description: '日本公路骑行头盔，兼顾空气动力表现与长途通风需求。',
    images: [images.helmet],
  },
  {
    productId: 'KK-JERSEY-002',
    brand: 'PEARL IZUMI',
    name: '竞赛版短袖骑行服',
    model: '621-B',
    category: '骑行服',
    color: '深海蓝',
    size: 'L',
    priceRmb: 720,
    stock: 8,
    stockStatus: '有货',
    description: '贴合剪裁的夏季短袖骑行服，适合公路训练及日常骑行。',
    images: [images.jersey],
  },
  {
    productId: 'KK-SHOES-003',
    brand: 'SHIMANO',
    name: 'RC7 公路锁鞋',
    model: 'SH-RC703',
    category: '锁鞋',
    color: '白色',
    size: '42',
    priceRmb: 1380,
    stock: 1,
    stockStatus: '仅1件',
    description: '双旋钮公路锁鞋，提供稳定包裹与高效踩踏支撑。',
    images: [images.shoes],
  },
  {
    productId: 'KK-GLOVE-004',
    brand: 'intro',
    name: 'Trigger3 全指手套',
    model: 'Trigger3',
    category: '手套',
    color: '黑/红',
    size: 'M',
    priceRmb: 320,
    stock: 0,
    stockStatus: '已售',
    description: '适合春秋季使用的全指骑行手套，掌部带缓震设计。',
    images: [images.gloves],
  },
  {
    productId: 'KK-GLASS-005',
    brand: 'SWANS',
    name: 'E-NOX EIGHT8 骑行眼镜',
    model: 'EN8-0714',
    category: '眼镜',
    color: '烟灰',
    size: '均码',
    priceRmb: 980,
    stock: 0,
    stockStatus: '可预订',
    description: '轻量无框运动眼镜，可预订，日本到货周期需咨询。',
    images: [images.glasses],
  },
];

export function toListItem(product) {
  return {
    ...product,
    spuId: product.productId,
    thumb: product.images[0],
    title: `${product.brand} ${product.name}`,
    price: product.priceRmb * 100,
    tags: [product.stockStatus, product.size],
  };
}

export function findProduct(productId) {
  return inventoryProducts.find((item) => item.productId === productId) || inventoryProducts[0];
}
