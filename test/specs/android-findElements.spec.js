describe('Android Elements Tests', () => {
    it('Find element by accessibility ID', async () => {
        // find element by accessibiltiy ID
        const appOption = await $('~App')

        // click on element
        await appOption.click()

        // assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView')

        console.log(await className.getText())

        // Assert
        await expect(className).toHaveText('API Demos')
    })

    xit('Find elements by Xpath', async () => {
        // xpath = (//classname[@attribute=value])

        // Click by content description
        await $('//*[@content-desc="Alert Dialogs"]').click()

        // Click by resource ID
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // Click by text
        await $('//*[@text="Command two"]').click()

        // Assert by classname
        const textAssertion = await $('//android.widget.TextView')
        await expect(textAssertion).toHaveText('You selected: 1 , Command two')
    })

    it('Find elements by UIAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click()
    })

    xit('Find multiple elements', async () => {
        const expectedList = [
            'API Demos',
            'Access\'ibility',
            'Accessibility',
            'Animation',
            'App',
            'Content',
            'Graphics',
            'Media',
            'NFC',
            'OS',
            'Preference',
            'Text',
            'Views',
        ]
        const actualList = []

        // find multiple elements
        const textList = await $$('android.widget.TextView')
        
        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText())
        }

        // assert the list
        await expect(actualList).toEqual(expectedList)
    })

    it.only('Enter text in Country field', async () => {
        // Navigate to Screen Top
        await $('~Views').click()
        await $('~Auto Complete').click()
        await $('~1. Screen Top').click()

        // Enter text into text field
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await textField.addValue('Canada')

        // Verify country name
        await expect(textField).toHaveText('Canada')
    })
})