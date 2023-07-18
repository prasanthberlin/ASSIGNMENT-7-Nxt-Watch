import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavHeader,
  NavBarMobileLogoContainer,
  MenuListLinkItem,
  WebsiteLogoHeader,
  MobileIconContainer,
  MobileListItem,
  MobileLogoutButton,
  NavBarLargeContainer,
  PopupContainer,
  MobileViewTriggerButton,
  TriggerPopupContainer,
  TriggerContent,
  CloseTriggerButton,
  TriggerList,
  TriggerItem,
  MenuIcon,
  TriggerTextContent,
  LogoutPopupContainer,
  LogoutPopup,
  LogoutPopupText,
  CancelLogoutButton,
  ConfirmLogoutButton,
  DesktopViewList,
  DesktopViewItem,
  ThemeToggleButton,
  ProfileIconImage,
  DesktopLogoutButton,
} from './styledComponents'

const menuListItems = [
  {id: 1, link: '/', icon: <AiFillHome />, text: 'Home'},
  {id: 2, link: '/trending', icon: <HiFire />, text: 'Trending'},
  {id: 3, link: '/gaming', icon: <SiYoutubegaming />, text: 'Gaming'},
  {id: 4, link: '/saved-videos', icon: <MdPlaylistAdd />, text: 'Saved videos'},
]

class Header extends Component {
  renderHeaderRoute = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {toggleTheme, darkTheme, activeMenuId, activeMenu} = value

        const onClickLogout = () => {
          const {history} = this.props

          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const toggleThemeButton = () => {
          toggleTheme()
        }

        const websiteLogoUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        function themeIconUrl() {
          if (darkTheme) {
            return <FiSun size="25" color="white" />
          }
          return <RiMoonFill size="25" color="black" />
        }

        const popupMenuItems = menu => {
          const changeActiveMenuId = () => {
            activeMenu(menu.id)
          }
          return (
            <MenuListLinkItem to={menu.link}>
              <TriggerItem
                activeMenu={menu.id === activeMenuId}
                themeColor={darkTheme}
                key={menu.id}
                onClick={changeActiveMenuId}
              >
                <MenuIcon activeMenu={menu.id === activeMenuId}>
                  {menu.icon}
                </MenuIcon>
                <TriggerTextContent
                  activeMenu={menu.id === activeMenuId}
                  themeColor={darkTheme}
                >
                  {menu.text}
                </TriggerTextContent>
              </TriggerItem>
            </MenuListLinkItem>
          )
        }

        return (
          <NavHeader themeColor={darkTheme}>
            <NavBarMobileLogoContainer>
              <Link to="/">
                <WebsiteLogoHeader src={websiteLogoUrl} alt="website logo" />
              </Link>
              <MobileIconContainer>
                <MobileListItem>
                  <ThemeToggleButton
                    data-testid="theme"
                    type="button"
                    onClick={toggleThemeButton}
                  >
                    {themeIconUrl()}
                  </ThemeToggleButton>
                </MobileListItem>
                <MobileListItem>
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={
                        <MobileViewTriggerButton type="button">
                          <GiHamburgerMenu
                            size="25"
                            color={darkTheme ? 'white' : 'black'}
                          />
                        </MobileViewTriggerButton>
                      }
                    >
                      {close => (
                        <TriggerPopupContainer themeColor={darkTheme}>
                          <TriggerContent>
                            <CloseTriggerButton
                              type="button"
                              onClick={() => close()}
                            >
                              <IoMdClose
                                size="30"
                                color={darkTheme ? 'white' : 'black'}
                              />
                            </CloseTriggerButton>
                            <TriggerList>
                              {menuListItems.map(menu => popupMenuItems(menu))}
                            </TriggerList>
                          </TriggerContent>
                        </TriggerPopupContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </MobileListItem>
                <MobileListItem>
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={
                        <MobileLogoutButton type="button">
                          <FiLogOut
                            size="25"
                            color={darkTheme ? 'white' : 'black'}
                          />
                        </MobileLogoutButton>
                      }
                    >
                      {close => (
                        <LogoutPopupContainer themeColor={darkTheme}>
                          <LogoutPopup themeColor={darkTheme}>
                            <LogoutPopupText themeColor={darkTheme}>
                              Are you sure, you want to logout
                            </LogoutPopupText>
                            <CancelLogoutButton
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelLogoutButton>
                            <ConfirmLogoutButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmLogoutButton>
                          </LogoutPopup>
                        </LogoutPopupContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </MobileListItem>
              </MobileIconContainer>
            </NavBarMobileLogoContainer>

            <NavBarLargeContainer>
              <Link to="/">
                <WebsiteLogoHeader src={websiteLogoUrl} alt="website logo" />
              </Link>

              <DesktopViewList>
                <DesktopViewItem>
                  <ThemeToggleButton type="button" onClick={toggleThemeButton}>
                    {themeIconUrl()}
                  </ThemeToggleButton>
                </DesktopViewItem>

                <DesktopViewItem>
                  <ProfileIconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </DesktopViewItem>
                <DesktopViewItem>
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={
                        <DesktopLogoutButton
                          type="button"
                          onClick={onClickLogout}
                          themeColor={darkTheme}
                        >
                          Logout
                        </DesktopLogoutButton>
                      }
                    >
                      {close => (
                        <LogoutPopupContainer themeColor={darkTheme}>
                          <LogoutPopup themeColor={darkTheme}>
                            <LogoutPopupText themeColor={darkTheme}>
                              Are you sure, you want to logout
                            </LogoutPopupText>
                            <CancelLogoutButton
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelLogoutButton>
                            <ConfirmLogoutButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmLogoutButton>
                          </LogoutPopup>
                        </LogoutPopupContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                </DesktopViewItem>
              </DesktopViewList>
            </NavBarLargeContainer>
          </NavHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return this.renderHeaderRoute()
  }
}

export default withRouter(Header)
