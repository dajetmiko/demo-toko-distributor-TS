import { useEffect, useRef, useState } from "react"
import fetchProduct from "./fetchProduct"
import useDalamLayar from "./useDalamLayar"


const useFetchProduct = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setEror] = useState(false)
  const [lamanTerload, setLamanTerload] = useState(0)

  const refDataTerakhir = useRef(null)
  const dataTerakhirDalamLayar = useDalamLayar(refDataTerakhir)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const prodDapat = await fetchProduct(lamanTerload)
      if(prodDapat.data && (prodDapat.data.length > 0)){
        lamanTerload === 0 ? setData(prodDapat.data) : setData(data.concat(prodDapat.data))
        setEror(false)
      }else{
        lamanTerload === 0 ? setData([]) : setData(prodDapat.data)
        setEror(true)
      }
      setLamanTerload(prodDapat.lamanTerload)
      setLoading(false)
    }
    (dataTerakhirDalamLayar || lamanTerload === 0) && fetch()
  }, [dataTerakhirDalamLayar])
  return [data, loading, error, lamanTerload, refDataTerakhir]
}

export default useFetchProduct