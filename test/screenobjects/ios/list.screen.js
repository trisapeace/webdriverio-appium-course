export class ListScreen {
    static get createListButton() {
        return $('//*[@name="Create list"]')
    }

    static get listNameTextField() {
        return $('//*[@value="List Name"]')
    }

    static get createButton() {
        return $('~Create')
    }
}