const user_form = {
    login_input: {
        email: { type: "email", label: "Email", placeholder: "votre@email.com", required: true },
        password: { type: "password", label: "Mot de passe", placeholder: "********", required: true }
    },
    register_input: {
        username: { 
            type: "text", 
            label: "Nom d'utilisateur", 
            placeholder: "JeanDupont", 
            required: true },
        email: { 
            type: "email", 
            label: "Email", 
            placeholder: "votre@email.com", 
            required: true },
        password: { 
            type: "password", 
            label: "Mot de passe", 
            placeholder: "********", 
            required: true },
        image_profil: { 
            type: "url", 
            label: "Photo de profil (URL)", 
            placeholder: "https://...", 
            required: false }
    }
};

const book_form = {
    create_book: {
        titre: { 
            type: "text", 
            label: "Titre du livre", 
            placeholder: "Le Petit Prince", 
            required: true },
        auteur: { 
            type: "text", 
            label: "Auteur", 
            placeholder: "Antoine de Saint-Exupéry", 
            required: true },
        description: { 
            type: "textarea", 
            label: "Description", 
            placeholder: "Résumé du livre...", 
            required: true },
        annonce_image: { 
            type: "url", 
            label: "Image de l'annonce", 
            placeholder: "Lien de l'image", 
            required: false },
        nb_exemplaire: { 
            type: "number", 
            label: "Nombre d'exemplaires", 
            min: 1, 
            default: 1, 
            required: false }
    },
    update_book: {
        titre: { 
            type: "text", 
            label: "Titre du livre" },
        auteur: {
            type: "text", 
            label: "Auteur" },
        description: { 
            type: "textarea", 
            label: "Description" },
        annonce_image: { 
            type: "url", 
            label: "Image de l'annonce" },
        nb_exemplaire: { 
            type: "number", 
            label: "Nombre d'exemplaires", 
            min: 0 }
    }
};

const message_form = {
    content: { 
        type: "textarea", 
        label: "Message", 
        placeholder: "Écrivez votre message ici...", 
        required: true },
    // Les champs 'sender', 'discussion' et 'isRead' sont gérés par le back-end, pas par l'input utilisateur.
};