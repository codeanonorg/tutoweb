# Tutoweb v2.0

## Avant-propos

Cette page a pour but d'expliquer simplement ce qui se cachera derrière la future version du site *Tutoweb*. Elle pourra aussi servir de feuille de route à la reconstruction du site grâce à l'ajout de deadlines très prochainement.

![Schéma de l'architecture](https://raw.githubusercontent.com/codeanonorg/tutoweb/master/.github/schema.png)

## Rappel des objectifs :
* Objectifs du nouveau site
  * Un code **actualisé**
  * Une plus grande **stabilité**
  * Une meilleure **fluidité**
  * Un code assez simple pour que la création de pages soit intuitive pour les nouveaux webmasters
  * Une bonne sécurité
  * Un design remis au goût du jour

*Source: Cahier des charges.*

## Le serveur (1)

Actuellement chez *1&1 Ionos*, le *Virtual Private Server* (VPS) possède les statistiques suivantes :

| Nom      | Valeur     |
|----------|------------|
| CPU      | 4 vCore    |
|  RAM     | 8 Go       |
| Stockage | SSD 160 Go |
| OS       | Debian 9   |

Au niveau *hardware* (materiel), les caractéristiques physiques actuelles sont amplement suffisantes, l'offre *Serveur Virtuel Cloud XL* n'a donc pas besoin d'être modifiée.

Niveau *software* (logiciel), Debian 9 sera mis à jour pour la version 10 actuelle.
Plesk quant à lui ne sera plus nécessaire, vous pourrez donc faire des économies en le retirant de votre forfait si celui-ci était en supplément.

## Base de données (2)

Actuellement sous *MySQL*, la base de données (BDD) sera passée sous **PostgreSQL** pour une raison de **performances**. Les tables et les champs obsolètes seront supprimés (exemple : news datant de 2016) pour une meilleure **fluidité**.

> Pour une comparaison de MySQL et PostgreSQL, voir [par ici](https://www.oracle.com/fr/database/postgresql-versus-mysql.html)

Sa gestion manuelle sera **simplifiée** par le gestionnaire de contenu (CMS) **Wagtail** qui remplacera l'actuel *PHPMyAdmin*. De même, les scripts Python actuellement implémentés pour facilité l'organisation de la BDD (ex: sélection des voeux) seront **révisés** et **optimisés**. D'autres comme l'algorithme de parrainage seront implémentés au site web de manière à ce que vous ayez une centralisation des fonctionnalités.

## Docker (3)

Le serveur utilisera le principe de **conteneurisation**. A l'aide du logiciel *open-source* **[Docker](https://hub.docker.com/)**, la BDD ainsi que le serveur web seront isolés dans des conteneurs comprenant des environnements d'exécutions **complets** (binaires accompagnés de leurs librairies et de leur fichiers de configuration). Docker permettra :
- Une plus grande **stabilité**, grâce à la virtualisation de l'application et de ses dépendances
- Une plus grande **portabilité**, qui facilitera d'éventuelles migrations chez de nouveaux hébergeurs
- Une augmentation des **performances**, dûe à la rapidité de déploiement des conteneurs
- Une meilleure **sécurité**, grâce à l'isolement que procure ces conteneurs.

> Pour aller [plus loin](https://www.supinfo.com/articles/single/104-qu-est-que-docker-pourquoi-est-il-different-machines-virtuelles)

## Django (4)

> *"Django makes it easier to build better Web apps more quickly and with less code."*

Il s'agira là du coeur de Tutoweb. Libre et open-source, le web-framework **[Django](https://www.djangoproject.com/)** est un logiciel permettant le développement de web services. Sa particularité réside dans son langage d'implémentation et d'utilisation, **Python**, qui lui offre en plus d'une utilisation **simple**, un mélange alliant **flexibilité**, **rapidité** et **sécurité**.
En effet comme les webmasters actuels connaissent Python et qu'il fait parti des langages les plus faciles à apprendre, le développement du site ainsi que sa maintenance n'en sera que plus facile pour vous.

> Pour comprendre le fonctionnement de Django, c'est [par là](https://openclassrooms.com/fr/courses/1871271-developpez-votre-site-web-avec-le-framework-django/1871426-le-fonctionnement-de-django)

## Wagtail (5)

Pour une meilleur **synergie** avec Django, Plesk sera remplacé par le CMS **[Wagtail](https://wagtail.io)**. 
Le passage de Plesk au nouveau gestionnaire de contenu ne devra pas vous poser de problèmes car les fonctionnalités principales sont sensiblement les mêmes.

## *Front-end*

Le front-end du site Tutoweb (sa partie visible) restera en **html**/**CSS**.

La structure globale du site restera à priori la même, de même pour la charte graphique :

![palette de couleurs](https://raw.githubusercontent.com/codeanonorg/tutoweb/master/.github/couleurs.png)

L'étudiant en PACES, conservera donc **les mêmes repères**.

## Documentation

C'était l'une de nos garanties, le code sera documenté pour que la passation du code entre les différents webmasters se fassent dans les **meilleures conditions**

A tout moment du développement, les webmasters peuvent nous poser leurs questions par mail à l'adresse contact'at'codeanon.org ou sur notre serveur Discord.

# Déploiement de l'environnement de production
On supposera que l'on part d'une installation fraîche d'un système linux *Debian-based* et que nous travaillons depuis un utilisateur non root.
## Avant-propos
Wagtail est assez complet pour gérer la partie client et la partie serveur, cependant, la séparation des deux a été choisi pour principalement deux raisons :

  - Plus de **sécurité**. En effet seules les parties nécessaires de l'API seront importées par le client, diminuant le risque de vulnérabilités (notamment par injection) 
  - Plus de **performance**, grâce au développement de *librairies d'interfaces* sur mesure côté client.
  Ainsi, il n'y aura pas de manipulation de code html directement, car les librairie d'interfaces feront le lien entre le code html et css (ce dernier étant travaillé avec *Bulma*)

## Prérequis
### Côté Serveur
  1. **Installation de Python3.8 :**
  Il s'agit du principal langage de programmation qui sera utilisé.
  ```sh
  sudo apt-get update && sudo apt-get install python3.8
  ```
  > Note : Il se peut que l'installation de python3.8 ne soit pas aussi simple sous Debian 10, auquel cas, référez-vous à ce tutoriel : https://linuxize.com/post/how-to-install-python-3-8-on-debian-10/
  2. **Installation de Pip :**
  Pip nous permettra d'installer des paquets à destination de Python.
  ```sh
  sudo apt-get install python3-pip
  ```
  3. **Mise à jour de Pip :**
  La balise `user` permet d'appliquer la mise à jour au seul utilisateur pour ne pas casser le système.
  ```sh
  python3.8 -m pip install pip --upgrade --user
  ```
  4. **Installation de Pipenv :**
  Pipenv a pour but de créer un environnement virtuel rassemblant toutes les dépendances nécessaires au bon développement du serveur.
  ```sh
  python3 -m pip install pipenv --user
  ```
  5. **Installation de Git**
  Git nous permettra de disposer des dernières versions du projet, ainsi que de les partager aux autres collaborateurs.
  ```sh
  sudo apt-get install git
  ```

### Côté Client
 1. **Installation du gestionnaire de paquets pour NodeJs :**
 (l'équivalent de pip pour python)
 ```sh
 sudo apt-get install npm
 ```
 2. **Installation du gestionnaire de paquet Yarn :**
 Bien plus performant que le gestionnaire `npm`
 ```sh
 sudo npm install -g yarn
 ```
## Déploiement
 1. On crée et se place dans le répertoire `~/Git/`
 ```sh
 cd && mkdir Git && cd Git
 ```
 2. On clone le *repo github* associé au projet (on effectue une copie du projet dans notre dossier Git depuis la plateforme distante github)
 ```sh
 git clone https://github.com/codeanonorg/tutoweb.git
 ```
## Configuration 
### Côté Serveur
 1. On se place dans le dossier `server` du repo github cloné
 ```sh
 cd ~/Git/tutoweb/server
 ```
 2. Installons les dépendances
 ```
 python3 -m pipenv install --dev
 ```
 Voici la sortie obtenue dans le terminal :
 ```sh
 ~/Git/tutoweb/server$ pipenv install --dev
 Creating a virtualenv for this project…
 Pipfile: /home/adam/Git/tutoweb/server/Pipfile
 Using /usr/bin/python3.8 (3.8.0) to create virtualenv…
 ⠏ Creating virtual environment...
 ✔ Successfully created virtual environment! 
 Virtualenv location: /home/adam/.local/share/virtualenvs/server-UkxjYTC3
 Installing dependencies from Pipfile.lock (503f07)…
   🐍   ▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉ 22/22 — 00:01:38
 To activate this project's virtualenv, run pipenv shell.
 Alternatively, run a command inside the virtualenv with pipenv run.
 ```
### Côté Client
Le principe est le même que pour le serveur, les commandes sont justes différentes :
```sh
cd ~/Git/tutoweb/client
# Pour les dépendances
yarn install
```
## Initialisation
### Côté Serveur
> **Attention :** cette configuration devra être reproduite à chaque fois que le repo github sera cloné. Cependant, vous ne devriez pas avoir besoin de cloner le repo en plus de la manipulation effectuée précédemment

 1. Génération de la base de données (BDD) **locale**:
 ```sh
 python3 -m pipenv run ./manage.py migrate (génère bdd)
 ```
 2. Création de l'administrateur de la BDD
 > L'email ne sera pas vérifié, on peut donc rentrer n'importe quoi
  ```sh
 python3 -m pipenv run ./manage.py createsuperuser --email <email_random> --username <username>
 ```
### Côté Client
Il n'y a rien a faire !
## Lancement
Pour lancer le serveur, il suffit de taper depuis le dossier `server` la commande  `pipenv run ./manage.py runserver`. Cela exécutera le serveur ainsi que ses dépendances dans un shell temporaire lié au process. 
> Si l'on souhaite avoir un shell permanent virtualisant l'environnment de production, on pourra alors taper `pipenv shell` et exécuter les commandes dans le shell ainsi obtenu.
>
L'interface wagtail sera accessible depuis un navigateur (présent sur la machine hébergeant le serveur) à l'adresse http://localhost:8000/

L'interface d'administration se trouve quant à elle à l'adresse http://localhost:8000/admin. Une fois que les identifiants administrateurs précédemment crées sont rentrés, le panel administrateur s'affiche.

> C'est ici que sera géré le contenu du site web (pages, photos, news, base de données). 
> En réalité pendant la phase de développement, peu de code sera écrit concernant cette partie. Le gros du travail concernera la partie *client*.

> Le format des pages web telles qu'affichées se trouvnera dans le dossier `server/route`

Pour démarrer le client, il suffit de taper depuis le dossier `client` la commande `yarn dev`.

Pour accéder à l'interface, il suffira alors d'ouvrir le navigateur sur la machine hébergeant le client, puis de se rendre à l'adresse http://localhost:8080/
