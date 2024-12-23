export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface Question {
  question: string;
  difficulty: string;
  correctAnswer: string | boolean;
  incorrectAnswers: string[] | boolean[];
  category: string;
}

export const questions: Question[] = [
  {
    question: "What is the capital city of Belarus?",
    difficulty: "Easy",
    correctAnswer: "Minsk",
    incorrectAnswers: ["Brest", "Grodno", "Gomel"],
    category: "Belarus"
  },
  {
    question: "What are the official languages of Belarus?",
    difficulty: "Medium",
    correctAnswer: "Belarusian and Russian",
    incorrectAnswers: ["Only Belarusian", "Only Russian", "Belarusian and Ukrainian"],
    category: "Geography"
  },
  {
    question: "Which famous artist from Belarus painted 'The Birthday'?",
    difficulty: "Medium",
    correctAnswer: "Marc Chagall",
    incorrectAnswers: ["Chaim Soutine", "Leon Bakst", "Ossip Zadkine"],
    category: "Art"
  },
  {
    question: "What is the national flower of Belarus?",
    difficulty: "Medium",
    correctAnswer: "Cornflower",
    incorrectAnswers: ["Rose", "Lily", "Tulip"],
    category: "Culture"
  },
  {
    question: "Which UNESCO World Heritage site is located in Belarus?",
    difficulty: "Medium",
    correctAnswer: "Mir Castle Complex",
    incorrectAnswers: ["Peterhof Palace", "Catherine Palace", "Winter Palace"],
    category: "Geography"
  },
  {
    question: "What is the traditional Belarusian folk dance?",
    difficulty: "Medium",
    correctAnswer: "Lyavonikha",
    incorrectAnswers: ["Hopak", "Kalinka", "Trepak"],
    category: "Culture"
  },
  {
    question: "What is a traditional Belarusian dish made from grated potatoes?",
    difficulty: "Medium",
    correctAnswer: "Draniki",
    incorrectAnswers: ["Borscht", "Pelmeni", "Vareniki"],
    category: "Culture"
  },
  {
    question: "Which famous Belarusian author wrote 'War to the Death'?",
    difficulty: "Hard",
    correctAnswer: "Vasil Bykaŭ",
    incorrectAnswers: ["Yakub Kolas", "Yanka Kupala", "Ivan Melezh"],
    category: "Culture"
  },
  {
    question: "What is the largest lake in Belarus?",
    difficulty: "Medium",
    correctAnswer: "Lake Narach",
    incorrectAnswers: ["Lake Svityaz", "Lake Chervonoye", "Lake Lukoml"],
    category: "Geography"
  },
  {
    question: "What is the national animal of Belarus?",
    difficulty: "Medium",
    correctAnswer: "European Bison",
    incorrectAnswers: ["Brown Bear", "Wolf", "Lynx"],
    category: "Geography"
  },
  {
    question: "Which traditional Belarusian festival celebrates the summer solstice?",
    difficulty: "Medium",
    correctAnswer: "Kupalle",
    incorrectAnswers: ["Maslenitsa", "Kaliady", "Dazhynki"],
    category: "Culture"
  },
  {
    question: "What is the name of the largest forest in Belarus?",
    difficulty: "Medium",
    correctAnswer: "Belovezhskaya Pushcha",
    incorrectAnswers: ["Naliboki Forest", "Pripyat Forest", "Braslav Forest"],
    category: "Geography"
  },
  {
    question: "What is the traditional Belarusian musical instrument similar to a flute?",
    difficulty: "Medium",
    correctAnswer: "Dudka",
    incorrectAnswers: ["Balalaika", "Domra", "Gusli"],
    category: "Culture"
  },
  {
    question: "Which Belarusian city was a major center of Jewish culture before WWII?",
    difficulty: "Hard",
    correctAnswer: "Vitebsk",
    incorrectAnswers: ["Brest", "Grodno", "Minsk"],
    category: "History"
  },
  {
    question: "What colors are on the Belarusian flag?",
    difficulty: "Easy",
    correctAnswer: "Red, Green and White",
    incorrectAnswers: ["Blue and Yellow", "Red and White only", "Green and White only"],
    category: "Geography"
  },
  {
    question: "Which river is the longest in Belarus?",
    difficulty: "Medium",
    correctAnswer: "Dnieper",
    incorrectAnswers: ["Pripyat", "Western Dvina", "Nemunas"],
    category: "Geography"
  },
  {
    question: "What is the traditional Belarusian wedding bread called?",
    difficulty: "Hard",
    correctAnswer: "Karavai",
    incorrectAnswers: ["Babka", "Draniki", "Khleb"],
    category: "Culture"
  },
  {
    question: "Which famous Belarusian poet wrote 'The Banner'?",
    difficulty: "Hard",
    correctAnswer: "Yanka Kupala",
    incorrectAnswers: ["Yakub Kolas", "Maksim Bahdanovich", "Vasil Bykaŭ"],
    category: "Culture"
  },
  {
    question: "What is the name of the main opera house in Minsk?",
    difficulty: "Medium",
    correctAnswer: "National Academic Bolshoi Opera and Ballet Theatre",
    incorrectAnswers: ["Minsk Opera House", "Belarus State Opera", "Royal Opera House Minsk"],
    category: "Culture"
  },
  {
    question: "What is the traditional Belarusian drink made from fermented bread?",
    difficulty: "Medium",
    correctAnswer: "Kvass",
    incorrectAnswers: ["Kompot", "Medovukha", "Sbiten"],
    category: "Culture"
  },
  {
    question: "Which Belarusian city was a major center of the Radziwill family?",
    difficulty: "Hard",
    correctAnswer: "Nesvizh",
    incorrectAnswers: ["Minsk", "Grodno", "Brest"],
    category: "History"
  },
  {
    question: "What is the name of the largest technology park in Belarus?",
    difficulty: "Medium",
    correctAnswer: "Hi-Tech Park",
    incorrectAnswers: ["Belarus Tech Valley", "Minsk Innovation Center", "Digital City Belarus"],
    category: "Geography"
  },
  {
    question: "What is the traditional Belarusian embroidery pattern called?",
    difficulty: "Hard",
    correctAnswer: "Vyshyvanka",
    incorrectAnswers: ["Rushnik", "Pysanka", "Malyavanka"],
    category: "Culture"
  },
  {
    question: "Which medieval trade route passed through Belarus?",
    difficulty: "Medium",
    correctAnswer: "Route from the Varangians to the Greeks",
    incorrectAnswers: ["Silk Road", "Amber Road", "Salt Road"],
    category: "History"
  },
  {
    question: "What is the average lifespan of a domestic cat?",
    difficulty: "Easy",
    correctAnswer: "15 years",
    incorrectAnswers: ["10 years", "20 years", "25 years"],
    category: "Cats"
    },
    {
    question: "Which breed of cat is known for its lack of fur?",
    difficulty: "Medium",
    correctAnswer: "Sphynx",
    incorrectAnswers: ["Persian", "Maine Coon", "Siamese"],
    category: "Cats"
    },
    {
    question: "What is the largest breed of domestic cat?",
    difficulty: "Medium",
    correctAnswer: "Maine Coon",
    incorrectAnswers: ["Siamese", "Persian", "Bengal"],
    category: "Cats"
    },
    {
    question: "What is a group of cats called?",
    difficulty: "Easy",
    correctAnswer: "Clowder",
    incorrectAnswers: ["Pack", "Flock", "Herd"],
    category: "Cats"
    },
    {
    question: "What is the name of Sabrina Carpenter's debut album?",
    difficulty: "Medium",
    correctAnswer: "Eyes Wide Open",
    incorrectAnswers: ["Evolution", "Singular: Act I", "Singular: Act II"],
    category: "Sabrina Carpenter"
    },
    {
    question: "In which TV show did Sabrina Carpenter play the role of Maya Hart?",
    difficulty: "Easy",
    correctAnswer: "Girl Meets World",
    incorrectAnswers: ["The Goodwin Games", "Orange Is the New Black", "The Fosters"],
    category: "Sabrina Carpenter"
    },
    {
    question: "What is the name of Sabrina Carpenter's character in the movie 'Tall Girl'?",
    difficulty: "Medium",
    correctAnswer: "Harper Kreyman",
    incorrectAnswers: ["Jodi Kreyman", "Kimmy Stitcher", "Liz"],
    category: "Sabrina Carpenter"
    },
    {
    question: "Which song by Sabrina Carpenter features the lyrics 'Can't blame a girl for trying'?",
    difficulty: "Easy",
    correctAnswer: "Can't Blame a Girl for Trying",
    incorrectAnswers: ["Thumbs", "Sue Me", "Almost Love"],
    category: "Sabrina Carpenter"
    },
    {
    question: "What is the name of the cat in the TV show 'Sabrina the Teenage Witch'?",
    difficulty: "Easy",
    correctAnswer: "Salem",
    incorrectAnswers: ["Felix", "Whiskers", "Shadow"],
    category: "Witches"
    },
    {
    question: "In which year was the first episode of 'Sabrina the Teenage Witch' aired?",
    difficulty: "Medium",
    correctAnswer: "1996",
    incorrectAnswers: ["1994", "1998", "2000"],
    category: "Witches"
    },
    {
    question: "What is the name of the school that Sabrina Spellman attends in 'Chilling Adventures of Sabrina'?",
    difficulty: "Medium",
    correctAnswer: "Academy of Unseen Arts",
    incorrectAnswers: ["Hogwarts", "Hex Hall", "Salem Academy"],
    category: "Witches"
    },
    {
    question: "Which actress played the role of Sabrina Spellman in the 1996 TV show 'Sabrina the Teenage Witch'?",
    difficulty: "Easy",
    correctAnswer: "Melissa Joan Hart",
    incorrectAnswers: ["Sarah Michelle Gellar", "Alyssa Milano", "Shannen Doherty"],
    category: "Witches"
    },
    {
    question: "What is the name of Sabrina Carpenter's 2018 single that became a hit?",
    difficulty: "Medium",
    correctAnswer: "Almost Love",
    incorrectAnswers: ["Sue Me", "Thumbs", "Why"],
    category: "Sabrina Carpenter"
    },
    {
    question: "Which breed of cat is known for its blue eyes and color-pointed coat?",
    difficulty: "Medium",
    correctAnswer: "Siamese",
    incorrectAnswers: ["Persian", "Maine Coon", "Bengal"],
    category: "Cats"
    },
    {
    question: "What is the name of Sabrina Carpenter's character in the Disney Channel Original Movie 'Adventures in Babysitting'?",
    difficulty: "Medium",
    correctAnswer: "Jenny Parker",
    incorrectAnswers: ["Lola Perez", "Emily Cooper", "Maddy Smith"],
    category: "Sabrina Carpenter"
    },
    {
    question: "Which famous witch is known for her green skin and pointy hat?",
    difficulty: "Easy",
    correctAnswer: "Wicked Witch of the West",
    incorrectAnswers: ["Glinda the Good Witch", "Sabrina Spellman", "Hermione Granger"],
    category: "Witches"
    },
    {
    question: "What is the name of the black cat in the movie 'Hocus Pocus'?",
    difficulty: "Medium",
    correctAnswer: "Binx",
    incorrectAnswers: ["Salem", "Midnight", "Shadow"],
    category: "Witches"
    },
    {
    question: "Which song by Sabrina Carpenter features the lyrics 'We're burning with the stars'?",
    difficulty: "Medium",
    correctAnswer: "On Purpose",
    incorrectAnswers: ["Thumbs", "Sue Me", "Almost Love"],
    category: "Sabrina Carpenter"
    },
    {
    question: "What is the name of the witch in the fairy tale 'Hansel and Gretel'?",
    difficulty: "Easy",
    correctAnswer: "The Wicked Witch",
    incorrectAnswers: ["The Evil Queen", "Maleficent", "Ursula"],
    category: "Witches"
    },
    {
    question: "Which breed of cat is known for its distinctive folded ears?",
    difficulty: "Medium",
    correctAnswer: "Scottish Fold",
    incorrectAnswers: ["Sphynx", "Maine Coon", "Siamese"],
    category: "Cats"
    },
    {
    question: "What is the name of Sabrina Carpenter's character in the Netflix movie 'Work It'?",
    difficulty: "Medium",
    correctAnswer: "Quinn Ackerman",
    incorrectAnswers: ["Jasmine Hale", "Brittany Foster", "Liza Koshy"],
    category: "Sabrina Carpenter"
    },
    {
    question: "Which famous witch is a character in the Harry Potter series?",
    difficulty: "Easy",
    correctAnswer: "Hermione Granger",
    incorrectAnswers: ["Sabrina Spellman", "Glinda the Good Witch", "The Wicked Witch of the West"],
    category: "Witches"
    },
    {
    question: "What is the name of the cat in the movie 'The Aristocats'?",
    difficulty: "Medium",
    correctAnswer: "Duchess",
    incorrectAnswers: ["Marie", "Toulouse", "Berlioz"],
    category: "Cats"
    },
    {
    question: "Which song by Sabrina Carpenter features the lyrics 'All we have is love'?",
    difficulty: "Medium",
    correctAnswer: "All We Have Is Love",
    incorrectAnswers: ["Thumbs", "Sue Me", "Almost Love"],
    category: "Sabrina Carpenter"
    },
    {
    question: "What is the name of the witch in the movie 'The Wizard of Oz'?",
    difficulty: "Easy",
    correctAnswer: "The Wicked Witch of the West",
    incorrectAnswers: ["Glinda the Good Witch", "Sabrina Spellman", "Hermione Granger"],
    category: "Witches"
    },
    {
    question: "Which breed of cat is known for its short legs?",
    difficulty: "Medium",
    correctAnswer: "Munchkin",
    incorrectAnswers: ["Sphynx", "Maine Coon", "Siamese"],
    category: "Cats"
    },
    {
    question: "What is the name of Sabrina Carpenter's character in the Disney Channel Original Movie 'Cloud 9'?",
    difficulty: "Medium",
    correctAnswer: "Kayla Morgan",
    incorrectAnswers: ["Emily Cooper", "Jenny Parker", "Lola Perez"],
    category: "Sabrina Carpenter"
    },
    {
    question: "Which famous witch is a character in the TV show 'Bewitched'?",
    difficulty: "Easy",
    correctAnswer: "Samantha Stephens",
    incorrectAnswers: ["Sabrina Spellman", "Glinda the Good Witch", "Hermione Granger"],
    category: "Witches"
    },
    {
    question: "What is the name of the cat in the movie 'Coraline'?",
    difficulty: "Medium",
    correctAnswer: "The Cat",
    incorrectAnswers: ["Salem", "Binx", "Shadow"],
    category: "Cats"
    },
]