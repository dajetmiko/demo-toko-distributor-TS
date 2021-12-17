import { FC } from "react"
import "./Pencarian.scss"

const Pencarian: FC<IPencarian> = (p) => {
  return(
    <div className="pencarian-apl">
      <img className="gbr-pencarian" />
      <input className="input-pencarian"/>
      <img className="gbr-mic" />
    </div>
  )
}

export default Pencarian

interface IPencarian{}