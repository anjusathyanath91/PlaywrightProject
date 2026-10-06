import { expect } from "@playwright/test"

export class CartPage {
    constructor(page) {
        this.page = page
        this.cart = page.locator("#cartur")
        this.placeorder_button = page.getByText("Place Order", { exact: true })
        this.order_modal = page.locator("#orderModal")
    }

    async clickcart() {
        await this.cart.click()
    }

    async clickplaceorder() {
        await this.placeorder_button.click()
        await expect(this.order_modal).toBeVisible()
    }
}