// Generated from: features\orders.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop customer orders', () => {

  test('Checkout confirmation is reflected in customer order history', { tag: ['@NS-018', '@positive', '@smoke'] }, async ({ Given, When, Then, And, checkout, ctx, header, loginPage, orders, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer notes the checkout total', null, { checkout, ctx }); 
    await When('the customer places the order', null, { checkout }); 
    await Then('the order confirmation is displayed', null, { checkout, ctx, page }); 
    await And('the confirmation shows the noted total', null, { ctx, page }); 
    await And('the confirmation field "Items" is "1"', null, { checkout }); 
    await And('the confirmation field "Delivery" matches "standard"', null, { checkout }); 
    await And('the confirmation field "Payment" is "Card"', null, { checkout }); 
    await When('the customer opens their order history', null, { header }); 
    await Then('the placed order is listed with status "Processing" and the noted total', null, { ctx, orders }); 
  });

  test('Order details preserve captured customer and destination data', { tag: ['@NS-037', '@validation', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, header, loginPage, orders, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer places the order', null, { checkout }); 
    await And('the order confirmation is displayed', null, { checkout, ctx, page }); 
    await When('the customer opens their order history', null, { header }); 
    await And('the customer opens the details of the placed order', null, { ctx, orders }); 
    await Then('the order details show the shipping destination of the checkout customer', null, { page }); 
    await And('the page shows the text "Aurora Wireless Headphones"', null, { page }); 
  });

  test('Customer can cancel an eligible processing order', { tag: ['@NS-019', '@positive', '@regression'] }, async ({ Given, When, Then, And, checkout, ctx, header, loginPage, orders, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer places the order', null, { checkout }); 
    await And('the order confirmation is displayed', null, { checkout, ctx, page }); 
    await And('the customer opens their order history', null, { header }); 
    await And('the customer opens the details of the placed order', null, { ctx, orders }); 
    await When('the customer cancels the order and confirms the cancellation', null, { ctx, page }); 
    await Then('the placed order is listed with status "Cancelled"', null, { ctx, orders }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\orders.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-018","@positive","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And the customer notes the checkout total","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the customer places the order","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the order confirmation is displayed","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the confirmation shows the noted total","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the confirmation field \"Items\" is \"1\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Items\"","children":[{"start":24,"value":"Items","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"1\"","children":[{"start":35,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the confirmation field \"Delivery\" matches \"standard\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Delivery\"","children":[{"start":24,"value":"Delivery","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"standard\"","children":[{"start":43,"value":"standard","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the confirmation field \"Payment\" is \"Card\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Payment\"","children":[{"start":24,"value":"Payment","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"Card\"","children":[{"start":37,"value":"Card","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the customer opens their order history","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the placed order is listed with status \"Processing\" and the noted total","stepMatchArguments":[{"group":{"start":39,"value":"\"Processing\"","children":[{"start":40,"value":"Processing","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":21,"tags":["@NS-037","@validation","@regression"],"steps":[{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"And the customer places the order","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"And the order confirmation is displayed","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the customer opens their order history","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And the customer opens the details of the placed order","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the order details show the shipping destination of the checkout customer","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the page shows the text \"Aurora Wireless Headphones\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Aurora Wireless Headphones\"","children":[{"start":25,"value":"Aurora Wireless Headphones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":35,"tags":["@NS-019","@positive","@regression"],"steps":[{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"And the customer places the order","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And the order confirmation is displayed","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"And the customer opens their order history","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"And the customer opens the details of the placed order","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When the customer cancels the order and confirms the cancellation","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then the placed order is listed with status \"Cancelled\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Cancelled\"","children":[{"start":40,"value":"Cancelled","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end