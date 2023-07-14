import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosContainer,
  SavedVideosBodyContainer,
  NoSavedVideoContainer,
  NoSavedVideoImg,
  NoSavedVideoHeading,
  NoSavedVideoDescription,
  DesktopViewSliderBar,
  SlideBarList,
  SlideBarItem,
  SlideBarItemContainer,
  SlideBarTextContent,
  DesktopViewSliderContainer,
  DesktopViewSliderFooter,
  SocialMediaLogos,
  ContactUsHeading,
  LogoImage,
  DesktopViewFooterText,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideoList = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <NoSavedVideoContainer>
            <NoSavedVideoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideoHeading themeColor={darkTheme}>
              No saved videos found
            </NoSavedVideoHeading>
            <NoSavedVideoDescription themeColor={darkTheme}>
              You can save your videos while watching them
            </NoSavedVideoDescription>
          </NoSavedVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSavedVideosContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <SavedVideosContainer
            themeColor={darkTheme}
            data-testid="savedVideos"
          >
            <DesktopViewSliderContainer themeColor={darkTheme}>
              <DesktopViewSliderBar>
                <SlideBarList>
                  <SlideBarItem>
                    <Link to="/">
                      <SlideBarItemContainer>
                        <AiFillHome />
                        <SlideBarTextContent themeColor={darkTheme}>
                          Home
                        </SlideBarTextContent>
                      </SlideBarItemContainer>
                    </Link>
                  </SlideBarItem>
                  <SlideBarItem>
                    <Link to="/trending">
                      <SlideBarItemContainer>
                        <HiFire />
                        <SlideBarTextContent themeColor={darkTheme}>
                          Trending
                        </SlideBarTextContent>
                      </SlideBarItemContainer>
                    </Link>
                  </SlideBarItem>
                  <SlideBarItem>
                    <Link to="/gaming">
                      <SlideBarItemContainer>
                        <SiYoutubegaming />
                        <SlideBarTextContent themeColor={darkTheme}>
                          Gaming
                        </SlideBarTextContent>
                      </SlideBarItemContainer>
                    </Link>
                  </SlideBarItem>
                  <SlideBarItem>
                    <Link to="/saved-videos">
                      <SlideBarItemContainer>
                        <MdPlaylistAdd />
                        <SlideBarTextContent themeColor={darkTheme}>
                          Saved videos
                        </SlideBarTextContent>
                      </SlideBarItemContainer>
                    </Link>
                  </SlideBarItem>
                </SlideBarList>
              </DesktopViewSliderBar>
              <DesktopViewSliderFooter>
                <ContactUsHeading themeColor={darkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <SocialMediaLogos>
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                  <DesktopViewFooterText themeColor={darkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </DesktopViewFooterText>
                </SocialMediaLogos>
              </DesktopViewSliderFooter>
            </DesktopViewSliderContainer>
            <SavedVideosBodyContainer themeColor={darkTheme}>
              {this.renderSavedVideoList()}
            </SavedVideosBodyContainer>
          </SavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderSavedVideosContainer()}
      </>
    )
  }
}

export default SavedVideos
