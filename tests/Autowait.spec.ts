import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.getByText('Button Triggering AJAX Request').click();
});

test('Auto Wait',async({page})=>{

    const successButton =page.locator('.bg-success')
    //default timeouts is 30 seconds
    //Click will wait for 30 seconds
    await successButton.click()
    //textContent wai for 30 seconds

    //const text = await successButton.textContent()
    const text = await successButton.allTextContents()

})

