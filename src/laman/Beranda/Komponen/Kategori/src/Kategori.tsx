import IDataCategory from "data/IDataCategory"
import { FC } from "react"
import "./Kategori.scss"

const Kategori: FC<IKategori> = (p) => {
  return (
    <section className="kategori-apl">
      <ul className="list-kategori">
        {p.listKategori.map((nilai, indeks) => indeks >= 6 ? <IsiKategori kategori={nilai} key={indeks}/> : <></>)}
      </ul>
    </section>
    )
}

interface IKategori{
  listKategori: IDataCategory[]
}


const IsiKategori: FC<IIsiKategori> = (p) => {
  return (
    <li className="kontainer-isi-kategori" key={p.key}>
      <div className="isi-kategori">
        <img className="gbr" src={p.kategori.category_image}/>
        <h6 className="teks">
          {p.kategori.category_name}
        </h6>
      </div>
    </li>
  )
}

interface IIsiKategori{
  kategori: IDataCategory
  key: number
}

export default Kategori


