import axios from "axios"
import IDataProduct from "data/IDataProduct"

const api = "https://gardien.tokodistributor.co.id"

const fetchProduct: TFetchProduct = async (lamanTerload) => {
  try{
    const resp = await axios
    .get(api + `/api-web/v2/product-recommendation?page=${lamanTerload + 1}`)
    if(resp.data.data){
      const kategDapat = resp.data.data as IDataProduct[]
      return {data: kategDapat,lamanTerload: lamanTerload + 1, success: true, error: null}
    }else{
      return {data: [], lamanTerload: lamanTerload, success: false, error: null}
    }
  }catch(e){
    if(e instanceof Error){
      return {data: [], lamanTerload: lamanTerload, success: false, error: e.message}
    }else{
      return {data: [], lamanTerload: lamanTerload, success: false, error: "tidak diketahui"}
    }
  }
}

type TFetchProduct = (lamanTerload: number) => Promise<{
  data: IDataProduct[];
  lamanTerload: number;
  success: boolean;
  error: null | string;
}>

export default fetchProduct