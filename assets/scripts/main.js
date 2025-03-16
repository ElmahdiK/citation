
const citations = [
    { citation: "Le plus grand risque est de ne prendre aucun risque.", auteur: "Mark Zuckerberg" },
    { citation: "Le succès, c'est tomber sept fois et se relever huit.", auteur: "Proverbe japonais" },
    { citation: "Hâte-toi lentement.", auteur: "Proverbe latin" },
    { citation: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", auteur: "Albert Einstein" },
    { citation: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.", auteur: "Eleanor Roosevelt" },
    { citation: "Rien n'est impossible, l'impossible prend juste plus de temps.", auteur: "Dan Brown" },
    { citation: "Faites aujourd'hui ce que les autres ne veulent pas, faites demain ce que les autres ne peuvent pas.", auteur: "Jerry Rice" },
    { citation: "Ce qui ne nous tue pas nous rend plus fort.", auteur: "Friedrich Nietzsche" },
    { citation: "Le seul moyen de faire du bon travail est d'aimer ce que vous faites.", auteur: "Steve Jobs" },
    { citation: "N'attends pas que les événements arrivent comme tu le souhaites. Décide de vouloir ce qui arrive et tu seras heureux.", auteur: "Épictète" },
    { citation: "Si vous pouvez le rêver, vous pouvez le faire.", auteur: "Walt Disney" },
    { citation: "La vie commence là où commence ta zone de confort.", auteur: "Neale Donald Walsch" },
    { citation: "L'important n'est pas ce que l'on réussit, mais ce que l'on apprend.", auteur: "Lao Tseu" },
    { citation: "Les seuls vrais échecs sont ceux que l'on n'essaie même pas.", auteur: "Jean-Paul Sartre" },
    { citation: "L'échec est simplement l'opportunité de recommencer, cette fois de manière plus intelligente.", auteur: "Henry Ford" },
    { citation: "La vie est un défi, relève-le !", auteur: "Mère Teresa" },
    { citation: "L'homme qui déplace une montagne commence par déplacer de petites pierres.", auteur: "Confucius" },
    { citation: "Ne rêve pas ta vie, vis tes rêves.", auteur: "Anonyme" },
    { citation: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.", auteur: "Winston Churchill" },
    { citation: "Ce n'est pas la montagne que nous conquérons, mais nous-mêmes.", auteur: "Sir Edmund Hillary" },
    { citation: "Rien n'est impossible, la vérité c'est qu'on n'essaie pas vraiment.", auteur: "Kanye West" },
    { citation: "Quand on veut, on peut.", auteur: "Anonyme" },
    { citation: "L'action est la clé fondamentale de tout succès.", auteur: "Pablo Picasso" },
    { citation: "Il faut viser la lune, car même en cas d'échec, on atterrit dans les étoiles.", auteur: "Oscar Wilde" },
    { citation: "Le plus grand honneur n'est pas de ne jamais tomber, mais de se relever à chaque chute.", auteur: "Confucius" },
    { citation: "Le voyage de mille lieues commence par un pas.", auteur: "Lao Tseu" },
    { citation: "L’échec est simplement le condiment qui donne sa saveur au succès.", auteur: "Truman Capote" },
    { citation: "Le meilleur moyen de prédire l'avenir, c'est de le créer.", auteur: "Abraham Lincoln" },
    { citation: "Ce n'est pas la force, mais la persévérance, qui fait les grandes œuvres.", auteur: "Samuel Johnson" },
    { citation: "Le courage n’est pas l’absence de peur, mais la capacité de vaincre ce qui nous fait peur.", auteur: "Nelson Mandela" },
    { citation: "La vie est un défi, relève-le !", auteur: "Mère Teresa" },
    { citation: "Il ne faut pas attendre d’avoir terminé pour commencer à réussir.", auteur: "Pierre Dac" },
    { citation: "Le seul véritable échec est celui dont on ne se relève pas.", auteur: "Jean-Paul Sartre" },
    { citation: "L’homme qui a tout perdu n’a pas perdu son esprit.", auteur: "Proverbe chinois" },
    { citation: "Celui qui déplace une montagne commence par enlever les petites pierres.", auteur: "Confucius" },
    { citation: "On ne peut pas traverser la mer simplement en regardant l’eau.", auteur: "Rabindranath Tagore" },
    { citation: "Le seul moment où l’on échoue, c’est lorsque l’on cesse d’essayer.", auteur: "Anonyme" },
    { citation: "Le bonheur n’est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.", auteur: "Dalaï Lama" },
    { citation: "Tout ce que l'esprit de l'homme peut concevoir et croire, il peut l’accomplir.", auteur: "Napoleon Hill" },
    { citation: "Il n'y a pas de raccourci vers n'importe où qui en vaille la peine.", auteur: "Beverly Sills" },
    { citation: "Il ne faut jamais douter de soi-même, il suffit d'y croire.", auteur: "Anonyme" },
    { citation: "Rien n'est permanent, sauf le changement.", auteur: "Héraclite" },
    { citation: "Rien ne sert de courir, il faut partir à point.", auteur: "Jean de La Fontaine" },
    { citation: "Le secret de la réussite est de faire les choses simples avec excellence.", auteur: "Anonyme" },
    { citation: "Les grandes choses ne sont jamais faites par une seule personne, elles sont faites par une équipe de personnes.", auteur: "Steve Jobs" },
    { citation: "Le meilleur moyen de réussir est de s'entourer de gens plus intelligents que soi.", auteur: "Bill Gates" },
    { citation: "Les gens qui réussissent sont ceux qui font plus que ce qu'ils ne sont payés pour faire.", auteur: "Zig Ziglar" },
    { citation: "L'art de la réussite consiste à savoir s'entourer des meilleurs.", auteur: "John F. Kennedy" },
    { citation: "On n'est jamais aussi malheureux qu'on l'imagine.", auteur: "Françoise Sagan" }
    // Ajoute ici les 365 citations
];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function afficherCitationDuJour() {
    const date = new Date();
    const jourDeLAnnee = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    const citationDuJour = citations[jourDeLAnnee % citations.length];

    let dateString = date.toLocaleDateString("fr-FR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    dateString = dateString.split(' ').map((word, index) => index === 0 ? capitalizeFirstLetter(word) : word).join(' ');

    document.getElementById("date").textContent = dateString;
    document.getElementById("citation").textContent = citationDuJour.citation;
    document.getElementById("auteur").textContent = "- " + citationDuJour.auteur;
}

afficherCitationDuJour();