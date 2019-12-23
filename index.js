const fs = require('fs');
const ohLocoMeu = require('oh-loco-meu/dist/ohlocomeu.bundle');
const pluginName = 'OhLocoMeuWebpackPlugin';

class OhLocoMeuWebpackPlugin {
  constructor(options) {
    const defaultOptions = {
      locales: ohLocoMeu.LOCALES,
      filesDir: './',
      filesTypes: ['json'],
    }
    this.options = Object.assign(defaultOptions, options)
  }

  apply(compiler) {
    compiler.hooks.beforeRun.tapPromise(pluginName, () => {
      if (!fs.existsSync(this.options.filesDir)) fs.mkdirSync(this.options.filesDir);
      const files = fs.readdirSync(this.options.filesDir)

      if (!files || files.length === 0) {
        return ohLocoMeu.get(
          this.options.locales,
          this.options.filesTypes,
          this.options.filesDir
        )
      }
      return Promise.resolve()
    })
  }
}

module.exports = OhLocoMeuWebpackPlugin;