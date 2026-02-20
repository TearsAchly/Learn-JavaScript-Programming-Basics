// Initial bot identity
let bot = "teacherBot";
const botLocation = "the universe";
const favoriteSubject = "Computer Science";

const botIntroduction = `My name is ${bot}.`;
const favoriteSubjectSentence = `My favorite subject is ${favoriteSubject}.`;

// Update bot nickname over time
bot = "professorBot";
const nicknameIntroduction = `My nickname is ${bot}.`;

bot = "awesomeTeacherBot";
const newNicknameGreeting = `I love my nickname, but I wish people would call me ${bot}.`;

// Final output
console.log(`
Hi there!
I am excited to talk to you.
Allow me to introduce myself.
${botIntroduction}
I live in ${botLocation}.
${nicknameIntroduction}
${newNicknameGreeting}
${favoriteSubjectSentence}
`);
