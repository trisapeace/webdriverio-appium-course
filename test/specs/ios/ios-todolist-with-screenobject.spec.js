import { ListScreen } from '../../screenobjects/ios/list.screen.js'

describe('Todo list', () => {
    it('Create a todo list', async () => {
        // Create list
        await ListScreen.createListButton.click()
        await ListScreen.listNameTextField.addValue('Things to do today')
        await ListScreen.createButton.click()

        // Verify name shows up
        await expect(await $('~Things to do today')).toBeExisting()
    })
})