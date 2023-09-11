import React from 'react'

const NxtWatchContext = React.createContext({
  savedVideoList: [],
  darkTheme: false,
  activeTab: '',
  addAndRemoveVideo: () => {},
  toggleTheme: () => {},
  activeTabItem: () => {},
})

export default NxtWatchContext
