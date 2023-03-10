export class ViewNoteScreen {
    static get editButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }

    static get noteContent() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }

    static get moreButton() {
        return $('~More')
    }

    static get deleteMenuItem() {
        return $('//*[@text="Delete"]')
    }
}