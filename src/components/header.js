import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

const Header = () => {
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
      background: `#14213D`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#fca311`,
            textDecoration: `none`,
          }}
        >
          Desprint Cars
        </Link>
      </h1>
      <h3 >
        <Link
          to="/cars"
          style={styles.menuItem}
        >
          Product overview
        </Link>
      </h3>

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

const styles = {
  menuItem:{
    color: `#fca311`,
    textDecoration: `none`,
    marginTop: "15px",
    paddingLeft: "50px"

  }
}
export default Header
