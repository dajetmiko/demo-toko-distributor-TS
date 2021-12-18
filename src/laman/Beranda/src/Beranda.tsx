import { FC } from "react";
import CarouselBeranda from "../Komponen/CarouselBeranda";
import Kategori from "../Komponen/Kategori";
import Product from "../Komponen/Product";
import "./Beranda.scss";
import Pencarian from "../Komponen/Pencarian";

const Beranda: FC<IBeranda> = () => {
  return (
    <div className="beranda-apl">
      <Pencarian />
      <CarouselBeranda />
      <Kategori/>
      <Product />
    </div>
  )
}

export default Beranda

interface IBeranda{

}