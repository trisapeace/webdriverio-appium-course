import { AddNoteScreen } from '../../screenobjects/android/add-note.screen.js'
import { AddNoteTypePickerScreen } from '../../screenobjects/android/add-note-type-picker.screen.js'
import { EditNoteScreen } from '../../screenobjects/android/edit-note.screen.js'
import { ViewNoteScreen } from '../../screenobjects/android/view-note.screen.js'
import { DeleteNoteConfirmationScreen } from '../../screenobjects/android/delete-note-confirmation.screen.js'
import { BurgerMenu } from '../../screenobjects/android/burger-menu.screen.js'

describe('Add notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipButton.click()

        await expect(AddNoteScreen.addNoteText).toBeDisplayed()
    })

    it('add a note, save changes, and verify note', async () => {
        // Skip tutorial
        await AddNoteScreen.skipButton.click()

        // Add a note
        await AddNoteScreen.addNoteText.click()
        await AddNoteTypePickerScreen.text.click()
        await expect(EditNoteScreen.editingText).toBeDisplayed()

        // Add note title
        await EditNoteScreen.titleTextInput.addValue("Fav Anime List")

        // Add note body
        await EditNoteScreen.textArea.addValue("Naruto\nOnePiece\nAOT")

        // Save changes by clicking Back twice
        await EditNoteScreen.save()

        // Assert
        await expect(ViewNoteScreen.editButton).toBeDisplayed()
        await expect(ViewNoteScreen.noteContent).toHaveText('Naruto\nOnePiece\nAOT')
    })

    it.only('delete a note', async () => {
        // Skip tutorial
        await AddNoteScreen.skipButton.click()

        // Add a note
        await AddNoteScreen.addNoteText.click()
        await AddNoteTypePickerScreen.text.click()

        // Add note title
        await EditNoteScreen.titleTextInput.addValue("Fav Anime List")

        // Add note body
        await EditNoteScreen.textArea.addValue("Naruto\nOnePiece\nAOT")

        // Save changes by clicking Back twice
        await EditNoteScreen.save()

        // Delete it
        await ViewNoteScreen.moreButton.click()
        await ViewNoteScreen.deleteMenuItem.click()
        await DeleteNoteConfirmationScreen.okButton.click()

        // Verify that it's not on the list
        await expect($('//*[@text="Fav Anime List"]')).not.toBeDisplayed()

        // Go to trash can
        await AddNoteScreen.burgerMenu.click()
        await BurgerMenu.trashCan.click()

        // Verify that it is in the trashcan
        await expect($('//*[@text="Fav Anime List"]')).toBeDisplayed()
    })
})