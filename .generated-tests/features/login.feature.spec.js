// Generated from: features\login.feature
import { test } from "../../steps/fixtures.js";

test.describe('Nova Shop login', () => {

  test('Standard customer signs in', { tag: ['@NS-001', '@positive', '@smoke'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('the customer opens the login page', null, { loginPage }); 
    await When('the customer signs in as the "standard" account', null, { loginPage }); 
    await Then('the product catalogue is displayed', null, { page }); 
  });

  test('Slow-login customer can sign in without a fixed sleep', { tag: ['@NS-002', '@negative'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('the "slow" account is configured'); 
    await And('the customer opens the login page', null, { loginPage }); 
    await When('the customer signs in as the "slow" account', null, { loginPage }); 
    await Then('the product catalogue is displayed', null, { page }); 
  });

  test('Customer can end the authenticated session', { tag: ['@NS-021', '@positive', '@smoke'] }, async ({ Given, When, Then, header, loginPage, page }) => { 
    await Given('the customer is logged in', null, { loginPage, page }); 
    await When('the customer logs out', null, { header }); 
    await Then('the login form is displayed', null, { loginPage }); 
  });

  test('Invalid account credentials display a login error', { tag: ['@NS-022', '@negative'] }, async ({ Given, When, Then, And, loginPage }) => { 
    await Given('the customer opens the login page', null, { loginPage }); 
    await When('the customer signs in with an unrecognised username and a bad password', null, { loginPage }); 
    await Then('the login error matches "do not match|invalid"', null, { loginPage }); 
    await And('the login page is displayed', null, { loginPage }); 
  });

  test('Locked customer account cannot access the product catalogue', { tag: ['@NS-023', '@negative'] }, async ({ Given, When, Then, And, loginPage }) => { 
    await Given('the "locked" account is configured'); 
    await And('the customer opens the login page', null, { loginPage }); 
    await When('the customer signs in as the "locked" account', null, { loginPage }); 
    await Then('the login error matches "locked|unavailable|disabled"', null, { loginPage }); 
    await And('the login page is displayed', null, { loginPage }); 
  });

  test('Empty credentials do not authenticate the customer', { tag: ['@NS-024', '@negative'] }, async ({ Given, When, Then, And, loginPage }) => { 
    await Given('the customer opens the login page', null, { loginPage }); 
    await When('the customer signs in with username "" and password ""', null, { loginPage }); 
    await Then('the login page is displayed', null, { loginPage }); 
    await And('the sign in button is displayed', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@NS-001","@positive","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the customer opens the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the customer signs in as the \"standard\" account","stepMatchArguments":[{"group":{"start":29,"value":"\"standard\"","children":[{"start":30,"value":"standard","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the product catalogue is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@NS-002","@negative"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the \"slow\" account is configured","stepMatchArguments":[{"group":{"start":4,"value":"\"slow\"","children":[{"start":5,"value":"slow","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"And the customer opens the login page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the customer signs in as the \"slow\" account","stepMatchArguments":[{"group":{"start":29,"value":"\"slow\"","children":[{"start":30,"value":"slow","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the product catalogue is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":17,"tags":["@NS-021","@positive","@smoke"],"steps":[{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given the customer is logged in","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When the customer logs out","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the login form is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":23,"tags":["@NS-022","@negative"],"steps":[{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the customer opens the login page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the customer signs in with an unrecognised username and a bad password","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then the login error matches \"do not match|invalid\"","stepMatchArguments":[{"group":{"start":24,"value":"\"do not match|invalid\"","children":[{"start":25,"value":"do not match|invalid","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And the login page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":30,"tags":["@NS-023","@negative"],"steps":[{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given the \"locked\" account is configured","stepMatchArguments":[{"group":{"start":4,"value":"\"locked\"","children":[{"start":5,"value":"locked","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"And the customer opens the login page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When the customer signs in as the \"locked\" account","stepMatchArguments":[{"group":{"start":29,"value":"\"locked\"","children":[{"start":30,"value":"locked","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then the login error matches \"locked|unavailable|disabled\"","stepMatchArguments":[{"group":{"start":24,"value":"\"locked|unavailable|disabled\"","children":[{"start":25,"value":"locked|unavailable|disabled","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And the login page is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":38,"tags":["@NS-024","@negative"],"steps":[{"pwStepLine":41,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given the customer opens the login page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When the customer signs in with username \"\" and password \"\"","stepMatchArguments":[{"group":{"start":36,"value":"\"\"","children":[{"start":37,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"\"","children":[{"start":53,"value":"","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then the login page is displayed","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And the sign in button is displayed","stepMatchArguments":[]}]},
]; // bdd-data-end