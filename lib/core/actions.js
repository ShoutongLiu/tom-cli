// 执行的action代码
const { promisify } = require('util') // 将回调函数转成promise形式
const download = promisify(require('download-git-repo'))
const { vueRepo } = require('../config/repo-config')
const path = require('path')
const { commandSpawn } = require('../utils/terminal')

const { compile, writeToFIle } = require('../utils/ejs')

// 创建项目
const createProjectAction = async (project) => {
  console.log('正在创建项目...');
  // 1. 克隆项目  project是指放入哪个文件夹
  await download(vueRepo, project, { clone: true })
  // 2.执行npm install
  const command = process.platform === 'win32' ? 'npm.cmd': 'npm'
  await commandSpawn(command, ['install'] , {cwd: `./${project}`})

  // 3.执行npm run serve
  await commandSpawn(command, ['run', 'serve'] , {cwd: `./${project}`})

  // 4.自动打开浏览器
  // open('')
}

// 创建组件
const addComponentsAction = async (name, dest) => {
  // 1.编写对应的ejs模板
  // 2.编译ejs模板得到res
  const res = await compile('component.vue.ejs', {name})
  const filePath = path.resolve(dest, `${name}.vue`)
  // 3.将res写入到.vue文件中
  writeToFIle(filePath, res)
  // 4.放入对应的文件夹
}

module.exports = {
  createProjectAction,
  addComponentsAction
}

