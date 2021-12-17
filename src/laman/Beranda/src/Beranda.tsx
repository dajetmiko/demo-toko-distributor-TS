import { FC } from "react";
import useFetchCarousel from "../fungsi/useFetchCarousel";
import CarouselBeranda from "../Komponen/CarouselBeranda";
import "./Beranda.scss";

const Beranda: FC<IBeranda> = () => {
  const [dataCarousel, loadingCarousel, erCarousel] = useFetchCarousel()
  return (
    <div>
      <CarouselBeranda listGbr={} />
    </div>
  )
}

export default Beranda

interface IBeranda{

}