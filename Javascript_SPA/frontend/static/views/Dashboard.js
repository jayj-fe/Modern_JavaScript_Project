import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("DashBoard");
    }

    async getHtml() {
        return `
            <h1>Welcome</h1>
            <p>
                welcome my website
            </p>
        `
    }
}