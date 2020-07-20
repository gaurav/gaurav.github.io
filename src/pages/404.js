import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 Not Found</h1>
    <p>This page doesn't exist. Maybe <Link to="/">go back to the start page</Link>?</p>
  </Layout>
)

export default NotFoundPage
