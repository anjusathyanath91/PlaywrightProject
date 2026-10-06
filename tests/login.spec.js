import { test } from "@playwright/test"
import { PageManager } from "../pages/PageManager"
import testdata from "../utils/testdata.json" with { type: "json" }


// Valid username + Valid password
test("Valid Login", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.validateuser(testdata.login.username,testdata.login.password)

})


// Invalid username + Valid password
test("Invalid Username + Valid Password", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.invalidusername(testdata.invalidusername,testdata.login.password)

})


// Valid username + Invalid password
test("Valid Username + Invalid Password", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.invalidpassword(testdata.login.username,testdata.invalidpassword)

})


// Invalid username + Invalid password
test("Invalid Username + Invalid Password", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.invalidunameandpwd(testdata.invalidusername,testdata.invalidpassword)

})


// Valid Login -> Logout
test("Valid Login -> Logout", async ({ page }) => {

    let pagemanager = new PageManager(page)
    const loginpage = pagemanager.getloginpage()

    await loginpage.gotourl()
    await loginpage.clickloginlink()

    await loginpage.validateuser(testdata.login.username,testdata.login.password)

    await loginpage.clicklogout()

})