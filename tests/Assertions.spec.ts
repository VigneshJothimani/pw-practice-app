import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
});


test('Assertions', async ({page})=> {
    
//general Assertions

const value = 5
expect(value).toEqual(5)

  const basicformbutton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')

  const buttontext = await basicformbutton.textContent()
  expect(buttontext).toEqual("Submit")

  //locator Assertion
  await expect(basicformbutton).toHaveText('Submit')

  //Soft Assertion < if fails, it will still run>

  await expect.soft(basicformbutton).toHaveText('submit5')
  await basicformbutton.click()

    

})