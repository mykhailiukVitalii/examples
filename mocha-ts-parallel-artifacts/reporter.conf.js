module.exports = {
  reporterEnabled: '@testomatio/reporter/lib/adapter/mocha.js',
  testomatioReporterLibAdapterMochaJsReporterOptions: {
    apiKey: process.env.TESTOMATIO
  }
}
