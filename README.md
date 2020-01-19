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
