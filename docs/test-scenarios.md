# Test Scenarios

Scenarios are grounded in the currently observed Nova Shop UI. Runtime-sensitive values (prices, totals, order IDs, and result counts) should be captured from the page and reused in assertions rather than hard-coded as expected output.

| ID | Title | Type | Steps | Expected result | Automated |
| --- | --- | --- | --- | --- | --- |
| NS-001 | Standard customer signs in | Positive | Submit the configured standard account | Catalogue opens and account is authenticated | Y |
| NS-002 | Slow-login customer can sign in without a fixed sleep | Positive | Sign in with the delayed-login account | Catalogue opens through web-first waiting | Y |
| NS-003 | Search narrows products by name | Positive | Search for a displayed product name | Matching product remains in results | Y |
| NS-004 | Category filter limits catalogue results | Positive | Select a known category | All displayed products belong to that category | Y |
| NS-005 | In-stock filter excludes unavailable items | Positive | Enable In stock only | Sold-out product is absent and available products remain | Y |
| NS-006 | Price sort orders products ascending | Positive | Select Price (low to high) | Rendered prices are nondecreasing | Y |
| NS-007 | Top-rated sort places the highest-rated product first | Positive | Select Top rated | Displayed ratings descend | Y |
| NS-008 | Product details expose product information and options | Positive | Open an in-stock product | Name, price, availability, rating, and available options are shown | Y |
| NS-009 | Product detail tabs switch their content | Positive | Select reviews and shipping tabs | Selected tab and panel reflect the requested content | Y |
| NS-010 | Customer adds a product from the catalogue | Positive | Add an in-stock catalogue item | Cart count increases and add action changes to removal | Y |
| NS-011 | Customer adds a chosen product quantity and variant | Positive | Choose product options and add | Cart contains the selected option and quantity | Y |
| NS-012 | Customer changes quantity in the cart | Positive | Increase/decrease an item | Quantity and line amount recalculate | Y |
| NS-013 | Customer removes a cart item | Positive | Remove an item | Item disappears and empty-cart state is shown | Y |
| NS-014 | SAVE10 applies a percentage discount | Positive | Apply SAVE10 | Success status and calculated discount appear | Y |
| NS-015 | FLAT20 applies its advertised discount | Positive | Apply FLAT20 | Success status and summary reflect the coupon | Y |
| NS-016 | Customer completes card checkout | Positive | Fill valid fields, accept terms, place order | Confirmation contains generated order details and total | Y |
| NS-017 | Customer completes cash-on-delivery checkout | Positive | Choose COD, fill required delivery data, place order | Confirmation identifies COD and order is recorded | Y |
| NS-018 | New order appears in customer history | Positive | Complete checkout then open My orders | Captured order ID, item count, total, and Processing status match | Y |
| NS-019 | Customer cancels an eligible order | Positive | Cancel a Processing order | Status becomes Cancelled | Y |
| NS-020 | Store manager ships and delivers an order | Positive | Manager opens eligible order and advances it | Status advances to Shipped and then Delivered | Y |
| NS-021 | Customer can log out | Positive | Use Log out | Login screen is shown and authenticated navigation is removed | Y |
| NS-022 | Invalid credentials are rejected | Negative | Submit an unrecognized account/password | Login error appears and protected catalogue does not open | Y |
| NS-023 | Locked account is rejected | Negative | Submit the published locked account | Locked-account error appears | Y |
| NS-024 | Empty login form is rejected | Negative | Submit both fields empty | Required-input feedback appears; no login occurs | Y |
| NS-025 | Search with no match has an empty state | Negative | Search a unique nonexistent product | No-results state appears and no product cards match | Y |
| NS-026 | Unknown coupon does not change cart total | Negative | Apply a non-advertised coupon | Error status appears and summary remains unchanged | Y |
| NS-027 | Sold-out product cannot be added | Negative | Locate the unavailable item | Add action is disabled or unavailable; cart does not gain the item | Y |
| NS-028 | Empty checkout submission shows required-field errors | Negative | Submit checkout without data | Summary and inline errors identify missing/invalid fields; no order is created | Y |
| NS-029 | Invalid email, phone, and ZIP formats are rejected | Negative | Submit malformed contact/address values | Matching format errors appear and order is not placed | Y |
| NS-030 | Invalid card formats are rejected | Negative | Submit bad number, expiry, and CVV | Card-field errors appear and order is not placed | Y |
| NS-031 | Declined practice card does not create an order | Negative | Complete checkout with the site's documented declined number | Decline feedback appears; no successful confirmation occurs | Y |
| NS-032 | Cart subtotal, tax, and total reconcile | Validation | Add products and compare summary | Captured line values reconcile to subtotal, 8% tax, shipping, discount, and total | Y |
| NS-033 | Coupon discount amount is calculated correctly | Validation | Apply SAVE10 to a cart with captured subtotal | Discount equals the percentage of the captured pre-tax subtotal, rounded as displayed | Y |
| NS-034 | Checkout summary matches cart summary | Validation | Compare every captured cart amount and item against checkout | Item list and all summary amounts remain consistent | N |
| NS-035 | Product quantity respects minimum and maximum | Boundary | Attempt to decrease below one and increase past the cap | Minimum remains 1; upper bound observed at 12; controls disable at limits | Y |
| NS-036 | Checkout requires terms acceptance | Validation | Complete fields but leave terms unchecked | Terms error appears and no order is created | Y |
| NS-037 | Confirmation preserves captured order information | Validation | Complete an order | Confirmation ID, item count, delivery, payment, and total agree with submitted order | Y |
| NS-038 | Order history filter matches a status | Validation | Filter an order list by status | Only rows matching the selected status remain | N |
| NS-039 | Manager view shows operational metrics and order action | Validation | Open manager order management | Metrics and row actions match current browser-stored orders | Y |
| NS-040 | Express delivery is reflected in checkout total | Boundary | Choose Express delivery | Delivery charge and recomputed total include the displayed $15 charge | Y |

## Current execution record

The suite implements 38 of the 40 listed scenarios (NS-034 and NS-038 remain documented follow-up items). The 31 implemented test cases ran on each configured browser. The latest cross-browser run had 92 first-attempt passes and 2 retry-recovered WebKit cases, with no final failures or skips. See [execution-summary.md](./execution-summary.md).

## BDD traceability

Every automated scenario is a Gherkin scenario tagged with its ID (for example `@NS-014`) and a suite tag (`@smoke`, `@regression`, `@negative`). Run one with `npx bddgen && npx playwright test --grep @NS-014`. NS-001 was previously covered only by the shared auth setup and is now an explicit scenario.
