// 帮助提示信息
const package = require('../../package.json')
const program = require('commander')
const helpOptions = () => {
  // 查看版本号
  program.version('v' + package.version, '-v, --version')

  // 添加option
  program.option('-d --dest <dest>', 'a destination floder 例如： -d /src/components')

  program.on('--help', function () {
    console.log('');
    console.log('Others:');
    console.log('  other options');
  })
}

module.exports = helpOptions