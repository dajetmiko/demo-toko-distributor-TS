import useBisaKlik from "../fungsi/useBisaKlik"
import useKeSamping from "../fungsi/useKeSamping"
import useScrapeGbr from "../fungsi/useScrapeGbr"
import tblKiri from "../gbr/tbl-kiri.svg"
import tblKanan from "../gbr/tbl-kanan.svg"
import "./CarouselBeranda.scss"
import useFetchCarousel from "../fungsi/useFetchCarousel"
import Skeleton from "react-loading-skeleton"

const CarouselBeranda = (p) => {
  const [dataCarousel, loadingCarousel, erCarousel] = useFetchCarousel()

  const urlGbr = useScrapeGbr(dataCarousel)
  const [setKeKanan, setKeKiri, keKanan, keKiri, seluruhGbr] = useKeSamping(urlGbr)
  const bisaKlik = useBisaKlik(keKiri, keKanan)

  return (
    <section className="carousel-apl">
      {loadingCarousel ?
        <Skeleton width={"100%"} height={"100%"} />
      :
      <>
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
      </>
      }
    </section>
  )
}

export default CarouselBeranda

