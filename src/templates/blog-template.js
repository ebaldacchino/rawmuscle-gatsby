// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import ReactMarkdown from "react-markdown"

// export default () => {
//   return (
//     <Layout title="Blog Post Title">
//       <section>
//         <article>
//           <ReactMarkdown source="content" />
//         </article>
//         <Link to="/blog">
//           <button className="btn">view blog posts</button>
//         </Link>
//       </section>
//     </Layout>
//   )
// }
// export const query = graphql`
//   query GetSingleBlog($slug: String) {
//     blog: strapiBlogs(slug: { eq: $slug }) {
//       content
//       title
//       desc
//     }
//   }
// `
