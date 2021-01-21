const path = require("path")
const { strippers } = require("./src/constants/strippers")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  strippers.forEach(stripper => {
    createPage({
      path: `/male-strippers/${stripper.name.replace(" ", "-").toLowerCase()}`,
      component: path.resolve(`src/templates/stripper-template.js`),
      context: stripper,
    })
  })
}
