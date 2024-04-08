export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface GTodo<T> {
  id: number;
  text: T;
  done: boolean;
}

export interface MatzipForm {
  imgSrc: string;
  title: string;
  desc: string;
  idx: number;
}
