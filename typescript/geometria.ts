class FormaGeometrica {
  #simbolo: string;

  constructor(simbolo: string) {
    this.#simbolo = simbolo;
  }

  imprime() {
    console.log("Forma Geometrica %s %f",
      this.#simbolo, this.calculaArea());
  }

  calculaArea(): number {
    throw new Error("Você deveria implementar esse método");
  }
}

class Quadrado extends FormaGeometrica {
  #lado: number;

  constructor(lado: number) {
    super('q');
    this.#lado = lado;
  }

  calculaArea(): number {
    return this.#lado * this.#lado;
  }
}

class Retangulo extends FormaGeometrica {
  #altura: number;
  #largura: number;

  constructor(altura: number, largura: number) {
    super('r');
    this.#altura = altura;
    this.#largura = largura;
  }

  calculaArea(): number {
    return this.#altura * this.#largura;
  }
}

class Circulo extends FormaGeometrica {
  #raio: number;
string
  constructor(raio: number) {
    super('c');
    this.#raio = raio;
  }

  calculaArea(): number {
    return Math.PI * this.#raio * this.#raio;
  }
}

const q = new Quadrado(5.0)
q.imprime()

const r = new Retangulo(4.0, 3.0)
r.imprime()

const c = new Circulo(1.0)
c.imprime()
