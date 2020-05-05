# Gatsby Dark Mode Minimal

This repo is an MVP of rehydration-safe (i.e. SSR compatible), flicker-free dark mode in Gatsby. It uses a hook (`useDarkMode`) based on `localStorage` only (no React context provider).

It was adapted from [Joshua Comeau's implementation](https://github.com/joshwcomeau/dark-mode-minimal).

## Additional Resources

It's described in more detail on my and Joshua's blog:

- <https://janosh.dev/blog/use-dark-mode>
- <https://joshwcomeau.com/gatsby/dark-mode>

You can check out the **live demo** here:

<https://gatsby-dark-mode-minimal.netlify.app>

## Notable files

- [gatsby-ssr.js](gatsby-ssr.js)
- [src/components/DarkToggle/index.js](src/components/DarkToggle/index.js)
- [src/hooks/useDarkMode.js](src/hooks/useDarkMode.js)
- [src/constants.js](src/constants.js)
