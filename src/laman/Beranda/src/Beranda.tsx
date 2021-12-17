import { FC } from "react";
import useFetchCarousel from "../fungsi/useFetchCarousel";
import useFetchKategori from "../fungsi/useFetchKategori";
import CarouselBeranda from "../Komponen/CarouselBeranda";
import Kategori from "../Komponen/Kategori";
import "./Beranda.scss";

const Beranda: FC<IBeranda> = () => {
  const [dataCarousel, loadingCarousel, erCarousel] = useFetchCarousel()
  const [dataKategori, loadingKategori, erKategori] = useFetchKategori()
  return (
    <div className="beranda-apl">
      <CarouselBeranda listCarousel={dataCarousel} />
      <Kategori listKategori={dataKategori}/>
    </div>
  )
}

export default Beranda

interface IBeranda{

}