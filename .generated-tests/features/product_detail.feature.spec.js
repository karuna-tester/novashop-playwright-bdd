// Generated from: features\product_detail.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop product detail', () => {

  test('Customer inspects product options and adds a selected variant', { tag: ['@NS-011', '@positive', '@smoke'] }, async ({ Given, When, Then, And, header, loginPage, page, product }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the detail page for product "p1"', null, { product }); 
    await Then('the product heading "Aurora Wireless Headphones" is displayed', null, { page }); 
    await When('the customer selects the product option "Lilac"', null, { product }); 
    await And('the customer adds the product to the cart', null, { product }); 
    await And('the customer opens the cart', null, { header }); 
    await Then('the page shows the text "Colour: Lilac"', null, { page }); 
  });

  test('Product quantity respects both minimum and maximum UI boundaries', { tag: ['@NS-035', '@validation', '@regression'] }, async ({ Given, When, Then, And, loginPage, page, product }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the detail page for product "p1"', null, { product }); 
    await Then('the product quantity is "1"', null, { product }); 
    await And('the decrease quantity button is disabled', null, { product }); 
    await When('the customer enters the product quantity "12"', null, { product }); 
    await Then('the product quantity is "12"', null, { product }); 
    await And('the increase quantity button is disabled', null, { product }); 
  });

  test('Product tabs switch the detail panel content', { tag: ['@NS-009', '@positive', '@regression'] }, async ({ Given, When, Then, And, ctx, loginPage, page, product }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the detail page for product "p1"', null, { product }); 
    await And('the customer notes the current product panel content', null, { ctx, product }); 
    await When('the customer opens the "reviews" product tab', null, { product }); 
    await Then('the "reviews" tab is selected and the panel content has changed', null, { ctx, product }); 
    await When('the customer opens the "shipping" product tab', null, { product }); 
    await Then('the "shipping" tab is selected and the panel content has changed', null, { ctx, product }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\product_detail.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-011","@positive","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the customer opens the detail page for product \"p1\"","stepMatchArguments":[{"group":{"start":47,"value":"\"p1\"","children":[{"start":48,"value":"p1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the product heading \"Aurora Wireless Headphones\" is displayed","stepMatchArguments":[{"group":{"start":20,"value":"\"Aurora Wireless Headphones\"","children":[{"start":21,"value":"Aurora Wireless Headphones","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the customer selects the product option \"Lilac\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Lilac\"","children":[{"start":41,"value":"Lilac","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And the customer adds the product to the cart","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the customer opens the cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the page shows the text \"Colour: Lilac\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Colour: Lilac\"","children":[{"start":25,"value":"Colour: Lilac","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@NS-035","@validation","@regression"],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And the customer opens the detail page for product \"p1\"","stepMatchArguments":[{"group":{"start":47,"value":"\"p1\"","children":[{"start":48,"value":"p1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the product quantity is \"1\"","stepMatchArguments":[{"group":{"start":24,"value":"\"1\"","children":[{"start":25,"value":"1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And the decrease quantity button is disabled","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the customer enters the product quantity \"12\"","stepMatchArguments":[{"group":{"start":41,"value":"\"12\"","children":[{"start":42,"value":"12","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the product quantity is \"12\"","stepMatchArguments":[{"group":{"start":24,"value":"\"12\"","children":[{"start":25,"value":"12","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And the increase quantity button is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":24,"tags":["@NS-009","@positive","@regression"],"steps":[{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"And the customer opens the detail page for product \"p1\"","stepMatchArguments":[{"group":{"start":47,"value":"\"p1\"","children":[{"start":48,"value":"p1","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"And the customer notes the current product panel content","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the customer opens the \"reviews\" product tab","stepMatchArguments":[{"group":{"start":23,"value":"\"reviews\"","children":[{"start":24,"value":"reviews","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the \"reviews\" tab is selected and the panel content has changed","stepMatchArguments":[{"group":{"start":4,"value":"\"reviews\"","children":[{"start":5,"value":"reviews","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the customer opens the \"shipping\" product tab","stepMatchArguments":[{"group":{"start":23,"value":"\"shipping\"","children":[{"start":24,"value":"shipping","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the \"shipping\" tab is selected and the panel content has changed","stepMatchArguments":[{"group":{"start":4,"value":"\"shipping\"","children":[{"start":5,"value":"shipping","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end