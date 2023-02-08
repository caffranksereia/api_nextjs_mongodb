import { ResponseType } from "axios";
import { ProductError } from "../interfaces";

export const ErrorHandlerFunction = (err: any) => {
  if (err instanceof Error) {
    let data;
    const responseError: ProductError = err;
    if (responseError.response) {
      data = {
        data: responseError.response.data,
        status: responseError.response.status,
      };
    } else {
      data = { data: "Error during request", status: 500 };
    }
    return data;
  }
};

export const ErrorNoResponse = (err: any) => {
  if (err instanceof Error) {
    let data;
    const responseError: ProductError = err;
    if (responseError.response) {
      data = {
        status: responseError.response.status,
      };
    } else {
      data = { data: "Error during request", status: 500 };
    }
    return data;
  }
};

interface HeadersConfigsProps {
  isGradesToken?: boolean;
  timeout?: number;
  params?: object;
  blob?: boolean;
  responseType?: ResponseType;
}

export const Headers = (token: string, headersConfig?: HeadersConfigsProps) => {
  const type = headersConfig?.isGradesToken ? "Token" : "Bearer";

  if (headersConfig?.timeout) {
    return {
      headers: {
        Authorization: `${type} ${token}`,
      },
      timeout: headersConfig.timeout,
    };
  } else if (headersConfig?.params) {
    return {
      params: headersConfig.params,
      headers: {
        Authorization: `${type} ${token}`,
      },
    };
  } else if (headersConfig?.blob) {
    return {
      headers: {
        Authorization: `${type} ${token}`,
        "Content-Type": "blob",
      },
    };
  } else if (headersConfig?.responseType) {
    return {
      headers: {
        Authorization: `${type} ${token}`,
      },
      responseType: headersConfig.responseType,
    };
  } else {
    return {
      headers: {
        Authorization: `${type} ${token}`,
      },
    };
  }
};
