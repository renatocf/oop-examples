abstract class FormaGeometrica(val simbolo: Char) {
  def imprime(): Unit = {
    println(s"Forma Geometrica $simbolo ${calculaArea()}")
  }

  def calculaArea(): Double
}

class Quadrado(val lado: Double) extends FormaGeometrica('q') {
  override def calculaArea(): Double = lado * lado
}

class Retangulo(val altura: Double, val largura: Double)
    extends FormaGeometrica('r') {
  override def calculaArea(): Double = altura * largura
}

class Circulo(val raio: Double) extends FormaGeometrica('c') {
  override def calculaArea(): Double = Math.PI * raio * raio
}

object Geometria {
  def main(args: Array[String]): Unit = {
    val q = new Quadrado(5.0)
    q.imprime()

    val r = new Retangulo(4.0, 3.0)
    r.imprime()

    val c = new Circulo(1.0)
    c.imprime()
  }
}
