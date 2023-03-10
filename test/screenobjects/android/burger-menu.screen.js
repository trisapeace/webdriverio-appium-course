export class BurgerMenu {
    static get trashCan() {
        return $('//*[@text="Trash Can"]')
    }

    static get facebook() {
        return $('//*[@text="Like us on Facebook"]')
    }

    static get notes() {
        return $('//*[@text="Notes"]')
    }
}