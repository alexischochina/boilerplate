# Install

### Builder

```bash
vite
npm install vite
```

### Initialiser projet

```bash
npm install
```

### Lancer le projet

```bash
npm run dev
```

### Créer un composant

```bash
npm run create:tmpl chemin/du/composant
```

### Fonctions
```php
// Afficher un tableau
trace($array);

// Récupérer un composant
include_template(COMPONENT_PATH . 'chemin/du/composant', [
    'arg' => 'value'
]);
```