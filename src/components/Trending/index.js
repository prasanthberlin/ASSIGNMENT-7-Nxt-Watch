import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  LoaderContainer,
  TrendingHeaderContainer,
  TrendingLogoContainer,
  TrendingText,
  TrendingBodyContainer,
  VideoContainer,
  VideoItem,
  TrendingLinkElement,
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

  trendingVideoListRetryButton = () => {
    this.getTrendingVideoList()
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
              onClick={this.trendingVideoListRetryButton}
            >
              Retry
            </VideoFailureRetryButton>
          </VideoErrorViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingVideoRoute = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const {trendingVideoList} = this.state

        return (
          <>
            <TrendingContainer data-testid="trending" themeColor={darkTheme}>
              <SideBar />
              <TrendingBodyContainer>
                <TrendingHeaderContainer themeColor={darkTheme}>
                  <TrendingLogoContainer themeColor={darkTheme}>
                    <HiFire size="30" color="#ff0000" />
                  </TrendingLogoContainer>
                  <TrendingText themeColor={darkTheme}>Trending</TrendingText>
                </TrendingHeaderContainer>
                <VideoContainer themeColor={darkTheme}>
                  {trendingVideoList.map(video => (
                    <TrendingLinkElement to={`/videos/${video.id}`}>
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
                            <VideoTitle themeColor={darkTheme}>
                              {video.title}
                            </VideoTitle>
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
                    </TrendingLinkElement>
                  ))}
                </VideoContainer>
              </TrendingBodyContainer>
            </TrendingContainer>
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

  render() {
    return (
      <>
        <Header />
        {this.renderTrendingVideoRoute()}
      </>
    )
  }
}

export default Trending
