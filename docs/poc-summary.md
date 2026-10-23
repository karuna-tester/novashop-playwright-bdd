# POC Summary

## Coverage and approach

The project provides a TypeScript Playwright framework with three browser projects (Chromium, Firefox, WebKit), a Chromium authentication setup project, browser-context isolation per test, POM page classes, reusable header/product-card components, typed user-role fixtures, runtime-captured product and order values, and cart/checkout amount helpers.

The automated suite covers login errors and role paths, catalogue search/filter/sort, product details and variants, cart changes and coupons, totals/tax/discount, checkout validation and order confirmation, browser-local customer order history, manager shipping and delivery, and logout. See [test-scenarios.md](./test-scenarios.md) for scenario-level implementation status.

## Reusable components

- `Header`: navigation, cart, orders, and logout.
- `ProductCard`: reusable catalogue card reads and actions.
- Page objects: sign-in, products, product detail, cart, checkout, customer orders, and manager.
- Fixtures: authenticated base test plus typed page objects.
- Utilities: strict currency parsing and currency rounding.

## Challenges and key decisions

- The app was inspected in a real browser before authoring the suite. Selectors and business rules reflect rendered accessible roles and labels.
- Order history is stored in browser localStorage, so a test verifies orders in the same isolated test context. It must not assume orders are shared across browser projects or CI workers.
- Credentials are supplied through `.env` locally and environment secrets in CI. The checked-in example contains no credential values.
- Dynamic order IDs and displayed prices/totals are captured at runtime.

## Limitations and next steps

- This POC uses an external, mutable demo website; outages, content edits, rate limits, or browser incompatibilities can interrupt otherwise-correct automation.
- Standard tests run with isolated contexts. Manager lifecycle checks intentionally create and manage the order inside a single context; multi-browser storage is not shared.
- The app's bug-seeded customer has intentional defects and is not part of the stable baseline.
- Extend with return-request lifecycle coverage, explicit decline-card behavior, COD checkout, richer network/API assertions if a supported API is exposed, and baseline trend reporting.

## Application vs automation vs environment

- **Application defect:** reproducible incorrect Nova Shop behavior with the expected UI interaction and data; record separately with role, steps, and evidence.
- **Automation defect:** selector, expectation, test-data, setup, or timing defect in this project.
- **Environment issue:** remote service outage/instability, browser installation, DNS/network, or CI configuration failure.
- No confirmed stable-app defect was found during initial exploration. The test run results should update this statement if reproducible evidence appears.
