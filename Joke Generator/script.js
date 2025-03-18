const jokes = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don’t eggs tell jokes? They might crack up!",
    "I told my computer I needed a break, and it froze.",
    "Why don’t oysters donate to charity? Because they are shellfish!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why was the math book sad? Because it had too many problems.",
    "I told my dog to play dead, and now he’s just lying there. Guess he’s a professional.",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Did you hear about the cheese factory explosion? There was nothing left but de-brie.",
    "I used to play piano by ear, but now I use my hands.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I couldn’t figure out how to put my seatbelt on, but then it clicked.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What do you call fake spaghetti? An impasta!",
    "I have a joke about a broken pencil, but it’s pointless.",
    "Why don’t graveyards have 4G? Because they’re full of dead spots.",
    "I asked the librarian if the library had any books on suicide. She said they’re all checked out.",
    "I used to play with a lot of Legos... but now I’m just building my regrets.",
    "I’m on a whiskey diet... I’ve lost three days already.",
    "My therapist says I have a fear of commitment... I can’t remember if I’m supposed to see him next week.",
    "I once bought a book on how to commit suicide. But then I thought: ‘What if it’s a waste of time?’",
    "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did.",
    "The man who survived both mustard gas and pepper spray is a seasoned veteran now."
];

        function generateJoke() {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            document.getElementById('joke').textContent = randomJoke;
        }

        console.log(jokes);