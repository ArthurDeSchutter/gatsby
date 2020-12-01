import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CarTemplate = ({pageContext}) => {
    console.log(pageContext.id, "id")
    return(
        <div>
            hello
        </div>
    )
}

export default CarTemplate

export const pageQuery = graphql`
query ($id: Int!) {
    wpcontent {
      cars(where: {id: $id}) {
        edges {
          node {
            slug
            id
            Car {
              amountOfWheels
              brand
              fieldGroupName
              licencePlate
              model
            }
            carId
          }
        }
      }
    }
  }
  
`