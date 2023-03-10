export class ItemScreen {
    static get createItem() {
        return $('//*[@name="Create item"]')
    }

    static get itemTitle() {
        return $('//*[@value="Title"]')
    }

    static get createButton() {
        return $('~Create')
    }

    static async setItemDueDate(date) {
        await $('//*[@value="Due"]').click()
        await $('~Date Picker').click()
        await $(`~${date}`).click()
        await $('//XCUIElementTypeWindow[@index=2]').click()
    }
}