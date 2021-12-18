import { Dispatch, useEffect, useState } from "react";

//fungsi untuk mengubah url gbr dan ubah ke samping
const useKeSamping: TUseKeSamping = (listGbr) => {
  const [keKanan, setKeKanan] = useState(false)
  const [keKiri, setKeKiri] = useState(false)
  const [gbrSebelum, setGbrSebelum] = useState("")
  const [gbrSetelah, setGbrSetelah] = useState("")
  const [gbrSekarang, setGbrSekarang] = useState("")
  const [lokasi, setLokasi] = useState(0)

  useEffect(() => {
    for(let i = 0; i < 25; i++){
      setTimeout(() => {
        setKeKanan(true); 
      }, i * 3000)
    }
  }, [])

  //dimulai saat baru mau mulai ke kanan, timeout saat animasi sudah selesai
  useEffect(() => {
    if(keKanan){
      setTimeout(() => {
        setLokasi(lokasi === (listGbr.length - 1) ? 0 : lokasi + 1);
        setKeKanan(false); 
      }, 298)
    }
    if(keKiri){
      setTimeout(() => {
        setLokasi(lokasi === 0 ? (listGbr.length - 1) : lokasi - 1);
        setKeKiri(false); 
      }, 298)
    }
  }, [keKanan, keKiri])

  //ubah url gbr sekarang dan nanti
  useEffect(() => {
    setGbrSekarang(listGbr[lokasi])
    lokasi === (listGbr.length - 1) ? setGbrSetelah(listGbr[0]) : setGbrSetelah(listGbr[lokasi + 1]) 
    lokasi === 0 ? setGbrSebelum(listGbr[listGbr.length - 1]) : setGbrSebelum(listGbr[lokasi - 1])
  }, [lokasi, listGbr])
  return [setKeKanan, setKeKiri, keKanan, keKiri, 
    {gbrSebelum: gbrSebelum, gbrSekarang: gbrSekarang, gbrSetelah: gbrSetelah}
  ]
}

export default useKeSamping

type TUseKeSamping = (gbrUrl: string[]) => 
  [Dispatch<boolean>, Dispatch<boolean>, boolean, boolean, IIsiGbr];

interface IIsiGbr{
  gbrSebelum: string,
  gbrSetelah: string,
  gbrSekarang: string
}