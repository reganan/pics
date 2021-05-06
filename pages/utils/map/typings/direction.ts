/**
 * @interface IParamsLocationItem
 */
interface IParamsLocationItem {
  longitude: string | number; // 经度
  latitude: string | number; // 纬度
}

/**
 * 距离
 *
 * @interface IResultDirectionItem
 */
interface IResultDirectionItem extends IParamsLocationItem {
  distance: string; // 距离
}

export { IParamsLocationItem, IResultDirectionItem };
