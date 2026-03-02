import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
});


test('Resuing Locators', async ({page})=> {

    const basicform = page.locator('nb-card').filter({hasText: "Basic form"})
    const emailField =basicform.getByRole('textbox',{name:"Email"})

    await emailField.fill('test@test.com')
    await basicform.getByRole('textbox',{name : "Password"}).fill('welcome123')
    await basicform.locator('nb-checkbox').click()
    await basicform.getByRole('button',{name: "Submit"}).click()

    await expect(emailField).toHaveValue("test@test.com")
    

})

