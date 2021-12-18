import "./Beranda.scss";
import Pencarian from "../Komponen/Pencarian";
import CarouselBeranda from "../Komponen/CarouselBeranda";
import Kategori from "../Komponen/Kategori";
import Product from "../Komponen/Product";

const Beranda = () => {
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