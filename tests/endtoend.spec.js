/*import { test } from "@playwright/test"
import { PageManager } from "../pages/PageManager"
import testdata from "../utils/testdata.json" with { type: "json" }


test.describe.serial("Demoblaze End to End", () => {

  
    test("Valid Login", async ({ page }) => {

        let pagemanager = new PageManager(page)

        const loginpage = pagemanager.getloginpage()

        await loginpage.gotourl()
        await loginpage.clickloginlink()

        await loginpage.validateuser(
            testdata.login.username,
            testdata.login.password
        )

    })


    
    test("Phone Purchase", async ({ page }) => {

        let pagemanager = new PageManager(page)

        const loginpage = pagemanager.getloginpage()
        const productpage = pagemanager.getproductpage()
        const cartpage = pagemanager.getcartpage()
        const checkoutpage = pagemanager.getcheckoutpage()

        
        await loginpage.gotourl()
        await loginpage.clickloginlink()

        await loginpage.validateuser(
            testdata.login.username,
            testdata.login.password
        )

        
        await productpage.selectphones()
        await productpage.selectmobileproduct(testdata.mobileproduct)

       
        await productpage.addtocart()
        await productpage.clickok()

       
        await cartpage.clickcart()
        await cartpage.clickplaceorder()

      
        await checkoutpage.enterdetails(testdata.customer)
        await checkoutpage.clickpurchase()

       
        await checkoutpage.verifythanksmessage()
        await checkoutpage.clickok()
    })

})*/