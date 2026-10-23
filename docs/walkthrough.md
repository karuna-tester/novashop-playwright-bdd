# Walkthrough and Demo Notes

1. Explain the discovered store roles and why live exploration preceded test design.
2. Show the project layout: test intent as Gherkin under `features/`, step definitions and fixtures under `steps/`, page objects under `pages/` (including the header and product-card helpers), synthetic checkout data in `steps/testData.js`, and currency/definition-list helpers in `pages/BasePage.js`.
3. Explain the reusable `the customer is logged in` Given step, fresh Playwright contexts, browser projects, CI retries, HTML reports, and failure trace/screenshot retention.
4. Demonstrate a purchase workflow: capture catalogue price, add to cart, apply `SAVE10`, verify subtotal/discount/tax/total, checkout, capture the generated order ID, and verify it in My orders.
5. Demonstrate a negative path: unsupported coupon or incomplete checkout and assert the app's actual feedback without creating an order.
6. Demonstrate role variation by signing out and using the manager account to ship and deliver a newly created order in the same test context.
7. When presenting a failure, classify it as application, automation, or environment issue and link the evidence in the HTML report.
8. To extend the suite, add a scenario row first, implement interaction in the existing POM or a focused new method, then write an independent business-outcome test.

## Current walkthrough limitations

This POC targets the live external Nova Shop only. It does not seed or reset server-side data because observed orders are browser-local. The local `.env` is ignored by Git; CI should use repository secrets for the practice password.
