import { axiosRequest } from "../axios/axios";

export interface RequestOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  data?: any;
  params?: { [key: string]: string };
}

type Request = <RequestData>(
  options: RequestOptions
) => Promise<[RequestData, any, number | null]>;

export const requestHandler: Request = async options => {
  let response;
  let requestStatus;
  let errorData;
  try {
    const { data, status } = await axiosRequest(options);
    response = data;
    requestStatus = status;
  } catch (error) {
    errorData = error;
    response = null;
    requestStatus = null;
  }
  return [response, errorData, requestStatus];
};
