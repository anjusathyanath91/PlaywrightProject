import { expect } from "@playwright/test"

export class ProductPage {
    constructor(page) {
        this.page = page
        this.phones = page.getByText("Phones", { exact: true })
        this.monitors = page.getByText("Monitors", { exact: true })
        this.addtocart_button = page.getByText("Add to cart", { exact: true })
        this.dialog = null
    }

    // Scenario 1
    async selectproduct(productname) {
        await this.page.getByText(productname, { exact: true }).first().click()
    }

    // Scenario 2
    async selectphones() {
        await this.phones.click()
    }

    async selectmobileproduct(mobileproduct) {
        await this.page.getByText(mobileproduct, { exact: true }).first().click()
    }

    // Scenario 3
    async selectmonitors() {
        await this.monitors.click()
    }

    async selectmonitorproduct(monitorproduct) {
        const product = this.page.getByText(monitorproduct, { exact: true }).first()

        await expect(product).toBeVisible()
        await product.click()
    }

    
    async addtocart() {
        this.dialog = this.page.waitForEvent("dialog")
        await this.addtocart_button.click()
    }

    async clickok() {
        const dialog = await this.dialog
        await dialog.accept()
    }
}