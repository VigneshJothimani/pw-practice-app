import {test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});



test('Locator Syntax Rules',async({page}) =>{

/*Syntax
page.locator(''),{ } */



//By Tage Name
await page.locator('input').first().click()  // click on first input 

//await should be used in front if click() is used < since it returns promise >

//By ID  - # should be used in front
page.locator('#inputEmail')

//By Class Name - . should be used in front
page.locator('.shape-rectangle')

//By class Name <Full>
page.locator('input-full-width size-medium status-basic shape-rectangle nb-transition') 

//By Attribute - [] should be used
page.locator('[placeholder="Email"]')

//By Combaining different Selectors

page.locator('input[placeholder="Email"].shape-rectangle')

//BY Xpath < not Recommended
page.locator('//*[@id="inputEmail"]')

//By partial text match - : should be used
page.locator(':text("Using")')

//By exact Text match - :text is should be used
page.locator(':text-is("Using the Grid")')

})



