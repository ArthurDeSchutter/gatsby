import Layout from "../components/layout"
import Seo from "../components/seo"
import { View, Text } from "react"
//import { Link } from "gatsby"

import React from "react"
import { graphql, Link } from "gatsby"

const cars = ({ data }) => {
  console.log(data)
  //map over the array
  var allcars = data.wpcontent.cars.edges
  var cars = []
  allcars.map((car, index) => {
    cars.push(
      <CarView car={car.node.Car} key={index} slug={car.node.slug}></CarView>
    )
  })
  console.log(cars)
  return (
    <Layout>
      <Seo title="cars"></Seo>
      {cars}
    </Layout>
  )
}

export const CarView = props => {
  const { brand, model, image } = props.car
  const slug = props.slug
  const link = "/" + slug
  let imgIsValid = false
  console.log(props.car)
  console.log(slug)


  return (
    <>
      <Link to={link}>
        <div>
          <h2
            style={{
              color: `#fca311`,
            }}
          >
            {brand}, {model}
          </h2 >
          {image.sourceUrl ? (
            !null
          ) : (
            <img src={image.sourceUrl} width="30%" height="30%" />
          )}
        </div>
      </Link>
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
              image {
                sourceUrl
              }
            }
            slug
          }
        }
      }
    }
  }
`

export default cars
