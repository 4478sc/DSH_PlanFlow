import { expect, test } from '../../fixtures/test.fixture';

const titles = [
  'Morning (before 12:00)',
  'Afternoon (before 18:00)',
  'Evening (before 24:00)',
];

test('creates Today daypart sections once without moving tasks and persists them after reload', async ({
  page,
  workViewPage,
  taskPage,
}) => {
  await workViewPage.waitForTaskList();
  await workViewPage.addTask('Unassigned daypart task');
  const task = taskPage.getTaskByText('Unassigned daypart task');
  await expect(task).toBeVisible();
  const sections = page.locator('.section-container');
  await expect(sections).toHaveCount(0);

  const createTemplate = async (): Promise<void> => {
    await page.locator('.project-settings-btn').click();
    await page
      .getByRole('menuitem', { name: 'Create morning / afternoon / evening sections' })
      .click();
  };
  await createTemplate();
  await expect(sections).toHaveCount(3);
  for (let i = 0; i < titles.length; i++) {
    await expect(sections.nth(i).locator('.collapsible-title')).toContainText(titles[i]);
    await expect(sections.nth(i).locator('task')).toHaveCount(0);
  }
  await expect(task).toBeVisible();
  await createTemplate();
  await expect(sections).toHaveCount(3);
  await page.reload();
  await workViewPage.waitForTaskList();
  await expect(sections).toHaveCount(3);
  await expect(task).toBeVisible();
  await createTemplate();
  await expect(sections).toHaveCount(3);
});
