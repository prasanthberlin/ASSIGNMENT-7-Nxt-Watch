import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {RiMoonFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {HiFire} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavHeader,
  NavBarMobileLogoContainer,
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
  TriggerItemContainer,
  TriggerTextContent,
  DesktopViewList,
  DesktopViewItem,
  ThemeToggleButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavHeader className="nav-header">
      <NavBarMobileLogoContainer>
        <Link to="/">
          <WebsiteLogoHeader
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <MobileIconContainer>
          <MobileListItem>
            <ThemeToggleButton type="button">
              <RiMoonFill size="25" color="black" />
            </ThemeToggleButton>
          </MobileListItem>
          <MobileListItem>
            <PopupContainer>
              <Popup
                modal
                trigger={
                  <MobileViewTriggerButton
                    type="button"
                    className="trigger-button"
                  >
                    <GiHamburgerMenu size="25" color="black" />
                  </MobileViewTriggerButton>
                }
              >
                {close => (
                  <TriggerPopupContainer>
                    <TriggerContent>
                      <CloseTriggerButton type="button" onClick={() => close()}>
                        <IoMdClose size="30" />
                      </CloseTriggerButton>
                      <TriggerList>
                        <TriggerItem>
                          <Link to="/">
                            <TriggerItemContainer>
                              <AiFillHome />
                              <TriggerTextContent>Home</TriggerTextContent>
                            </TriggerItemContainer>
                          </Link>
                        </TriggerItem>
                        <TriggerItem>
                          <Link to="/trending">
                            <TriggerItemContainer>
                              <HiFire />
                              <TriggerTextContent>Trending</TriggerTextContent>
                            </TriggerItemContainer>
                          </Link>
                        </TriggerItem>
                        <TriggerItem>
                          <Link to="/gaming">
                            <TriggerItemContainer>
                              <SiYoutubegaming />
                              <TriggerTextContent>Gaming</TriggerTextContent>
                            </TriggerItemContainer>
                          </Link>
                        </TriggerItem>
                        <TriggerItem>
                          <Link to="/gaming">
                            <TriggerItemContainer>
                              <MdPlaylistAdd />
                              <TriggerTextContent>
                                Saved videos
                              </TriggerTextContent>
                            </TriggerItemContainer>
                          </Link>
                        </TriggerItem>
                      </TriggerList>
                    </TriggerContent>
                  </TriggerPopupContainer>
                )}
              </Popup>
            </PopupContainer>
          </MobileListItem>
          <MobileListItem>
            <MobileLogoutButton type="button" onClick={onClickLogout}>
              <FiLogOut size="25" />
            </MobileLogoutButton>
          </MobileListItem>
        </MobileIconContainer>
      </NavBarMobileLogoContainer>

      <NavBarLargeContainer>
        <Link to="/">
          <WebsiteLogoHeader
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <DesktopViewList>
          <DesktopViewItem>
            <ThemeToggleButton type="button">
              <RiMoonFill size="25" color="black" />
            </ThemeToggleButton>
          </DesktopViewItem>

          <DesktopViewItem className="nav-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </DesktopViewItem>
          <DesktopViewItem>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </DesktopViewItem>
        </DesktopViewList>
      </NavBarLargeContainer>
    </NavHeader>
  )
}

export default withRouter(Header)
