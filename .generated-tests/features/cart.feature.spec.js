// Generated from: features\cart.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop cart', () => {

  test('Cart quantity changes update the item line total', { tag: ['@NS-012', '@positive', '@regression'] }, async ({ Given, When, Then, And, cart, ctx, header, loginPage, page, product }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the detail page for product "p1"', null, { product }); 
    await And('the customer notes the product unit price', null, { ctx, product }); 
    await And('the customer adds the product to the cart', null, { product }); 
    await When('the customer opens the cart', null, { header }); 
    await And('the customer sets the quantity of "Aurora Wireless Headphones" to 2', null, { cart }); 
    await Then('the cart line for "Aurora Wireless Headphones" shows quantity 2 and a line total of twice the unit price', null, { cart, ctx }); 
  });

  test('Removing the last cart item displays an empty cart', { tag: ['@NS-013', '@positive', '@regression'] }, async ({ Given, When, Then, And, cart, ctx, header, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await When('the customer opens the cart', null, { header }); 
    await And('the customer removes the added product from the cart', null, { cart, ctx }); 
    await Then('the empty cart message is displayed', null, { page }); 
  });

  test('Customer applies SAVE10 and sees reconciled discount, tax, and total', { tag: ['@NS-014', '@validation', '@smoke'] }, async ({ Given, When, Then, And, cart, ctx, header, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the cart', null, { header }); 
    await When('the customer applies the coupon "SAVE10"', null, { cart }); 
    await Then('the coupon status contains "SAVE10 applied"', null, { cart }); 
    await And('the cart subtotal equals the product price', null, { cart, ctx }); 
    await And('the cart discount is 10 percent of the subtotal and the total reconciles', null, { cart }); 
    await And('the added product is listed in the cart', null, { cart, ctx }); 
  });

  test('FLAT20 coupon produces a successful coupon status', { tag: ['@NS-015', '@positive', '@regression'] }, async ({ Given, When, Then, And, cart, ctx, header, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the cart', null, { header }); 
    await When('the customer applies the coupon "FLAT20"', null, { cart }); 
    await Then('the coupon status contains "FLAT20 applied"', null, { cart }); 
    await And('the cart summary lists the discount "Discount (FLAT20)"', null, { cart }); 
  });

  test('Invalid coupon shows an error and preserves the original total', { tag: ['@NS-026', '@negative'] }, async ({ Given, When, Then, And, cart, ctx, header, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the cart', null, { header }); 
    await And('the customer notes the cart total', null, { cart, ctx }); 
    await When('the customer applies the coupon "NOTREAL"', null, { cart }); 
    await Then('the coupon status contains "not a valid coupon"', null, { cart }); 
    await And('the cart total is unchanged', null, { cart, ctx }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-012","@positive","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the customer opens the detail page for product \"p1\"","stepMatchArguments":[{"group":{"start":47,"value":"\"p1\"","children":[{"start":48,"value":"p1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the customer notes the product unit price","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the customer adds the product to the cart","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the customer opens the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the customer sets the quantity of \"Aurora Wireless Headphones\" to 2","stepMatchArguments":[{"group":{"start":34,"value":"\"Aurora Wireless Headphones\"","children":[{"start":35,"value":"Aurora Wireless Headphones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":66,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the cart line for \"Aurora Wireless Headphones\" shows quantity 2 and a line total of twice the unit price","stepMatchArguments":[{"group":{"start":18,"value":"\"Aurora Wireless Headphones\"","children":[{"start":19,"value":"Aurora Wireless Headphones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"2"},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@NS-013","@positive","@regression"],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the customer opens the cart","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And the customer removes the added product from the cart","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the empty cart message is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":23,"tags":["@NS-014","@validation","@smoke"],"steps":[{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"And the customer opens the cart","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the customer applies the coupon \"SAVE10\"","stepMatchArguments":[{"group":{"start":32,"value":"\"SAVE10\"","children":[{"start":33,"value":"SAVE10","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the coupon status contains \"SAVE10 applied\"","stepMatchArguments":[{"group":{"start":27,"value":"\"SAVE10 applied\"","children":[{"start":28,"value":"SAVE10 applied","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And the cart subtotal equals the product price","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And the cart discount is 10 percent of the subtotal and the total reconciles","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the added product is listed in the cart","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":35,"tags":["@NS-015","@positive","@regression"],"steps":[{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"And the customer opens the cart","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When the customer applies the coupon \"FLAT20\"","stepMatchArguments":[{"group":{"start":32,"value":"\"FLAT20\"","children":[{"start":33,"value":"FLAT20","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then the coupon status contains \"FLAT20 applied\"","stepMatchArguments":[{"group":{"start":27,"value":"\"FLAT20 applied\"","children":[{"start":28,"value":"FLAT20 applied","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And the cart summary lists the discount \"Discount (FLAT20)\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Discount (FLAT20)\"","children":[{"start":37,"value":"Discount (FLAT20)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":47,"pickleLine":45,"tags":["@NS-026","@negative"],"steps":[{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"And the customer opens the cart","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"And the customer notes the cart total","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When the customer applies the coupon \"NOTREAL\"","stepMatchArguments":[{"group":{"start":32,"value":"\"NOTREAL\"","children":[{"start":33,"value":"NOTREAL","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then the coupon status contains \"not a valid coupon\"","stepMatchArguments":[{"group":{"start":27,"value":"\"not a valid coupon\"","children":[{"start":28,"value":"not a valid coupon","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"And the cart total is unchanged","stepMatchArguments":[]}]},
]; // bdd-data-end