module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

// element按钮引入，presets需要调整成如下：
//  "presets": [["@bable/preset-env", { "modules": false }]],
//   "plugins": [
//     [
//       "component",
//       {
//         "libraryName": "element-ui",
//         "styleLibraryName": "theme-chalk"
//       }
//     ]
//   ]