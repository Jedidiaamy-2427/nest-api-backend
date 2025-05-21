<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

This project is a codebase for a backend API developed with [Nest](https://github.com/nestjs/nest), designed to be compatible with any type of application (management, messaging, etc.).  
It natively integrates a JWT authentication system, follows a clear MVC architecture, and adheres to Clean Code principles.  
The project structure is optimized, extensible, and easily customizable to fit your specific needs.



## Project setup

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd api-backend-server
   ```
2. **Installer les dépendances de base**
   ```bash
   npm install
   ```
3. **Lancer le script de setup interactif**
   > Ce script va vous demander les informations nécessaires (nom du projet, type de base de données, ports, etc.), générer le fichier `.env` et installer les dépendances.
   ```bash
   npx ts-node scripts/setup.ts
   ```
   Si `ts-node` n'est pas installé, lancez d'abord :
   ```bash
   npm install -D ts-node
   ```
4. **Démarrer le projet**
   ```bash
   npm run start:dev
   ```
   
## Docker Setup

Pour faciliter l'installation et l'exécution de l'application avec Docker, suivez les étapes ci-dessous :  
1. Assurez-vous d'avoir Docker et Docker Compose installés sur votre machine.  
2. Créez un fichier `.env` à la racine du projet avec les variables d'environnement nécessaires (le script `setup.ts` peut vous aider).  
3. Construisez et démarrez les conteneurs Docker :
```bash
# Build application 
$ docker-compose up --build
```

L'application sera accessible sur le port défini dans votre fichier `.env` (par défaut 3001).

## API Documentation

La documentation de l'API est générée automatiquement et disponible via Swagger. Pour y accéder, démarrez l'application et ouvrez votre navigateur à l'adresse suivante :

```bash
http://localhost:3001/api-docs
```
Cette documentation vous permettra de visualiser et de tester les différentes routes de l'API.

## More info

- LinkedIn - [Jedidia Amy](www.linkedin.com/in/jedidia-amy-andrianjafiarifetra-5a3494201)