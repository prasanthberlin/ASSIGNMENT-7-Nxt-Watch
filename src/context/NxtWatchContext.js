import React from 'react'

const NxtWatchContext = React.createContext({
  savedVideoList: [],
  darkTheme: false,
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  toggleTheme: () => {},
})

export default NxtWatchContext
