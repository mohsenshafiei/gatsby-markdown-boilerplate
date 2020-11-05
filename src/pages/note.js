import React from "react"
import Layout from "../layout"
import style from "./note.module.scss"
import { graphql, StaticQuery } from "gatsby"
import Note from "../components/note"
import SEO from "../components/seo"

const NotePage = () => (
  <Layout>
    <SEO title="Notes" description="List of notes" />
    <div className={style.container}>
      <StaticQuery
        query={notesQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                  <Note
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    tags={node.frontmatter.tags}
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

const notesQuery = graphql`
  query notesQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/notes/.*.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            tags
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

export default NotePage
