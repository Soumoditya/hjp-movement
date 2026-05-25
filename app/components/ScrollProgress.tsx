'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setWidth((scrollTop / (scrollHeight - clientHeight)) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[200] pointer-events-none"
      style={{
        width: `${width}%`,
        background: '#d4621a',
        boxShadow: '0 0 10px #d4621a, 0 0 20px #d4621a60',
        transition: 'none',
      }}
    />
  )
}
