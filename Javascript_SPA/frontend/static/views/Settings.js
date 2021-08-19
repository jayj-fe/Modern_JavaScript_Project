import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings Page</h1>
            <p>
                Settings Page
            </p>
        `
    }
}