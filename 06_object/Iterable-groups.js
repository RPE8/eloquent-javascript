const Group = require("./Groups.js");

class IterableGroup extends Group {
  constructor() {
    super();
  }

  static from(iterable) {
    if (!iterable[Symbol.iterator]) {
      return undefined;
    }

    let newGroup = new IterableGroup();
    for (const value of iterable) {
      newGroup.add(value);
    }
    return newGroup;
  }

  [Symbol.iterator]() {
    let index = 0;
    let group = this.getGroup();
    const keys = Object.keys(group);
    const length = keys.length;

    return {
      next: () => {
        return index < length
          ? { value: keys[index++], done: false }
          : { done: true };
      },
    };
  }
}

module.exports = IterableGroup;
