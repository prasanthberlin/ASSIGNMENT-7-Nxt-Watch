import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#d7dfe9')};
  @media (min-width: 768px) {
    display: flex;
  }
`
export const SavedVideosBodyContainer = styled.div`
  padding-top: 20px;
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#d7dfe9')};
`
export const NoSavedVideoContainer = styled.div`
  font-family: roboto;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 85vh;
  @media (min-width: 768px) {
    margin-top: 100px;
    padding-left: 100px;
    width: 75vw;
  }
`
export const NoSavedVideoImg = styled.img`
  width: 400px;
`
export const NoSavedVideoHeading = styled.h1`
  margin-bottom: 0;
  font-size: 28px;
  margin-top: 40px;
  color: ${props => (props.themeColor ? 'white' : '#1e293b')};
  font-weight: 600;
  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 600;
  }
`

export const NoSavedVideoDescription = styled.p`
  max-width: 500px;
  font-size: 18px;
  line-height: 1.5;
  color: ${props => (props.themeColor ? 'white' : '#475569')};
  margin-top: 15px;
  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    margin-top: 15px;
    max-width: 400px;
  }
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
    height: 110vh;
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
