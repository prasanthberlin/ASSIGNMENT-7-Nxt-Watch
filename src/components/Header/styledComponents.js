import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: #f1f1f1;
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
  width: 100%;
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
  background-color: white;
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
`
export const DesktopViewList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`

export const DesktopViewItem = styled.li``

export const ThemeToggleButton = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
