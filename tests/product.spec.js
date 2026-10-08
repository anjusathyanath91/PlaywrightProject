import test from "@playwright/test"
import { PageManager } from "../pages/PageManager"
import testdata from "../utils/testdata.json" with { type: "json" }


// Scenario 1
test("Login -> Select any Product -> Add to Cart -> Click OK", async ({ page }) => {

    let pagemanager = new PageManager(page)

    const loginpage = pagemanager.getloginpage()
    const productpage = pagemanager.getproductpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.login.username)
    await loginpage.enterpassword(testdata.login.password)
    await loginpage.clicklogin()

    await productpage.selectproduct(testdata.productname)
    await productpage.addtocart()
    await productpage.clickok()

    //await page.pause()
})


// Scenario 2
test("Login -> Phones -> Select any phone -> Add to Cart -> Click OK -> Cart -> Place Order -> Purchase -> Verify Thank You -> OK", async ({ page }) => {

    let pagemanager = new PageManager(page)

    const loginpage = pagemanager.getloginpage()
    const productpage = pagemanager.getproductpage()
    const cartpage = pagemanager.getcartpage()
    const checkoutpage = pagemanager.getcheckoutpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.login.username)
    await loginpage.enterpassword(testdata.login.password)
    await loginpage.clicklogin()

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


// Scenario 3
test("Login -> Monitors -> Select any monitor -> Add to Cart -> Click OK -> Cart -> Place Order -> Purchase -> Verify Thank You -> OK", async ({ page }) => {

    let pagemanager = new PageManager(page)

    const loginpage = pagemanager.getloginpage()
    const productpage = pagemanager.getproductpage()
    const cartpage = pagemanager.getcartpage()
    const checkoutpage = pagemanager.getcheckoutpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.login.username)
    await loginpage.enterpassword(testdata.login.password)
    await loginpage.clicklogin()

    await productpage.selectmonitors()
    await productpage.selectmonitorproduct(testdata.monitorproduct)

    await productpage.addtocart()
    await productpage.clickok()

    await cartpage.clickcart()
    await cartpage.clickplaceorder()

    await checkoutpage.enterdetails(testdata.customer)
    await checkoutpage.clickpurchase()
    await checkoutpage.verifythanksmessage()
    await checkoutpage.clickok()
})