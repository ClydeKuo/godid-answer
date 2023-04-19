export interface BaseInfo {
  id: string;
  slug: string;
  num_name: number;
  name: { en: string };
  summary:{en:string,"zh-CN"?:string}|null
}

export interface CollectionInfo extends BaseInfo {
  subs: CollectionInfo[];
}
export interface SubDetail extends BaseInfo {
  names: string[];
}
export interface ConfigItem extends SubDetail {
  classes: string[];
}