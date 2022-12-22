const rootApi: string = "http://fakestoreapi.com/";

export interface sendOptions {
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
  let errorData;
  try {
    const jsonBody = JSON.stringify(options.body);
    const jsonData = await fetch(rootApi + options.endPoint, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonBody,
    });
    if (jsonData.ok) {
      errorData = null;
      data = await jsonData.json();
    } else {
      data = null;
      errorData = jsonData;
    }
  } catch (error) {
    errorData = error;
    data = null;
  }
  return [data, errorData];
};
