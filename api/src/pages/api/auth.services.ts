import { IrrobaApi } from "./api";
import {ErrorHandlerFunction} from "./helpers.services"

export const getToken = async({
  email,
  password,
}:{
  email: string;
  password: string;
}) => {
  const response = await IrrobaApi.post<{
    refresh: string;
    access: string
  }>(
    "v1/getToken",
    {email,password},
    {
      headers: {"Content-Type": "application/json" }
    }
  ).catch(ErrorHandlerFunction);
  if(response) {
    const data = {
      data: response.data,
      status: response.status
    };
    return data;
  }
}
