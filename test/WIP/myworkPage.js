const Page = require('./Page')

class MyWorkPage extends Page{

get myWorkDropdown(){
    return $("//a[normalize-space()='My Work']");
}

get exceptionQueue(){
    return $("");
}

get sourcing(){
    return $("//a[@href='/mywork/sourcing']");
}
/*
get purchasing(){
    return $("a[data-target='#purchasing']");
}

get creativeServices(){
    return $('');
}

get receiving(){
    return $('');
}

get invoicereceipts(){
    return $('');
}

get screenprinting(){
    return $('');
}

get embroidery(){
    return $('');
}

get rundata(){
    return $('');
}
get enhancedservices(){
    return $('');
}

get shipping(){
    return $('');
}

get dropshipments(){
    return $('');
}

get fulfillment(){
    return $('');
}

*/





async myWorkPage(){
   await this.myWorkDropdown.click();

} 

async exceptionsPage(){
    await this.exceptionQueue.click();
} 
/*
async openSourcing(){
    this.sourcing
} 
async openPurchasing(){
    this.purchasing
} 
async openCreativeServices(){
    this.CreativeServices
} 
async openReceiving(){
    this.reciving
} 
async openInvoiceReceipts(){
    this.invoicereceipts
} 
async openScreenprinting(){
    this.screenprinting
} 
async openEmbroidery(){
    this.embroidery
} 
async openRunData(){
    this.rundata
} 
async openEnhancedServices(){
    this.enhancedservices
} 
async openShipping(){
    this.shipping
} 
async openDropshipments(){
    this.dropshipments
} 

async openFulfillment(){
    this.
} 











*/






}

module.exports = new MyWorkPage();