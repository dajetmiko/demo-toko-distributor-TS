import useDimensiLayar from "laman/Beranda/fungsi/useDimensiLayar"
import { useEffect, useState } from "react"


const useScrapeGbr = (carousel) => {
  const [urlGbr, setUrlGbr] = useState([])
  const [lebarLayar] = useDimensiLayar()

  const [mobile, setMobile] = useState(false)
  useEffect(() => {setMobile(lebarLayar < 600)}, [lebarLayar])

  useEffect(() => {
    const urlBaru = []
    if(mobile){
      for(let i = 0; i < carousel.length; i++){
        urlBaru.push(carousel[i].url_mobile)
      }
      setUrlGbr(urlBaru)
    }else{
      for(let i = 0; i < carousel.length; i++){
        urlBaru.push(carousel[i].url)
      }
      setUrlGbr(urlBaru)
    }
  }, [mobile, carousel])

  return urlGbr
}

export default useScrapeGbr