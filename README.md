# Para Rodar o Sistema:

## Para Instalar:
yarn install em:
/
/front
/back

## Para Executar:
na pasta Root(/) execute:
""" yarn run ignite"""

# Para usar o back end:

1- Baixe o Postgres versão 11:  
https://www.postgresql.org/download/

2- Deixe sua sua senha como: `admin`

3- Deixe na porta padrão: `5432`

3- Crie um database chamado: `organiza` 

4- Dê um `yarn add` para instalar todas as bibliotecas do node
 
5- Para terminar dê um `yarn prisma migrate dev` para fazer a migração do código para o banco

6- Agora dê um `yarn dev` e rode seu prjeto :D 

## Rotas do BackEnd
### v_0.8
/users
/session
/userDetails
/updateList
/createList

### v_1.0 (unreleased)
/users
/userDetails
/updateUser << new >>
/userStatus << new >>
/session
/updateList
/createList
/createKanban << new >>
/updateKanban << new >>
