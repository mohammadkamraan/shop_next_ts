import { useState } from "react";
import { requestHandler, RequestOptions } from "../util/requestHandlers";

export const useSend = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [errorData, setErrorData] = useState<any>(null);

  const sender = async (options: RequestOptions) => {
    setData(null);
    setErrorData(null);
    setLoading(true);
    const [data, error] = await requestHandler(options);
    setData(data);
    setErrorData(error);
    setLoading(false);
  };

  return [loading, data, errorData, sender] as const;
};
