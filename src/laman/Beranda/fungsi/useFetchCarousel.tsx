import axios from "axios"
import IDataCarousel from "data/IDataCarousel"
import { useEffect, useState } from "react"

const api: string = process.env.API_GARDIEN!

const useFetchCarousel: TUseFetchCarousel = () => {
  const [data, setData] = useState<IDataCarousel[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setEror] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const caroDapat = await fetchCarousel()
      if(caroDapat.data && (caroDapat.data.length > 0)){
        setData(caroDapat.data)
        setEror(false)
      }else{
        setData([])
        setEror(true)
      }
      setLoading(false)
    }
    fetch()
  }, [])
  return [data, loading, error]
}

type TUseFetchCarousel = () => [IDataCarousel[], boolean, boolean]

const fetchCarousel: TFetchCarousel = async () => {
  try{
    const resp = await axios.get(api + "/api-web/v2/utility/home/banner-web")
    if(resp.data.data){
      const carouselDapat = resp.data.data as IDataCarousel[]
      return {data: carouselDapat, success: true, error: null}
    }else{
      return {data: [], success: false, error: null}
    }
  }catch(e){
    if(e instanceof Error){
      return {data: [], success: false, error: e.message}
    }else{
      return {data: [], success: false, error: "tidak diketahui"}
    }
  }
}

type TFetchCarousel = () => Promise<{
  data: IDataCarousel[];
  success: boolean;
  error: null | string;
}>

export default useFetchCarousel