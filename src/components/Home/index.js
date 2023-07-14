import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeContainer,
  BannerBackgroundContainer,
  BannerContentContainer,
  BannerHeading,
  BannerButton,
  BannerWebsiteLogo,
  BannerCloseButton,
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
  LoaderContainer,
  MainHomeContainer,
  DesktopViewSliderBar,
  SlideBarList,
  SlideBarItem,
  SlideBarItemContainer,
  SlideBarTextContent,
  SubHomeContentContainer,
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
              onClick={this.retryVideoList}
            >
              Retry
            </VideoFailureRetryButton>
          </VideoErrorViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoItem = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value

        const {videoList} = this.state
        const shouldShowVideoList = videoList.length > 0

        return shouldShowVideoList ? (
          <VideoContainer>
            {videoList.map(video => (
              <Link to={`/videos/${video.id}`}>
                <VideoItem key={video.id}>
                  <VideoThumbnail
                    src={video.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoContent>
                    <ChannelLogo
                      src={video.channel.profile_image_url}
                      alt="channel logo"
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
        ) : (
          <NoVideoView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading themeColor={darkTheme}>
              No Search results found
            </NoVideoHeading>
            <NoVideoDescription>
              Try different key words or remove search filter
            </NoVideoDescription>
            <NoVideoRetryButton onClick={this.retryVideoList} type="button">
              Retry
            </NoVideoRetryButton>
          </NoVideoView>
        )
      }}
    </NxtWatchContext.Consumer>
  )

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

  renderMainHomeContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {bannerVisible, searchInput} = this.state

        return (
          <MainHomeContainer data-testid="home" themeColor={darkTheme}>
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
            <SubHomeContentContainer>
              <HomeContainer>
                {bannerVisible ? (
                  <BannerBackgroundContainer>
                    <BannerContentContainer data-testid="banner">
                      <BannerWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerContentContainer>
                    <BannerCloseButton
                      type="button"
                      data-testid="close"
                      onClick={this.closeBannerContainer}
                    >
                      <IoMdClose size="20" />
                    </BannerCloseButton>
                  </BannerBackgroundContainer>
                ) : null}

                <HomeContent>
                  <SearchContainer themeColor={darkTheme}>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.changeSearchInput}
                      onKeyDown={this.onEnterSearchInput}
                      placeholder="Search"
                      themeColor={darkTheme}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.searchUserInput}
                      data-testid="searchButton"
                      themeColor={darkTheme}
                    >
                      <BsSearch color={darkTheme ? '#424242' : 'black'} />
                    </SearchButton>
                  </SearchContainer>
                </HomeContent>
              </HomeContainer>
              {this.renderVideoList()}
            </SubHomeContentContainer>
          </MainHomeContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderMainHomeContainer()}
      </>
    )
  }
}

export default Home
