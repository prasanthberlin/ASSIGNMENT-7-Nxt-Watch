import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeContainer = styled.div``

export const HomeLinkElement = styled(Link)`
  text-decoration: none;
  color: black;
`

export const BannerBackgroundContainer = styled.div`
  padding: 30px;
  font-family: roboto;
  display: flex;
  justify-content: space-between;
  background-color: white;
`
export const BannerContentContainer = styled.div`
  max-width: 200px;
  @media (min-width: 576px) {
    max-width: 370px;
    padding: 10px;
  }
`

export const BannerWebsiteLogo = styled.img`
  width: 160px;
  @media (min-width: 576px) {
    width: 140px;
  }
`

export const BannerHeading = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
  color: black;
  margin-bottom: 40px;
`

export const BannerButton = styled.button`
  padding: 10px 15px;
  font-weight: 600;
  font-size: 16px;
  background-color: #f9f9f9;
  border: #212121 1px solid;
  cursor: pointer;
  outline: none;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
`

export const HomeContent = styled.div`
  padding: 10px 20px;
  @media (min-width: 576px) {
    max-width: 80%;
  }
`

export const SearchContainer = styled.div`
  border: ${props =>
    props.themeColor ? '1px #212121 solid' : '1px #d7dfe9 solid'};
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
`
export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  font-size: 15px;
  border: none;
  padding: 10px;
  width: 100%;
  color: ${props => (props.themeColor ? '#ebebeb' : '#313131')};
`

export const SearchButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: ${props => (props.themeColor ? '#231f20' : '#f9f9f9')};
  border-left: ${props =>
    props.themeColor ? '3px #212121 solid' : '3px #d7dfe9 solid'};
  border-right: none;
  border-top: none;
  border-bottom: none;
  padding: 10px;
  min-width: 80px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 27px;
`

export const VideoContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  @media (min-width: 576px) {
    display: flex;
    padding: 15px;
    flex-wrap: wrap;
    overflow-y: auto;
    flex-grow: 1;
  }
`

export const VideoItem = styled.li`
  @media (min-width: 576px) {
    max-width: 300px;
    margin-right: 20px;
    margin-bottom: 60px;
    margin-top: 20px;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`
export const VideoContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  justify-content: space-evenly;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-top: 18px;
  margin-right: 15px;
`
export const VideoTextContent = styled.div`
  font-family: roboto;
  max-width: 400px;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.themeColor ? 'white' : 'black')};
  @media (min-width: 576px) {
    font-size: 15px;
  }
`

export const VideoDetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  font-size: 15px;
  color: ${props => (props.themeColor ? '#909090' : '#64748b')};
  @media (min-width: 576px) {
    margin-top: 0;
  }
`

export const VideoViewPublishedDetail = styled.ul`
  color: ${props => (props.themeColor ? '#909090' : '#64748b')};
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 576px) {
    justify-content: flex-start;
    padding-left: 0;
    font-size: 14px;
  }
`

export const VideoViewCount = styled.p`
  margin-right: 40px;
  list-style-type: disc;
  @media (min-width: 576px) {
    margin-right: 30px;
    list-style-type: none;
  }
`
export const VideoPublished = styled.p`
  list-style-type: disc;
`
export const NoVideoView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
  text-align: center;
  margin-top: 50px;
  min-height: 70vh;
  @media (min-width: 768px) {
    margin-top: 70px;
    padding-left: 100px;
  }
`
export const NoVideoImage = styled.img`
  width: 220px;
  @media (min-width: 768px) {
    width: 300px;
  }
`

export const NoVideoHeading = styled.h1`
  margin-top: 40px;
  margin-bottom: 10px;
  font-family: roboto;
  font-size: 20px;
  color: ${props => (props.themeColor ? '#f9f9f9' : '#1e293b')};
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 600;
  }
`
export const NoVideoDescription = styled.p`
  max-width: 350px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  color: #475569;
  margin-top: 5px;
  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 13px;
    margin-top: 15px;
  }
`

export const NoVideoRetryButton = styled.button`
  color: white;
  background-color: #4f46e5;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
`
export const VideoErrorViewContainer = styled.div`
  font-family: roboto;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 20px;
    padding-left: 100px;
  }
`
export const VideoFailureImg = styled.img`
  width: 200px;
  @media (min-width: 768px) {
    width: 300px;
  }
`
export const VideoFailureHeading = styled.h1`
  margin-bottom: 0;
  font-size: 20px;
  color: ${props => (props.themeColor ? 'white' : '#1e293b')};
  font-weight: 500;
  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 600;
  }
`

export const VideoFailureDescription = styled.p`
  max-width: 350px;
  font-size: 18px;
  line-height: 1.5;
  color: ${props => (props.themeColor ? '#7e858e' : '#475569')};
  margin-top: 5px;
  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    margin-top: 15px;
    max-width: 400px;
  }
`

export const VideoFailureRetryButton = styled.button`
  color: white;
  background-color: #4f46e5;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
`
export const LoaderContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainHomeContainer = styled.div`
  display: flex;
  background-color: ${props => (props.themeColor ? '#181818' : '#f9f9f9')};
`

export const DesktopViewSliderBar = styled.div`
    display: flex;
    min-width: 250px;
    padding: 20px;
  }
`

export const SlideBarList = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 19px;
`
export const SlideBarItem = styled.li`
  display: flex;
  align-items: center;
  color: black;
`
export const SlideBarMenuLinkItem = styled(Link)`
  text-decoration: none;
`

export const SlideBarMenuIcon = styled.div`
  color: ${props => (props.activeMenu ? '#ff0000' : '#475569')};
`

export const SlideBarTextContent = styled.p`
  font-weight: 500;
  margin-left: 15px;
  font-family: roboto;
  color: ${props => (props.themeColor ? ' #f1f5f9' : '#383838')};
  font-weight: ${props => (props.activeMenu ? 'bold' : 'normal')};
`
export const SubHomeContentContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  max-height: 90vh;
`

export const DesktopViewSliderContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    background-color: ${props => (props.themeColor ? '#181818' : '#f1f5f9')};
  }
`

export const DesktopViewSliderFooter = styled.div`
  padding: 10px;
  max-width: 200px;
`

export const ContactUsHeading = styled.p`
  font-family: roboto;
  font-size: 15px;
  color: ${props => (props.themeColor ? 'white' : 'black')};
`

export const SocialMediaLogos = styled.div``

export const LogoImage = styled.img`
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
`

export const DesktopViewFooterText = styled.p`
  font-family: roboto;
  font-size: 15px;
  color: ${props => (props.themeColor ? 'white' : '#1e293b')};
  font-weight: 500;
  line-height: 1.5;
`
