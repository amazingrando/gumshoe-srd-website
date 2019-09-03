import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../images/logo.png"
import color from "../utils/colors"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: this.props.menuOpen,
    }
  }

  render() {
    return (
      <header
        css={css`
          background-color: ${color.blueDark};
          display: grid;
          grid-template-columns: 20% 60% 20%;
          align-items: center;
          padding: 0 2rem;
        `}
      >
        <FontAwesomeIcon
          icon={faBars}
          css={css`
            color: ${color.yellow};
            margin-right: auto;
          `}
          size="2x"
          onClick={this.props.menuToggle}
        />
        <Link
          to="/"
          css={css`
            display: block;
            place-self: center;
          `}
        >
          <img
            src={logo}
            alt={this.props.siteTitle}
            css={css`
              display: block;
              margin-bottom: 0;
              max-width: 181px;
            `}
          />
        </Link>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuToggle: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
