#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (Number.isInteger(w) && w > 0 && Number.isInteger(h) && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    if (!this.width || !this.height) {
      return;
    }
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    const tmp = this.width;
    this.width = this.height;
    this.height = tmp;
    return this;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
    return this;
  }
}

module.exports = Rectangle;
