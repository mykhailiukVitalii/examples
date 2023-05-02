module.exports = {
  require: ['ts-node/register',  'dotenv/config'],
  spec: ['./tests/**/*.spec.ts'],
  reporterOptions: ['configFile=reporter.conf.js'],
  timeout: '2000',
  parallel: true
}
