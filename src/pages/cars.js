/*
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

const cars = ({ siteTitle }) => {
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
  return(
    <>
  </>
  )
}


export default cars
*/