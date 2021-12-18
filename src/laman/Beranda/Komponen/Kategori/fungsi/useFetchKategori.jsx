import axios from "axios"
import { useEffect, useState } from "react"

const api = "https://gardien.tokodistributor.co.id"

const useFetchKategori = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setEror] = useState(false)
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const kategDapat = await fetchKategori()
      if(kategDapat.data && (kategDapat.data.length > 0)){
        setData(kategDapat.data)
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

const fetchKategori = async () => {
  try{
    const resp = await axios.get(api + "/api-web/v2/utility/home/box-category?with_staple=true")
    if(resp.data.data){
      const kategDapat = resp.data.data 
      return {data: kategDapat, success: true, error: null}
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

export default useFetchKategori