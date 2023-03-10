export class AddNoteScreen {
    static get skipButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    static get addNoteText() {
        return $('//*[@text="Add note"]')
    }
}