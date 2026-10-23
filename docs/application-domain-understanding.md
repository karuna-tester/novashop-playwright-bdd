# Application and Domain Understanding

## Purpose

Nova Shop is a practice e-commerce application at `https://www.practiceqaautomation.com/shop`, intended for browser-automation exercises. It presents an end-to-end shopping experience with realistic cart, checkout, order, and store-management behavior.

## Modules observed

| Module | Observed behavior |
| --- | --- |
| Sign-in | Username/password form; successful, locked-account, invalid, and delayed-login paths |
| Product catalogue | 12 products, search, category, in-stock filter, and featured/name/price/rating sorts |
| Product detail | Product description/reviews/shipping tabs, reviews/rating, variants where available, quantity selector, related products |
| Cart | Item quantity controls, removal, subtotal, free shipping, 8% tax, coupons, and total |
| Checkout | Required contact/address data, state, standard/express delivery, card/cash-on-delivery payment, terms acceptance |
| Confirmation | Dynamic order number, item count, delivery, payment method, total paid |
| Customer orders | Account-specific order history, status filter, order details, custom cancel-confirmation dialog, and buy again actions |
| Store management | Admin-only order table, summary metrics, status filter, shipping and delivery actions, and return decisions |

## Roles and published practice accounts

The landing page publishes five roles. Account identifiers and the shared practice password are displayed by the application itself; this project does not copy credentials into source control.

| Role | Account purpose |
| --- | --- |
| Standard customer | Shopping, checkout, order history, cancellation, returns |
| Locked customer | Sign-in rejection path |
| Slow-login customer | Delayed successful sign-in (approximately three seconds) |
| Store manager | All-browser order management, shipping, delivery, return decisions |
| Bug-seeded customer | Explicit bug-hunt build with five seeded defects; not used as the stable regression baseline |

Use the app's published practice credentials via local environment variables. All test addresses, names, and card numbers used by automation are synthetic. The app labels its card integration as a practice flow; it accepts test digits and documents one always-declined test number on checkout.

## Coupons, catalogue, and business rules

- The cart advertises `SAVE10` and `FLAT20`; `SAVE10` applies 10% to the pre-tax subtotal, while the app reports `FLAT20` as $20 off orders over $100.
- Cart and checkout show free standard shipping, express delivery for $15, and 8% tax. The observed taxed base is the subtotal after discount.
- An unsupported coupon displays a status message and does not alter the order summary.
- Catalogue categories are Electronics, Fashion, Home, and Sports.
- Sort options are Featured, Name (A to Z), Name (Z to A), Price (low to high), Price (high to low), and Top rated.
- At least one catalogue item is sold out. A product detail quantity selector has a lower bound of 1 and an observed upper bound of 12.
- States offered at checkout are California, New York, Texas, Florida, Washington, and Illinois.
- Payment modes are credit/debit card and cash on delivery. Checkout requires terms acceptance. The UI validates contact, address, card, and terms input and provides inline messages.
- New customer orders begin in Processing. The manager can move them to Shipped and then Delivered. Customer orders can be canceled while eligible; delivered orders expose return actions.

## Dependencies and critical workflow

The primary dependency is the remote Nova Shop site; test data and order behavior are served through the browser experience. Order data is explicitly described by the app as browser `localStorage` data. Test contexts therefore need independent storage, and browser-project results are not a shared server-side order database.

Critical path: sign in → search/filter/sort → open product → select options/quantity → add to cart → apply coupon → validate cart and totals → complete checkout → verify confirmation → verify order history. The manager path signs in as the manager and acts on orders created in that browser's app storage.

## Exploration record

The app was reachable and the storefront flow was exercised in the browser. The observed checkout accepted synthetic test contact details and a practice card, rejected an empty submission with 13 inline errors, and returned an order confirmation with a generated order ID. An invalid coupon was rejected without changing totals. Manager shipping and delivery actions were also exercised.

No unexpected application defect was confirmed in the stable standard-user flow during this exploration. A timeout occurred while the exploratory script attempted to click an already-disabled quantity-increase button at the UI's upper boundary; the browser showed the quantity at 12 and the control disabled, which is expected boundary behavior rather than an app defect. Known environmental and demo limitations are tracked in the README.
