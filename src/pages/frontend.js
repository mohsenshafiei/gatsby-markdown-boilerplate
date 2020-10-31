import React from "react"
import Layout from "../layout"
import style from "./frontend.module.scss"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/post"

const Frontend = () => (
  <Layout>
    <div className={style.container}>
      <StaticQuery
        query={indexQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                  <Post
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    slug={node.fields.slug}
                    body={node.excerpt}
                    key={node.id}
                  />
                )
              })}
            </div>
          )
        }}
      ></StaticQuery>
    </div>
  </Layout>
)

const indexQuery = graphql`
  query indexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/.*.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Frontend
