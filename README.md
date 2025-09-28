# DarSimul Maroc

Prototype statique d'une plateforme de simulation de devis de construction adaptée au marché marocain. Le site fournit une base documentaire (plan d'action, démarches administratives, barème structurel) et un formulaire interactif d'estimation du gros œuvre.

## Structure du projet

- `index.html` : page d'accueil avec accès rapide aux ressources clés et au simulateur.
- `pages/` : contenus détaillés (plan d'action, procédures administratives, barème structurel, simulateur).
- `assets/css/` : feuilles de styles partagées.
- `assets/js/` : scripts côté client, notamment le calculateur de devis.

## Prévisualisation locale

1. Cloner ou télécharger le dépôt.
2. Ouvrir `index.html` dans un navigateur moderne (Chrome, Edge, Firefox, Safari).
3. Naviguer vers la page « Simulation » pour tester le calculateur.

Aucun serveur n'est requis : tout fonctionne côté client.

## Publication sur GitHub Pages

1. Créez un dépôt GitHub et poussez-y ces fichiers (`git init`, `git add .`, `git commit`, `git branch -M main`, `git remote add origin`, `git push origin main`).
2. Dans GitHub, ouvrez **Settings → Pages**.
3. Dans la section **Build and deployment**, choisissez **Deploy from a branch**.
4. Sélectionnez la branche `main` et le dossier `/ (root)` puis sauvegardez.
5. Patientez quelques minutes que GitHub génère le site. L'URL publique est affichée dans la section Pages (format `https://<votre-utilisateur>.github.io/<nom-du-dépôt>/`).

Les chemins relatifs déjà présents permettent un fonctionnement direct sur GitHub Pages. Pensez à personnaliser les textes (contact, coefficients) avant la mise en ligne publique.

## Personnalisation

- Ajustez les coefficients du simulateur dans `assets/js/simulator.js` en fonction de vos derniers barèmes.
- Mettez à jour les images, logos et couleurs dans `assets/css/style.css`.
- Remplacez l'adresse e-mail de contact par celle de votre entreprise.

## Licence

Aucune licence spécifique n'est définie. Ajoutez un fichier `LICENSE` si vous souhaitez partager le projet sous un cadre open source particulier.
