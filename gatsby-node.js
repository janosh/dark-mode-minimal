const childProcess = require(`child_process`)

// Works only on macOS. Should do nothing on other platforms.
const notify = (title, text) =>
  `osascript -e 'display notification "${text}" ` +
  `with title "${title}" sound name "default"'`

exports.onCreateDevServer = () => {
  const cmd = notify(`Done!`, `gatsby developed finished`)
  childProcess.exec(cmd)
}

exports.onPostBuild = () => {
  const cmd = notify(`Done!`, `gatsby build finished`)
  childProcess.exec(cmd)
}
