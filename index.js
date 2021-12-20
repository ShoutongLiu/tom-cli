#!/usr/bin/env node
const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')
// 帮助提示
helpOptions()
// 创建项目
createCommands()

program.parse(process.argv)