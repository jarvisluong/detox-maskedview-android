describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should increase the counter', async () => {
    await waitFor(element(by.id('amount-label')))
      .toBeVisible()
      .withTimeout(5000);

    await element(by.id('increment-btn')).tap();

    await waitFor(element(by.id('amount-label')))
      .toHaveText('1')
      .withTimeout(5000);
  });
});
