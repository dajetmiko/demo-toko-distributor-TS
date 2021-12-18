import { FC, useState } from "react"
import IkonMic from "../gbr/ikon-mic.svg"
import IkonCari from "../gbr/ikon-cari.svg"
import "./Pencarian.scss"

const Pencarian: FC<IPencarian> = (p) => {
  return(
    <div className="kontainer-pencarian-apl">
      <div className="pencarian-apl">
        <img className="gbr-pencarian" src={IkonCari}/>
        <input className="input-pencarian" placeholder="Cari sesuatu"/>
        <img className="gbr-mic" src={IkonMic}/>
      </div>
    </div>
  )
}

export default Pencarian

interface IPencarian{}