// Untested because I don't have the .app file from the course yet

describe('iOS WebView', () => {
    it('Working with dynamic webview', async () => {
        await $('~Webview').click()

        // Get current context
        console.log(await driver.getContext())

        // Wait until we get multiple contexts
        await driver.waitUntil(async () => {
            const c = await driver.getContexts()
            return c.length > 1
        }, {
            timeout: 30000,
            timeoutMsg: 'Timed out waiting for another context'
        })

        // Switch to the webview context
        const contexts = await driver.getContexts()
        await driver.switchContext(contexts.find(context => context.includes('WEBVIEW')))

        // Assertion
        const subtitleText = await $('.hero_subtitle')
        await expect(subtitleText).toHaveTextContaining('automation')

        // Switch back to Native app
        await driver.switchContext('NATIVE_APP')
        await $('~Home').click

        // Assertion
        const webdriverText = await $('//*[@name="WEBDRIVER"]')
        await expect(webdriverText).toBeDisplayed()
    })
})