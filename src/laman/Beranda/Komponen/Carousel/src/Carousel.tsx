import { FC, useEffect, useState } from "react"
import useKeSamping from "../fungsi/useKeSamping"
import "./Carousel.scss"

const Carousel: FC<ICarousel> = (p) => {
  const [setKeKanan, setKeKiri, keKanan, keKiri, seluruhGbr] = useKeSamping(p.listGbr)

  return (
    <section className="carousel-apl">
      <img className="caro-sebelum"/>
      <img className="caro-sekarang"/>
      <img className="caro-setelah"/>
      <img className="tbl-kiri"/>
      <img className="tbl-kanan"/>
    </section>
  )
}

export default Carousel

interface ICarousel{
  listGbr: string[],
}