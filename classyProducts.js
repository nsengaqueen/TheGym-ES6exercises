class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `Product Name : ${this.name},Price:${this.price}`;
  }
  applyDiscount(discount) {
    const newprice = this.price - (this.price * discount) / 100;
    return newprice;
  }
}
class DigitalProduct extends Product {
  constructor(name, price, downloadLink) {
    super(name, price);
    this.downloadLink = downloadLink;
  }

  getDetails() {
    const productDetails = super.getDetails();

    return `${productDetails}, Download Link: ${this.downloadLink}`;
  }
}
const digit = new DigitalProduct("shirt", 19, "jjg");

console.log(digit.getDetails());
