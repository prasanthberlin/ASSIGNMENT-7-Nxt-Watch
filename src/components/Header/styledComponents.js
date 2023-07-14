import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: ${props => (props.themeColor ? '#0f0f0f' : '#f1f1f1')};
  padding: 0px 20px;
  @media screen and (min-width: 767px) {
    padding: 25px 60px 25px 60px;
  }
`
export const NavBarMobileLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const WebsiteLogoHeader = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 135px;
  }
`
export const MobileIconContainer = styled.ul`
  display: flex;
  max-width: 150px;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const MobileListItem = styled.li`
  color: black;
  margin-right: 10px;
`

export const MobileLogoutButton = styled.button`
  border: none;
  padding: 0px;
  background: transparent;
  color: black;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavBarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin-left: -30px;
  margin-top: -20px;
  margin-bottom: -20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div``

export const MobileViewTriggerButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const TriggerPopupContainer = styled.div`
  background-color: ${props => (props.themeColor ? '#212121' : 'white')};
  height: 100vh;
  width: 100vw;
  padding: 50px;
`
export const TriggerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
`
export const CloseTriggerButton = styled.button`
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const TriggerList = styled.ul`
  padding-left: 0;
  list-style: none;
  font-size: 19px;
`
export const TriggerItem = styled.li``

export const TriggerItemContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`

export const TriggerTextContent = styled.p`
  font-weight: 500;
  margin-left: 15px;
  font-family: roboto;
  color: ${props => (props.themeColor ? 'white' : 'black')};
`
export const LogoutPopupContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.themeColor ? '#f8fafc80' : '#31313150')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoutPopup = styled.div`
  background-color: ${props => (props.themeColor ? '#231f20' : '#ffffff')};
  padding: 25px 50px;
  border-radius: 10px;
  font-family: roboto;
`

export const LogoutPopupText = styled.p`
  font-weight: 500;
  margin-bottom: 30px;
  color: ${props => (props.themeColor ? 'white' : '#00306e')};
`

export const CancelLogoutButton = styled.button`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  border: 1px #64748b solid;
  color: #64748b;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 3px;
`

export const ConfirmLogoutButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-weight: 500;
  border-radius: 3px;
  background-color: #3b82f6;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  margin-left: 20px;
`

export const DesktopViewList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  min-width: 180px;
`

export const DesktopViewItem = styled.li``

export const ThemeToggleButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
export const ProfileIconImage = styled.img`
  width: 28px;
`

export const DesktopLogoutButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: ${props =>
    props.themeColor ? '1px white solid' : '1px #3b82f6 solid'};
  color: ${props => (props.themeColor ? 'white' : '#3b82f6')};
  padding: 4px 12px;
  font-weight: 700;
  font-size: 14px;
`
