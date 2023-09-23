import { useEffect, useRef } from "react"
type ArgsProps = {
  setHeight?: (value: number) => void
}
export const useModel = ({ setHeight }: ArgsProps) => {
  const headerRef = useRef<HTMLElement>(null)
  const handleSetHeight = () => {
    if (setHeight && headerRef.current)
      setHeight(headerRef.current.offsetHeight)
  }
  useEffect(() => {
    if (!setHeight) return
    if (!headerRef.current) return
    const observer = new ResizeObserver(handleSetHeight)
    observer.observe(headerRef.current)
  }, [headerRef.current])
  return {
    headerRef,
  }
}
