const Page = require('./page');
const Login = require('../pageobjects/Login')
const SecurePage = require('./secure.page');
const DashboardPage = require('../pageobjects/dashboardlocators');
const dashboardlocators = require('../pageobjects/dashboardlocators');
//import allureReporter from '@wdio/allure-reporter'
//const myworkPage = require('./myworkPage');
//const chai = require('chai');
  describe('Smoke Tests', async ()=> {    
  it('Validate Login Success', async ()=>{
    await Login.open();
    await Login.login();
    await Login.homePage();
    await Login.validateUserName();
    await Login.homePage();
}); 

  it('Validate Executive Dashboards Page', async ()=> {
    await dashboardlocators.openDashboardsPage.click();
    await dashboardlocators.openExecutivePage.click();
    await dashboardlocators.readExecutivePage.getText();
    await expect(dashboardlocators.readExecutivePage).toHaveTextContaining('Executive Dashboard');

});
  it('Validate Accounting Dashboards Page', async ()=> {
    await dashboardlocators.openAccountingPage.click();
    await dashboardlocators.readAccountingPage.getText();
    await expect(dashboardlocators.readAccountingPage).toHaveTextContaining('Accounting Dashboard');
    await dashboardlocators.allAvailableCompanies[0].click();
    await dashboardlocators.availableCheckboxes[2].click();
    await dashboardlocators.availableCheckboxes[3].click();
    await dashboardlocators.availableCheckboxes[4].click();
    await dashboardlocators.selectPreviousDays[0].selectByAttribute('value', '30')
    await dashboardlocators.svg1.waitForDisplayed({timeout:3000,timeOutMsg:"it is displayed" });
    //await dashboardlocators.AccountsPayableForecast[3].scrollIntoView();
    //await dashboardlocators.allAvailableCompanies[1].waitForDisplayed({timeout:3000, timeoutMsg:"is Displayed"});
    browser.pause(3000)
   // await dashboardlocators.allAvailableCompanies[0].click();
    //await dashboardlocators.availableCheckboxes[19].click();
    //await dashboardlocators.availableCheckboxes[20].click();
    //await dashboardlocators.selectPreviousDays[1].selectByAttribute('value', '30')
    //await dashboardlocators.svg2[1].waitForExist({timeout:3000,timeOutMsg:"it is displayed" });

    

});

  it('Validate Fulfillment Dashboards Page', async ()=> {
    await dashboardlocators.openFulfillmentPage.click();
    await dashboardlocators.readFulfillmentPage.getText();
    await expect( dashboardlocators.readFulfillmentPage).toHaveTextContaining('Fulfillment Dashboard');
  

});
  it('Validate Sales Dashboards Page', async ()=> {
    await dashboardlocators.openSalesPage.click();
    await dashboardlocators.readSalesPage.getText();
    await expect(dashboardlocators.readSalesPage).toHaveTextContaining('Sales Dashboard');
});

  it('Validate Warehouse Dashboards Page', async ()=> {
    await dashboardlocators.openWarehousePage.click();
    await dashboardlocators.readWarehousePage.getText();
    await expect(dashboardlocators.readWarehousePage).toHaveTextContaining('Warehouse Dashboard');
});


});     //<--Describe enclosed-->
