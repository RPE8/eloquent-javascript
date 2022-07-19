class Group {
  #group;
  constructor() {
    this.#group = Object.create(null);
  }

  getGroup() {
    return this.#group;
  }

  #getGroup() {
    return this.#group;
  }

  #setGroup(value) {
    this.#group = value;
  }

  add(value) {
    const group = this.#getGroup();

    if (this.has(value)) {
      return;
    }

    group[value] = true;
  }

  delete(value) {
    const group = this.#getGroup();

    if (!this.has(value)) {
      return;
    }

    delete group[value];
  }

  has(value) {
    const group = this.#getGroup();

    return value in group;
  }

  static from(iterable) {
    if (!iterable[Symbol.iterator]) {
      return undefined;
    }

    let newGroup = new Group();
    for (const value of iterable) {
      newGroup.add(value);
    }
    return newGroup;
  }
}

module.exports = Group;
