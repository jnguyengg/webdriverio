
const Page = require('../specs/page');
//const chai = require('../specs/chai')


class DashboardPage extends Page{
    //Dashboard Dropdown
    get openDashboardsPage(){
        return $("//i[@class='fa fa-dashboard fa-fw']");
    }
    //Executive Page
    get openExecutivePage(){
        return $("//li[@path='/dashboard/executive']");
    }
    
    get readExecutivePage(){
        return $("//div[@id='content-header']");
    }

    get ActiveUserCountBox(){
        return $("#user_cnt")
    }
    get userTableCount(){
        return $("tr[data-index]")
    }
    //Acccounting Page
    get openAccountingPage(){
        return $("//li[@path='/dashboard/accounting']");
    }
    get readAccountingPage(){
        return $("//div[@id='content-header']");
    }
    // Fulfillment Page
    get openFulfillmentPage(){
        return $("//li[@path='/dashboard/fulfillment']");
    }
    get readFulfillmentPage(){
        return $("//div[@id='content-header']");
    }
    //Sales Page
    get openSalesPage(){
        return $("//li[@path='/dashboard/sales']");
    }
    get readSalesPage(){
        return $("//div[@id='content-header']");
    } 
    //Warehouse Page
    get openWarehousePage(){
        return $("//li[@path='/dashboard/warehouse']");
    }
    get readWarehousePage(){
        return $("//div[@id='content-header']");
    }
    get allAvailableCompanies(){
        return $$("[title='Company 01, Company 02, Company 06, Company 07, Company 10, Company 12']");
    }
    get AccountsPayableForecast(){
        return $$(".panel-heading")
    }
    get availableCheckboxes(){
        return $$(".checkbox");
    }
    get previousDays(){
        return $$(".dropper timeframe widget-dropdown")
    }
    get selectPreviousDays(){
        return $$("select.timeframe-select")
    }
    get svg1(){
        return $("svg")
    }
    get svg2(){
        return $$("svg")
    }
    get scrollsvg2(){
        return $$("tspan")
    }
    //Dashboard Page Actions
   
   
    

    
}

module.exports = new DashboardPage();



























/*async dashboardsPage(){
    await this.openDashboardsPage.click();
    //Executive
    await this.openExecutivePage.click();
    await this.readExecutivePage.getText();
    await expect(this.readExecutivePage).toHaveTextContaining('Executive Dashboard')
    
    //await expect(this.ActiveUserCountBox).toBeExisting();

    //Accounting
    await this.openAccountingPage.click();
    await this.readAccountingPage.getText();
    await expect(this.readAccountingPage).toHaveTextContaining('Accounting Dashboard')
    await this.allAvailableCompanies.click();
    //await this.availableCheckboxes.selectByIndex(3);
    
    /*
    await this.availableCheckboxes[2].click();
    await this.availableCheckboxes[6].click();
    await this.availableCheckboxes[7].click();
    */



    /*browser.pause(9000)
    //Fulfillment
    await this.openFulfillmentPage.click();
    await this.readFulfillmentPage.getText();
    await expect( this.readFulfillmentPage).toHaveTextContaining('Fulfillment Dashboard')
    //Sales
    await this.openSalesPage.click();
    await this.readSalesPage.getText();
    await expect(this.readSalesPage).toHaveTextContaining('Sales Dashboard')
    //Warehouse
    await this.openWarehousePage.click();
    await this.readWarehousePage.getText();
    await expect(this.readWarehousePage).toHaveTextContaining('Warehouse Dashboard')



}
*/