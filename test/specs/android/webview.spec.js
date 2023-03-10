import { AddNoteScreen } from '../../screenobjects/android/add-note.screen.js'
import { BurgerMenu } from '../../screenobjects/android/burger-menu.screen.js'

describe('Web Browser Access', () => {
    it('Access external link and verify content in the browser', async () => {
        // Skip tutorial
        await AddNoteScreen.skipButton.click()

        // Open burger menu
        await AddNoteScreen.burgerMenu.click()
        
        // Click on Facebook link - this opens in a regular web browser
        await BurgerMenu.facebook.click()

        // Can also get the context from Appium Inspector --> Actions --> Context --> Get Context List
        // Get all contexts
        const contexts = await driver.getContexts()

        // Switch to webview chrome context
        await driver.switchContext(contexts.find(context => context.includes('WEBVIEW')))

        // Can also get the context from Appium Inspector --> Actions --> Context --> Get Context
        // Get current context
        console.log(await driver.getContext())

        // Assert an HTML page loaded
        const coverImage = await $('body')
        await expect(coverImage).toBeDisplayed()

        // Switch back from native app
        await driver.switchContext('NATIVE_APP')
        await driver.back()

        // Click on "Notes"
        await BurgerMenu.notes.click()

        // Assert can see the Add Note again
        await expect(AddNoteScreen.addNoteText).toBeDisplayed()
    })
})