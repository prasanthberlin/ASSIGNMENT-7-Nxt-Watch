import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  TrendingHeaderContainer,
  TrendingLogoContainer,
  TrendingText,
  TrendingBodyContainer,
  VideoContainer,
  VideoItem,
  VideoThumbnail,
  VideoContent,
  ChannelLogo,
  VideoTextContent,
  VideoTitle,
  VideoDetailsContent,
  ChannelName,
  VideoViewPublishedDetail,
  VideoViewCount,
  VideoPublished,
  VideoErrorViewContainer,
  VideoFailureImg,
  VideoFailureHeading,
  VideoFailureDescription,
  VideoFailureRetryButton,
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

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideoList()
  }

  getTrendingVideoList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const trendingVideoList = fetchedData.videos

      const updatedData = trendingVideoList.map(video => ({
        channel: video.channel,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        trendingVideoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  retryVideoList = () => {
    this.getTrendingVideoList()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
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
              onClick={this.retryVideoList}
            >
              Retry
            </VideoFailureRetryButton>
          </VideoErrorViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingVideoItem = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const {trendingVideoList} = this.state

        return (
          <>
            <TrendingHeaderContainer themeColor={darkTheme}>
              <TrendingLogoContainer themeColor={darkTheme}>
                <HiFire size="30" color="#ff0000" />
              </TrendingLogoContainer>
              <TrendingText themeColor={darkTheme}>Trending</TrendingText>
            </TrendingHeaderContainer>
            <VideoContainer themeColor={darkTheme}>
              {trendingVideoList.map(video => (
                <Link to={`/videos/${video.id}`}>
                  <VideoItem themeColor={darkTheme} key={video.id}>
                    <VideoThumbnail
                      src={video.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <VideoContent>
                      <ChannelLogo
                        src={video.channel.profile_image_url}
                        alt={video.channel.name}
                      />
                      <VideoTextContent>
                        <VideoTitle>{video.title}</VideoTitle>
                        <VideoDetailsContent>
                          <ChannelName>{video.channel.name}</ChannelName>
                          <VideoViewPublishedDetail>
                            <VideoViewCount>
                              {video.viewCount} views
                            </VideoViewCount>
                            <VideoPublished>
                              {formatDistanceToNow(
                                new Date(`${video.publishedAt}`),
                              )}
                            </VideoPublished>
                          </VideoViewPublishedDetail>
                        </VideoDetailsContent>
                      </VideoTextContent>
                    </VideoContent>
                  </VideoItem>
                </Link>
              ))}
            </VideoContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingVideoList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideoItem()
      case apiStatusConstants.failure:
        return this.renderVideoFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderTrendingContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <TrendingContainer data-testid="trending" themeColor={darkTheme}>
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
            <TrendingBodyContainer>
              {this.renderTrendingVideoList()}
            </TrendingBodyContainer>
          </TrendingContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderTrendingContainer()}
      </>
    )
  }
}

export default Trending
