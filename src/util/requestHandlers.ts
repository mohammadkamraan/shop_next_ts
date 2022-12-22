const rootApi: string = "http://fakestoreapi.com/";

interface sendOptions {
  method: "POST" | "PUT" | "DELETE";
  endPoint: string;
  body: any;
}

type FetcherHandler = (endPoint: string) => any;

type Request = (options: sendOptions) => any;

export const dataFetcher: FetcherHandler = async endPoint => {
  const jsonData = await fetch(rootApi + endPoint);
  const data = await jsonData.json();
  return data;
};

export const requestHandler: Request = async options => {
  let data;
  try {
    const jsonBody = JSON.stringify(options.body);
    const jsonData = await fetch(rootApi + options.endPoint, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    });
    data = jsonData.json();
  } catch (error) {
    data = error;
  }
  return data;
};
