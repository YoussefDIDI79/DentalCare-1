# Guide de Déploiement Vercel

## Configuration automatique

Les fichiers suivants ont été créés pour faciliter le déploiement sur Vercel :

- `vercel.json` : Configuration de déploiement
- `.vercelignore` : Fichiers à ignorer lors du déploiement

## Étapes de déploiement

1. **Créer un compte Vercel** sur [vercel.com](https://vercel.com)

2. **Connecter votre repository GitHub**
   - Connectez votre compte GitHub à Vercel
   - Importez votre projet depuis GitHub

3. **Configuration automatique**
   - Vercel détectera automatiquement la configuration
   - Le build et le déploiement se feront automatiquement

4. **Variables d'environnement (si nécessaire)**
   - Dans les paramètres du projet Vercel
   - Ajoutez les variables d'environnement requises

## Structure du déploiement

- **Frontend** : Compilé avec Vite et servi statiquement
- **Backend** : API routes servies via Vercel Functions
- **Base de données** : En mémoire (pour production, considérez PostgreSQL)

## URLs après déploiement

- Site principal : `https://votre-projet.vercel.app`
- API endpoints : `https://votre-projet.vercel.app/api/*`

## Notes importantes

- Le déploiement est automatique à chaque push sur la branche principale
- Les logs sont disponibles dans le dashboard Vercel
- Pour une base de données persistante, configurez PostgreSQL avec Vercel