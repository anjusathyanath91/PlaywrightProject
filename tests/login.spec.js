import { test } from "@playwright/test"
import { PageManager } from "../pages/PageManager"
import testdata from "../utils/testdata.json" with { type: "json" }


// Valid username + Valid password
test("Valid Login", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.login.username)
    await loginpage.enterpassword(testdata.login.password)
    await loginpage.clicklogin()

})


// Invalid username + Valid password
test("Invalid Username + Valid Password", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.invalidusername)
    await loginpage.enterpassword(testdata.login.password)
    await loginpage.clicklogin()

})


// Valid username + Invalid password
test("Valid Username + Invalid Password", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.login.username)
    await loginpage.enterpassword(testdata.invalidpassword)
    await loginpage.clicklogin()

})


// Invalid username + Invalid password
test("Invalid Username + Invalid Password", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.invalidusername)
    await loginpage.enterpassword(testdata.invalidpassword)
    await loginpage.clicklogin()

})


// Valid Login -> Logout
test("Valid Login -> Logout", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.enterusername(testdata.login.username)
    await loginpage.enterpassword(testdata.login.password)
    await loginpage.clicklogin()

    await loginpage.clicklogout()

})