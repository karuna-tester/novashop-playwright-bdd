// Generated from: features\admin_orders.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop order management', () => {

  test('Manager can ship and deliver a newly placed customer order', { tag: ['@NS-020', '@positive', '@regression'] }, async ({ Given, When, Then, And, admin, checkout, ctx, header, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await And('the customer adds the first listed product to the cart', null, { ctx, products }); 
    await And('the customer opens the checkout page', null, { checkout }); 
    await And('the customer fills in valid checkout details', null, { checkout }); 
    await And('the customer places the order', null, { checkout }); 
    await And('the order confirmation is displayed', null, { checkout, ctx, page }); 
    await When('the customer logs out', null, { header }); 
    await And('the customer signs in as the "admin" account', null, { loginPage }); 
    await Then('the order management page is displayed', null, { admin }); 
    await And('the placed order row in order management shows "Processing"', null, { admin, ctx }); 
    await And('the order management "To ship" metric is "1"', null, { admin }); 
    await When('the manager marks the placed order as shipped', null, { admin, ctx }); 
    await Then('the placed order row in order management shows "Shipped"', null, { admin, ctx }); 
    await When('the manager marks the placed order as delivered', null, { admin, ctx }); 
    await Then('the placed order row in order management shows "Delivered"', null, { admin, ctx }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\admin_orders.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-020","@positive","@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the customer adds the first listed product to the cart","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the customer opens the checkout page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And the customer fills in valid checkout details","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And the customer places the order","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And the order confirmation is displayed","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the customer logs out","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the customer signs in as the \"admin\" account","stepMatchArguments":[{"group":{"start":29,"value":"\"admin\"","children":[{"start":30,"value":"admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the order management page is displayed","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the placed order row in order management shows \"Processing\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Processing\"","children":[{"start":48,"value":"Processing","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the order management \"To ship\" metric is \"1\"","stepMatchArguments":[{"group":{"start":21,"value":"\"To ship\"","children":[{"start":22,"value":"To ship","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"1\"","children":[{"start":42,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the manager marks the placed order as shipped","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the placed order row in order management shows \"Shipped\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Shipped\"","children":[{"start":48,"value":"Shipped","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the manager marks the placed order as delivered","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the placed order row in order management shows \"Delivered\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Delivered\"","children":[{"start":48,"value":"Delivered","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end