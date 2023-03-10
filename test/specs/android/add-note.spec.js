describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()

        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    })

    it('add a note, save changes, and verify note', async () => {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List")

        // Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT")

        // Save changes by clicking Back twice
        await driver.back()
        await driver.back()

        // Assert
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed()

        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText('Naruto\nOnePiece\nAOT')
    })

    it.only('delete a note', async () => {
        // Skip the tutorial
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click()

        // Add a note
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Fav Anime List")

        // Add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Naruto\nOnePiece\nAOT")

        // Save changes by clicking Back twice
        await driver.back()
        await driver.back()

        // Delete it
        await $('~More').click()
        await $('//*[@text="Delete"]').click()
        await $('//*[@text="OK"]').click()

        // Verify that it's not on the list
        await expect($('//*[@text="Fav Anime List"]')).not.toBeDisplayed()

        // Go to trashcan
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        await $('//*[@text="Trash Can"]').click()

        // Verify that it is in the trashcan
        await expect($('//*[@text="Fav Anime List"]')).toBeDisplayed()
    })
})