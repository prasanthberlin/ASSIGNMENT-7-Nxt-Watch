import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemDetailsContainer,
  LoaderContainer,
  VideoItemDetailsBodyContainer,
  VideoContainer,
  VideoDescriptionDetails,
  VideoDescriptionDetailsContainer,
  VideoTitle,
  VideoDetailsContent,
  VideoViewCount,
  VideoPublished,
  VideoLikeDislikeSaveContainer,
  VideoLDSItem,
  VideoLikeButton,
  VideoDislikeButton,
  VideoSaveButton,
  VideoLDSText,
  HorizontalLine,
  ChannelHeadingDetails,
  ChannelLogo,
  ChannelNameAndSubCount,
  ChannelName,
  SubCount,
  VideoDescriptionText,
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

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    likedVideo: false,
    dislikedVideo: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const videoDetails = fetchedData.video_details

      const updatedData = {
        channel: videoDetails.channel,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        videoUrl: videoDetails.video_url,
        description: videoDetails.description,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  videoDetailsRetryButton = () => {
    this.getVideoItemDetails()
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
              onClick={this.videoDetailsRetryButton}
            >
              Retry
            </VideoFailureRetryButton>
          </VideoErrorViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  likedVideo = () => {
    this.setState(prevState => ({
      likedVideo: !prevState.likedVideo,
      dislikedVideo: false,
    }))
  }

  dislikedVideo = () => {
    this.setState(prevState => ({
      dislikedVideo: !prevState.dislikedVideo,
      likedVideo: false,
    }))
  }

  renderVideoItem = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, addAndRemoveVideo, savedVideoList} = value

        const {videoDetails, likedVideo, dislikedVideo} = this.state

        const isVideoSaved = savedVideoList.find(
          video => video.id === videoDetails.id,
        )

        const saveTextColor = isVideoSaved === undefined

        const saveText = isVideoSaved === undefined ? 'Save' : 'Saved'

        const addAndRemoveVideoButton = () => {
          addAndRemoveVideo(videoDetails)
        }

        return (
          <VideoContainer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <VideoDescriptionDetails>
              <VideoTitle themeColor={darkTheme}>
                {videoDetails.title}
              </VideoTitle>
              <VideoDescriptionDetailsContainer>
                <VideoDetailsContent>
                  <VideoViewCount>
                    {videoDetails.viewCount} views
                  </VideoViewCount>
                  <VideoPublished>
                    {formatDistanceToNow(
                      new Date(`${videoDetails.publishedAt}`),
                    )}
                  </VideoPublished>
                </VideoDetailsContent>
                <VideoLikeDislikeSaveContainer>
                  <VideoLDSItem>
                    <VideoLikeButton
                      type="button"
                      toggleColor={likedVideo}
                      onClick={this.likedVideo}
                    >
                      <BiLike size="20" />
                      <VideoLDSText>Like</VideoLDSText>
                    </VideoLikeButton>
                  </VideoLDSItem>
                  <VideoLDSItem>
                    <VideoDislikeButton
                      type="button"
                      toggleColor={dislikedVideo}
                      onClick={this.dislikedVideo}
                    >
                      <BiDislike size="20" />
                      <VideoLDSText>Dislike</VideoLDSText>
                    </VideoDislikeButton>
                  </VideoLDSItem>
                  <VideoLDSItem>
                    <VideoSaveButton
                      type="button"
                      toggleColor={saveTextColor}
                      onClick={addAndRemoveVideoButton}
                    >
                      <MdPlaylistAdd size="20" />
                      <VideoLDSText>{saveText}</VideoLDSText>
                    </VideoSaveButton>
                  </VideoLDSItem>
                </VideoLikeDislikeSaveContainer>
              </VideoDescriptionDetailsContainer>
              <HorizontalLine />
              <ChannelHeadingDetails>
                <ChannelLogo
                  src={videoDetails.channel.profile_image_url}
                  alt="channel logo"
                />
                <ChannelNameAndSubCount>
                  <ChannelName themeColor={darkTheme}>
                    {videoDetails.channel.name}
                  </ChannelName>
                  <SubCount>
                    {videoDetails.channel.subscriber_count} subscribers
                  </SubCount>
                </ChannelNameAndSubCount>
              </ChannelHeadingDetails>
              <VideoDescriptionText themeColor={darkTheme}>
                {videoDetails.description}
              </VideoDescriptionText>
            </VideoDescriptionDetails>
          </VideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoItemDetails = () => {
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

  renderVideoItemDetailsContainer = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, activeMenu, activeMenuId} = value

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
          <VideoItemDetailsContainer
            data-testid="videoItemDetails"
            themeColor={darkTheme}
          >
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
            <VideoItemDetailsBodyContainer themeColor={darkTheme}>
              {this.renderVideoItemDetails()}
            </VideoItemDetailsBodyContainer>
          </VideoItemDetailsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderVideoItemDetailsContainer()}
      </>
    )
  }
}

export default VideoItemDetails
