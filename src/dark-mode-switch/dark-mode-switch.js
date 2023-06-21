import { register } from "../tools/register";
import { defs } from "./defs";
import { styles } from "./styles";

class DarkModeSwitch extends HTMLElement {
  componentName = "dark-mode";

  constructor() {
    super();
    register(this.componentName, "svg", defs, ["css-cookbook-defs"]);
    register(this.componentName, "style", styles);
  }

  connectedCallback() {
    this.innerHTML = `<div class="switch off init">
        <svg viewBox="0 0 200 40" class="background">
          <use href="#bg" class="background-shades" />
          <g class="clouds">
            <use href="#stars" class="stars" />
            <use href="#cloud-outer" class="cloud-outer" />
            <use href="#cloud-inner" class="cloud-inner" />
          </g>
        </svg>
        <div class="handle">
          <svg viewBox="0 0 20 20" width="3em" height="3em" class="craters">
            <use href="#craters" />
          </svg>
        </div>
        <span class="shadow-container"></span>
      </div>`;

    this.onclick = () => {
      if (this.classList.contains("init")) {
        this.classList.remove("init");
      }
      if (this.classList.contains("on")) {
        this.classList.remove("on");
        this.classList.add("off");
        document.body.classList.remove("dark");
      } else {
        this.classList.remove("off");
        this.classList.add("on");
        document.body.classList.add("dark");
      }
    };
  }
}

customElements.define("dark-mode-switch", DarkModeSwitch);
