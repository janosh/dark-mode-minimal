import React from 'react'
import App from './src/components/App'
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/constants'

function setColorsByTheme() {
  const colors = '🌈'
  const colorModeKey = '🔑'
  const colorModeCssProp = '⚡️'
  let colorMode

  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkFromMQ = mql.matches

  const persistedPreference = localStorage.getItem(colorModeKey)
  const hasUsedToggle = typeof persistedPreference === 'string'

  if (hasUsedToggle) colorMode = persistedPreference
  else colorMode = prefersDarkFromMQ ? 'dark' : 'light'

  document.body.style.setProperty(colorModeCssProp, colorMode)

  // Here we set the actual colors for the page after SSR.
  // colorByTheme only supports `dark` or `light`. So if colorMode
  // is `osPref` we pick either of those depending on prefersDarkFromMQ.
  if (colorMode === `osPref`) colorMode = prefersDarkFromMQ ? `dark` : `light`

  for (const [name, colorByTheme] of Object.entries(colors))
    document.body.style.setProperty(`--color-${name}`, colorByTheme[colorMode])
}

function RssSetColorsByTheme() {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP)

  // Turn boundFn into an IIFE to make it run asap and avoid polluting global namespace.
  return <script dangerouslySetInnerHTML={{ __html: `(${boundFn})()` }} />
}

// If the user disabled JS, the injected script setColorsByTheme will
// never run and no colors will be set. Everything will be default
// black and white. By injecting a `<style>` tag into the head of the
// document, we can set default values for all of our colors. Only
// light mode will be available for users with JS disabled.
function FallbackStyles(cssColors = ``) {
  // Create a string holding each CSS variable:
  // `--color-text: black;\n--color-background: white;\n...`

  for (const [name, colorByTheme] of Object.entries(COLORS))
    cssColors += `--color-${name}: ${colorByTheme.light};\n`

  const wrappedInSelector = `html { ${cssColors} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  // Keys just to prevent warning: Each child in a list should have a unique "key" prop.
  setHeadComponents(<FallbackStyles key="foo" />)
  setPreBodyComponents(<RssSetColorsByTheme key="bar" />)
}

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>
}
