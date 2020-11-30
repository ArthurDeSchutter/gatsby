import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  console.log(cars, "cars")
  return <div>header</div>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
