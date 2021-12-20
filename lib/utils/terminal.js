// 执行的终端命令

const { spawn } = require('child_process') // 开启进程

const commandSpawn = (...args) => {
  return new Promise((reslove) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)  // 把安装进程放入本地的进程进行显示
    childProcess.stderr.pipe(process.stderr)  // 输出错误信息
    childProcess.on('close', () => {
      // 监听命令执行完  
      reslove()
    })
  })
}

module.exports = {
  commandSpawn
}