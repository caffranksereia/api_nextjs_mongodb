import { IrrobaApi } from "./api";
import { Product } from "../../interfaces/product.interfaces";
import {ErrorHandlerFunction} from "./helpers.services";

export type infoData ={
  id: string
  token: string
}

export const getProduct = async({
  token,
  id
}:infoData) => {
  const response = await IrrobaApi.get<Product>(
    `product/${id}`,
    {
      headers: {"Authorization":token}
    }
  ).catch(ErrorHandlerFunction);
  if(response){
    const data = {data: response.data, status: response.statu};
    return data
  }
}


