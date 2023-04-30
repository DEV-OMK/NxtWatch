import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  toggleSavedListItem: () => {},
})

export default NxtWatchContext
