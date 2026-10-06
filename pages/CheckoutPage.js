import { expect } from "@playwright/test"

export class CheckoutPage {

    constructor(page) {
        this.page = page

        this.name = page.locator("#name")
        this.country = page.locator("#country")
        this.city = page.locator("#city")
        this.creditcard = page.locator("#card")
        this.month = page.locator("#month")
        this.year = page.locator("#year")

        this.order_modal = page.locator("#orderModal")
        this.purchase_button = this.order_modal.getByText("Purchase", { exact: true })

        this.thanksmessage = page.locator(".sweet-alert h2")
        this.ok_button = page.getByText("OK", { exact: true })
    }

    async enterdetails(customer) {

        await this.name.fill(customer.name)
        await this.country.fill(customer.country)
        await this.city.fill(customer.city)
        await this.creditcard.fill(customer.creditcard)
        await this.month.fill(customer.month)
        await this.year.fill(customer.year)

    }

    async clickpurchase() {
        await this.purchase_button.click()
    }

    async verifythanksmessage() {

        await expect(this.thanksmessage).toHaveText("Thank you for your purchase!")

        const message = await this.thanksmessage.textContent()
        console.log(message)
    }

    async clickok() {
        await this.ok_button.click()
    }
}