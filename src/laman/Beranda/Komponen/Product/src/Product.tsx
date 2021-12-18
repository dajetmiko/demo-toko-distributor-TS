import "./Product.scss"
import { FC, RefObject } from "react"
import IDataProduct from "data/IDataProduct"
import useFetchProduct from "../fungsi/useFetchProduct"
import { BeatLoader } from "react-spinners"

const Product: FC<IProduct> = (p) => {
  const [product, loading, error, lamanTerload, refTerakhir] = useFetchProduct()
  return (
    <section className="product-apl">
      <ul className="list-product">
        {
          product.map((nilai, indeks) => <IsiProduct produk={nilai} 
            refTerakhir={refTerakhir} 
            indeks={indeks} 
            lamanTerload={lamanTerload}
          />)
        }
      </ul>
      <div className="kontainer-loader">
        {loading && <BeatLoader color="red" size={50}/>}
      </div>
    </section>
  )
}

interface IProduct{}

const IsiProduct: FC<IIsiProduct> = (p) => {
  const adalahObjTerakhir = ((p.lamanTerload * 20) - 1) === p.indeks
  return (
    <li className="kontainer-isi-product" ref={adalahObjTerakhir ? p.refTerakhir : undefined}>
      <div className="isi-product">
        <div className="kontainer-gbr">
          <img className="gbr" src={p.produk.image_uri}/>
        </div>
        <h6 className="nama-product">
          {p.produk.product_name}
        </h6>
        <h6 className="harga-product">
          Rp {p.produk.product_price}
        </h6>
        <h6 className="lokasi-product">
          {p.produk.location}
        </h6>
      </div>
    </li>
  )
}

interface IIsiProduct{
  produk: IDataProduct;
  refTerakhir: RefObject<HTMLLIElement>;
  indeks: number;
  lamanTerload: number;
}

export default Product
