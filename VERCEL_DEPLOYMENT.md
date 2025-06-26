# Guide de Déploiement Vercel

## Configuration optimisée

Les fichiers suivants ont été créés pour le déploiement Vercel :

- `vercel.json` : Configuration serverless optimisée
- `.vercelignore` : Exclusion des fichiers inutiles
- `api/index.ts` : Point d'entrée serverless unifié

## Architecture serverless

**Structure mise à jour pour Vercel :**
- Toutes les routes gérées par `api/index.ts`
- API et frontend servis par la même fonction
- Configuration serverless native

## Étapes de déploiement

1. **Compte Vercel** sur [vercel.com](https://vercel.com)
2. **Import GitHub** - Connectez votre repository
3. **Build automatique** - Configuration détectée automatiquement
4. **Déploiement** - Site accessible immédiatement

## Résolution des erreurs communes

**Si erreur 404 :**
- Vérifiez que `npm run build` fonctionne localement
- Assurez-vous que `dist/` contient `index.html`

**Si erreur de fonction :**
- Les API routes sont dans `/api/*`
- Timeout configuré à 30 secondes

## Post-déploiement

- URL principale : `https://votre-projet.vercel.app`
- Monitoring dans dashboard Vercel
- Logs de fonction disponibles