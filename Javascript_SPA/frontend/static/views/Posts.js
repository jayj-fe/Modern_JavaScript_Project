import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>
                Posts Page
            </h1>
            <ul>
                <li><a href="/posts/1" class="nav__link" data-link>Post 1번 보러가기👈</a></li>
                <li><a href="/posts/2" class="nav__link" data-link>Post 2번 보러가기👈</a></li>
                <li><a href="/posts/3" class="nav__link" data-link>Post 3번 보러가기👈</a></li>
            </ul>
        `
    }
}