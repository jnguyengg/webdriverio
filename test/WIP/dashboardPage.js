
const Page = require('./page');
const chai = require('chai');
const SecurePage = require('./secure.page');
//const myworkPage = require('./myworkPage');
const Dashboards = require('../pageobjects/dashboardlocators');


describe('Executive', async ()=> {
    
    it('Accounting', async ()=>{
      await Dashboards.dashboardsPage();
      
   /*   async homePage(){
  
          browser.getTitle();
          await this.readHomePage.getText();
          
  
  
      }
  });/*
    /*  it('Validate Username', async ()=>{
      
      /*async validateUserName(){
          await this.userText.getText();
          await expect(this.userText).toHaveTextContaining('Automation User');
      }*/
  }); 
  
  });
      /*
       * overwrite specific options to adapt it to page object
       */
   
  
  

module.exports = new DashboardPage();