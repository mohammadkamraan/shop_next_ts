import { axiosRequest } from "../axios/axios";

export interface sendOptions {
  method: "POST" | "PUT" | "DELETE";
  endPoint: string;
  body: any;
}

type FetcherHandler = (endPoint: string) => any;

type Request = (options: sendOptions) => any;

export const dataFetcher: FetcherHandler = async endPoint => {
  let response;
  let ErrorData;
  try {
    const { data } = await axiosRequest.get(endPoint);
    response = data;
  } catch (error) {
    ErrorData = error;
    response = null;
  }
  return [response, ErrorData];
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
