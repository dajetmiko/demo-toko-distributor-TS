import useFetchKategori from "../fungsi/useFetchKategori"
import Skeleton from "react-loading-skeleton"
import "./Kategori.scss"

const Kategori = (p) => {
  const [dataKategori, loadingKategori, erKategori] = useFetchKategori()

  return (
    <section className="kategori-apl">
      {!loadingKategori ? <ul className="list-kategori">
        {dataKategori.map((nilai, indeks) => indeks >= 6 ? <IsiKategori kategori={nilai} key={indeks}/> : <></>)}
      </ul> : <Skeleton height={60} width={"100%"}/>}
    </section>
    )
}


const IsiKategori = (p) => {
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

export default Kategori


