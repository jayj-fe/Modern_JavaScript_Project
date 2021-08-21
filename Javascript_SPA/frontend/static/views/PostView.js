import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Post View");
    }

    async getHtml() {
        // console.log(this.params.id);

        return `
            <a href="/posts" class="nav__link" data-link>목록으로 돌아가기</a>
            <h1>Post - ${this.params.id}</h1>
            <p>
                Posts Page
            </p>
        `
    }
}