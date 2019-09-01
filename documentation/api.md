FORMAT: 1A

HOST: https://backend-bossa-box.herokuapp.com

#  Teste Back-End PayPrev

## Sobre 

Api simples criada  utilizando node + express + mongodb, que se trata de um CRUD de usuários do sistema juntamente com autenticação dos mesmos e um simples controle de usuários por rota e CRUD de listas com usuários do GitHub .  

## Registro de usuários [POST /auth/register]

+ Request Registro de usuário
    + Headers
        Accept: application/json
        Content-Type: application/json
        
    + Attributes
        - name: Hello world 
        - email: api@api.com
        - password: 123456 
        - cpf: 12345678978 
        - type: comum

+ Response 201 (application/json)
    + Attributes
        - user
            - _id: fqwef1qw5e6f18eqf4qwef
            - name: Hello world 
            - email: api@api.com
            - password: 123456 
            - cpf: 12345678978 
            - type: comum
            - token: fiuqhwefqefqwef5q465f4qw65e4f1qewf

## Login do usuário [POST /auth/login]

+ Request Registro de usuário
    + Headers
            Accept: application/json
            Content-Type: application/json
    + Attributes
        - email: api@api.com
        - password: 123456      

+ Response 200 (application/json)
     + Attributes
        - user
            - _id: fqwef1qw5e6f18eqf4qwef
            - name: Hello world 
            - email: api@api.com
            - password: 123456 
            - cpf: 12345678978 
            - type: comum
            - token: fiuqhwefqefqwef5q465f4qw65e4f1qewf

## Pesquisa por usuário do github [GET /search-users]

+ Request Pesquisa usuário do GitHub
    + Headers
            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmFkMmM2YjE2NTA0MGZhY2MxZjMzNyIsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjcyODE5ODYsImV4cCI6MTU2NzM2ODM
    + Query            
        user: brenoLopez             

+ Response 200 (application/json)
    + Attributes
        - _id: fqwef1qw5e6f18eqf4qwef
        - name: Hello world 
        - email: api@api.com
        - password: 123456 
        - cpf: 12345678978 
        - type: comum

## Adiciona novo usuário do GitHub [POST /user]

+ Request Adiciona novo usuário do GitHub
    + Headers
            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmFkMmM2YjE2NTA0MGZhY2MxZjMzNyIsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjcyODE5ODYsImV4cCI6MTU2NzM2ODM             

    + Attributes
        - name: Breno Lopes de Souza,
        - location: foiajfioja,
	    - login: BrenoLopez,
        - bio : Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
    	- html_url: https://github.com/BrenoLopez

+ Response 200 (application/json)
    + Attributes
        - _id: fqwef1qw5e6f18eqf4qwef
        - name: Breno Lopes de Souza,
        - location: foiajfioja,
	    - login: BrenoLopez,
        - bio : Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
    	- html_url: https://github.com/BrenoLopez

## Listagem de todos os usuários do GiHub adicionados BD [GET /gitusers]

+ Request Listagem de todos os usuários do GiHub adicionados BD
    + Headers
            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmFkMmM2YjE2NTA0MGZhY2MxZjMzNyIsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjcyODE5ODYsImV4cCI6MTU2NzM2ODM             


+ Response 200 (application/json)
    + Attributes
        - _id: fqwef1qw5e6f18eqf4qwef
        - name: Breno Lopes de Souza,
        - location: foiajfioja,
	    - login: BrenoLopez,
        - bio : Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
    	- html_url: https://github.com/BrenoLopez


## Adiciona lista de usúarios do GitHub [POST /add-list]

+ Request Adiciona lista de usúarios do GitHub 
    + Headers
            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmFkMmM2YjE2NTA0MGZhY2MxZjMzNyIsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjcyODE5ODYsImV4cCI6MTU2NzM2ODM             

    + Attributes
        - name : list name ,
	    - list: [
		    - name: Breno Lopes de Souza,
            - location": foiajfioja,
            - login: BrenoLopez,
            - bio: Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
		    - html_url: https://github.com/BrenoLopez]
		- tags: [Fullstack, Backend, Frontend]
	

+ Response 200 (application/json)
    + Attributes
        - _id: fqwef1qw5e6f18eqf4qwef
        - name : list name ,
	    - list: [
		    - name: Breno Lopes de Souza,
            - location": foiajfioja,
            - login: BrenoLopez,
            - bio: Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
		    - html_url: https://github.com/BrenoLopez]
		- tags: [Fullstack, Backend ,Frontend]
        - user: 5d6ad2ceb165040facc1f
	

## Remove lista de usúarios do GitHub [DELETE /add-list/:id]

+ Request Remove lista de usúarios do GitHub 
    + Headers
            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmFkMmM2YjE2NTA0MGZhY2MxZjMzNyIsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjcyODE5ODYsImV4cCI6MTU2NzM2ODM             


+ Response 200 (application/json)
  

## Edita lista de usúarios do GitHub [PUT /edit-list/:id]

+ Request Edita lista de usúarios do GitHub 
    + Headers
            Accept: application/json
            Content-Type: application/json
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNmFkMmM2YjE2NTA0MGZhY2MxZjMzNyIsInVzZXJSb2xlIjoiYWRtaW4iLCJpYXQiOjE1NjcyODE5ODYsImV4cCI6MTU2NzM2ODM             
    
    + Attributes
        - name : list name ,
	    - list: [
		    - name: Breno Lopes de Souza,
            - location": foiajfioja,
            - login: BrenoLopez,
            - bio: Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
		    - html_url: https://github.com/BrenoLopez]
		- tags: [Fullstack, Backend, Frontend]
	

+ Response 200 (application/json)
    + Attributes
        - _id: fqwef1qw5e6f18eqf4qwef
        - name : list name ,
	    - list: [
		    - name: Breno Lopes de Souza,
            - location": foiajfioja,
            - login: BrenoLopez,
            - bio: Graduando do curso de Sistemas de Informação, a procura de conhecimento e novos desafios.,
		    - html_url: https://github.com/BrenoLopez]
		- tags: [Fullstack, Backend ,Frontend]
        - user: 5d6ad2ceb165040facc1f