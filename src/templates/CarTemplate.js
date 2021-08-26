import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CarTemplate = ({data}) => {
    console.log(data.wpcontent.car.Car)
    const {amountOfWheels, brand, licencePlate, model, image} = data.wpcontent.car.Car
    const {altText} = data.wpcontent.car.Car.model
    return(
      
      <Layout>
        <Seo title="car">

        </Seo>
        <h1 style={styles.yellowtext} >Brand: {brand}</h1>
        <h2 style={styles.yellowtext}>Model: {model}</h2>
        <h3 style={styles.yellowtext}>licence plate: {licencePlate}</h3>
        <h3 style={styles.yellowtext}>amount of wheels: {amountOfWheels}</h3>
        <img src={image.sourceUrl} alt={altText}></img>
        <Link to="/cars" style={styles.yellowtext}><h2 style={styles.yellowtext}>Terug</h2> </Link>

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
          sourceUrl
        }
      }
    }
  }
}
`

const styles = {
  yellowtext: {
      color: `#fca311`
    }

  }
