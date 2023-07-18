import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideoList: [],
    darkTheme: false,
    activeMenuId: 1,
  }

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  activeMenu = id => {
    this.setState({activeMenuId: id})
  }

  addAndRemoveVideo = videoDetails => {
    const {savedVideoList} = this.state
    const {id} = videoDetails

    console.log(id)

    const isVideoSaved = savedVideoList.find(video => video.id === id)

    if (isVideoSaved === undefined) {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, videoDetails],
      }))
    } else {
      const removedVideoList = savedVideoList.filter(video => video.id !== id)
      this.setState({savedVideoList: removedVideoList})
    }
  }

  render() {
    const {savedVideoList, darkTheme, activeMenuId} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          savedVideoList,
          darkTheme,
          activeMenuId,
          addAndRemoveVideo: this.addAndRemoveVideo,
          toggleTheme: this.toggleTheme,
          activeMenu: this.activeMenu,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
