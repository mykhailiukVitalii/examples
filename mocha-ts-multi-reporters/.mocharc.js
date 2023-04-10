module.exports = {
  require: ['ts-node/register',  'dotenv/config', './spec/hooks.js'],
  spec: './spec/**/*.spec.ts',
  reporter: 'mocha-multi-reporters',
  reporterOptions: ['configFile=reporter.conf.js'],
  parallel: true
}
