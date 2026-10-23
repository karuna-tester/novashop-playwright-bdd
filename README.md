# Nova Shop Playwright BDD

Playwright + Gherkin (`playwright-bdd`) test suite for the Nova Shop practice e-commerce app:
`https://www.practiceqaautomation.com/shop`. It was converted from the original spec-based TypeScript POC to the same layout as the CoreERP BDD framework. Every original test is preserved as a scenario.

## Setup

```powershell
npm ci
Copy-Item .env.example .env      # then fill in the practice accounts shown on the app login page
npx playwright install chromium firefox webkit
```

| Variable | Purpose |
| --- | --- |
| `BASE_URL` | Shop root URL |
| `SHOP_STANDARD_USER` | Standard customer |
| `SHOP_ADMIN_USER` | Store manager |
| `SHOP_LOCKED_USER` | Expected login rejection (scenario skips if empty) |
| `SHOP_SLOW_USER` | Delayed-login path (scenario skips if empty) |
| `SHOP_BUGGY_USER` | Bug-seeded account (not part of the stable baseline) |
| `SHOP_PASSWORD` | Shared practice password shown on the app |
| `PW_WORKERS`, `PW_RETRIES` | Optional execution tuning |

`.env` is git-ignored. Checkout data is synthetic (`steps/testData.js`); never use real personal or payment information.

## Run tests

```powershell
npx bddgen
npx playwright test
```

| Command | Use |
| --- | --- |
| `npm test` | Generate specs and run all browsers |
| `npm run test:chromium` / `test:firefox` / `test:webkit` | One browser |
| `npm run test:smoke` | `@smoke` scenarios |
| `npm run test:regression` | `@regression` scenarios |
| `npm run test:negative` | `@negative` scenarios |
| `npm run test:headed` | Headed browsers |
| `npm run report` | Open the HTML report |

Single scenario: `npx bddgen && npx playwright test --grep @NS-014`.

## Structure

```text
.
├── features/            # Gherkin: login, catalogue, product_detail, cart, checkout, orders, admin_orders
├── steps/               # Step definitions (*.steps.js), fixtures.js, testData.js
├── pages/               # BasePage + page objects (Login, HeaderNav, Products, ProductCard, ProductDetail, Cart, Checkout, Orders, Admin)
├── .generated-tests/    # Output of `bddgen` (regenerated on every run)
├── docs/                # Domain, workflow, scenarios, execution, POC summary, walkthrough
├── .github/workflows/playwright.yml
├── playwright.config.js
├── KNOWN_LIMITATIONS.md
└── package.json
```

Scenarios are tagged `@NS-0xx` (ID from `docs/test-scenarios.md`) plus `@smoke`, `@regression` or `@negative`, and optionally `@positive` / `@validation`. Per-scenario values (product name, order ID, totals) are held in the `ctx` fixture in `steps/fixtures.js`.

Each scenario starts in a fresh browser context with the step `Given the customer is logged in`, which replaces the old shared storage-state setup project.

## Reports

HTML report in `playwright-report/`; screenshots, traces and `results.json` in `test-results/`. Open a trace with `npx playwright show-trace <trace.zip>`.

## CI

`.github/workflows/playwright.yml` runs `npx bddgen` and the suite as one job per browser, with report and diagnostics uploaded as artifacts. Add the repository secret `SHOP_PASSWORD`.

See [KNOWN_LIMITATIONS.md](./KNOWN_LIMITATIONS.md) and the files in [docs/](./docs/).
