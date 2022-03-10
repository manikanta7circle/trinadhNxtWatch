import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addSavedItem = video => {
    const {savedVideosList} = this.state
    const updateVideosList = [...savedVideosList, video]
    this.setState({savedVideosList: updateVideosList})
  }

  removeSavedItem = id => {
    const {savedVideosList} = this.state
    const updatedSavedList = savedVideosList.filter(each => each.id !== id)
    this.setState({savedVideosList: updatedSavedList})
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          savedVideosList,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addSavedItem: this.addSavedItem,
          removeSavedItem: this.removeSavedItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
