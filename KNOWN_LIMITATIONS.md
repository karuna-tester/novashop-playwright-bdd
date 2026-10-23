# Nova Shop Known Limitations

- **Browser-stored orders.** The app keeps orders in the browser's localStorage, not a shared database. Each scenario runs in its own isolated browser context and therefore has its own order history. The manager lifecycle scenario (@NS-020) places an order and manages it within the same browser context: the customer logs out and the manager signs in.
- **External application.** The suite targets the public practice site. It can change, reset or be briefly unavailable; treat remote outages as environment issues, not application defects.
- **Optional accounts.** Scenarios that need the locked or slow practice account (@NS-002, @NS-023) skip themselves when `SHOP_LOCKED_USER` / `SHOP_SLOW_USER` are empty.
- **`buggy_user`.** This account is intentionally seeded with five bugs and is excluded from the stable cross-browser baseline.
- **Observed UI limits.** One catalogue item is sold out and product quantity is capped at 12. Assertions reflect the observed UI.
- **Documented follow-ups.** NS-034 (checkout summary vs cart summary) and NS-038 (order history status filter) are in the scenario matrix but not automated yet. `OrdersPage.filter()` is already available for NS-038.
- **Defect triage.** Separate application defects, automation defects (selectors, expectations, test data, timing) and environment issues (network, browser, CI) as described in `docs/poc-summary.md`.
