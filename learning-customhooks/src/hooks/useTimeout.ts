import { useState,useEffect } from "react";
export const useTimeout = () => {
    const [show,setShow] = useState(false);
  useEffect(() => {
  let id = setTimeout(() => {
    setShow(true)
  },1000)
  return () => clearTimeout(id)
  },[])

  return show
}