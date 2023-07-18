import React from 'react'

const NxtWatchContext = React.createContext({
  savedVideoList: [],
  darkTheme: false,
  activeMenuId: 1,
  addAndRemoveVideo: () => {},
  toggleTheme: () => {},
  activeMenu: () => {},
})

export default NxtWatchContext
