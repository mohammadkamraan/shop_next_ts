import { axiosRequest } from "../axios/axios";

export interface sendOptions {
  method: "POST" | "PUT" | "DELETE";
  endPoint: string;
  body: any;
}

type FetcherHandler = (endPoint: string) => any;

type Request = (options: sendOptions) => any;

export const dataFetcher: FetcherHandler = async endPoint => {
  const { data } = await axiosRequest.get(endPoint);
  return data;
};

export const requestHandler: Request = async options => {
  let response;
  let errorData;
  try {
    const { data } = await axiosRequest({
      url: options.endPoint,
      method: options.method,
      data: options.body,
    });
    response = data;
  } catch (error) {
    errorData = error;
    response = null;
  }
  return [response, errorData];
};
