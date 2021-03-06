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



            return result
        }

        const cars = result.data.wpcontent.cars.edges;

        cars.forEach(car => {
          const {id, slug} = car.node
          console.log('id:'+ id +" ,slug: " +slug)
          createPage({
              path: slug,
              component: path.resolve(`src/templates/CarTemplate.js`),
              context: {
                  id: id,
                  slug: slug
              }
          })
      })

    })
}