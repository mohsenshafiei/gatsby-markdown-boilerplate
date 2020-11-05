import React from "react"
import Layout from "../layout"
import style from "./story.module.scss"
import { graphql, StaticQuery } from "gatsby"
import Story from "../components/story"
import SEO from "../components/seo"

const StoryPage = () => (
  <Layout>
    <SEO title="Stories" description="List of stories" />
    <div className={style.container}>
      <StaticQuery
        query={storiesQuery}
        render={data => {
          return (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                  <Story
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

const storiesQuery = graphql`
  query storiesQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/stories/.*.md$/" } }
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

export default StoryPage
