import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('@regression @smoke - has up-to-date copyright', async ({ page }) => {
    const copyrightText = 'Copyright © 2025 Microsoft';
    await expect(page.getByText(copyrightText)).toBeVisible();
});

test('@regression @smoke - search field is accessible', async ({ page }) => {
    const searchBar = page.locator('.DocSearch-Button-Placeholder');
    const searchField = page.locator('#docsearch-input');
    await searchBar.click();

    await expect(searchField).toBeVisible();
});