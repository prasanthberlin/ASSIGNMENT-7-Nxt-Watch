import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'
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
  SavedVideoHeaderContainer,
  SavedVideoLogoContainer,
  SavedVideoText,
  VideoContainer,
  SavedVideoLinkElement,
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

const menuListItems = [
  {id: 1, link: '/', icon: <AiFillHome />, text: 'Home'},
  {id: 2, link: '/trending', icon: <HiFire />, text: 'Trending'},
  {id: 3, link: '/gaming', icon: <SiYoutubegaming />, text: 'Gaming'},
  {id: 4, link: '/saved-videos', icon: <MdPlaylistAdd />, text: 'Saved videos'},
]

class SavedVideos extends Component {
  renderSavedVideoList = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {darkTheme, savedVideoList} = value

        const showSavedVideoList = savedVideoList.length > 0
        return showSavedVideoList ? (
          <>
            <SavedVideoHeaderContainer themeColor={darkTheme}>
              <SavedVideoLogoContainer themeColor={darkTheme}>
                <HiFire size="30" color="#ff0000" />
              </SavedVideoLogoContainer>
              <SavedVideoText themeColor={darkTheme}>
                Saved Videos
              </SavedVideoText>
            </SavedVideoHeaderContainer>
            <VideoContainer themeColor={darkTheme}>
              {savedVideoList.map(video => (
                <SavedVideoLinkElement to={`/videos/${video.id}`}>
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
                </SavedVideoLinkElement>
              ))}
            </VideoContainer>
          </>
        ) : (
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
          <SavedVideosContainer
            themeColor={darkTheme}
            data-testid="savedVideos"
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
