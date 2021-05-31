// module.exports = ({ context, options, onGetWebpackConfig, ...restApi }) => {
//   console.log(JSON.stringify(context.userConfig));
// };
module.exports = ({ context, modifyUserConfig }) => {
  const { command, commandArgs } = context;
  const mode = commandArgs.mode || command;
  modifyUserConfig('wechat-miniprogram', { nativeConfig: { appid: 'wx92e4662337cc4e25' } });
  modifyUserConfig('outputDir', `build/${mode}`); // key, value 分别为用户配置文件键值对
  console.log(JSON.stringify(context.userConfig));
  console.log(mode);
};
