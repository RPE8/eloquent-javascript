class Vector {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  plus(vector) {
    return new Vector(this.getX() + vector.getX(), this.getY() + vector.getY());
  }

  minus(vector) {
    return new Vector(this.getX() - vector.getX(), this.getY() - vector.getY());
  }

  get length() {
    return Math.sqrt(this.getX() ** 2 + this.getY() ** 2);
  }
}

module.exports = Vector;
