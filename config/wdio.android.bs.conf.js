import dotenv from 'dotenv'

import { config } from './wdio.shared.conf.js'

dotenv.config()
//
// ==================
// Specify Test Files
// ==================
// Define which test specs should run. The pattern is relative to the directory
// of the configuration file being run.
//
// The specs are defined as an array of spec files (optionally using wildcards
// that will be expanded). The test for each spec file will be run in a separate
// worker process. In order to have a group of spec files run in the same worker
// process simply enclose them in an array within the specs array.
//
// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
// then the current working directory is where your `package.json` resides, so `wdio`
// will be called from there.
//
config.specs = [
  // ToDo: define location for spec files here
  "./../test/specs/android/add-note-with-screenobject.spec.js",
]

//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://saucelabs.com/platform/platform-configurator
//
// Use the Browserstack capabilities builder: 
//   https://www.browserstack.com/app-automate/capabilities?tag=w3c
config.capabilities = [
  {
    // Android
    'platformName': 'android',
    'appium:platformVersion': '13.0',
    'appium:deviceName': 'Google Pixel 7',
    'browserName' : 'chrome',
    'appium:automationName': 'UIAutomator2',
    // Uploading the app to Browser Stack can be done with a curl command too:
    //   https://app-automate.browserstack.com/dashboard/v2/quick-start/integrate-test-suite-step
    'appium:app': 'bs://a62039aa115d123d0fa116efa2356155b5bc4681', // Get this values from Browserstack --> App Automate --> Upload App
    'appium:autoGrantPermissions': true, // Automatically add for permissions
    'bstack:options' : {
      "userName" : process.env.BROWSERSTACK_USERNAME,
      "accessKey" : process.env.BROWSERSTACK_ACCESS_KEY,
      },
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["browserstack"]

// Browserstack
config.user = process.env.BROWSERSTACK_USERNAME
config.key = process.env.BROWSERSTACK_ACCESS_KEY

export { config }