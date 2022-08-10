const Page = require('./page');
const Login = require('../pageobjects/Login')
const SecurePage = require('./secure.page');
const DashboardPage = require('../pageobjects/dashboardlocators');
const dashboardlocators = require('../pageobjects/dashboardlocators');
//import allureReporter from '@wdio/allure-reporter'
//const myworkPage = require('./myworkPage');
//const chai = require('chai');
//Adding a comment
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
    const num = Number(dashboardlocators.ActiveUserCountBox.textContent)
    if(dashboardlocators.num !== dashboardlocators.userTableCount.length){
      console.log("Active User Count is not correct according to the amount of names")
    }
    else{
      console.log("Active User Count matches the amount of names")
    }
});
  it('Validate Accounting Dashboards Page', async ()=> {
    await dashboardlocators.openAccountingPage.click();
    await dashboardlocators.readAccountingPage.getText();
    await expect(dashboardlocators.readAccountingPage).toHaveTextContaining('Accounting Dashboard');
    await dashboardlocators.allAvailableCompanies.click();
    

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
