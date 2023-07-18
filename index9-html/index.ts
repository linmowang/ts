// class 类

interface Options {
  el: string | HTMLElement;
}

interface VueCLs {
  options: Options;
  init(): void;
}

interface Vnode {
  tag: string;
  text?: string;
  children?: Vnode[];
}

// 虚拟dom
class Dom {
  createElement(el: string) {
    return document.createElement(el);
  }

  setText(el: HTMLElement, text: string) {
    el.textContent = text;
  }

  render(data: Vnode) {
    let root = this.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        let child = this.render(item);
        root.appendChild(child);
      });
    } else if (data.text) {
      this.setText(root, data.text);
    }

    return root;
  }
}

class Vue extends Dom implements VueCLs {
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
    this.init();
  }

  init(): void {
    let data: Vnode = {
      tag: "div",
      children: [
        {
          tag: "section",
          children: [
            {
              tag: "p",
              text: "二层子节点1",
            },
          ],
        },
        {
          tag: "section",
          text: "子节点2",
        },
        {
          tag: "section",
          children: [
            {
              text: "二层子节点3",
              tag: "p",
            },
          ],
        },
      ],
    };

    let app =
      typeof this.options.el === "string"
        ? document.querySelector(this.options.el)
        : this.options.el;
    app?.appendChild(this.render(data));
  }
}

new Vue({
  el: "#app",
});
