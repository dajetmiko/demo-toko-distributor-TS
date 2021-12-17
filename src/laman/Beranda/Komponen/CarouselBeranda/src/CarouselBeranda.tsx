import { FC } from "react"
import useBisaKlik from "../fungsi/useBisaKlik"
import useKeSamping from "../fungsi/useKeSamping"
import "./CarouselBeranda.scss"

const CarouselBeranda: FC<ICarousel> = (p) => {
  const [setKeKanan, setKeKiri, keKanan, keKiri, seluruhGbr] = useKeSamping(p.listGbr)
  const bisaKlik = useBisaKlik(keKiri, keKanan)
  return (
    <section className="carousel-apl">
      <img className="caro-sebelum" 
        src={seluruhGbr.gbrSebelum}
        style={keKiri ? {left: 0} : {}}
      />
      <img className="caro-sekarang" 
        src={seluruhGbr.gbrSekarang}
        style={keKanan ? {left: "100%"} : keKiri ? {left: "-100%"} : {}}/>
      <img className="caro-setelah" 
        src={seluruhGbr.gbrSetelah}
        style={keKanan ? {left: 0} : {}}
      />
      <img className="tbl-kiri" onClick={() => {bisaKlik && setKeKiri(true)}}/>
      <img className="tbl-kanan" onClick={() => {bisaKlik && setKeKanan(true)}}/>
    </section>
  )
}

export default CarouselBeranda

interface ICarousel{
  listGbr: string[],
}