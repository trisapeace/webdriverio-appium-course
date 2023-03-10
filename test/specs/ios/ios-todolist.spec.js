describe('Todo list', () => {
    xit('Create a todo list', async () => {
        // Create list
        await $('//*[@name="Create list"]').click()
        await $('//*[@value="List Name"]').addValue('Things to do today')
        await $('~Create').click()

        // Verify name shows up
        await expect(await $('~Things to do today')).toBeExisting()
    })
})