// hooks/useResponsive.ts
import { useEffect, useState } from 'react'

const useResponsive = (breakpoint: number) => {
  const [isMatch, setIsMatch] = useState<boolean>(false)

  const handleResize = () => {
    setIsMatch(window.innerWidth <= breakpoint)
  }

  useEffect(() => {
    // Initial check on hook usage
    handleResize()

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on hook unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint])

  return isMatch
}

export default useResponsive
