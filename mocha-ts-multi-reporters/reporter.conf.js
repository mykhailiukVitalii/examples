// //default
// module.exports = {
//   reporterEnabled: 'spec, @testomatio/reporter/lib/adapter/mocha.js',
//   testomatioReporterLibAdapterMochaJsReporterOptions: {
//     apiKey: process.env.TESTOMATIO
//   }
// }

module.exports = {
  reporterEnabled: 'spec, /home/xxx/reporter/lib/adapter/mocha.js', // //TODO: path To local reporter
  homeXxxReportesLibAdapterMochajsReporterOptions: {
    apiKey: process.env.TESTOMATIO
  }
}
