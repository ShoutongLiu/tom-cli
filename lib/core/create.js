// 创建项目
const program = require('commander')
const { createProjectAction, addComponentsAction } = require('./actions')

const createCommands = () => {
  program.command('create <project> [others...]')
    .description('clone repository into a folder')
    .action(createProjectAction)  // action函数可以传入promise

  program.command('addcpn <name>')
    .description('add vue component 例如：tom add HelloWorld -d src/componemts')
    .action((name) => {
      addComponentsAction(name, program.dest || 'src/components')
    })  // action函数可以传入promise
}

module.exports = createCommands