import IDataCarousel from "data/IDataCarousel"
import { FC, useEffect } from "react"
import useBisaKlik from "../fungsi/useBisaKlik"
import useKeSamping from "../fungsi/useKeSamping"
import useScrapeGbr from "../fungsi/useScrapeGbr"
import tblKiri from "../gbr/tbl-kiri.svg"
import tblKanan from "../gbr/tbl-kanan.svg"
import "./CarouselBeranda.scss"

const CarouselBeranda: FC<ICarouselBeranda> = (p) => {
  const urlGbr = useScrapeGbr(p.listCarousel)
  const [setKeKanan, setKeKiri, keKanan, keKiri, seluruhGbr] = useKeSamping(urlGbr)
  const bisaKlik = useBisaKlik(keKiri, keKanan)
  useEffect(() => {console.log(keKanan)}, [keKanan])
  return (
    <section className="carousel-apl">
      <img className={keKiri || keKanan ? "caro-sebelum" : "caro-sebelum-tak-gerak"} 
        src={seluruhGbr.gbrSebelum}
        style={keKiri ? {left: 0} : {}}
      />
      <img className={keKiri || keKanan ? "caro-sekarang" : "caro-sekarang-tak-gerak"} 
        src={seluruhGbr.gbrSekarang}
        style={keKiri ? {left: "100%"} : keKanan ? {left: "-100%"} : {}}
      />
      <img className={keKiri || keKanan ? "caro-setelah" : "caro-setelah-tak-gerak"}
        src={seluruhGbr.gbrSetelah}
        style={keKanan ? {left: 0} : {}}
      />
      <img src={tblKiri} className="tbl-kiri" onClick={() => {bisaKlik && setKeKiri(true)}}/>
      <img src={tblKanan} className="tbl-kanan" onClick={() => {bisaKlik && setKeKanan(true)}}/>
    </section>
  )
}

interface ICarouselBeranda{
  listCarousel: IDataCarousel[],
}

export default CarouselBeranda

