abstract class FormaGeometrica(val simbolo: Char) {
  fun imprime() {
    println("Forma Geometrica ${simbolo} ${calculaArea()}")
  }

  abstract fun calculaArea(): Double
}

class Quadrado(val lado: Double)
    : FormaGeometrica('q') {
  override fun calculaArea(): Double {
    return lado * lado
  }
}

class Retangulo(val altura: Double, val largura: Double)
    : FormaGeometrica('q') {
  override fun calculaArea(): Double {
    return altura * largura
  }
}

class Circulo(val raio: Double)
    : FormaGeometrica('c') {
  override fun calculaArea(): Double {
    return Math.PI * raio * raio
  }
}

fun main() {
  val q = Quadrado(lado = 5.0)
  q.imprime()

  val r = Retangulo(altura = 4.0, largura = 3.0)
  r.imprime()

  val c = Circulo(raio = 1.0)
  c.imprime()
}
