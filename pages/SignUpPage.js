export class SignUpPage {

    constructor(page) {
        this.page = page
        this.username = page.locator("#sign-username")
        this.password = page.locator("#sign-password")
        this.signup_link = page.locator("#signin2")
        this.signup_button = page.locator('button[onclick="register()"]')
        this.close_button = page.locator('#signInModal').getByText('Close', { exact: true })
    }

    async gotourl() {
        await this.page.goto("/")
    }

    async clicksignuplink() {
        await this.signup_link.click()
    }

    async enterusername(username) {
        await this.username.fill(username)
    }

    async enterpassword(password) {
        await this.password.fill(password)
    }

    async clicksignup() {
        await this.signup_button.click()
    }

    async clickclose() {
        await this.close_button.click()
    }
}