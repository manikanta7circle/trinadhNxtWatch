import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  addSavedItem: () => {},
  removeSavedItem: () => {},
  toggleTheme: () => {},
})

export default ThemeContext
