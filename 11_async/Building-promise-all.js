function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let length = promises.length;
    let responses = Array(length);
    promises.forEach((promise, i) => {
      promise
        .then((resp) => {
          responses[i] = resp;
          length--;
          if (length === 0) {
            resolve(responses);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    if (length === 0) {
      resolve(responses);
    }
  });
}

module.exports = Promise_all;
