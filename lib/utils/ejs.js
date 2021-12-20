const ejs = require('ejs')
const path = require('path')
const fs = require('fs')

const compile = (tempName, data) => {
  const templatePosition = `../templates/${tempName}`
  const templatePath = path.resolve(__dirname, templatePosition)
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, (err, res) => {
      if (err) {
        console.log(err);
        reject(err)
        return
      }
      resolve(res)
    })
  })
}

const writeToFIle = (path, content) => {
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFIle
}