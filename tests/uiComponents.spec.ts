import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
   await page.getByText('Form Layouts').click();
});

test('input fields', async ({page}) => {

    const usingTheGridEmailInput =  page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox',{name: "Email"})
    await usingTheGridEmailInput.fill('test@test.com')
    await usingTheGridEmailInput.clear()
    await usingTheGridEmailInput.pressSequentially('test@test.com',{delay: 500})

    // General Assertion
    const ValueEnteredinEmailbox = await usingTheGridEmailInput.inputValue() // to fetch the value entered in Email box
// reason for toHavetext will not work for inputvalue()
    expect(ValueEnteredinEmailbox).toEqual('test@test.com')

    //Locator Assertion
    await expect(usingTheGridEmailInput).toHaveValue('test@test.com')

})


test('radio button', async ({page}) => {

    const usingtheGridForm = page.locator('nb-card', {hasText: "Using the Grid"})
    //await usingtheGridForm.getByLabel('Option 1').check({force:true})
    //We can select Radio button by getbyLabel and getbyRole

    await usingtheGridForm.getByRole('radio',{name : "Option 1"}).check({force:true})// Reason for Force:true [class ="native-input visually-hidden"]
    
    // general Validation
   const radioStatus = await usingtheGridForm.getByRole('radio',{name : "Option 1"}).isChecked()
   expect(radioStatus).toBeTruthy() //Boolen value Validations
  
   //Locator Validation
   await expect(usingtheGridForm.getByRole('radio',{name : "Option 1"})).toBeChecked()
   
   await usingtheGridForm.getByRole('radio',{name : "Option 2"}).check({force:true})

   //General Valiation
   expect(await usingtheGridForm.getByRole('radio',{name : "Option 1"}).isChecked()).toBeFalsy()
   expect(await usingtheGridForm.getByRole('radio',{name : "Option 2"}).isChecked()).toBeTruthy()

})

test('Check Boxes', async ({page}) => {
await page.getByText('Modal & Overlays').click();
await page.getByText('Toastr').click();

await page.getByRole('checkbox',{name:"Hide on click"}).click({force:true}) //since it is visually hidden

await page.getByRole('checkbox',{name:"Hide on click"}).check({force:true})
await page.getByRole('checkbox',{name:"Prevent arising of duplicate toast"}).check({force:true})

//To check all checkbox looping should be used

//creating const to get allcheckbox

const allBoxes = page.getByRole('checkbox')

for(const box of await allBoxes.all()) { 
    // Box is the iterator created and 
    // .all [method to convert to array out of element allboxes] 
    //await used since it .all  returning promise
    await box.check({force:true}) // checking one checkbox at a time
    expect(await box.isChecked()).toBeTruthy() // verifying the check box is checked
}

for(const box of await allBoxes.all()) { // of is used in for loop since it is an Array
    // Box is the iterator created and 
    // .all [method to convert to array out of element allboxes] 
    //await used since it .all  returning promise
    await box.uncheck({force:true}) // checking one checkbox at a time
    expect(await box.isChecked()).toBeFalsy() // verifying the check box is unchecked
}


})


test('list and Dropdown', async ({page}) =>{
 const dropdown = page.locator('ngx-header nb-select')
 await dropdown.click()
 
 //page.getByRole('list') // When the DOM has UL tag [Parent Container for all items]
 // page.getByRole('listitem') // when the DOM has IL tag [all the list of items from the list]

// const optionlist = dropdown.getByRole('list').locator('nb-option') or 

const optionlist = page.locator('nb-option-list nb-option')

//locator Assertion
await expect(optionlist).toHaveText(["Light","Dark","Cosmic","Corporate"])// Since it is array used [] for toHaveText

//To Select Cosmic
await optionlist.filter({hasText :"Cosmic"}).click()

const headercolor = page.locator('nb-layout-header')

await expect(headercolor).toHaveCSS('background-color','rgb(50, 50, 89)')

const colors = {
 "Light": "rgb(255, 255, 255)",
 "Dark": "rgb(34, 43, 69)",
 "Cosmic": "rgb(50, 50, 89)",
 "Corporate": "rgb(255, 255, 255)"

}

await dropdown.click()

for(const color in colors){ // Since it is object in used is used in for loop
 await optionlist.filter({hasText : color}).click()
 await expect(headercolor).toHaveCSS('background-color', colors[color])

 if(color != "Corporate")
  await dropdown.click()
 }

})







