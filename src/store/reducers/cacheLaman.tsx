import IDataCarousel from "data/IDataCarousel"


export type TypeAksi = 'CACHE_LAMAN'

type IPayloadCache = {
  laman: string,
  scrollY: number,
  dataCarousel: IDataCarousel
}

export interface IAksi {
  type: TypeAksi,
  payload: {scrollY: number, },
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