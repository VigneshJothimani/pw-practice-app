import {test} from '@playwright/test'


test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

// ✅ Correct usage of lifecycle hooks
test.beforeAll(async () => {
  // Runs once before all tests
  // console.log('Setup before all tests');
});

test.afterAll(async () => {
  // Runs once after all tests
  console.log('Cleanup after all tests');
});

test.afterEach(async () => {
  // Runs after each test
  console.log('Cleanup after each test');
});

test.describe('suite 1', () => {
  test('the first test', async ({ page }) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });
});

test.describe('suite 2', () => {
  test('the second test', async ({ page }) => {
    await page.getByText('Charts').click();
    await page.getByText('E charts').click();
    await page.pause();
  });
});
