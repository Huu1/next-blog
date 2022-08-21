import { API } from "../config";

export const myLoader = ({ src }: any) => {
  return `${src}`;
};
export const coffeeNum = (number: number = 0) => {
  if (!number || number <= 5) return <>☕️</>;
  if (number <= 25) return <>☕️☕️</>;
  return <>☕️☕️☕️</>;
};
