module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'entry',
      polyfills: [
        'es.promise',
        'es.array.iterator',
        'es.object.assign',
        'es.promise.finally',
        'es.symbol'
      ]
    }]
  ]
}