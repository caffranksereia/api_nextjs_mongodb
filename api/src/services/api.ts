import axios from "axios";


const IrrobaApi = axios.create({
  baseURL:
  process.env.REACT_APP_IRROBA || "https://api.irroba.com.br/v1/"
});

IrrobaApi.interceptors.response.use(
  (response) => response,
  (error) =>{
    if (error.response.status === 401 || error.response.status === 403){
      window.location.href = "/"
    }
  }
);


const ProductApi = axios.create({
  baseURL:
  process.env.REACT_APP_PRODUCT || "mongodb://localhost:27017"
});

ProductApi.interceptors.response.use(
  (response) => response,
  (error) =>{
    if (error.response.status === 401 || error.response.status === 403){
      window.location.href = "/"
    }
  }
);

export {IrrobaApi}
