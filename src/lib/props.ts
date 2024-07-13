export interface Services {
  imgUrl?: string;
  title: string;
  desc: string;
  type?: string;
}

export interface Banner {
  appIcon: string;
  appName: string;
  videoUrl?: string;
  title: string;
  type: string;
}

export interface serviceSection {
  service: Banner;
  type: Services[];
}

export interface categoryList {
  icons: string;
  name: string;
  size: number;
}
export interface List {
  name: string;
  items: Child[];
}
export interface MenuList {
  name: string;
  list: List[];
}
export interface Child {
  name: string;
  link: string;
}
