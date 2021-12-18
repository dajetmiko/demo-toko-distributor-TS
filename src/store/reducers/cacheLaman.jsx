

export function cacheLamanReducer(state = null, action){
  switch(action.type){
    case 'CACHE_LAMAN':
      return{
        ...state,
        ...action.payload
      }
  }
}