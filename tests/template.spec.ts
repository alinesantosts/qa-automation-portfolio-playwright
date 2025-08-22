import { test, expect } from '@playwright/test';

//AAA Pattern
// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;

test.beforeAll(async ({ playwright }) => {
    test.skip(
        !!process.env.PROD,
        'Test intentionally skipped in production due to data dependency.'
    );
});

test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
});

test.afterAll(async ({ page }, testInfo) => {
    console.log('Test file completed.');
})

test.afterEach(async ({ page}, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
})