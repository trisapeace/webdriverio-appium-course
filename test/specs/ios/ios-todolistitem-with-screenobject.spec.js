import { ListScreen } from '../../screenobjects/ios/list.screen.js'
import { ItemScreen } from '../../screenobjects/ios/item.screen.js'

describe('Todo list item', () => {
    it('Create a todo list item', async () => {
        // Create list
        await ListScreen.createListButton.click()
        await ListScreen.listNameTextField.addValue('Things to do today')
        await ListScreen.createButton.click()

        // Open list
        await $('~Things to do today').click()

        // Add item
        await ItemScreen.createItem.click()

        // Give item a name
        await ItemScreen.itemTitle.setValue('First thing first')

        // Select date for the item 
        await ItemScreen.setItemDueDate('Friday, March 10')

        // Click create
        await ItemScreen.createButton.click()

        // Verify the item title
        await expect($('~First thing first')).toBeExisting()

        // Verify the item date
        await expect($('~Due Tomorrow')).toBeExisting()
    })
})