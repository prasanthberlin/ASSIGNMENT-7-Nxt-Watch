import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingContainer,
  LoaderContainer,
  GamingHeaderContainer,
  GamingLogoContainer,
  GamingText,
  GamingBodyContainer,
  VideoContainer,
  VideoItem,
  GamingLinkElement,
  VideoItemContainer,
  GamingVideoThumbnail,
  GamingVideoHeading,
  GamingVideoWatchingCount,
  VideoErrorViewContainer,
  VideoFailureImg,
  VideoFailureHeading,
  VideoFailureDescription,
  VideoFailureRetryButton,
  DesktopViewSliderBar,
  SlideBarList,
  SlideBarItem,
  SlideBarMenuLinkItem,
  SlideBarMenuIcon,
  SlideBarTextContent,
  DesktopViewSliderContainer,
  DesktopViewSliderFooter,
  SocialMediaLogos,
  ContactUsHeading,
  LogoImage,
  DesktopViewFooterText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const menuListItems = [
  {id: 1, link: '/', icon: <AiFillHome />, text: 'Home'},
  {id: 2, link: '/trending', icon: <HiFire />, text: 'Trending'},
  {id: 3, link: '/gaming', icon: <SiYoutubegaming />, text: 'Gaming'},
  {id: 4, link: '/saved-videos', icon: <MdPlaylistAdd />, text: 'Saved videos'},
]

class Gaming extends Component {
  state = {
    gamingVideoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideoList()
  }

  getGamingVideoList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const gamingVideoList = fetchedData.videos

      const updatedData = gamingVideoList.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        gamingVideoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  gamingVideoListRetryButton = () => {
    this.getGamingVideoList()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const videoFailureImgUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <VideoErrorViewContainer>
            <VideoFailureImg src={videoFailureImgUrl} alt="failure view" />
            <VideoFailureHeading themeColor={darkTheme}>
              Oops! Something Went Wrong
            </VideoFailureHeading>
            <VideoFailureDescription themeColor={darkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </VideoFailureDescription>
            <VideoFailureRetryButton
              type="button"
              onClick={this.gamingVideoListRetryButton}
            >
              Retry
            </VideoFailureRetryButton>
          </VideoErrorViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingVideoItem = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const {gamingVideoList} = this.state

        return (
          <>
            <GamingHeaderContainer themeColor={darkTheme}>
              <GamingLogoContainer themeColor={darkTheme}>
                <SiYoutubegaming size="30" color="#ff0000" />
              </GamingLogoContainer>
              <GamingText themeColor={darkTheme}>Gaming</GamingText>
            </GamingHeaderContainer>
            <VideoContainer themeColor={darkTheme}>
              {gamingVideoList.map(video => (
                <GamingLinkElement to={`/videos/${video.id}`}>
                  <VideoItem themeColor={darkTheme} key={video.id}>
                    <VideoItemContainer>
                      <GamingVideoThumbnail
                        src={video.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingVideoHeading themeColor={darkTheme}>
                        {video.title}
                      </GamingVideoHeading>
                      <GamingVideoWatchingCount>
                        {video.viewCount} Watching Worldwide
                      </GamingVideoWatchingCount>
                    </VideoItemContainer>
                  </VideoItem>
                </GamingLinkElement>
              ))}
            </VideoContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingVideoList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideoItem()
      case apiStatusConstants.failure:
        return this.renderVideoFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderGamingContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, activeMenuId, activeMenu} = value

        const sliderBarMenuItems = menu => {
          const changeActiveMenuId = () => {
            activeMenu(menu.id)
          }

          return (
            <SlideBarMenuLinkItem to={menu.link}>
              <SlideBarItem key={menu.id} onClick={changeActiveMenuId}>
                <SlideBarMenuIcon activeMenu={menu.id === activeMenuId}>
                  {menu.icon}
                </SlideBarMenuIcon>
                <SlideBarTextContent
                  activeMenu={menu.id === activeMenuId}
                  themeColor={darkTheme}
                >
                  {menu.text}
                </SlideBarTextContent>
              </SlideBarItem>
            </SlideBarMenuLinkItem>
          )
        }

        return (
          <GamingContainer data-testid="gaming" themeColor={darkTheme}>
            <DesktopViewSliderContainer themeColor={darkTheme}>
              <DesktopViewSliderBar>
                <SlideBarList>
                  {menuListItems.map(menu => sliderBarMenuItems(menu))}
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
            <GamingBodyContainer>
              {this.renderGamingVideoList()}
            </GamingBodyContainer>
          </GamingContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderGamingContainer()}
      </>
    )
  }
}

export default Gaming
