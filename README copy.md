<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# Ejecturar en desarrollo
1. Clonar el repositorio
2. Ejecturar:
```
yarn install
```
3. Instalar Nest CLI
```
npm i -g @nestjs/cli
```
4. Levantar base de datos
```
docker compose up -d
```
5. Reconstruir la base de datos con el seed
```
http://localhost:3000/api/v2/seed
```


## Stack
* MongoDB
* Nestjs
* Frankito[js]