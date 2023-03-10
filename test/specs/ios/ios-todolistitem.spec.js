describe('Todo list item', () => {
    it('Create a todo list item', async () => {
        // Create list
        await $('//*[@name="Create list"]').click()
        await $('//*[@value="List Name"]').addValue('Things to do today')
        await $('~Create').click()

        // Open list
        await $('~Things to do today').click()

        // Add item
        await $('//*[@label="Create item"]').click()

        // Give item a name
        await $('//*[@value="Title"]').setValue('First thing first')

        // Select date for the item 
        await $('//*[@value="Due"]').click()
        await $('~Date Picker').click()
        await $('~Friday, March 10').click()
        await $('//XCUIElementTypeWindow[@index=2]').click()

        // Click create
        await $('~Create').click()

        // Verify the item title
        await expect($('~First thing first')).toBeExisting()

        // Verify the item date
        await expect($('~Due Tomorrow')).toBeExisting()
    })
})