import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'

import {
  HomeContainer,
  BannerBackgroundContainer,
  BannerContentContainer,
  BannerHeading,
  BannerButton,
  BannerWebsiteLogo,
  HomeContent,
  SearchContainer,
  SearchInput,
  SearchButton,
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
  NoVideoView,
  NoVideoImage,
  NoVideoHeading,
  NoVideoDescription,
  NoVideoRetryButton,
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

class Home extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    bannerVisible: true,
  }

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const videoList = fetchedData.videos

      const updatedData = videoList.map(video => ({
        channel: video.channel,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  retryVideoList = () => {
    this.getVideoList()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoFailureView = () => (
    <VideoErrorViewContainer>
      <VideoFailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <VideoFailureHeading h1 className="jobs-failure-heading">
        Oops! Something Went Wrong
      </VideoFailureHeading>
      <VideoFailureDescription className="jobs-failure-description">
        We are having some trouble to complete your request. Please try again.
      </VideoFailureDescription>
      <VideoFailureRetryButton type="button" onClick={this.retryVideoList}>
        Retry
      </VideoFailureRetryButton>
    </VideoErrorViewContainer>
  )

  renderVideoItem = () => {
    const {videoList} = this.state
    const shouldShowVideoList = videoList.length > 0

    return shouldShowVideoList ? (
      <VideoContainer className="profile-container">
        {videoList.map(video => (
          <VideoItem>
            <VideoThumbnail src={video.thumbnailUrl} alt={video.title} />
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
                    <VideoViewCount>{video.viewCount} views</VideoViewCount>
                    <VideoPublished>
                      {formatDistanceToNow(new Date(`${video.publishedAt}`))}
                    </VideoPublished>
                  </VideoViewPublishedDetail>
                </VideoDetailsContent>
              </VideoTextContent>
            </VideoContent>
          </VideoItem>
        ))}
      </VideoContainer>
    ) : (
      <NoVideoView>
        <NoVideoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideoHeading>No Search results found</NoVideoHeading>
        <NoVideoDescription>
          Try different key words or remove search filer
        </NoVideoDescription>
        <NoVideoRetryButton type="button">Retry</NoVideoRetryButton>
      </NoVideoView>
    )
  }

  renderVideoList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItem()
      case apiStatusConstants.failure:
        return this.renderVideoFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getVideoList()
    }
  }

  searchUserInput = () => {
    this.getVideoList()
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  closeBannerContainer = () => {
    this.setState({bannerVisible: false})
  }

  render() {
    const {bannerVisible, searchInput} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          {bannerVisible ? (
            <BannerBackgroundContainer>
              <BannerContentContainer>
                <BannerWebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo banner"
                />
                <BannerHeading>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerHeading>
                <BannerButton>GET IT NOW</BannerButton>
              </BannerContentContainer>
              <IoMdClose size="20" onClick={this.closeBannerContainer} />
            </BannerBackgroundContainer>
          ) : null}

          <HomeContent>
            <SearchContainer>
              <SearchInput
                type="search"
                value={searchInput}
                onChange={this.changeSearchInput}
                onKeyDown={this.onEnterSearchInput}
                placeholder="Search"
              />
              <SearchButton
                type="button"
                onClick={this.searchUserInput}
                data-testid="searchButton"
              >
                <BsSearch className="search-icon" />
              </SearchButton>
            </SearchContainer>
          </HomeContent>
        </HomeContainer>
        {this.renderVideoList()}
      </>
    )
  }
}

export default Home
