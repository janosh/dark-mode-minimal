import React from 'react'
import { useTransition } from 'react-spring'
import { useDarkMode } from '../../hooks/useDarkMode'
import { Box, Div, Icons, Notification } from './styles'

const modes = {
  light: [`Light Mode`, Icons.Sun, `dark`],
  dark: [`Dark Mode`, Icons.Moon, `osPref`],
  osPref: [`OS setting`, Icons.SunMoon, `light`],
}

export default function DarkToggle(props) {
  const [colorMode, setColorMode] = useDarkMode()

  const transitions = useTransition(colorMode, null, {
    initial: null,
    from: { opacity: 0, transform: `translateX(100%)` },
    enter: { opacity: 1, transform: `translateX(0%)` },
    leave: { opacity: 0, transform: `translateX(-100%)` },
  })
  return (
    <Box {...props}>
      {transitions.map(({ item, props: style, key }) => {
        const [title, Icon, nextMode] = modes[item || `light`]
        return (
          <Div key={key} style={style}>
            <Icon
              title={title}
              onClick={() => setColorMode(nextMode)}
              // onTouchStart needed to react on first tap in iOS Safari.
              onTouchStart={() => setColorMode(nextMode)}
            />
            <Notification>{title}</Notification>
          </Div>
        )
      })}
    </Box>
  )
}
