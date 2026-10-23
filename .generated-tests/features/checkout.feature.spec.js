// Generated from: features\checkout.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop checkout', () => {

  test('Checkout reports required field validation and does not place an empty order', { tag: ['@NS-028', '@negative', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('the checkout shows an error summary', null, { page }); 
    await And('the checkout shows the message "First name is required"', null, { page }); 
    await And('the checkout shows the message "Enter a valid email address"', null, { page }); 
    await And('the checkout shows the message "You must accept the terms"', null, { page }); 
    await And('the checkout page is still displayed', null, { page }); 
  });

  test('Malformed email, phone, and ZIP are rejected by checkout', { tag: ['@NS-029', '@negative', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer enters email "invalid", phone "123" and ZIP code "12"', null, { checkout }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('the checkout shows the message "Enter a valid email address"', null, { page }); 
    await And('the checkout shows the message "Phone must be 10 digits"', null, { page }); 
    await And('the checkout shows the message "ZIP code must be 5 digits"', null, { page }); 
  });

  test('Terms must be accepted before an order can be placed', { tag: ['@NS-036', '@validation', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer clears the terms checkbox', null, { checkout }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('the checkout shows the message "You must accept the terms"', null, { page }); 
    await And('the checkout page is still displayed', null, { page }); 
  });

  test('Card and delivery fields expose their mandatory messages', { tag: ['@NS-030', '@negative', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('the checkout shows the message "Card number must be 16 digits"', null, { page }); 
    await And('the checkout shows the message "Use MM/YY"', null, { page }); 
    await And('the checkout shows the message "CVV must be 3 digits"', null, { page }); 
    await And('the checkout shows the message "Select a state"', null, { page }); 
  });

  test('Express delivery adds the displayed delivery charge to the total', { tag: ['@NS-040', '@validation', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await When('the customer chooses the "Express" delivery or payment option', null, { checkout }); 
    await Then('the checkout shipping is 15 and the total is subtotal plus shipping plus tax', null, { checkout }); 
  });

  test('Cash on delivery completes an order without card entry', { tag: ['@NS-017', '@positive', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer chooses the "Cash on delivery" delivery or payment option', null, { checkout }); 
    await And('the customer fills in the contact details only', null, { checkout }); 
    await And('the customer accepts the terms', null, { checkout }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('the order confirmation is displayed', null, { checkout, ctx, page }); 
    await And('the confirmation field "Payment" matches "cash|cod"', null, { checkout }); 
  });

  test('Documented declined practice card does not complete the order', { tag: ['@NS-031', '@negative', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer enters card number "4000000000000002"', null, { checkout }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('no order confirmation is displayed', null, { page }); 
    await And('a declined message is displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-028","@negative","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the checkout shows an error summary","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"First name is required\"","stepMatchArguments":[{"group":{"start":31,"value":"\"First name is required\"","children":[{"start":32,"value":"First name is required","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"Enter a valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Enter a valid email address\"","children":[{"start":32,"value":"Enter a valid email address","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"You must accept the terms\"","stepMatchArguments":[{"group":{"start":31,"value":"\"You must accept the terms\"","children":[{"start":32,"value":"You must accept the terms","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the checkout page is still displayed","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":17,"tags":["@NS-029","@negative","@regression"],"steps":[{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"And the customer enters email \"invalid\", phone \"123\" and ZIP code \"12\"","stepMatchArguments":[{"group":{"start":26,"value":"\"invalid\"","children":[{"start":27,"value":"invalid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"123\"","children":[{"start":44,"value":"123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"12\"","children":[{"start":63,"value":"12","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the checkout shows the message \"Enter a valid email address\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Enter a valid email address\"","children":[{"start":32,"value":"Enter a valid email address","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"Phone must be 10 digits\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Phone must be 10 digits\"","children":[{"start":32,"value":"Phone must be 10 digits","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"ZIP code must be 5 digits\"","stepMatchArguments":[{"group":{"start":31,"value":"\"ZIP code must be 5 digits\"","children":[{"start":32,"value":"ZIP code must be 5 digits","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@NS-036","@validation","@regression"],"steps":[{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"And the customer clears the terms checkbox","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the checkout shows the message \"You must accept the terms\"","stepMatchArguments":[{"group":{"start":31,"value":"\"You must accept the terms\"","children":[{"start":32,"value":"You must accept the terms","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And the checkout page is still displayed","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":42,"tags":["@NS-030","@negative","@regression"],"steps":[{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the checkout shows the message \"Card number must be 16 digits\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Card number must be 16 digits\"","children":[{"start":32,"value":"Card number must be 16 digits","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"Use MM/YY\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Use MM/YY\"","children":[{"start":32,"value":"Use MM/YY","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"CVV must be 3 digits\"","stepMatchArguments":[{"group":{"start":31,"value":"\"CVV must be 3 digits\"","children":[{"start":32,"value":"CVV must be 3 digits","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"And the checkout shows the message \"Select a state\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Select a state\"","children":[{"start":32,"value":"Select a state","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":54,"tags":["@NS-040","@validation","@regression"],"steps":[{"pwStepLine":57,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":58,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When the customer chooses the \"Express\" delivery or payment option","stepMatchArguments":[{"group":{"start":25,"value":"\"Express\"","children":[{"start":26,"value":"Express","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then the checkout shipping is 15 and the total is subtotal plus shipping plus tax","stepMatchArguments":[{"group":{"start":25,"value":"15"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":66,"pickleLine":64,"tags":["@NS-017","@positive","@regression"],"steps":[{"pwStepLine":67,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":68,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"And the customer chooses the \"Cash on delivery\" delivery or payment option","stepMatchArguments":[{"group":{"start":25,"value":"\"Cash on delivery\"","children":[{"start":26,"value":"Cash on delivery","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"And the customer fills in the contact details only","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"And the customer accepts the terms","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then the order confirmation is displayed","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"And the confirmation field \"Payment\" matches \"cash|cod\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Payment\"","children":[{"start":24,"value":"Payment","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"cash|cod\"","children":[{"start":42,"value":"cash|cod","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":79,"pickleLine":77,"tags":["@NS-031","@negative","@regression"],"steps":[{"pwStepLine":80,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"And the customer enters card number \"4000000000000002\"","stepMatchArguments":[{"group":{"start":32,"value":"\"4000000000000002\"","children":[{"start":33,"value":"4000000000000002","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":86,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":85,"keywordType":"Outcome","textWithKeyword":"Then no order confirmation is displayed","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"And a declined message is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end