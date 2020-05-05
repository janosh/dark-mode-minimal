import { useEffect, useState } from 'react'
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../constants'

export const useDarkMode = () => {
  const [colorMode, rawSetColorMode] = useState()

  // Place useDarkMode initialization in useEffect to exclude it from SSR.
  // The code inside will run on the client after React rehydration.
  // Because colors matter a lot for the initial page view, we're not
  // setting them here but in gatsby-ssr. That way it happens before
  // the React component tree mounts.
  useEffect(() => {
    const initialColorMode = document.body.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )
    rawSetColorMode(initialColorMode)
  }, [])

  function setColorMode(newValue) {
    localStorage.setItem(COLOR_MODE_KEY, newValue)
    rawSetColorMode(newValue)

    if (newValue === `osPref`) {
      const mql = window.matchMedia(`(prefers-color-scheme: dark)`)
      const prefersDarkFromMQ = mql.matches
      newValue = prefersDarkFromMQ ? `dark` : `light`
    }

    for (const [name, colorByTheme] of Object.entries(COLORS))
      document.body.style.setProperty(`--color-${name}`, colorByTheme[newValue])
  }

  return [colorMode, setColorMode]
}
