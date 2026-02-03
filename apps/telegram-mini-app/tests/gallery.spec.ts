import { test, expect } from '@playwright/test';

test.describe('NFT Gallery', () => {
  test('should display gallery homepage', async ({ page }) => {
    await page.goto('/');

    // Check header
    await expect(page.getByRole('heading', { name: 'Anastasiya Gurina' })).toBeVisible();
    await expect(page.getByText('NFT Photography Gallery')).toBeVisible();

    // Check info banner
    await expect(page.getByText('Exclusive Photography NFTs')).toBeVisible();

    // Check stats
    await expect(page.getByText('Total NFTs')).toBeVisible();
    await expect(page.getByText('Available')).toBeVisible();
    await expect(page.getByText('TON Each')).toBeVisible();

    // Check gallery heading
    await expect(page.getByRole('heading', { name: 'Gallery' })).toBeVisible();

    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/homepage-full.png', fullPage: true });
  });

  test('should display NFT cards', async ({ page }) => {
    await page.goto('/');

    // Wait for images to load
    await page.waitForLoadState('networkidle');

    // Check that at least 12 NFT cards are visible
    const nftCards = page.locator('[class*="group cursor-pointer"]');
    await expect(nftCards).toHaveCount(12);

    // Check first NFT card has required elements
    const firstCard = nftCards.first();
    await expect(firstCard.locator('img')).toBeVisible();
    await expect(firstCard.getByText('Urban Lights #1')).toBeVisible();
    await expect(firstCard.getByText('5 TON')).toBeVisible();

    // Take screenshot of gallery grid
    await page.screenshot({ path: 'tests/screenshots/gallery-grid.png' });
  });

  test('should navigate to NFT detail on card click', async ({ page }) => {
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Click first NFT card (force click to bypass pointer-events issues)
    const firstCard = page.locator('[class*="group cursor-pointer"]').first();
    await firstCard.click({ force: true });

    // Wait for navigation
    await page.waitForURL(/\/nft\/\d+/);

    // Check NFT detail page elements exist (not checking specific NFT)
    await expect(page.getByRole('heading', { name: 'NFT Details' })).toBeVisible();
    await expect(page.getByText(/Urban Lights #\d+/).first()).toBeVisible();

    // Check price is displayed in the info card
    await expect(page.locator('.text-3xl.font-bold.text-primary')).toContainText('TON');

    // Take screenshot
    await page.screenshot({ path: 'tests/screenshots/nft-detail.png', fullPage: true });
  });

  test('should display metadata on NFT detail page', async ({ page }) => {
    await page.goto('/nft/1');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Check NFT title and price
    await expect(page.getByRole('heading', { name: 'Urban Lights #1' })).toBeVisible();
    await expect(page.locator('.text-3xl.font-bold.text-primary')).toContainText('5 TON');

    // Check metadata section (using grid locator to avoid duplicates)
    const metadataGrid = page.locator('.grid.grid-cols-2.gap-3');
    await expect(metadataGrid.getByText('Photographer')).toBeVisible();
    await expect(metadataGrid.getByText('Anastasiya Gurina')).toBeVisible();
    await expect(metadataGrid.getByText('Camera')).toBeVisible();
    await expect(metadataGrid.getByText('Sony A7')).toBeVisible();
    await expect(metadataGrid.getByText('Status')).toBeVisible();
    await expect(metadataGrid.getByText('Available')).toBeVisible();
    await expect(metadataGrid.getByText('Blockchain')).toBeVisible();

    // Check TON in blockchain metadata specifically
    await expect(metadataGrid.locator('text=Blockchain').locator('..').getByText('TON')).toBeVisible();

    // Check purchase button
    const purchaseButton = page.getByRole('button', { name: /Purchase for 5 TON/i });
    await expect(purchaseButton).toBeVisible();
  });

  test('should display images correctly', async ({ page }) => {
    await page.goto('/');

    // Wait for images to load
    await page.waitForLoadState('networkidle');

    // Get first NFT card image
    const firstImage = page.locator('[class*="group cursor-pointer"]').first().locator('img');

    // Check image is loaded
    await expect(firstImage).toBeVisible();

    // Check image has src attribute
    const src = await firstImage.getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).toContain('photos');

    // Take screenshot to verify images are loading
    await page.screenshot({ path: 'tests/screenshots/images-loaded.png' });
  });

  test('should be responsive on mobile', async ({ page, viewport }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Check header is visible
    await expect(page.getByRole('heading', { name: 'Anastasiya Gurina' })).toBeVisible();

    // Check gallery is visible
    await expect(page.getByRole('heading', { name: 'Gallery' })).toBeVisible();

    // Take mobile screenshot
    await page.screenshot({ path: 'tests/screenshots/mobile-homepage.png', fullPage: true });
  });
});
