describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        // Access an activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        // pause to see it
        await driver.pause(3000)

        // Assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist()
    })

    it('Working with dialog boxes', async () => {
        // Access an activity
        // Can be found in Appium Inspector. Navigate to the screen that has an activity --> Commands --> Device --> Android Activity --> Current Package / Current Activity
        await driver.startActivity('io.appium.android.apis', 'io.appium.android.apis.app.AlertDialogSamples')

        // Click on first dialog
        await $('~OK Cancel dialog with a message').click()

        // Get alert text and log it
        console.log('ALERT TEXT -->', await driver.getAlertText())

        // Accept alert
        // await driver.acceptAlert()

        // Dismiss alert
        // await driver.dismissAlert()

        // Click on OK button
        await $('//*[@resource-id="android:id/button1"]').click()

        // Assert alert box is no longer visible
        expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist()
    })

    it('Vertical scrolling', async () => {
        await $('~App').click()
        await $('~Activity').click()

        // scroll to the end (brittle in case the element is no longer visible from the end)
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')
        
        // Scroll text into view 
        // new UiSelector().scrollable(true) -- this part just selects a scrollable element on the screen.
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')

        await $('~Secure Surfaces').click()

        expect($('//*[@text="Secure Dialog"]')).toExist()
    })

    it('Horizontal scrolling', async () => {
        // Open gallery activity
        await driver.startActivity('io.appium.android.apis', '.view.Gallery1')

        // Scroll horizontally to the end
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward().scrollForward().scrollBackward()')
    })

    it.only('Working with a datepicker', async () => {
        // Open date widgets activity
        await driver.startActivity('io.appium.android.apis', '.view.DateWidgets1')

        const originalDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const originalDateInPieces = (await originalDate.getText()).split('-')
        const expectedDate = `${(parseInt(originalDateInPieces[0], 10) + 1) % 12}-10-${originalDateInPieces[2]}`

        // Open datepicker dialog
        await $('~change the date').click()
        
        // Scroll horizontally to the right
        await $('android=new UiScrollable(new UiSelector().resourceId("android:id/day_picker_view_pager")).setAsHorizontalList().scrollForward()')

        // Pick the 10th date from the month
        await $('//*[@text="10"]').click()

        // Click the OK button
        await driver.acceptAlert()

        // Assert date is updated
        await expect(originalDate).toHaveText(expectedDate)
    })
})