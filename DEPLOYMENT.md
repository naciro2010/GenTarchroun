# 🚀 Guide de Déploiement BuilderMaroc

Ce guide vous accompagne dans le déploiement et la configuration complète de votre site BuilderMaroc.

## 📋 Table des Matières

1. [Configuration Google Analytics](#1-configuration-google-analytics)
2. [Vérification SEO](#2-vérification-seo)
3. [Configuration du Domaine](#3-configuration-du-domaine)
4. [Déploiement sur Hébergeur](#4-déploiement-sur-hébergeur)
5. [Tests Post-Déploiement](#5-tests-post-déploiement)
6. [Promotion et Partage](#6-promotion-et-partage)

---

## 1. 📊 Configuration Google Analytics

### Étape 1 : Créer un Compte Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com)
2. Cliquez sur "Commencer"
3. Créez un compte avec le nom **BuilderMaroc**
4. Créez une propriété :
   - Nom : **BuilderMaroc**
   - Fuseau horaire : **GMT+1 (Maroc)**
   - Devise : **Dirham marocain (MAD)**

### Étape 2 : Obtenir votre ID de Mesure

1. Dans Propriété > Flux de données
2. Sélectionnez "Web"
3. Entrez votre URL : `https://buildermaroc.ma`
4. Copiez votre **ID de mesure** (format : `G-XXXXXXXXXX`)

### Étape 3 : Configurer dans le Site

Ouvrez le fichier `assets/js/analytics.js` et remplacez :

```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // REMPLACER ICI
```

Par votre vrai ID :

```javascript
const GA_MEASUREMENT_ID = 'G-ABC123DEF456'; // Votre ID réel
```

### Étape 4 : Vérifier l'Installation

1. Ouvrez votre site dans un navigateur
2. Ouvrez les outils de développement (F12)
3. Allez dans l'onglet Console
4. Vous devriez voir : `Google Analytics initialized`
5. Dans Google Analytics, vérifiez "Temps réel" > "Vue d'ensemble" pour voir votre visite

---

## 2. 🔍 Vérification SEO

### Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console/)
2. Ajoutez votre propriété : `https://buildermaroc.ma`
3. Vérifiez la propriété (méthode HTML tag ou DNS)
4. Soumettez votre sitemap : `https://buildermaroc.ma/sitemap.xml`

### Bing Webmaster Tools

1. Allez sur [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Ajoutez votre site
3. Soumettez le sitemap : `https://buildermaroc.ma/sitemap.xml`

### Test des Rich Snippets

1. Allez sur [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Testez vos URLs :
   - `https://buildermaroc.ma/`
   - `https://buildermaroc.ma/pages/marche-btp-2025.html`
   - `https://buildermaroc.ma/pages/financement-construction.html`
   - etc.

### Test Open Graph

1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Testez chaque page pour vérifier les images et descriptions
3. Cliquez sur "Scrape Again" si nécessaire

### Test des Meta Tags

```bash
curl -I https://buildermaroc.ma/
```

Vérifiez que vous voyez :
- `Content-Type: text/html; charset=UTF-8`
- `X-Content-Type-Options: nosniff`

---

## 3. 🌐 Configuration du Domaine

### Option A : Utiliser GitHub Pages (Gratuit)

1. Dans les paramètres du repo GitHub :
   - Settings > Pages
   - Source : `claude/populate-site-content-...`
   - Custom domain : `buildermaroc.ma`

2. Configurez votre DNS :
   - **A Record** : Pointez vers les IP GitHub :
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME Record** : `www` → `naciro2010.github.io`

3. Créez un fichier `CNAME` à la racine :
   ```
   buildermaroc.ma
   ```

### Option B : Hébergement Traditionnel

#### Hébergeurs Recommandés (Maroc) :

1. **OVH Maroc**
   - Prix : ~50 DH/mois
   - Support local
   - Site : ovh.ma

2. **Namecheap**
   - Prix : ~$3/mois
   - SSL gratuit
   - Site : namecheap.com

3. **Hostinger**
   - Prix : ~20 DH/mois
   - Performant
   - Site : hostinger.com

#### Configuration SSL (HTTPS)

**Gratuit avec Let's Encrypt :**

```bash
# Si vous avez accès SSH
sudo certbot --nginx -d buildermaroc.ma -d www.buildermaroc.ma
```

Ou utilisez l'interface cPanel de votre hébergeur pour activer SSL gratuitement.

---

## 4. 📦 Déploiement sur Hébergeur

### Via FTP (FileZilla)

1. Téléchargez [FileZilla](https://filezilla-project.org/)
2. Connectez-vous avec vos identifiants FTP
3. Uploadez tous les fichiers du projet :
   ```
   index.html
   pages/
   assets/
   sitemap.xml
   robots.txt
   ```

### Via Git (si supporté)

```bash
# Sur le serveur
git clone https://github.com/naciro2010/GenTarchroun.git
cd GenTarchroun
git checkout claude/populate-site-content-011CUq8vAyi5GEJdkMqGF8Qk
```

### Fichiers .htaccess (Apache)

Créez un fichier `.htaccess` à la racine :

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirect www to non-www
RewriteCond %{HTTP_HOST} ^www\.buildermaroc\.ma [NC]
RewriteRule ^(.*)$ https://buildermaroc.ma/$1 [L,R=301]

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Custom error pages
ErrorDocument 404 /404.html
</apache>
```

---

## 5. ✅ Tests Post-Déploiement

### Checklist de Tests

- [ ] **Homepage** charge correctement
- [ ] **Toutes les pages** sont accessibles
- [ ] **Images Unsplash** s'affichent correctement
- [ ] **Navigation** fonctionne entre toutes les pages
- [ ] **Boutons de partage social** apparaissent (côté droit/bas)
- [ ] **Google Analytics** enregistre les visites (vérifier temps réel)
- [ ] **Responsive design** fonctionne sur mobile/tablette/desktop
- [ ] **SSL (HTTPS)** est actif (cadenas vert)
- [ ] **Sitemap** accessible : `https://buildermaroc.ma/sitemap.xml`
- [ ] **Robots.txt** accessible : `https://buildermaroc.ma/robots.txt`

### Tests de Performance

1. **PageSpeed Insights** : https://pagespeed.web.dev/
   - Testez chaque page
   - Objectif : Score > 90

2. **GTmetrix** : https://gtmetrix.com/
   - Testez la vitesse de chargement
   - Objectif : < 2 secondes

3. **Mobile-Friendly Test** : https://search.google.com/test/mobile-friendly
   - Vérifiez compatibilité mobile

### Tests des Fonctionnalités

**Simulateur de Mensualités (financement-construction.html) :**
- [ ] Entrez un montant : 1 000 000 MAD
- [ ] Sélectionnez durée : 20 ans
- [ ] Taux : 5%
- [ ] Cliquez "Calculer"
- [ ] Résultat attendu : ~6 599 MAD/mois

**Catalogue Matériaux (catalogue-materiaux.html) :**
- [ ] Changez de région : vérifiez que les prix s'actualisent
- [ ] Recherchez "ciment" : résultats filtrés apparaissent
- [ ] Triez par prix : ordre change correctement

---

## 6. 📢 Promotion et Partage

### Réseaux Sociaux

#### Créez des Posts pour :

**Facebook** :
```
🏗️ Découvrez BuilderMaroc, votre plateforme complète pour la construction au Maroc !

✅ 4 Guides Complets 2025
💰 Marché BTP : +3,9% de croissance
🏦 Financement : Taux à partir de 4,35%
🌿 Construction Écologique : maisons dès 140 000 DH
📜 Réglementation RTCM & RPS 2011

👉 https://buildermaroc.ma

#BuilderMaroc #ConstructionMaroc #BTPMaroc #Immobilier #Casablanca #Rabat #Marrakech
```

**LinkedIn** :
```
🚀 Lancement de BuilderMaroc - La plateforme de référence pour la construction au Maroc

Nous sommes ravis de vous présenter BuilderMaroc, une plateforme complète qui révolutionne la construction au Maroc avec :

📊 Statistiques BTP 2025 actualisées
💰 Guide financement complet (6 banques, taux 4,35-6%)
🌿 Solutions écologiques dès 140 000 DH
📜 Réglementation RTCM & RPS 2011 expliquée
🧱 Catalogue 150+ matériaux avec prix régionaux
👷 Annuaire 700+ professionnels certifiés

Données 100% actualisées novembre 2025 pour 6 régions marocaines.

🔗 https://buildermaroc.ma

#Construction #Maroc #BTP #Innovation #Immobilier #PropTech
```

**Twitter/X** :
```
🏗️ BuilderMaroc est en ligne !

La plateforme complète pour construire au Maroc 🇲🇦

✅ Guides 2025
💰 Financement 4,35-6%
🌿 Construction éco
📜 RTCM & RPS 2011
🧱 150+ matériaux
👷 700+ pros

👉 https://buildermaroc.ma

#BuilderMaroc #ConstructionMaroc
```

### Email Marketing

Créez une newsletter d'annonce et envoyez-la à :
- Architectes
- Bureaux d'études
- Entrepreneurs BTP
- Promoteurs immobiliers
- Associations de construction

### Partenariats

Contactez pour partenariats :
- **Ordre National des Architectes Maroc**
- **Fédération Nationale du BTP**
- **Écoles d'Architecture** (ENA Rabat, Fès, Marrakech)
- **Salons BTP** (Batimat Maroc)
- **Médias spécialisés** (Medias24, L'Économiste, Challenge)

---

## 📊 Suivi et Optimisation

### KPIs à Surveiller (Google Analytics)

1. **Nombre de visiteurs uniques** par jour/semaine/mois
2. **Taux de rebond** (objectif : < 40%)
3. **Durée moyenne session** (objectif : > 3 min)
4. **Pages vues par session** (objectif : > 3)
5. **Conversion** (formulaires remplis, clics sur CTA)

### Pages les Plus Importantes

Surveillez particulièrement les performances de :
1. Homepage (`/`)
2. Marché BTP 2025 (`/pages/marche-btp-2025.html`)
3. Financement (`/pages/financement-construction.html`)
4. Catalogue Matériaux (`/pages/catalogue-materiaux.html`)
5. Simulateur (`/pages/simulation.html`)

### A/B Testing (futur)

Testez différentes versions de :
- Titres de pages
- CTA (Call-to-Action)
- Images hero
- Formulaires

---

## 🆘 Support et Maintenance

### Mises à Jour Régulières

**Mensuelles :**
- Prix matériaux (catalogue-materiaux.html, materiaux-data.js)
- Taux de crédit (financement-construction.html)
- Statistiques BTP (marche-btp-2025.html)

**Trimestrielles :**
- Annuaire professionnels
- Réglementation (si changements)

**Annuelles :**
- Images hero
- Design refresh
- Nouvelles fonctionnalités

### Backup

Configurez des backups automatiques :
- **Hebdomadaires** : fichiers du site
- **Quotidiens** : base de données (si ajoutée plus tard)

---

## 📞 Contact

Pour toute question technique :
- **Email** : contact@buildermaroc.ma
- **GitHub Issues** : https://github.com/naciro2010/GenTarchroun/issues

---

**Dernière mise à jour** : 5 Novembre 2025
**Version** : 0.3.0 - Phase 3 Enrichissement Contenus

✅ **Votre site BuilderMaroc est prêt pour le lancement !**
