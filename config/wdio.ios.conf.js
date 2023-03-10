import * as path from 'path'
import { config } from './wdio.shared.conf.js'

config.port = 4723

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
  "./../test/specs/ios/ios-todolistitem-with-screenobject.spec.js",
]

//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://saucelabs.com/platform/platform-configurator
//
config.capabilities = [
  {
    // iOS
    // If simulator won't boot, can clear the XCode cache using the instructions here: https://www.youtube.com/watch?v=38MIOYZOcHg
    "appium:platformName": "iOS",
    "appium:platformVersion": "14.5", // Needs to match the simulator version
    "appium:deviceName": "iPhone 12 with iOS14.5",
    "appium:automationName": "XCUITest",
    // "appium:app": path.join(process.cwd(), "app/ios/UIKitCatalog.app"), // Could also do the full path if we wanted to
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app") // Could also do the full path if we wanted to
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["appium"]

export { config }
