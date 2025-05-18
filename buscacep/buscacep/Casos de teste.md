Objetivo, certificar que a busca de cep funciona corretamente e atende aos requisitos;

1- O campo imput funcione corretamente e é exibido uma lupa de busca ao lado.

2- A requisição deve acontecer como esperado e deve retornar um json contendo os resultados.

3- Os dados retornados devem ser exibidos corretamente logo abaixo do campo.

4-  Deve aparecer uma mensagem de erro caso clique na lupa sem ter preenchido o campo.


Casos de teste

| Caso | Descrição                                         | Tipo   | Resultado Esperado                                                 |  |
| ---- | --------------------------------------------------- | ------ | ------------------------------------------------------------------ | - |
| 1    | preencher o campo de cep com cep válido            | UI/API | deve ser retornado o resultado da requisiçao logo abaixo do campo |  |
| 2    | não preencher o campo e clicar no botão de buscar | UI     | deve retornar um erro solicitando que insira um cep                |  |
| 3    | inserir um formato inválido no campo "abc"         | UI/APi | deve retornar um erro dizendo "ERRO na requisição!"              |  |
| 4    | inserir um cep inexistente "000000"                 | UI/API | deve retornar um erro dizendo "ERRO na requisição!"              |  |
