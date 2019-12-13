import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    Hello world!
    <Link to="/blog">Blog</Link>
    <Link to="/tours">Tours</Link>
    <Link to="/contact">Contact</Link>
  </Layout>
)
