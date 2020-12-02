import Layout from "../components/layout"
import Seo from "../components/seo"
import { View, Text } from "react"

import React from "react"
import { graphql, Link } from "gatsby"

const cars = ({ data }) => {
  console.log(data)
  //map over the array
  var allcars = data.wpcontent.cars.edges
  var cars = []
  allcars.map((car, index) => {
    cars.push(<CarView car={car.node.Car} key={index} slug={car.node.slug}></CarView>)
  })
  console.log(cars)
  return (
    <Layout>
      <Seo title="cars"></Seo>
      {cars}
    </Layout>
  )
}

export const CarView = (props) => {
  const { brand, model } = props.car
  const slug = props.slug
  const link = "/" + slug
  console.log(props.car)
  console.log(slug)

  return(
  <>
    <View>
        <Text>
          {brand}, {model}
        </Text>
    </View>
    </>
  )
}

export const pageQuery = graphql`
  {
    wpcontent {
      cars {
        edges {
          node {
            Car {
              brand
              model
            }
            slug
          }
        }
      }
    }
  }
`

export default cars
