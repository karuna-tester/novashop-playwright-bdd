// Generated from: features\catalogue.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop catalogue', () => {

  test('Authenticated customer can search for a product by its displayed name', { tag: ['@NS-003', '@positive', '@smoke'] }, async ({ Given, When, Then, And, ctx, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await When('the customer searches for the name of the first displayed product', null, { ctx, products }); 
    await Then('exactly one product is listed and it shows that name', null, { ctx, products }); 
  });

  test('Category selection returns products only from that category', { tag: ['@NS-004', '@positive', '@smoke'] }, async ({ Given, When, Then, And, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await When('the customer selects the category "Home"', null, { products }); 
    await Then('every listed product belongs to the "Home" category', null, { products }); 
  });

  test('In-stock filter removes the unavailable catalogue item', { tag: ['@NS-005', '@positive', '@smoke'] }, async ({ Given, When, Then, And, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await When('the customer enables the in-stock filter', null, { products }); 
    await Then('no sold-out products are listed', null, { products }); 
    await And('at least one product is still listed', null, { products }); 
  });

  test('Price ascending sort orders displayed products from lowest to highest', { tag: ['@NS-006', '@positive', '@smoke'] }, async ({ Given, When, Then, And, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await When('the customer sorts products by "Price (low to high)"', null, { products }); 
    await Then('the listed prices are in ascending order', null, { products }); 
  });

  test('Rating sorting puts the highest current rating first', { tag: ['@NS-007', '@positive', '@regression'] }, async ({ Given, When, Then, And, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await When('the customer sorts products by "Top rated"', null, { products }); 
    await Then('the first listed product has the highest rating', null, { page, products }); 
  });

  test('Search with no match shows no product results', { tag: ['@NS-025', '@negative'] }, async ({ Given, When, Then, And, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await When('the customer searches for a product that does not exist', null, { products }); 
    await Then('no product cards are listed', null, { products }); 
    await And('a no-results message is displayed', null, { page }); 
  });

  test('Sold-out catalogue item cannot be added to the cart', { tag: ['@NS-027', '@negative'] }, async ({ Given, Then, And, loginPage, page, products }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await And('the customer opens the product catalogue', null, { products }); 
    await Then('exactly one sold-out product is listed', null, { products }); 
    await And('its sold out button is disabled', null, { products }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\catalogue.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-003","@positive","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the customer searches for the name of the first displayed product","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then exactly one product is listed and it shows that name","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@NS-004","@positive","@smoke"],"steps":[{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When the customer selects the category \"Home\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Home\"","children":[{"start":35,"value":"Home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then every listed product belongs to the \"Home\" category","stepMatchArguments":[{"group":{"start":36,"value":"\"Home\"","children":[{"start":37,"value":"Home","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@NS-005","@positive","@smoke"],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the customer enables the in-stock filter","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then no sold-out products are listed","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And at least one product is still listed","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@NS-006","@positive","@smoke"],"steps":[{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the customer sorts products by \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Price (low to high)\"","children":[{"start":32,"value":"Price (low to high)","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the listed prices are in ascending order","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":33,"tags":["@NS-007","@positive","@regression"],"steps":[{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When the customer sorts products by \"Top rated\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Top rated\"","children":[{"start":32,"value":"Top rated","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then the first listed product has the highest rating","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":40,"tags":["@NS-025","@negative"],"steps":[{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When the customer searches for a product that does not exist","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then no product cards are listed","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"And a no-results message is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":48,"tags":["@NS-027","@negative"],"steps":[{"pwStepLine":51,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"And the customer opens the product catalogue","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then exactly one sold-out product is listed","stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"And its sold out button is disabled","stepMatchArguments":[]}]},
]; // bdd-data-end