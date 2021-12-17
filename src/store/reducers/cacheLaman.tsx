import IDataCarousel from "data/IDataCarousel"
import IDataCategory from "data/IDataCategory"
import IDataProduct from "data/IDataProduct"


export type TypeAksi = 'CACHE_LAMAN'

type IPayloadCache = {
  laman: string,
  scrollY: number,
  dataCarousel: IDataCarousel,
  dataCategory: IDataCategory,
  dataProduct: IDataProduct
}

export interface IAksi {
  type: TypeAksi,
  payload: IPayloadCache,
}

export function cacheLamanReducer(state: any = null, action:IAksi){
  switch(action.type){
    case 'CACHE_LAMAN':
      return{
        ...state,
        ...action.payload
      }
  }

}