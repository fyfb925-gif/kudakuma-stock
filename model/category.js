const image = 'https://tdesign.gtimg.com/miniprogram/template/retail/category/category-default.png';
const categories = ['头盔', '骑行服', '锁鞋', '手套', '眼镜'];
export function getCategoryList() {
  return categories.map((name, index) => ({
    groupId: `cycling-${index}`,
    name,
    thumbnail: image,
    children: [
      {
        groupId: `cycling-group-${index}`,
        name,
        thumbnail: image,
        children: [{ groupId: `cycling-item-${index}`, name, thumbnail: image }],
      },
    ],
  }));
}
