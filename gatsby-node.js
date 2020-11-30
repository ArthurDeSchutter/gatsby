const {graphql } = require("gatsby")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    return graphql(`
    {
    wpcontent {
        cars {
          edges {
            node {
              slug
              id
            }
          }
        }
      }    
    }
    `).then(result => {
        console.log(result)
        if (result.errors) {
            result.errors.e.forEach(e => {
                console.error(e.toString())
                return Promise.reject(result.errors)
            });

            const cars = result.data.wpconten.cars.edges;
            console.log(cars)

            cars.forEach(car => {
                const {id, slug} = car.node
                createPage({
                    path: slug,
                    component: path.resolve(`src\templates\templateStyles\cars.js`),
                    context: {
                        id,
                        slug
                    }
                })
            })

            return result
        }
    })
}