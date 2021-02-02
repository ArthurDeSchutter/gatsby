import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
 import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>featured:</h1>
    <Link to="/toyota">
      <div>
          <h2>
          Toyota, supra
          </h2>
      </div>
    </Link>
    <Link to="/skyline">
      <div>
          <h2>
          nissan, Skyline
          </h2>
      </div>
    </Link>

  </Layout>
)

export default IndexPage
