const fs = require('fs');
const ohLocoMeu = require('oh-loco-meu/dist/ohlocomeu.bundle');
const pluginName = 'OhLocoMeuWebpackPlugin';

class OhLocoMeuWebpackPlugin {
  constructor(options) {
    console.log('LOCALES: ', ohLocoMeu.LOCALES)
    const defaultOptions = {
      locales: ohLocoMeu.LOCALES,
      filesDir: './',
      filesTypes: ['json'],
    }
    this.options = Object.assign(defaultOptions, options)
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap(pluginName, () => {
      if (!fs.existsSync(this.options.filesDir)) fs.mkdirSync(this.options.filesDir);
      return ohLocoMeu.get(
        this.options.locales,
        this.options.filesTypes,
        this.options.filesDir,
        this.options.contentFormat,
      )
    })
  }
}

module.exports = OhLocoMeuWebpackPlugin;