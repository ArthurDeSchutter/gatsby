import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const{ 
      wpcontent: {cars},
  } = useStaticQuery(graphql`
  query {
    wpcontent {
      cars {
        edges {
          node {
            Car {
              amountOfWheels
              brand
              fieldGroupName
              licencePlate
              model
            }
          }
        }
      }
    }
  }
  `)
  return(
    <>
    <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h1>
      <h2 style={{ margin: 0, display: "inline" }}>
        <Link
          to="/cars"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Product overview
        </Link>
      </h2>

    </div>
  </header>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
