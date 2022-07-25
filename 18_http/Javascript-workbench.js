console.log("test");

const button = document.getElementById("button");
const textarea = document.getElementById("code");
const output = document.getElementById("output");
button.addEventListener("click", (e) => {
  const code = textarea.value;
  let outputText;
  try {
    const newFn = new Function("", code);
    outputText = newFn();
  } catch (e) {
    outputText = e;
  } finally {
    output.textContent = outputText;
  }
});
