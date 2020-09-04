/* eslint-disable linebreak-style */

class ErrorRepository {
  constructor() {
    this.storage = new Map();
    this.storage.set(1, 'error #1');
    this.storage.set(2, 'error #2');
  }

  translate(code) {
    try {
      if (this.storage.has(code) === false) throw new Error();
      this.error = this.storage.get(code);
    } catch (e) {
      throw new Error('Unknown error');
    }
  }
}

export default ErrorRepository;
