const LoginPage = require('./login.page');
const DashboardPage = require('./dashboardPage');
const SecurePage = require('./secure.page');
const myworkPage = require('./myworkPage');
const chai = require('chai')


describe('Smoke Test for Dashboards', async () => {
    it('Validate Login Success', async () => {
        await LoginPage.open();
        await LoginPage.login();
        await LoginPage.validateUserName();
        await LoginPage.homePage();
        browser.maximizeWindow();

    });

    it('Dashboards Loaded Successfully', async ()=>{
        await DashboardPage.dashboardsPage();
        

       /*await LoginPage.executivePage();
        await LoginPage.accountingPage();
        await LoginPage.fulfillmentPage();
        await LoginPage.salesPage();
        await LoginPage.warehousePage();*/

    });
/*
    it('My Work Loaded Successfully', async ()=>{
        await myworkPage.myWorkPage();
        await myworkPage.exceptionsPage();






    });
*/
/*    it('Validate Login Failed', ()=>{
        browser.url()

    })*/
});


