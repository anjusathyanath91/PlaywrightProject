export class LoginPage {
    constructor(page) {
        this.page = page
        this.username = page.locator("#loginusername")
        this.password = page.locator("#loginpassword")
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

    async enterusername(uname) {
        await this.username.fill(uname)
    }

    async enterpassword(pwd) {
        await this.password.fill(pwd)
    }

    async clicklogin() {
        await this.login_button.click()
    }

    async clicklogout() {
        await this.logout_link.click()
    }
}