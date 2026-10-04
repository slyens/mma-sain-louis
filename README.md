# MMA Saint-Louis — Site professionnel

## Ce que contient cette version
- Page d'accueil professionnelle responsive
- Présentation du club
- Programme d'entraînement
- Inscription membre
- Connexion
- Nom d'utilisateur, nom, email, téléphone et mot de passe
- Photo de profil depuis ordinateur/téléphone
- Certificat médical depuis ordinateur/téléphone
- Espace membre
- Affichage du profil et du dossier
- Navigation mobile
- Design MMA sombre avec accents rouges

## Lancer
Ouvre `index.html` dans un navigateur ou utilise Live Server dans VS Code.

## Important pour une vraie mise en ligne
Cette version utilise `localStorage` uniquement pour la démonstration. Elle ne doit PAS être utilisée pour stocker de vrais certificats médicaux ou de vrais mots de passe en production.

Pour la vraie application, connecte le projet à Supabase :
1. Supabase Auth pour les comptes.
2. Supabase Database pour les membres.
3. Supabase Storage avec des règles RLS pour les photos et certificats.
4. Hashage/gestion des mots de passe via Supabase Auth.
5. Espace administrateur séparé pour le club.
