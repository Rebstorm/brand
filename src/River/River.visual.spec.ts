/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: River', () => {
  test('Left', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river-fixtures--left&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Right', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river-fixtures--right&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Center', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river-fixtures--center&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('60:40 image ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-fixtures--column-ratio-6040&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('50:50 image ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-fixtures--column-ratio-5050&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Alternating Layout', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-fixtures--alternating-layout&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Larger Placeholder Image', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river--larger-placeholder-image&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Copilot', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river--copilot&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Video', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river--video&viewMode=story')

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
