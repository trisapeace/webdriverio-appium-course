describe("iOS find elements", () => {
  it("find element by accessibility ID", async () => {
    await $("~Alert Views").click()
    await $('~Simple').click()

    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })

  it('find by tag/type/class name', async () => {
    // single element
    console.log(await $('XCUIElementTypeStaticText').getText())

    // all the elements
    const textElements = await $$('XCUIElementTypeStaticText')
    for (const textElement of textElements) {
      console.log(await textElement.getText())
    }
  })

  it('find element by xpath', async () => {
    await $('//*[@name="Alert Views"]').click()
    await $('//*[@label="Simple"]').click()

    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })

  it('find by class chain', async () => {
    // Cool things you can do with class chains: https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
    const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]'
    await $(`-ios class chain:${alertText}`).click()

    await $('//*[@label="Simple"]').click()

    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })

  it('find by predicate string', async () => {
    // Cool things you can do with predicate strings: https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
    // More documentation: https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pSyntax.html
    const alertText = 'value BEGINSWITH[c] "alert"'
    await $(`-ios predicate string:${alertText}`).click()

    await $('//*[@label="Simple"]').click()

    await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
  })

  it.only('Exercise: enter text into search field and clear it', async () => {
    // Access the default search bar screen
    await $('~Search').click()
    await $('~Default').click()

    // Enter  text in the search input field
    const searchField = await $('XCUIElementTypeSearchField')
    await searchField.setValue('Hello world')
    await expect(searchField).toHaveText('Hello world')

    // Clear the search input field by clicking the 'x' button
    await $('~Clear text').click()

    // Verify search input field is cleared
    await expect(searchField).not.toHaveAttr('value')
  })
})