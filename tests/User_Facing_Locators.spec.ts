import {test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
});


test('User Facing Locators', async({page}) => {
//await page.getByRole('button', {name: "Sign in"}).first().click()
await page.getByRole('textbox',{name: "Email"}).first().click()

// Locate a button by role
await page.getByRole('button').click();

// Locate a link with accessible name
await page.getByRole('link', { name: 'Home' }).click();

// Locate a textbox
await page.getByRole('textbox', { name: 'Username' }).fill('Vignesh');

// Locate a heading
await page.getByRole('heading', { level: 1 });



await page.getByPlaceholder('Jane Doe').click() //Attribute name placeholder
//await page.getByLabel('Email').click() //Tag name Label

await page.getByText('Using the Grid').click() //Straight Text

//Test ID - manualy feeding Test id in source code
await page.getByTestId("Sign In").first().click()

await page.getByTitle('IoT Dashboard').click() //attribute Title name





})

