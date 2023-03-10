export class EditNoteScreen {
    static get editingText() {
        return $('//*[@text="Editing"]')
    }

    static get titleTextInput() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    static get textArea() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    static async save() {
        await driver.back()
        await driver.back()
    }
}