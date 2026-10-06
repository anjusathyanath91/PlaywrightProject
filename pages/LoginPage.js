import { expect } from "@playwright/test"

export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator("#loginusername")
        this.Password = page.locator("#loginpassword")
        this.login_link = page.locator("#login2")
        this.login_button = page.locator('button[onclick="logIn()"]')
        this.logout_link = page.locator("#logout2")
    }

    async gotourl() {
        await this.page.goto("/")
    }

    async clickloginlink() {
        await this.login_link.click()
    }

    async validateuser(uname, pwd) {
        await this.username.fill(uname)
        await this.Password.fill(pwd)
        await this.login_button.click()
    }

    async invalidusername(invaliduname, pwd) {
        await this.username.fill(invaliduname)
        await this.Password.fill(pwd)
        await this.login_button.click()
    }

    async invalidpassword(uname, invalidpwd) {
        await this.username.fill(uname)
        await this.Password.fill(invalidpwd)
        await this.login_button.click()
    }

    async invalidunameandpwd(invaliduname, invalidpwd) {
        await this.username.fill(invaliduname)
        await this.Password.fill(invalidpwd)
        await this.login_button.click()
    }

    async clicklogout() {
        await this.logout_link.click()
    }
}