import {  useEffect, useState } from "react"

const useDalamLayar = (ref) => {

  const [adaInterseksi, setAdaInterrseksi] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setAdaInterrseksi(entry.isIntersecting)
  )

  useEffect(() => {
    if(ref.current){
      observer?.observe(ref.current)
      return () => { observer?.disconnect() }
    }
  }, [ref.current])

  return adaInterseksi
}

export default useDalamLayar