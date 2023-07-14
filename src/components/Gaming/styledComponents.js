import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#d7dfe9')};
  @media (min-width: 768px) {
    display: flex;
  }
`

export const GamingHeaderContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#313131' : '#ebebeb')};
  display: flex;
  padding: 20px;
  align-items: center;
`

export const GamingLogoContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#d7dfe9')};
  margin-right: 20px;
  padding: 10px;
  border-radius: 40px;
`

export const GamingText = styled.h1`
  font-size: 24px;
  font-family: roboto;
  font-weight: bold;
  color: ${props => (props.themeColor ? '#ffffff' : '#313131')};
`

export const GamingBodyContainer = styled.div`
  background-color:  background-color: ${props =>
    props.themeColor ? '#0f0f0f' : '#f4f4f4'};
`

export const VideoContainer = styled.ul`
  list-style-type: none;
    background-color:  background-color: ${props =>
      props.themeColor ? '#0f0f0f' : '#f4f4f4'};
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
`

export const VideoItem = styled.li`
background-color:  background-color: ${props =>
  props.themeColor ? '#0f0f0f' : '#f4f4f4'};
  @media (min-width: 576px) {
    max-width: 100%;
    margin-bottom: 60px;
    display: flex;
    align-items: flex-start;
  }
`
export const VideoItemContainer = styled.div`
  font-family: roboto;
  margin-right: 16px;
`

export const GamingVideoThumbnail = styled.img`
  width: 200px;
`

export const GamingVideoHeading = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #00306e;
`

export const GamingVideoWatchingCount = styled.p`
  max-width: 100px;
  line-height: 1.5;
  margin-top: 0;
  color: #7e858e;
  @media (min-width: 576px) {
    max-width: 100%;
  }
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

export const DesktopViewSliderBar = styled.li`
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

export const DesktopViewSliderContainer = styled.ul`
  display: none;
  @media (min-width: 768px) {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 92vh;
    background-color: ${props => (props.themeColor ? '#181818' : '#f1f5f9')};
  }
`

export const DesktopViewSliderFooter = styled.li`
  padding: 10px;
  max-width: 200px;
`

export const ContactUsHeading = styled.p`
  font-family: roboto;
  color: ${props => (props.themeColor ? 'white' : 'black')};
  font-size: 15px;
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
