describe("iOS native features", () => {
  it("Working with alert boxes", async () => {
    await $("~Alert Views").click()
    await $('~Okay / Cancel').click()

    console.log(await driver.getAlertText())

    // Accept dismiss alert - same for iOS and Android
    await driver.dismissAlert()

    await expect($('~OK')).not.toExist()
  })

  it('Working with scrolling', async () => {
    // easiest with just the direction
    // await driver.execute('mobile: scroll', { direction: 'down'})
    // await driver.execute('mobile: scroll', { direction: 'up'})

    // more complex, decide where to scroll
    await $('~Picker View').click()
    const redPicker = await $('~Red color component value')
    await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: 'down'})
    const bluePicker = await $('~Blue color component value')
    await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: 'up'})
  })

  it.only('Working with a picker view', async () => {
    await $('~Picker View').click()

    const redPicker = await $('~Red color component value')
    const greenPicker = await $('~Green color component value')
    const bluePicker = await $('~Blue color component value')
    await redPicker.addValue('5') // both addValue and setValue work for this picker
    await greenPicker.setValue('0')
    await bluePicker.setValue('100')

    await driver.pause(3000)
  })
})