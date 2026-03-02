import {test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
});



test('Child Locators',async({page})=>{
await page.locator('nb-card nb-radio :text-is("Option 1")').click()
await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click()
await page.locator('nb-card').nth(3).getByRole('button').click()// not recommended

})

test('parent Locators', async({page})=> {
   await page.locator('nb-card',{hasText : "Using the Grid"}).getByRole('textbox', {name:"Email"}).click()
   await page.locator('nb-card',{has: page.locator('#inputEmail1')}).getByRole('textbox', {name:"Email"}).click()

   //Both the approch are similar but the filter options , can filter more

   await page.locator('nb-card').filter({hasText :"Basic form"}).getByRole('textbox', {name:"Email"}).click()
  // await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name:"Password"}).click()

   //Filtering using Checkbox with Text as Sign in and clicking on Email
   await page.locator('nb-card').filter({has : page.locator('nb-checkbox')}).filter({hasText : "Sign in"})
   .getByRole('textbox',{name:"Email"}).click()

   //xpath
   await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox',{name:"Email"}).click()

})