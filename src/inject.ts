function waitForElement(selector: string, timeout = 10000): Promise<Element> {
    return new Promise((resolve, reject) => {
      const interval = 300;
      const maxAttempts = timeout / interval;
      let attempts = 0;
  
      const check = () => {
        const element = document.querySelector(selector);
        if (element) {
          resolve(element);
        } else {
          attempts++;
          if (attempts > maxAttempts) {
            reject(`Element ${selector} not found.`);
          } else {
            setTimeout(check, interval);
          }
        }
      };
  
      check();
    });
  }
  
  function injectButton(target: Element): void {
    if (document.getElementById("my-ts-custom-btn")) return;
  
    const button = document.createElement("button");
    button.id = "my-ts-custom-btn";
    button.innerText = "⭐ TS Action";
    button.style.padding = "10px 15px";
    button.style.marginLeft = "8px";
    button.style.backgroundColor = "#f2a900";
    button.style.color = "#000";
    button.style.border = "none";
    button.style.borderRadius = "8px";
    button.style.cursor = "pointer";
    button.style.fontWeight = "bold";
  
    button.addEventListener("click", () => {
      alert("Hello from TypeScript!");
    });
  
    target.appendChild(button);
  }
  
  waitForElement("#top-level-buttons-computed")
    .then((target) => injectButton(target))
    .catch(console.error);
  