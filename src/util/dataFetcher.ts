const rootApi: string = "http://fakestoreapi.com/";

type fetcherHandler = (endPoint: string) => any;

export const dataFetcher: fetcherHandler = async endPoint => {
  const jsonData = await fetch(rootApi + endPoint);
  const data = await jsonData.json();
  return data;
};
