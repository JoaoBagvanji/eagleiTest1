'use strict';

module.exports = function(ctx) {
  var console = ctx.extend.console;

  console.register('help', '获取帮助信息.', {}, require('./help'));

  console.register('init', '生成一个博客系统的目录.', {
    desc: '指定一个路径创建目录.',
    usage: '[destination]',
    arguments: [
      {name: 'destination', desc: '文件路径,如果没有指定则使用当前目录'}
    ],
    options: [
      {name: '--no-clone', desc: 'Copy files instead of cloning from GitHub'},
      {name: '--no-install', desc: '跳过npm安装'}
    ]
  }, require('./init'));

  console.register('version', '显示版本信息.', {}, require('./version'));
};
