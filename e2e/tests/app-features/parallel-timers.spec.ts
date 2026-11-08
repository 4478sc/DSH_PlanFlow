import { expect, test } from '../../fixtures/test.fixture';
import { ensureSettingState, isSettingChecked } from '../../utils/config-helpers';

/**
 * Parallel timers (#29): with the opt-in setting on, starting a second task must
 * not stop the first one, and pausing one must leave the other running.
 */
test.describe('App Features - Parallel timers', () => {
  const openTimeTrackingTab = async (
    page: import('@playwright/test').Page,
  ): Promise<void> => {
    await page.goto('/#/config');
    await page.getByRole('tab', { name: /Time & Tracking/ }).click();
    // The tab holds collapsible sections; the switch lives inside "Time Tracking".
    const section = page
      .locator('collapsible')
      .filter({ has: page.locator('.collapsible-title', { hasText: 'Time Tracking' }) })
      .first();
    await section.scrollIntoViewIfNeeded();
    const isExpanded = await section.evaluate((el: Element) =>
      el.classList.contains('isExpanded'),
    );
    if (!isExpanded) {
      await section.locator('.collapsible-header').click();
      await section.locator('.collapsible-panel').waitFor({ state: 'visible' });
    }
  };

  test('runs two timers at once and pauses only the one that is clicked', async ({
    page,
    testPrefix,
    workViewPage,
  }) => {
    const nameA = `Parallel A ${testPrefix}`;
    const nameB = `Parallel B ${testPrefix}`;

    await workViewPage.waitForTaskList();
    await workViewPage.addTask(`${nameA} sd:today`);
    await workViewPage.addTask(`${nameB} sd:today`);

    // Turn the opt-in setting on. The config section renders checkboxes as
    // mat-checkbox, so use the shared helper that handles both toggle kinds.
    const parallelLabel = 'Allow several tasks to be timed at once';
    await openTimeTrackingTab(page);
    const parallelToggle = page
      .locator('mat-slide-toggle, mat-checkbox')
      .filter({ hasText: parallelLabel })
      .first();
    await expect(parallelToggle).toBeVisible();
    expect(await isSettingChecked(page, parallelLabel)).toBe(false);
    await ensureSettingState(page, parallelLabel, true);
    expect(await isSettingChecked(page, parallelLabel)).toBe(true);

    // Back to TODAY and start both timers from the task rows.
    await page.goto('/#/tag/TODAY/tasks');
    await workViewPage.waitForTaskList();

    const taskA = page.locator('task').filter({ hasText: nameA }).first();
    const taskB = page.locator('task').filter({ hasText: nameB }).first();

    await taskA.hover();
    await taskA.locator('.start-task-btn').click();
    await expect(taskA.locator('mat-icon', { hasText: 'pause' })).toBeVisible();

    await taskB.hover();
    await taskB.locator('.start-task-btn').click();
    await expect(taskB.locator('mat-icon', { hasText: 'pause' })).toBeVisible();

    // A is no longer the main task, but it must still be running: its row keeps
    // the pause control instead of falling back to the start button. Hover
    // controls only render for the hovered row, so hover A first.
    await taskA.hover();
    await expect(taskA.locator('mat-icon', { hasText: 'pause' })).toBeVisible();
    await expect(taskA.locator('.start-task-btn')).toHaveCount(0);

    // Pausing A must not touch B (hover controls render per hovered row).
    await taskA.hover();
    await taskA.locator('mat-icon', { hasText: 'pause' }).click();
    await expect(taskA.locator('.start-task-btn')).toBeVisible();

    await taskB.hover();
    await expect(taskB.locator('mat-icon', { hasText: 'pause' })).toBeVisible();
    await expect(taskB.locator('.start-task-btn')).toHaveCount(0);
  });

  test('starting another task still pauses the first when the setting is off', async ({
    page,
    testPrefix,
    workViewPage,
  }) => {
    const nameA = `Serial A ${testPrefix}`;
    const nameB = `Serial B ${testPrefix}`;

    await workViewPage.waitForTaskList();
    await workViewPage.addTask(`${nameA} sd:today`);
    await workViewPage.addTask(`${nameB} sd:today`);

    await page.goto('/#/tag/TODAY/tasks');
    await workViewPage.waitForTaskList();

    const taskA = page.locator('task').filter({ hasText: nameA }).first();
    const taskB = page.locator('task').filter({ hasText: nameB }).first();

    await taskA.hover();
    await taskA.locator('.start-task-btn').click();
    await expect(taskA).toHaveClass(/isCurrent/);

    await taskB.hover();
    await taskB.locator('.start-task-btn').click();
    await expect(taskB).toHaveClass(/isCurrent/);

    // Default single-task behaviour: A was paused and shows the start button again.
    await taskA.hover();
    await expect(taskA.locator('.start-task-btn')).toBeVisible();
  });
});
