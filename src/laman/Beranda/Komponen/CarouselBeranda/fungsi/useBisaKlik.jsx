import { useEffect, useState } from "react"


const useBisaKlik = (keKiri, keKanan) => {
  const [bisaKlik, setBisaKlik] = useState(false)
  useEffect(() => {setBisaKlik(!(keKiri || keKanan))}, [keKiri, keKanan])
  return bisaKlik
}

export default useBisaKlik