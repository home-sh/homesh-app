# Bienvenue sur le projet HomeSH !

Tout d'abord, merci de vous intéresser à ce projet !

HomeSH est un projet ayant pour but de démocratiser l'utilisation des objets connectés chez les particuliers. Pour cela nous proposons en premier lieu une application mobile de gestion domotique.

Car nous avons remarqué qu’il était étouffant pour l’utilisateur de devoir utiliser une appli dédiée pour chaque objet connecté. Par exemple l’application Philips pour les ampoules, l’application Nest pour le thermostat ou l’application Tp-link pour les prises connectées. 

Il y a donc un besoin de centraliser sur une même interface l’ensemble des objets de la maison pour interagir plus facilement avec ceux-ci. 

Lorsque le projet sera un peu plus abouti, nous in

Nous répondons de plus à un manque d’éthique des acteurs déjà en place en proposant une plateforme open-source garantissant la sécurité des données personnelles, des objets et de l’usager. 


# Présentation du projet

HomeSH est un projet réalisé dans le cadre de nos études. Il s'agit d'un projet rassemblant plusieurs membres désirant d'apprendre et de monter en compétence. Il s'agit d'un projet de domotique impliquant une application mobile et web, et de l'utilisation de produits connectés.


## Les membres de l'équipe

Notre équipe eslement de 6 membres.  Tout d'abord, il y a Valentin GUIBERT, chef et coordinateur du projet. Il développe l'application et le site web avec les trois autres développeurs. Nous avons Elouan LAFRECHOUX, Marceau DAVID, Abdelhamid NEJI. Les trois sont des développeurs full-stack.
Nous avons aussi notre admin système qui s'occupe de la partie IOT et de la partie réseau du projet (Protocole réseau domotique, sécurité des données etc.). Enfin nous avons notre chargé de communication Jean-Baptiste Maréchal, qui s'occupe de toute la partie marketing et communication du projet.

Et bientôt vous !
Si vous êtes intérésé par ce projet, n'hésitez pas à contribuer au code !


## Switch to another file

All your files and folders are presented as a tree in the filente re oucan sh from one to another by clicking a file in the tree.

## Rename a file

You can rename the current file by clicking the file name uo  l re  te aatior by clicking the **Re uon inxplorer.

## Delete a file

You can delete the current file ie citeemove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MjI5NjA0ODksMTgzNzcxMDQ0OSw2OD
QyMzgzNDMsMjQyNjg5NDkyLC00NDY0MjUwNiwtNzY1MzYyNjQ3
LC0xOTk4MzQ5MjQ2LDE1NTM2MTAwNTgsLTMzMjQ1NTM2M119
-->