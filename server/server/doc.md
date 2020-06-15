> La doc est écrite à la volée pendant la construction du site, elle sera bien entendu mise au propre.

## Getting Started With Your First Home Page in Wagtail CMS
https://www.youtube.com/watch?v=SEPBP0DuoWg&list=PLMQHMcNi6ocsS8Bfnuy_IDgJ4bHRRrvub&index=2 --> lien invidious ?

1. Ouvrir le projet tutoweb (ici via pycharm)
   Il y a plusieurs fichiers et dossiers qui seront expliqués plus tard, aujourd'hui on va travailler dans le dossier home
2. En ouvrant le fichier `home/models.py`, on observe le code python qui dessine la page d'accueil du site
   > On sera bien entendu connecté à l'interface admin en parallèle

3. Pour régler les problèmes de bdd au rafraichissement : `python3 -m pipenv run ./manage.py makemigrations`
Puis `python3 -m pipenv run ./manage.py migrate`