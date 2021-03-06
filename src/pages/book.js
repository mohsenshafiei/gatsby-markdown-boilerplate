import React from "react"
import Layout from "../layout"
import style from "./book.module.scss"
import { graphql, StaticQuery } from "gatsby"
import Book from "../components/book"
import SEO from "../components/seo"

const BookPage = () => (
  <Layout>
    <SEO title="Blog" description="List of blog post" />
    <div className={style.container}>
      <StaticQuery
        query={booksQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                  <Book
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

const booksQuery = graphql`
  query booksQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/books/.*.md$/" } }
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

export default BookPage
