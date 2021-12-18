import { useState, useEffect } from "react";

function dapatkanDimensiLayar(){
  const { innerWidth: lebarLayar, innerHeight: tinggiLayar } = window;
  return[
    lebarLayar,
    tinggiLayar
  ]
}

export default function useDimensiLayar(){
  const [dimensiLayar, setDimensiLayar] = useState(dapatkanDimensiLayar())

  useEffect(() => {
    function handelResize(){
      setDimensiLayar(dapatkanDimensiLayar())
    }
    window.addEventListener('resize', handelResize)
    return () => window.removeEventListener('resize', handelResize)
  }, [])

  return dimensiLayar
}