import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
});


test('Extracting Locaters', async({page})=> {

    //Single text Value
    const basicform = page.locator('nb-card').filter({hasText: "Basic form"})
    const buttonText = await basicform.locator('button').textContent()
  
    expect(buttonText).toEqual('Submit')

    //All text Values

    const Radiobuttonvalue =await page.locator('nb-radio').allTextContents()
    expect(Radiobuttonvalue).toContain("Option 1")
    console.log(Radiobuttonvalue)

    //extracting input Value
    const horizontalform = page.locator('nb-card').filter({hasText: "Horizontal form"})
    const emailfield1 = horizontalform.getByRole('textbox',{name: 'Email'})
    await emailfield1.fill('test@test.com')
    const emailvalue = await emailfield1.inputValue()
    expect(emailvalue).toEqual('test@test.com')

    //extract placeholders

    const placeholdervalue = await emailfield1.getAttribute('placeholder')
    expect(placeholdervalue).toEqual('Email')

})