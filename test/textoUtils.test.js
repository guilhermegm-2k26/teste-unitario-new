const TextoUtils = require("../src/textoUtils");

describe("TextoUtils", () => {
  let textoUtils;

  beforeEach(() => {
    textoUtils = new TextoUtils();
  });

  describe("inverter", () => {
    test("deve inverter uma string normal", () => {
      // Arrange
      const texto = "javascript";

      // Act
      const resultado = textoUtils.inverter(texto);

      // Assert
      expect(resultado).toBe("tpircsavaj");
    });

    test("deve retornar string vazia ao inverter string vazia", () => {
      // Arrange
      const texto = "";

      // Act
      const resultado = textoUtils.inverter(texto);

      // Assert
      expect(resultado).toBe("");
    });
  });

  describe("ehPalindromo", () => {
    test("deve retornar true para palíndromo ignorando espaços e caixa", () => {
      // Arrange
      const texto = "Arara";

      // Act
      const resultado = textoUtils.ehPalindromo(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar true para palíndromo com espaços e pontuação", () => {
      // Arrange
      const texto = "A sacada da casa";

      // Act
      const resultado = textoUtils.ehPalindromo(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar false para texto que não é palíndromo", () => {
      // Arrange
      const texto = "teste";

      // Act
      const resultado = textoUtils.ehPalindromo(texto);

      // Assert
      expect(resultado).toBe(false);
    });
  });

  describe("capitalizar", () => {
    test("deve deixar a primeira letra de cada palavra maiúscula", () => {
      // Arrange
      const texto = "bom dia";

      // Act
      const resultado = textoUtils.capitalizar(texto);

      // Assert
      expect(resultado).toBe("Bom Dia");
    });

    test("deve normalizar letras maiúsculas no meio das palavras", () => {
      // Arrange
      const texto = "JAVASCRIPT é DIVERTIDO";

      // Act
      const resultado = textoUtils.capitalizar(texto);

      // Assert
      expect(resultado).toBe("Javascript É Divertido");
    });
  });

  describe("contarOcorrencias", () => {
    test("deve contar corretamente as ocorrências de uma substring", () => {
      // Arrange
      const texto = "banana";
      const substring = "an";

      // Act
      const resultado = textoUtils.contarOcorrencias(texto, substring);

      // Assert
      expect(resultado).toBe(2);
    });

    test("deve retornar 0 quando a substring não é encontrada", () => {
      // Arrange
      const texto = "banana";
      const substring = "xyz";

      // Act
      const resultado = textoUtils.contarOcorrencias(texto, substring);

      // Assert
      expect(resultado).toBe(0);
    });

    test("deve retornar 0 quando a substring é vazia", () => {
      // Arrange
      const texto = "banana";
      const substring = "";

      // Act
      const resultado = textoUtils.contarOcorrencias(texto, substring);

      // Assert
      expect(resultado).toBe(0);
    });
  });

  describe("removerEspacosExtras", () => {
    test("deve remover espaços extras do início, fim e entre palavras", () => {
      // Arrange
      const texto = "   Olá    mundo   ";

      // Act
      const resultado = textoUtils.removerEspacosExtras(texto);

      // Assert
      expect(resultado).toBe("Olá mundo");
    });
  });

  describe("paraSlug", () => {
    test("deve converter texto com acentos e pontuação em slug", () => {
      // Arrange
      const texto = "Olá Mundo!";

      // Act
      const resultado = textoUtils.paraSlug(texto);

      // Assert
      expect(resultado).toBe("ola-mundo");
    });

    test("deve converter múltiplos espaços em um único hífen", () => {
      // Arrange
      const texto = "Título   do   Post";

      // Act
      const resultado = textoUtils.paraSlug(texto);

      // Assert
      expect(resultado).toBe("titulo-do-post");
    });
  });

  describe("truncar", () => {
    test("deve truncar o texto e adicionar reticências quando exceder o tamanho", () => {
      // Arrange
      const texto = "Isso é um texto longo";
      const tamanho = 5;

      // Act
      const resultado = textoUtils.truncar(texto, tamanho);

      // Assert
      expect(resultado).toBe("Isso ...");
    });

    test("deve retornar o texto original quando ele já é menor que o tamanho", () => {
      // Arrange
      const texto = "curto";
      const tamanho = 10;

      // Act
      const resultado = textoUtils.truncar(texto, tamanho);

      // Assert
      expect(resultado).toBe("curto");
    });

    test("deve lançar erro quando o tamanho for negativo", () => {
      // Arrange
      const texto = "qualquer texto";
      const tamanho = -1;

      // Act & Assert
      expect(() => textoUtils.truncar(texto, tamanho)).toThrow(
        "O tamanho não pode ser negativo",
      );
    });
  });

  describe("contarPalavras", () => {
    test("deve contar corretamente o número de palavras", () => {
      // Arrange
      const texto = "  Olá   mundo cruel  ";

      // Act
      const resultado = textoUtils.contarPalavras(texto);

      // Assert
      expect(resultado).toBe(3);
    });

    test("deve retornar 0 para uma string vazia ou só com espaços", () => {
      // Arrange
      const texto = "    ";

      // Act
      const resultado = textoUtils.contarPalavras(texto);

      // Assert
      expect(resultado).toBe(0);
    });
  });

  describe("somenteLetras", () => {
    test("deve retornar true para string contendo apenas letras", () => {
      // Arrange
      const texto = "TextoValido";

      // Act
      const resultado = textoUtils.somenteLetras(texto);

      // Assert
      expect(resultado).toBe(true);
    });

    test("deve retornar false para string contendo números ou símbolos", () => {
      // Arrange
      const texto = "Texto123";

      // Act
      const resultado = textoUtils.somenteLetras(texto);

      // Assert
      expect(resultado).toBe(false);
    });
  });

  describe("substituirTudo", () => {
    test("deve substituir todas as ocorrências de uma substring", () => {
      // Arrange
      const texto = "banana";
      const alvo = "a";
      const substituto = "o";

      // Act
      const resultado = textoUtils.substituirTudo(texto, alvo, substituto);

      // Assert
      expect(resultado).toBe("bonono");
    });

    test("deve lançar erro quando o alvo for vazio", () => {
      // Arrange
      const texto = "banana";
      const alvo = "";
      const substituto = "o";

      // Act & Assert
      expect(() => textoUtils.substituirTudo(texto, alvo, substituto)).toThrow(
        "O alvo não pode ser vazio",
      );
    });
  });
});