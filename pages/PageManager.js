import { LoginPage } from "./LoginPage.js"
import { SignUpPage } from "./SignUpPage.js"
import { ProductPage } from "./ProductPage.js"
import { CartPage } from "./CartPage.js"
import { CheckoutPage } from "./CheckoutPage.js"

export class PageManager {

    constructor(page) {
        this.loginpage = new LoginPage(page)
        this.signuppage = new SignUpPage(page)
        this.productpage = new ProductPage(page)
        this.cartpage = new CartPage(page)
        this.checkoutpage = new CheckoutPage(page)
    }

    getloginpage() {
        return this.loginpage
    }

    getsignuppage() {
        return this.signuppage
    }

    getproductpage() {
        return this.productpage
    }

    getcartpage() {
        return this.cartpage
    }

    getcheckoutpage() {
        return this.checkoutpage
    }
}