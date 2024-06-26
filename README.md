<br/>
<p align="center">
    <a href="https://studentlink.fr" target="_blank">
        <img width="50%" src="https://github.com/StudentLink/.github/blob/main/profile/logo.png" alt="StudentLink logo">
    </a>
</p>
<br/>

# StudentLink - Mobile

## Sommaire

- [I. Présentation](#i-présentation)
- [II. Installation](#ii-installation)
  - [1. Prérequis](#1-Prérequis)
  - [2. Cloner le projet](#2-cloner-le-projet)
  - [3. Variable d'environnement](#3-variable-d-environnement)
  - [4. Installation du projet](#4-installation-du-projet)
  - [5. Lancement de l'application](#5-lancement-de-l-application)
- [III. Utilisation de l'application](#iii-utilisation-de-l-application)

## I. Présentation

Cette application est entièrement développée avec le framework React Native et Expo Go

## II. Installation

### 3. Prérequis

Pour l'installation du projet/application, vous aurez besoin de :

- Git 
- NodeJS 

### 2. Cloner le projet

Pour télécharger le projet, il vous suffit de cloner le dépôt et de vous rendre dans le dossier correspondant :

```bash
git clone git@github.com:StudentLink/studentlink-frontend-mobile.git
cd studentlink-app-mobile
```

### 3. Variables d'environnement

Pour le bon fonctionnement de l'application, il faut une variable d'environnement qu'il vous faudra mettre dans un fichier `.env` , pour cela, le fichier `.env.example` vous servira de guide.

### 4. Installation du projet

Une fois toutes les étapes précédentes effectuées, vous devez télécharger tous les paquets nécessaires au bon fonctionnement de l'application, pour cela, vous pouvez faire cette commande :

```bash
npm ci
```

### 5. Lancement de l'application

Une fois arrivé à cette étape, il vous reste plus que deux choses à faire. La première est de vous mettre sur la branche de la release, pour cela :

```bash
git checkout release/v1.0.0
```

La seconde est de lancer l'application, pour cela, rien de plus simple, il vous suffit de faire :

```bash
npm run start
```

## III. Utilisation de l'application

Une fois le serveur expo lancé, vous n'avez plus cas scanner le **QR code** affiché dans votre terminal pour enfin utiliser l'application.
