import axios from "axios"
import { useEffect, useState } from "react"

const api = "https://gardien.tokodistributor.co.id"

const useFetchCarousel = () => {
  const [data, setData] = useState([])
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

const fetchCarousel = async () => {
  try{
    const resp = await axios.get(api + "/api-web/v2/utility/home/banner-web")
    if(resp.data.data){
      const carouselDapat = resp.data.data
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

export default useFetchCarousel