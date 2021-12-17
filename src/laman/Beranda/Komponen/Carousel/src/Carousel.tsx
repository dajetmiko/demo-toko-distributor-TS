import { FC } from "react"
import "./Carousel.scss"

const Carousel: FC<ICarousel> = () => {
  return (
    <section className="carousel-apl">
      <img className="car-sebelum"/>
      <img className="car-sekarang"/>
      <img className="car-setelah"/>
    </section>
  )
}

export default Carousel

interface ICarousel{
  listGbr: string[],
}