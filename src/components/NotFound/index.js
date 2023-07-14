import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {darkTheme} = value

      const NotFoundImgUrl = darkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer themeColor={darkTheme}>
            <NotFoundImg src={NotFoundImgUrl} alt="not found" />
            <NotFoundHeading themeColor={darkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundDescription themeColor={darkTheme}>
              we are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
