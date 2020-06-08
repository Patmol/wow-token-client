export default class Token {
  constructor(price, timestamp, region, differenceWithprevious) {
    this.price = price;
    this.timestamp = timestamp;
    this.region = region;
    this.differenceWithprevious = differenceWithprevious;
  }
}
