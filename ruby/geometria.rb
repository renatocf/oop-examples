class FormaGeometrica
  def initialize(simbolo)
    @simbolo = simbolo
  end

  def imprime
    puts "Forma geometrica #{@simbolo} #{self.calculaArea}"
  end

  def calculaArea
    raise NotImplementedError, "Você deveria implementar esse método"
  end
end

class Quadrado < FormaGeometrica
  def initialize(lado)
    super(:q)
    @lado = lado
  end

  def calculaArea
    @lado * @lado
  end
end

class Retangulo < FormaGeometrica
  def initialize(altura, largura)
    super(:r)
    @altura = altura
    @largura = largura
  end

  def calculaArea
    @altura * @largura
  end
end

class Circulo < FormaGeometrica
  def initialize(raio)
    super(:c)
    @raio = raio
  end

  def calculaArea
    Math::PI * @raio * @raio
  end
end

q = Quadrado.new(5.0)
q.imprime

r = Retangulo.new(4.0, 3.0)
r.imprime

c = Circulo.new(1.0)
c.imprime
