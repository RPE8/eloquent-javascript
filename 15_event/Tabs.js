console.log("test");
const tabPanel = document.querySelector("tab-panel");
const tabs = document.querySelectorAll("[data-tabname]");
const buttons = [];
tabs.forEach((elem) => {
  elem.style.display = "none";
  const button = document.createElement("button");
  buttons.push(button);
  const tabName = elem.getAttribute("data-tabname");
  button.textContent = tabName;
  tabPanel.prepend(button);
  button.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.style.display =
        tab.getAttribute("data-tabname") === tabName ? "block" : "none";

      buttons.forEach((button2) => {
        button2.style.color = button === button2 ? "green" : "initial";
      });
    });
  });
});
