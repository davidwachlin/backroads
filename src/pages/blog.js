import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      Hi from the blog page
      <Link to="/">Back Home</Link>
    </Layout>
  )
}

export default blog
