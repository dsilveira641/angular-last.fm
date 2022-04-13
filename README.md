# Explicação do teste
## api.service.ts
1 - Foi criado um service para fazer o uso da api, chamando-a em uma função genérica "search()" 
para pesquisa de albúm ou música

2 - Foi criada a função "getHistory()" e coloca os objetos retornados em um array no localStorage.

3 - Dentro da função "saveHistory()" para incrementar o array do localStorage com a nova pesquisa

4 - Na função "deleteHistory()" ela recebe o índice que o usuário irá deletar e em seguida faz a atualização
do localStorage

## app.component.ts

1 - A função "buscar()" irá mandar os parâmetros para a função saveHistory e search e sempre que o usuário fizer uma pesquisa a tela ficará na aba de resultado 

2 - Em seguida será acessado a função "search()" com os valores desse objeto sendo passados como parâmetros A variável "this.result" 
irá receber o response acessando o results e em seguida qual tipo de dado o usuário irá acessar. Sendo albummatches para áluns ou trackmathes para track's.

3 - A função "delete()" irá mandar o índice que será deletado para a função "deleteHistory()" no service.

## app.component.html 

1 - O usuário poderá selecionar qual pesquisa (Álbum ou Música) irá fazer através do select 

2 - Na table-row (tr) foi feito um *ngFor que irá percorrer a resposta da api e na tag "img" passará através de 
um data binding o valor da variável que pecorreu a api e irá acessar a image no índice 0

3 - No último *ngFor ele irá percorrer o array do localStorage que está sendo acessado como 
service.getHistory() e com a variável "let i" que irá marcar seu índice caso o usuário queira deletar algum
dado do histórico.
 
 # Processo de instalação do teste
 1 - Foi instalado o Angular, através do comando  
npm install -g @angular/cli

2 - Foi instalado o bootstrap e jQuery e seus respectivos 
diretórios foram colocados no angular.json
