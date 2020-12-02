import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Image } from "./templateStyles/artistStyles"

const CarTemplate = ({data}) => {
    console.log(data, "id")
    console.log(data.wpcontent.car.Car)
    const {amountofWheels, brand, licencePlate, model} = data.wpcontent.car.Car
    const {uri, altText} = data.wpcontent.car.Car.model
    console.log(amountofWheels)
    return(
      
      <Layout>
        <Seo title="car">

        </Seo>
        <h1>Brand: {brand}</h1>
        <h2>Model: {model}</h2>
        <h3>licence plate: {licencePlate}</h3>
        <h3>amount of wheels: {amountofWheels}</h3>
        <img src={uri} alt={altText}></img>
      </Layout>
      
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
        image {
          uri
        }
      }
    }
  }
}
`