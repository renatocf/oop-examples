class FormaGeometrica {
  constructor(simbolo) {
    this.simbolo = simbolo;
  }

  imprime() {
    console.log("Forma Geometrica %s %f",
      this.simbolo, this.calculaArea());
  }

  calculaArea() {
    throw new Error("Você deveria implementar esse método");
  }
}

class Quadrado extends FormaGeometrica {
  constructor(lado) {
    super('q');
    this.lado = lado;
  }

  calculaArea() {
    return this.lado * this.lado;
  }
}

class Retangulo extends FormaGeometrica {
  constructor(altura, largura) {
    super('r');
    this.altura = altura;
    this.largura = largura;
  }

  calculaArea() {
    return this.altura * this.largura;
  }
}

class Circulo extends FormaGeometrica {
  constructor(raio) {
    super('c');
    this.raio = raio;
  }

  calculaArea() {
    return Math.PI * this.raio * this.raio;
  }
}

const q = new Quadrado(5.0)
q.imprime()

const r = new Retangulo(4.0, 3.0)
r.imprime()

const c = new Circulo(1.0)
c.imprime()
