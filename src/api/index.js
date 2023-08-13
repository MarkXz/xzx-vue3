/**
 * Created by WebStorm.
 * User: xizixin
 * Date: 2022-07-28
 * Description: 文件描述
 */
const modulesFiles = import.meta.glob("./apis/*", {
  eager: true
})
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
  const value = modulesFiles[modulePath]
  modules = Object.assign(modules, value.default)
  return modules
}, {})

export default modules
