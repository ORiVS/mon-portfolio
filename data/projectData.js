const projects = [
    {
        slug: "manageU",
        title: "ManageU – API REST complète en Django",
        description: "API REST sécurisée en Django pour gérer utilisateurs, produits et commandes. Authentification JWT, permissions avancées, CRUD complet, pagination et documentation Swagger intégrée.",
        image: "/images/manageU.png",
        stack: ["Django", "DRF", "JWT", "Swagger", "PostgreSQL"],
        content: `ManageU est une API REST conçue pour gérer tout un écosystème de gestion produit. On y trouve :\n- Authentification complète JWT\n- Gestion des rôles et permissions\n- Opérations CRUD sur produits et utilisateurs\n- Documentation interactive via Swagger\n- Pagination & recherche avancée`,
        links: []
    },
    {
        slug: "ahikan",
        title: "AHIKAN – Marketplace mobile made in Bénin",
        description: "App Flutter + backend Django dédiée au marché béninois. Produits, vendeurs, paiement sécurisé et moteur de recherche avancé sur PostgreSQL.",
        image: "/images/AHIKAN.png",
        stack: ["Flutter", "Django", "PostgreSQL", "JWT", "Search Engine"],
        content: `AHIKAN est une marketplace mobile pour le Bénin. Elle inclut :\n- Inscription client/vendeur\n- Publication de produits\n- Système de panier et commande\n- Paiement sécurisé\n- Moteur de recherche intelligent avec PostgreSQL`,
        links: [
            {
                label: "Figma",
                url: "https://www.figma.com/design/GIjs7sBhTeHS7QWZHMGYvK/Maquette-Ahikan?node-id=0-1&p=f&t=m741dVk156mkFPF9-0"
            }
        ]
    },
    {
        slug: "lemaillot",
        title: "LeMaillotAPI – API e-commerce pour maillots de football",
        description: "API Django REST pour application mobile Flutter. Authentification JWT, panier, commandes, backoffice vendeur et paiement intégré.",
        image: "/images/HomePage.png",
        stack: ["Django", "Flutter", "JWT", "REST API"],
        content: `LeMaillotAPI permet de gérer un e-commerce complet :\n- Gestion des vendeurs et produits\n- Authentification JWT\n- Panier d'achat et commandes\n- Paiement intégré\n- Dashboard admin`,
        links: [
            { label: "GitHub API", url: "https://github.com/ORiVS/leMaillotApi" },
            { label: "GitHub Mobile", url: "https://github.com/ORiVS/lemaillot_mobile" },
            { label: "Figma", url: "https://www.figma.com/design/JnPqADsvjNdTXWuiWzDB4W/LEMAILLOT?node-id=0-1&p=f&t=Z2Zw593NpL8odeDZ-0" }
        ]
    },
    {
        slug: "esgix",
        title: "ESGIX – Mini Twitter mobile avec Flutter",
        description: "Application mobile Flutter connectée à une API tierce pour gérer comptes, posts, likes, commentaires, profils et recherche avec debouncing. Authentification sécurisée via API Key + JWT. Architecture BLoC",
        image: "/images/esgix.png",
        stack: ["Flutter", "API REST", "JWT", "Search", "UI/UX"],
        content: `ESGIX est une mini-app Twitter-like développée en Flutter :\n- Auth/API Key + JWT\n- Likes, commentaires, profils\n- Recherche avec debouncing\n- Intégration responsive avec UI moderne`,
        links: []
    },
    {
        slug: "groupe",
        title: "Groupe – Application Java Spring de gestion de parking",
        description: "Application collaborative (Spring Boot + PostgreSQL) de réservation de parking avec authentification, dashboard admin, logs de connexion, gestion d’agenda.",
        image: "/images/groupe.png",
        stack: ["Java", "Spring Boot", "PostgreSQL", "Admin Dashboard"],
        content: `Application Spring Boot pour entreprise :\n- Authentification\n- Réservation de parkng\n- Dashboard admin\n- Logs de connexion\n- Agenda dynamique`,
        links: [
            {
                label: "GitHub",
                url: "https://github.com/ClementCNR/Groupe"
            }
        ]
    },
    {
        slug: "refonte-node",
        title: "KY Platform – Refonte plateforme B2B avec Node.js",
        description: "Refonte technique d’une plateforme web avec Node.js, PostgreSQL et CI/CD AWS. Ajout de fonctionnalités, gestion d’équipe Agile, scripts Python pour automatiser la gestion de stock.",
        image: "/images/refonte.png",
        stack: ["Node.js", "PostgreSQL", "Python", "CI/CD", "Agile"],
        content: `Projet de refonte B2B avec :\n- Refonte complète du backend\n- CI/CD via Git et AWS\n- Scripts Python pour automatiser les stocks\n- Collaboration Agile avec équipe produit`,
        links: []
    },
    {
        slug: "snakewars",
        title: "SnakeWars – Reinforcement Learning Game",
        description: "Jeu Snake avec IA par apprentissge par renforcement, développé en Python et présenté lors d'un projet académique à l’ESGI.",
        image: "/images/snakewars.png",
        stack: ["Python", "Reinforcement Learning", "PyGame", "AI"],
        content: `SnakeWars est un jeu intelligent :\n- Agent entraîné par renforcement\n- Visualisation des performances\n- Interface utilisateur simplifiée\n- Présenté comme démonstration IA académique`,
        links: [
            {
                label: "GitHub",
                url: "https://github.com/LucasParchap/SnakeWars"
            }
        ]
    }
];

export default projects;
