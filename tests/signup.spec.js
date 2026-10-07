import { test } from "@playwright/test"
import { PageManager } from "../pages/PageManager"
import testdata from "../utils/testdata.json" with { type: "json" }


test("Sign Up", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const signuppage = pagemanager.getsignuppage()

    await signuppage.gotourl()
    await signuppage.clicksignuplink()

    const newusername = "Anju" + Date.now()

    await signuppage.enterusername(newusername)
    await signuppage.enterpassword(testdata.signup.password)

    //await page.pause()

  await signuppage.clicksignup()
})


test("Sign Up->Close", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const signuppage = pagemanager.getsignuppage()

    await signuppage.gotourl()
    await signuppage.clicksignuplink()

    const newusername = "Anju" + Date.now()

    await signuppage.enterusername(newusername)
    await signuppage.enterpassword(testdata.signup.password)

    //await page.pause()

    await signuppage.clickclose()
})