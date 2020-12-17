function generateRandomNumber (num) {
    return Math.floor(Math.random() * num);
}

const musicalsReferences = {
    composer: ['Beethoven', 'Bach', 'Mozart', 'Haendel'],
    musicalForm: ['form sonata', 'symphony', 'opera', 'instrument concert'],
    tempo: ['allegro', 'moderato', 'adagio', 'andante'],
    asc: [':-)', ':)', ':]', '=)']
}

let personalMusicality = [];

for(let prop in musicalsReferences) {
    let option = generateRandomNumber(musicalsReferences[prop].length)
    switch(prop) {
        case 'composer':
            personalMusicality.push(`Your favorite composer is: "${musicalsReferences[prop][option]}"`);
            break;
        case 'musicalForm':
            personalMusicality.push(`Your favorite style is: "${musicalsReferences[prop][option]}"`); 
            break;
        case 'tempo':
            personalMusicality.push(`Your favorite tempo is: "${musicalsReferences[prop][option]}"`);
            break;
        case 'asc':
            personalMusicality.push(`${musicalsReferences[prop][option]}`);
            break;
        default:
            personalMusicality.push('There is not enough info.');
    }
}

function formatMusicality (musicality) {
    const formatted = personalMusicality.join('\n');
    console.log(formatted)
}

formatMusicality(personalMusicality);