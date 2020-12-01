import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CarTemplate = ({pageContext}) => {
    console.log(pageContext, "id")
    console.log(pageQuery)
    return(
        <div>
            hello
        </div>
    )
}

export default CarTemplate

export const pageQuery = graphql`
query ($id: ID!) {
  wpcontent {
    car(id: $id, idType: ID) {
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
`