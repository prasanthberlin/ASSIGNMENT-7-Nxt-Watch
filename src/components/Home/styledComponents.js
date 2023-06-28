import styled from 'styled-components'

export const HomeContainer = styled.div``
export const BannerBackgroundContainer = styled.div`
  padding: 30px;
  font-family: roboto;
  display: flex;
  justify-content: space-between;
  @media (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
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

export const BannerHeading = styled.h1`
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

export const HomeContent = styled.div`
  padding: 10px 20px;
  @media (min-width: 576px) {
    max-width: 80%;
  }
`

export const SearchContainer = styled.div`
  border: 1px #ebebeb solid;
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
  color: #313131;
`

export const SearchButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #f9f9f9;
  border-left: 3px #ebebeb solid;
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

export const VideoTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
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
  @media (min-width: 576px) {
    margin-top: 0;
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

export const VideoViewCount = styled.li`
  margin-right: 40px;
  list-style-type: disc;
  @media (min-width: 576px) {
    margin-right: 30px;
    list-style-type: none;
  }
`
export const VideoPublished = styled.li`
  list-style-type: disc;
`
export const NoVideoView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
  text-align: center;
  margin-top: 50px;
  @media (min-width: 768px) {
    margin-top: 70px;
    padding-left: 100px;
  }
`
export const NoVideoImage = styled.img`
  width: 220px;
  @media (min-width: 768px) {
    width: 500px;
  }
`

export const NoVideoHeading = styled.h1`
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #1e293b;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 38px;
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
    margin-top: 70px;
    padding-left: 100px;
  }
`
export const VideoFailureImg = styled.img`
  width: 200px;
  @media (min-width: 768px) {
    width: 500px;
  }
`
export const VideoFailureHeading = styled.h1`
  margin-top: 40px;
  margin-bottom: 0;
  font-size: 20px;
  color: #1e293b;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 38px;
  }
`

export const VideoFailureDescription = styled.p`
  max-width: 350px;
  font-size: 18px;
  line-height: 1.5;
  color: #475569;
  margin-top: 5px;
  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 13px;
    margin-top: 15px;
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
