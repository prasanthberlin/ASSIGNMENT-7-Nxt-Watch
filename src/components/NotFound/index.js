import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
      <NotFoundHeading className="not-found-heading">
        Page Not Found
      </NotFoundHeading>
      <NotFoundDescription className="not-found-description">
        We are sorry, the page you requested could not be found
      </NotFoundDescription>
    </NotFoundContainer>
  </>
)

export default NotFound
