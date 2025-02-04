class ComNameDiv extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const div = document.createElement("div");
        div.part = "comNameDiv";

        const img = document.createElement("img");
        img.src = this.getAttribute("src");
        img.part = "comNameImg";

        const span = document.createElement("span");
        span.part = "comNameSpan";
        span.textContent = "Daisy azyl";

        div.appendChild(img);
        div.appendChild(span);
        this.shadowRoot.appendChild(div);
    }
}

customElements.define("com-name-div", ComNameDiv);