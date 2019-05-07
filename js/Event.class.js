class Event {
  constructor(element) {
      this._element = element;
  }

  attach(event, callback) {
      this._element.addEventListener(event, callback, false);
  }
}
