export class AddNoteTypePickerScreen {
    static get text() {
        return $('//*[@text="Text"]')
    }

    static get checklist() {
        return $('//*[@text="Checklist"]')
    }
}