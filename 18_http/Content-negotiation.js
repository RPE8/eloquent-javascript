console.log("test");

async function loadData() {
  return await fetch("https://eloquentjavascript.net/author", {
    headers: {
      Accept: "application/rainbows+unicorns",
    },
  })
    .then((resp) => {
      console.log({ resp });
      return resp.text();
    })
    .then((parsed) => {
      console.log({ parsed });
      return parsed;
    })
    .catch((e) => {
      console.log({ e });
      return e;
    });
}

async function handleRequest() {
  let response = await loadData();
  console.log(response);
}

handleRequest();
