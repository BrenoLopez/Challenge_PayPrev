FORMAT: 1A

HOST: https://backend-bossa-box.herokuapp.com

#  Teste Back-End PayPrev

## Sobre 

Api simples criada  utilizando node + express + mongodb, que se trata de um CRUD de usuários do sistema e criação de listas com usuarios do github.  

## Registro de usuários [POST /auth/register]

+ Request Registro de usuário
    + Headers
        Accept: application/json
        Content-Type: application/json

    + Attributes
        - name
        - email
        - password 
        - cpf 
        - type

+ Response 201 (application/json)
    + Attributes (Created)


## Login do usuário [POST /auth/login]

+ Request Registro de usuário
    + Headers
            Accept: application/json
            Content-Type: application/json
    + Attributes
        - email
        - password      

+ Response 200 (application/json)
    