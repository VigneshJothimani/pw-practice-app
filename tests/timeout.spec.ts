import {expect, test} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax');
  await page.getByText('Button Triggering AJAX Request').click();
});


test('timeouts', async ({page}) => {
const successButton =page.locator('.bg-success')
test.setTimeout(10000)// once test.setTimeout(10000)  is mentioned , the test will fail since the test timeout is 10 sec
//This above will overwrite the action time set 
test.slow() // MEntioned timeout * 3 seconds so 90000 ms


/*Global Timeout : Default : No timeout  -> Time limit of whole test run
Test Timeout : Default  : 30000 ms -> Time limit of Single Test
Action Timeout : Default : No Timeout -> Time limit for the Action < Ex: Click(),Fill(),textContent() etc.
Navigation Timeout : Default : No Timeout -> Timelimit for the action command eg : page.goto('/')
Expect Timeoutt : Default : 5000 ms -> Time limit for 'expect' locator assertion eg: expect(locator).toHaveText('Hello World') 


BY default Test Timeout,Action Timeout ,Navigation Timeout is not configured

*/
//await successButton.click() // Should pass - since it will wait for 30 Seconds 

//Under Playwright.config , defineConfig
/*export default defineConfig({
  timeout : 30000,
  globalTimeout : 60000,

Under Playwright.Config ,  under Use
  actionTimeout : 5000,
  navigationTimeout : 5000,

  When action time is set to 5000 ms it will fail [ await successButton.click() ]

  */
await successButton.click({timeout: 20000}) //This will overwrite the Action time configured in COnfig


/*
under Playwright Config
expect : {
   timeout : 6000

  },

*/

})