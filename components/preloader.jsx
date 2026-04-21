import { useEffect, useState } from 'react'

export default function Preloader({ minDuration = 1200 }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start = Date.now()
    let frame

    const tick = () => {
      const elapsed = Date.now() - start
      const next = Math.min(100, Math.round((elapsed / minDuration) * 100))
      setProgress(next)

      if (next < 100) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [minDuration])

  return (
    <div className="site-preloader" aria-label="Loading site">
      <div className="site-preloader__inner">
        <div className="site-preloader__brand">BKP Franchise</div>

        <div className="site-preloader__bar">
          <span
            className="site-preloader__bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="site-preloader__count">{progress}%</div>
      </div>
    </div>
  )
}