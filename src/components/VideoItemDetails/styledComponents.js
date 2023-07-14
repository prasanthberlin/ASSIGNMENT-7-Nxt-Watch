import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.themeColor ? ' #0f0f0f' : '#f4f4f4')};
  @media (min-width: 768px) {
    display: flex;
  }
`

export const VideoItemDetailsBodyContainer = styled.div`
  padding-top: 20px;
  background-color: ${props => (props.themeColor ? ' #181818' : '#f4f4f4')};
`

export const VideoContainer = styled.div`
  max-width: 100%;
`
export const VideoDescriptionDetails = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    padding: 0;
  }
`

export const VideoDescriptionDetailsContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const VideoContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  justify-content: space-evenly;
  @media (min-width: 576px) {
    flex-grow: 1;
    padding: 0 10px 0 10px;
    margin-top: -10px;
  }
`
export const ChannelHeadingDetails = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelLogo = styled.img`
  width: 50px;
  margin-top: 18px;
  margin-right: 15px;
`
export const VideoTextContent = styled.div`
  font-family: roboto;
  min-width: 350px;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.themeColor ? 'white' : 'black')};
  @media (min-width: 768px) {
    font-size: 17px;
    font-weight: 400;
  }
`

export const VideoDetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #94a3b8;
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.themeColor ? 'white' : 'black')};
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const VideoViewPublishedDetail = styled.ul`
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 576px) {
    justify-content: flex-start;
    padding-left: 0;
    font-size: 14px;
  }
`

export const VideoViewCount = styled.p`
  margin-right: 15px;
  list-style-type: none;
  @media (min-width: 576px) {
    margin-right: 30px;
    list-style-type: none;
  }
`
export const VideoPublished = styled.p`
  list-style-type: disc;
`
export const VideoErrorViewContainer = styled.div`
  font-family: roboto;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 85vh;
  @media (min-width: 768px) {
    margin-top: 150px;
    padding-left: 100px;
    width: 75vw;
  }
`
export const VideoLikeDislikeSaveContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  max-width: 55%;
  align-items: center;
  margin-top: 0;
  @media (min-width: 768px) {
    margin-top: 15px;
  }
`

export const VideoLDSItem = styled.li`
  color: #616e7c;
`

export const VideoLDSButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${props => (props.toggleColor ? '#2563eb' : '#64748b')};
`

export const VideoLDSText = styled.p`
  margin-left: 4px;
  font-family: roboto;
  font-size: 17px;
`
export const HorizontalLine = styled.hr`
  opacity: 0.5;
  border: 1px #616e7c solid;
`
export const ChannelNameAndSubCount = styled.div`
  font-family: roboto;
  margin-top: 15px;
`

export const SubCount = styled.p`
  font-size: 14px;
  color: #616e7c;
`
export const VideoDescriptionText = styled.p`
  font-size: 14px;
  color: #616e7c;
  color: ${props => (props.themeColor ? 'white' : 'black')};
  font-family: roboto;
  @media (min-width: 768px) {
    margin-left: 65px;
  }
`

export const VideoFailureImg = styled.img`
  width: 225px;
  @media (min-width: 768px) {
    width: 300px;
  }
`
export const VideoFailureHeading = styled.h1`
  margin-bottom: 0;
  font-size: 20px;
  margin-top: 40px;
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
  margin-top: 15px;
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

export const DesktopViewSliderBar = styled.div`
    display: flex;
    min-width: 244px;
    padding: 20px;
  }
`

export const SlideBarList = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 19px;
`
export const SlideBarItem = styled.li``

export const SlideBarItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`

export const SlideBarTextContent = styled.p`
  font-weight: 500;
  margin-left: 15px;
  font-family: roboto;
  color: ${props => (props.themeColor ? 'white' : 'black')};
`

export const DesktopViewSliderContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 92vh;
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
