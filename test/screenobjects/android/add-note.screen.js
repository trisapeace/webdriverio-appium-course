export class AddNoteScreen {
    static get skipButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    static get addNoteText() {
        return $('//*[@text="Add note"]')
    }

    static get burgerMenu() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
}