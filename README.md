# test-challenge
Apprendre à écrire des tests sur Node.js (et indirectement Javascript). Cet exercice est recommandé pour les développeurs possédant un niveau `intermediaire`.

# Pourquoi ?

- Très bénéfique pour approfondir ses compétences en Javascript.
- Apprendre à lire et comprendre un code (avec ou sans JSDoc).
- S'entrainer à l'écriture de tests sur Node.js (avec une ou plusieus libs).

# Introduction
Ce challenge (exercice) a pour objectif l'écriture de tests à partir d'un code que nous vous donnons. Réaliser plusieurs fichiers de tests du même nom (`01.js`, `02.js` etc..) dans le dossier racine **test**.

> Attention **il est interdit de modifier le code fournit**.

Vous êtes libre de choisir la librairie qui vous convient le mieux, néanmoins voici **des recommandations**:
- [Ava](https://github.com/avajs/ava)
- [Japa](https://github.com/thetutlage/japa)
- [Jest](https://jestjs.io/)

Pour le coverage (couverture des tests):
- [nyc](https://github.com/istanbuljs/nyc#readme) (istanbul)
- [NODE_COVERAGE](https://nodejs.org/dist/latest-v11.x/docs/api/cli.html#cli_node_v8_coverage_dir) avec [c8](https://github.com/bcoe/c8#readme)

# Comment savoir si le test est bon ?
La **règle d'or de cet exercice** est que si le code source est modifié et que votre test n'arrive pas à le détecter, c'est que **vous avez échoué**.

N'hésitez pas à me contacter si nécessaire !
