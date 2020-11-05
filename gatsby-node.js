const { slugify } = require("./src/util/utilityFunctions")
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(__dirname, "src/templates/post.js")

  const posts = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  const noteTemplate = path.resolve(__dirname, "src/templates/note.js")

  const notes = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const notes = res.data.allMarkdownRemark.edges
    notes.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: noteTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  const storyTemplate = path.resolve(__dirname, "src/templates/story.js")

  const stories = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const stories = res.data.allMarkdownRemark.edges
    stories.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: storyTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  const bookTemplate = path.resolve(__dirname, "src/templates/book.js")

  const books = graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const books = res.data.allMarkdownRemark.edges
    books.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: bookTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  return Promise.all([posts, notes, stories])
}
