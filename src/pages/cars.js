import Layout from "../components/layout"
import Seo from "../components/seo"
import {View, Text} from "react"

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"

const cars = ({ data }) => {
  console.log(data)
  //map over the array
  var allcars = data.wpcontent.cars.edges
  var cars = []
  allcars.map((car,index) => {cars.push(<CarView car={car} slug={data.wpcontent.cars.edges[index].slug}></CarView>)})
  return(
    <Layout>
    {cars}
  </Layout>
)
}

const CarView = (props) => {
   const {brand, model} = props.car
   const slug = props.slug
   const link = "/" + slug

   return(
   <View>
     <Link to={{pathname: `/${slug}`}}>
      <Text>
        {brand}, {model}
      </Text>
     </Link>
   </View>
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
}`

export default cars
