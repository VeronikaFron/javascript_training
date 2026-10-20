export class BikeTemplate {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  logBikeProperties() {
    console.log(`Typ kola: ${this.type}`);
    console.log(`Barva kola: ${this.color}`);
  }
}
