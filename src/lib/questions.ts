export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const questions = [
  {
    question: "Earth is within the Milky Way galaxy",
    difficulty: "Easy",
    correctAnswer: true,
    incorrectAnswers: [false],
    category: "Science"
  },
  {
    question: "What is the largest planet in our solar system?",
    difficulty: "Easy",
    correctAnswer: "Jupiter",
    incorrectAnswers: ["Saturn", "Neptune", "Earth"],
    category: "Science"
  },
  {
    question: "What year did World War I begin?",
    difficulty: "Medium",
    correctAnswer: "1914",
    incorrectAnswers: ["1915", "1916", "1917"],
    category: "History"
  },
  {
    question: "What is the chemical symbol for gold?",
    difficulty: "Easy",
    correctAnswer: "Au",
    incorrectAnswers: ["Ag", "Fe", "Cu"],
    category: "Science"
  },
  {
    question: "Which continent is the largest by land area?",
    difficulty: "Easy",
    correctAnswer: "Asia",
    incorrectAnswers: ["Africa", "North America", "Europe"],
    category: "Geography"
  },
  {
    question: "Who painted the Mona Lisa?",
    difficulty: "Easy",
    correctAnswer: "Leonardo da Vinci",
    incorrectAnswers: ["Michelangelo", "Raphael", "Vincent van Gogh"],
    category: "Art"
  },
  {
    question: "The human body has 206 bones",
    difficulty: "Medium",
    correctAnswer: true,
    incorrectAnswers: [false],
    category: "Science"
  },
  {
    question: "Which planet is known as the Red Planet?",
    difficulty: "Easy",
    correctAnswer: "Mars",
    incorrectAnswers: ["Venus", "Mercury", "Jupiter"],
    category: "Science"
  },
  {
    question: "What is the capital of Japan?",
    difficulty: "Easy",
    correctAnswer: "Tokyo",
    incorrectAnswers: ["Seoul", "Beijing", "Bangkok"],
    category: "Geography"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    difficulty: "Easy",
    correctAnswer: "William Shakespeare",
    incorrectAnswers: ["Charles Dickens", "Jane Austen", "Mark Twain"],
    category: "Literature"
  },
  {
    question: "What is the chemical formula for water?",
    difficulty: "Easy",
    correctAnswer: "H2O",
    incorrectAnswers: ["CO2", "O2", "NaCl"],
    category: "Science"
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    difficulty: "Easy",
    correctAnswer: "Australia",
    incorrectAnswers: ["Brazil", "Indonesia", "Thailand"],
    category: "Geography"
  },
  {
    question: "Who was the first person to step on the moon?",
    difficulty: "Easy",
    correctAnswer: "Neil Armstrong",
    incorrectAnswers: ["Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    category: "History"
  },
  {
    question: "Which element has the atomic number 1?",
    difficulty: "Medium",
    correctAnswer: "Hydrogen",
    incorrectAnswers: ["Helium", "Carbon", "Oxygen"],
    category: "Science"
  },
  {
    question: "What is the capital of France?",
    difficulty: "Easy",
    correctAnswer: "Paris",
    incorrectAnswers: ["London", "Berlin", "Rome"],
    category: "Geography"
  },
  {
    question: "The Great Wall of China is visible from space",
    difficulty: "Medium",
    correctAnswer: false,
    incorrectAnswers: [true],
    category: "Science"
  },
  {
    question: "Who painted 'The Starry Night'?",
    difficulty: "Medium",
    correctAnswer: "Vincent van Gogh",
    incorrectAnswers: ["Pablo Picasso", "Claude Monet", "Salvador Dali"],
    category: "Art"
  },
  {
    question: "What is the largest organ in the human body?",
    difficulty: "Easy",
    correctAnswer: "Skin",
    incorrectAnswers: ["Liver", "Brain", "Heart"],
    category: "Science"
  },
  {
    question: "In what year did World War II end?",
    difficulty: "Medium",
    correctAnswer: "1945",
    incorrectAnswers: ["1944", "1946", "1943"],
    category: "History"
  },
  {
    question: "What is the capital of Brazil?",
    difficulty: "Medium",
    correctAnswer: "Brasília",
    incorrectAnswers: ["Rio de Janeiro", "São Paulo", "Salvador"],
    category: "Geography"
  },
  {
    question: "Who wrote '1984'?",
    difficulty: "Medium",
    correctAnswer: "George Orwell",
    incorrectAnswers: ["Aldous Huxley", "Ray Bradbury", "Ernest Hemingway"],
    category: "Literature"
  },
  {
    question: "What is the speed of light in vacuum?",
    difficulty: "Hard",
    correctAnswer: "299,792,458 meters per second",
    incorrectAnswers: ["300,000,000 meters per second", "299,000,000 meters per second", "298,792,458 meters per second"],
    category: "Science"
  },
  {
    question: "Which country has the largest population?",
    difficulty: "Easy",
    correctAnswer: "India",
    incorrectAnswers: ["China", "United States", "Indonesia"],
    category: "Geography"
  },
  {
    question: "Who developed the theory of relativity?",
    difficulty: "Easy",
    correctAnswer: "Albert Einstein",
    incorrectAnswers: ["Isaac Newton", "Stephen Hawking", "Niels Bohr"],
    category: "Science"
  },
  {
    question: "What is the smallest prime number?",
    difficulty: "Easy",
    correctAnswer: "2",
    incorrectAnswers: ["1", "3", "0"],
    category: "Mathematics"
  },
  {
    question: "Which planet is closest to the Sun?",
    difficulty: "Easy",
    correctAnswer: "Mercury",
    incorrectAnswers: ["Venus", "Mars", "Earth"],
    category: "Science"
  },
  {
    question: "Who painted the Sistine Chapel ceiling?",
    difficulty: "Medium",
    correctAnswer: "Michelangelo",
    incorrectAnswers: ["Leonardo da Vinci", "Raphael", "Botticelli"],
    category: "Art"
  },
  {
    question: "What is the capital of China?",
    difficulty: "Easy",
    correctAnswer: "Beijing",
    incorrectAnswers: ["Shanghai", "Hong Kong", "Tokyo"],
    category: "Geography"
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    difficulty: "Medium",
    correctAnswer: "F. Scott Fitzgerald",
    incorrectAnswers: ["Ernest Hemingway", "John Steinbeck", "William Faulkner"],
    category: "Literature"
  },
  {
    question: "What is the chemical symbol for silver?",
    difficulty: "Medium",
    correctAnswer: "Ag",
    incorrectAnswers: ["Si", "Au", "Fe"],
    category: "Science"
  },
  {
    question: "The human heart has four chambers",
    difficulty: "Easy",
    correctAnswer: true,
    incorrectAnswers: [false],
    category: "Science"
  },
  {
    question: "What is the largest ocean on Earth?",
    difficulty: "Easy",
    correctAnswer: "Pacific Ocean",
    incorrectAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    category: "Geography"
  },
  {
    question: "Who was the first President of the United States?",
    difficulty: "Easy",
    correctAnswer: "George Washington",
    incorrectAnswers: ["Thomas Jefferson", "John Adams", "Benjamin Franklin"],
    category: "History"
  },
  {
    question: "What is the square root of 144?",
    difficulty: "Medium",
    correctAnswer: "12",
    incorrectAnswers: ["14", "10", "16"],
    category: "Science"
  },
  {
    question: "Which element has the chemical symbol 'Fe'?",
    difficulty: "Medium",
    correctAnswer: "Iron",
    incorrectAnswers: ["Fluorine", "Francium", "Fermium"],
    category: "Science"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    difficulty: "Medium",
    correctAnswer: "Harper Lee",
    incorrectAnswers: ["John Steinbeck", "Ernest Hemingway", "William Faulkner"],
    category: "Literature"
  },
  {
    question: "What is the capital of Russia?",
    difficulty: "Easy",
    correctAnswer: "Moscow",
    incorrectAnswers: ["St. Petersburg", "Kiev", "Warsaw"],
    category: "Geography"
  },
  {
    question: "The Eiffel Tower is in London",
    difficulty: "Easy",
    correctAnswer: false,
    incorrectAnswers: [true],
    category: "Geography"
  },
  {
    question: "What is the longest river in the world?",
    difficulty: "Medium",
    correctAnswer: "Nile",
    incorrectAnswers: ["Amazon", "Mississippi", "Yangtze"],
    category: "Geography"
  },
  {
    question: "Who painted 'The Last Supper'?",
    difficulty: "Medium",
    correctAnswer: "Leonardo da Vinci",
    incorrectAnswers: ["Michelangelo", "Raphael", "Botticelli"],
    category: "Art"
  },
  {
    question: "What is the chemical symbol for sodium?",
    difficulty: "Medium",
    correctAnswer: "Na",
    incorrectAnswers: ["So", "Sd", "Sa"],
    category: "Science"
  },
  {
    question: "Which planet is known as the 'Morning Star'?",
    difficulty: "Medium",
    correctAnswer: "Venus",
    incorrectAnswers: ["Mars", "Mercury", "Jupiter"],
    category: "Science"
  },
  {
    question: "What is the capital of Spain?",
    difficulty: "Easy",
    correctAnswer: "Madrid",
    incorrectAnswers: ["Barcelona", "Seville", "Valencia"],
    category: "Geography"
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    difficulty: "Medium",
    correctAnswer: "Jane Austen",
    incorrectAnswers: ["Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    category: "Literature"
  },
  {
    question: "What is the atomic number of carbon?",
    difficulty: "Medium",
    correctAnswer: "6",
    incorrectAnswers: ["4", "8", "12"],
    category: "Science"
  },
  {
    question: "The Sun is a planet",
    difficulty: "Easy",
    correctAnswer: false,
    incorrectAnswers: [true],
    category: "Science"
  },
  {
    question: "What is the smallest country in the world?",
    difficulty: "Medium",
    correctAnswer: "Vatican City",
    incorrectAnswers: ["Monaco", "San Marino", "Liechtenstein"],
    category: "Geography"
  },
  {
    question: "Who discovered penicillin?",
    difficulty: "Medium",
    correctAnswer: "Alexander Fleming",
    incorrectAnswers: ["Louis Pasteur", "Robert Koch", "Joseph Lister"],
    category: "Science"
  },
  {
    question: "What is the capital of Italy?",
    difficulty: "Easy",
    correctAnswer: "Rome",
    incorrectAnswers: ["Milan", "Venice", "Florence"],
    category: "Geography"
  },
  {
    question: "Who composed the 'Moonlight Sonata'?",
    difficulty: "Medium",
    correctAnswer: "Ludwig van Beethoven",
    incorrectAnswers: ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
    category: "Music"
  },
  {
    question: "What is the chemical symbol for potassium?",
    difficulty: "Medium",
    correctAnswer: "K",
    incorrectAnswers: ["P", "Pt", "Po"],
    category: "Science"
  },
  {
    question: "Which continent is the coldest?",
    difficulty: "Easy",
    correctAnswer: "Antarctica",
    incorrectAnswers: ["Arctic", "North America", "Europe"],
    category: "Geography"
  },
  {
    question: "Who invented the telephone?",
    difficulty: "Medium",
    correctAnswer: "Alexander Graham Bell",
    incorrectAnswers: ["Thomas Edison", "Nikola Tesla", "George Eastman"],
    category: "History"
  },
  {
    question: "What is the capital of Germany?",
    difficulty: "Easy",
    correctAnswer: "Berlin",
    incorrectAnswers: ["Munich", "Hamburg", "Frankfurt"],
    category: "Geography"
  },
  {
    question: "Who wrote 'The Catcher in the Rye'?",
    difficulty: "Medium",
    correctAnswer: "J.D. Salinger",
    incorrectAnswers: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
    category: "Literature"
  },
  {
    question: "What is the boiling point of water in Celsius?",
    difficulty: "Easy",
    correctAnswer: "100",
    incorrectAnswers: ["90", "110", "95"],
    category: "Science"
  },
  {
    question: "Mount Everest is the highest mountain on Earth",
    difficulty: "Easy",
    correctAnswer: true,
    incorrectAnswers: [false],
    category: "Geography"
  },
  {
    question: "Who painted 'The Birth of Venus'?",
    difficulty: "Hard",
    correctAnswer: "Sandro Botticelli",
    incorrectAnswers: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
    category: "Art"
  },
  {
    question: "What is the chemical symbol for lead?",
    difficulty: "Medium",
    correctAnswer: "Pb",
    incorrectAnswers: ["Ld", "Le", "Lu"],
    category: "Science"
  },
  {
    question: "Which planet has the most moons?",
    difficulty: "Medium",
    correctAnswer: "Jupiter",
    incorrectAnswers: ["Saturn", "Uranus", "Neptune"],
    category: "Science"
  },
  {
    question: "What is the capital of South Korea?",
    difficulty: "Medium",
    correctAnswer: "Seoul",
    incorrectAnswers: ["Tokyo", "Beijing", "Bangkok"],
    category: "Geography"
  },
  {
    question: "Who wrote 'The Odyssey'?",
    difficulty: "Medium",
    correctAnswer: "Homer",
    incorrectAnswers: ["Virgil", "Sophocles", "Plato"],
    category: "Literature"
  },
  {
    question: "What is the atomic number of oxygen?",
    difficulty: "Medium",
    correctAnswer: "8",
    incorrectAnswers: ["6", "10", "12"],
    category: "Science"
  },
  {
    question: "What is the normal resting heart rate range for adults?",
    difficulty: "Medium",
    correctAnswer: "60-100 beats per minute",
    incorrectAnswers: ["40-60 beats per minute", "100-120 beats per minute", "120-140 beats per minute"],
    category: "Science"
  },
  {
    question: "What color wire is typically used for the neutral conductor in US residential wiring?",
    difficulty: "Medium",
    correctAnswer: "White",
    incorrectAnswers: ["Black", "Green", "Red"],
    category: "Science"
  },
  {
    question: "Which musical premiered at London's Prince Edward Theatre in 1989 with Lea Salonga as Kim?",
    difficulty: "Medium",
    correctAnswer: "Miss Saigon",
    incorrectAnswers: ["Les Misérables", "Cats", "The Phantom of the Opera"],
    category: "Musical Theatre"
  },
  {
    question: "What is the national flower of Wales?",
    difficulty: "Easy",
    correctAnswer: "Daffodil",
    incorrectAnswers: ["Rose", "Thistle", "Leek"],
    category: "Geography"
  },
  {
    question: "Which Japanese car manufacturer produces the Skyline GT-R?",
    difficulty: "Easy",
    correctAnswer: "Nissan",
    incorrectAnswers: ["Toyota", "Honda", "Mazda"],
    category: "Cars"
  },
  {
    question: "What is the maximum number of points possible from a single break in snooker?",
    difficulty: "Medium",
    correctAnswer: "147",
    incorrectAnswers: ["140", "155", "167"],
    category: "Sport"
  },
  {
    question: "What is the name of Chile's driest desert?",
    difficulty: "Medium",
    correctAnswer: "Atacama Desert",
    incorrectAnswers: ["Gobi Desert", "Sahara Desert", "Mojave Desert"],
    category: "Geography"
  },
  {
    question: "What does API stand for in software development?",
    difficulty: "Easy",
    correctAnswer: "Application Programming Interface",
    incorrectAnswers: ["Application Protocol Interface", "Advanced Programming Interface", "Automated Program Integration"],
    category: "Science"
  },
  {
    question: "What is the standard aperture f-stop scale?",
    difficulty: "Medium",
    correctAnswer: "f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16",
    incorrectAnswers: ["f/1, f/2, f/3, f/4, f/5, f/6, f/7, f/8", "f/2, f/4, f/6, f/8, f/10, f/12, f/14, f/16", "f/1.8, f/2.8, f/3.8, f/4.8, f/5.8, f/6.8, f/7.8, f/8.8"],
    category: "Photography"
  },
  {
    question: "What is the term for a score of three under par on a single hole in golf?",
    difficulty: "Easy",
    correctAnswer: "Albatross",
    incorrectAnswers: ["Eagle", "Birdie", "Bogey"],
    category: "Sport"
  },
  {
    question: "What is the normal resting heart rate range for adults?",
    difficulty: "Medium",
    correctAnswer: "60-100 beats per minute",
    incorrectAnswers: ["40-60 beats per minute", "100-120 beats per minute", "120-140 beats per minute"],
    category: "Science"
  },
  {
    question: "Which medication is used as the first-line treatment for Type 2 Diabetes?",
    difficulty: "Medium",
    correctAnswer: "Metformin",
    incorrectAnswers: ["Insulin", "Glipizide", "Januvia"],
    category: "Science"
  },
  {
    question: "What is the normal range for systolic blood pressure in adults?",
    difficulty: "Easy",
    correctAnswer: "90-120 mmHg",
    incorrectAnswers: ["140-160 mmHg", "70-80 mmHg", "130-150 mmHg"],
    category: "Science"
  },
  {
    question: "What color wire is typically used for the ground wire in US residential wiring?",
    difficulty: "Easy",
    correctAnswer: "Green",
    incorrectAnswers: ["White", "Black", "Red"],
    category: "Science"
  },
  {
    question: "What is the standard residential voltage in the United States?",
    difficulty: "Easy",
    correctAnswer: "120V",
    incorrectAnswers: ["240V", "110V", "220V"],
    category: "Science"
  },
  {
    question: "Which type of electrical box must be used for ceiling fan installation?",
    difficulty: "Medium",
    correctAnswer: "Fan-rated box",
    incorrectAnswers: ["Standard junction box", "Plastic box", "Surface mount box"],
    category: "Science"
  },
  {
    question: "Which team has won the most Premier League titles?",
    difficulty: "Easy",
    correctAnswer: "Manchester United",
    incorrectAnswers: ["Liverpool", "Chelsea", "Arsenal"],
    category: "Sport"
  },
  {
    question: "Who holds the record for most goals in a single Premier League season?",
    difficulty: "Medium",
    correctAnswer: "Erling Haaland",
    incorrectAnswers: ["Alan Shearer", "Mohamed Salah", "Cristiano Ronaldo"],
    category: "Sport"
  },
  {
    question: "Who composed 'The Phantom of the Opera'?",
    difficulty: "Easy",
    correctAnswer: "Andrew Lloyd Webber",
    incorrectAnswers: ["Stephen Sondheim", "Claude-Michel Schönberg", "Lin-Manuel Miranda"],
    category: "Musical Theatre"
  },
  {
    question: "Which West End theatre has hosted 'Les Misérables' since 2004?",
    difficulty: "Medium",
    correctAnswer: "Queen's Theatre",
    incorrectAnswers: ["London Palladium", "Theatre Royal", "Victoria Palace Theatre"],
    category: "Musical Theatre"
  },
  {
    question: "What is the capital city of Chile?",
    difficulty: "Easy",
    correctAnswer: "Santiago",
    incorrectAnswers: ["Valparaíso", "Concepción", "Antofagasta"],
    category: "Geography"
  },
  {
    question: "Which mountain range runs through Chile?",
    difficulty: "Easy",
    correctAnswer: "The Andes",
    incorrectAnswers: ["The Rockies", "The Alps", "The Himalayas"],
    category: "Geography"
  },
  {
    question: "What is the highest mountain in Wales?",
    difficulty: "Medium",
    correctAnswer: "Snowdon",
    incorrectAnswers: ["Cader Idris", "Pen y Fan", "Glyder Fawr"],
    category: "Geography"
  },
  {
    question: "Which Welsh castle is known as the 'Castle of Welsh Princes'?",
    difficulty: "Medium",
    correctAnswer: "Caernarfon Castle",
    incorrectAnswers: ["Cardiff Castle", "Conwy Castle", "Harlech Castle"],
    category: "Geography"
  },
  {
    question: "How many points is the black ball worth in snooker?",
    difficulty: "Easy",
    correctAnswer: "7",
    incorrectAnswers: ["5", "6", "8"],
    category: "Sport"
  },
  {
    question: "Who holds the record for most World Snooker Championship wins?",
    difficulty: "Medium",
    correctAnswer: "Ronnie O'Sullivan",
    incorrectAnswers: ["Stephen Hendry", "Steve Davis", "John Higgins"],
    category: "Sport"
  },
  {
    question: "Which golf tournament is known as 'The Masters'?",
    difficulty: "Easy",
    correctAnswer: "Augusta National",
    incorrectAnswers: ["The Open Championship", "US Open", "PGA Championship"],
    category: "Sport"
  },
  {
    question: "What is the term for completing a hole one stroke under par?",
    difficulty: "Easy",
    correctAnswer: "Birdie",
    incorrectAnswers: ["Eagle", "Bogey", "Par"],
    category: "Sport"
  },
  {
    question: "What is the term for the total market value of a company's shares?",
    difficulty: "Medium",
    correctAnswer: "Market Capitalization",
    incorrectAnswers: ["Book Value", "Enterprise Value", "Equity Value"],
    category: "Finance"
  },
  {
    question: "What does P/E ratio stand for in stock market analysis?",
    difficulty: "Medium",
    correctAnswer: "Price to Earnings",
    incorrectAnswers: ["Profit to Equity", "Price to Enterprise", "Profit to Expense"],
    category: "Finance"
  },
  {
    question: "What does SQL stand for?",
    difficulty: "Easy",
    correctAnswer: "Structured Query Language",
    incorrectAnswers: ["Simple Query Language", "Standard Query Logic", "System Query Language"],
    category: "Science"
  },
  {
    question: "Which data structure operates on a LIFO principle?",
    difficulty: "Medium",
    correctAnswer: "Stack",
    incorrectAnswers: ["Queue", "Array", "Linked List"],
    category: "Science"
  },
  {
    question: "What does ISO measure in photography?",
    difficulty: "Medium",
    correctAnswer: "Light Sensitivity",
    incorrectAnswers: ["Shutter Speed", "Aperture Size", "Focal Length"],
    category: "Photography"
  },
  {
    question: "What is the 'Golden Hour' in photography?",
    difficulty: "Easy",
    correctAnswer: "The period shortly after sunrise or before sunset",
    incorrectAnswers: ["Midnight", "Noon", "Dusk only"],
    category: "Photography"
  },
  {
    question: "Which Japanese manufacturer produces the Supra?",
    difficulty: "Easy",
    correctAnswer: "Toyota",
    incorrectAnswers: ["Honda", "Nissan", "Mazda"],
    category: "Cars"
  },
  {
    question: "What is the normal body temperature range in Celsius?",
    difficulty: "Easy",
    correctAnswer: "36.5-37.5°C",
    incorrectAnswers: ["35-36°C", "38-39°C", "34-35°C"],
    category: "Science"
  },
  {
    question: "Which vaccine is typically given at birth?",
    difficulty: "Medium",
    correctAnswer: "Hepatitis B",
    incorrectAnswers: ["MMR", "DPT", "Polio"],
    category: "Science"
  },
  {
    question: "What is the most common type of shock?",
    difficulty: "Medium",
    correctAnswer: "Hypovolemic",
    incorrectAnswers: ["Cardiogenic", "Neurogenic", "Septic"],
    category: "Science"
  },
  {
    question: "What is the Glasgow Coma Scale's maximum score?",
    difficulty: "Medium",
    correctAnswer: "15",
    incorrectAnswers: ["10", "12", "20"],
    category: "Science"
  },
  {
    question: "Which position is recommended for preventing aspiration?",
    difficulty: "Medium",
    correctAnswer: "Fowler's position",
    incorrectAnswers: ["Supine position", "Trendelenburg position", "Prone position"],
    category: "Science"
  },
  {
    question: "What is the normal respiratory rate range for adults?",
    difficulty: "Easy",
    correctAnswer: "12-20 breaths per minute",
    incorrectAnswers: ["8-10 breaths per minute", "20-30 breaths per minute", "30-40 breaths per minute"],
    category: "Science"
  },
  {
    question: "Which blood type is considered the universal donor?",
    difficulty: "Easy",
    correctAnswer: "O negative",
    incorrectAnswers: ["A positive", "B negative", "AB positive"],
    category: "Science"
  },
  {
    question: "What is the medical term for high blood pressure?",
    difficulty: "Easy",
    correctAnswer: "Hypertension",
    incorrectAnswers: ["Hypotension", "Hyponatremia", "Hyperglycemia"],
    category: "Science"
  },
  {
    question: "What is the minimum wire size for a 20-amp circuit?",
    difficulty: "Medium",
    correctAnswer: "12 AWG",
    incorrectAnswers: ["14 AWG", "10 AWG", "8 AWG"],
    category: "Science"
  },
  {
    question: "What color wire indicates a hot wire in US residential wiring?",
    difficulty: "Easy",
    correctAnswer: "Black",
    incorrectAnswers: ["White", "Green", "Blue"],
    category: "Science"
  },
  {
    question: "What is the maximum number of outlets allowed on a 20-amp circuit?",
    difficulty: "Medium",
    correctAnswer: "10",
    incorrectAnswers: ["8", "12", "15"],
    category: "Science"
  },
  {
    question: "What type of conduit is most commonly used outdoors?",
    difficulty: "Medium",
    correctAnswer: "PVC",
    incorrectAnswers: ["EMT", "IMC", "RMC"],
    category: "Science"
  },
  {
    question: "What is the required GFCI protection distance from a kitchen sink?",
    difficulty: "Medium",
    correctAnswer: "6 feet",
    incorrectAnswers: ["4 feet", "8 feet", "10 feet"],
    category: "Science"
  },
  {
    question: "What is the standard height for electrical outlets?",
    difficulty: "Easy",
    correctAnswer: "12-18 inches",
    incorrectAnswers: ["24 inches", "6 inches", "30 inches"],
    category: "Science"
  },
  {
    question: "What size breaker is required for an electric range?",
    difficulty: "Medium",
    correctAnswer: "50 amp",
    incorrectAnswers: ["30 amp", "40 amp", "60 amp"],
    category: "Science"
  },
  {
    question: "What is the standard wire color for a 240V circuit?",
    difficulty: "Medium",
    correctAnswer: "Red and Black",
    incorrectAnswers: ["White and Black", "Green and White", "Blue and Yellow"],
    category: "Science"
  },
  {
    question: "Which team won the first Premier League title?",
    difficulty: "Medium",
    correctAnswer: "Manchester United",
    incorrectAnswers: ["Arsenal", "Liverpool", "Chelsea"],
    category: "Sport"
  },
  {
    question: "Who holds the record for most Premier League appearances?",
    difficulty: "Medium",
    correctAnswer: "Gareth Barry",
    incorrectAnswers: ["Ryan Giggs", "Frank Lampard", "James Milner"],
    category: "Sport"
  },
  {
    question: "Which stadium has the largest capacity in the Premier League?",
    difficulty: "Easy",
    correctAnswer: "Old Trafford",
    incorrectAnswers: ["Emirates Stadium", "Anfield", "Tottenham Hotspur Stadium"],
    category: "Sport"
  },
  {
    question: "Who won the first FIFA World Cup?",
    difficulty: "Medium",
    correctAnswer: "Uruguay",
    incorrectAnswers: ["Brazil", "Argentina", "Italy"],
    category: "Sport"
  },
  {
    question: "What year was the Premier League founded?",
    difficulty: "Medium",
    correctAnswer: "1992",
    incorrectAnswers: ["1990", "1988", "1994"],
    category: "Sport"
  },
  {
    question: "Which player has won the most Premier League Golden Boots?",
    difficulty: "Medium",
    correctAnswer: "Thierry Henry",
    incorrectAnswers: ["Alan Shearer", "Harry Kane", "Mohamed Salah"],
    category: "Sport"
  },
  {
    question: "What is the nickname of Manchester City?",
    difficulty: "Easy",
    correctAnswer: "The Citizens",
    incorrectAnswers: ["The Red Devils", "The Gunners", "The Blues"],
    category: "Sport"
  },
  {
    question: "Which musical is the longest-running in West End history?",
    difficulty: "Easy",
    correctAnswer: "Les Misérables",
    incorrectAnswers: ["The Phantom of the Opera", "Cats", "Chicago"],
    category: "Musical Theatre"
  },
  {
    question: "In which theatre did 'The Mousetrap' originally open?",
    difficulty: "Medium",
    correctAnswer: "Ambassadors Theatre",
    incorrectAnswers: ["St Martin's Theatre", "Lyceum Theatre", "Apollo Theatre"],
    category: "Musical Theatre"
  },
  {
    question: "Who composed 'Cats'?",
    difficulty: "Easy",
    correctAnswer: "Andrew Lloyd Webber",
    incorrectAnswers: ["Stephen Sondheim", "Claude-Michel Schönberg", "George Gershwin"],
    category: "Musical Theatre"
  },
  {
    question: "Which theatre hosts 'The Lion King' in London?",
    difficulty: "Medium",
    correctAnswer: "Lyceum Theatre",
    incorrectAnswers: ["Apollo Victoria", "Prince Edward Theatre", "Adelphi Theatre"],
    category: "Musical Theatre"
  },
  {
    question: "What year did 'Blood Brothers' premiere in the West End?",
    difficulty: "Hard",
    correctAnswer: "1983",
    incorrectAnswers: ["1985", "1988", "1981"],
    category: "Musical Theatre"
  },
  {
    question: "Which West End theatre is home to 'Wicked'?",
    difficulty: "Medium",
    correctAnswer: "Apollo Victoria",
    incorrectAnswers: ["London Palladium", "Dominion Theatre", "Victoria Palace"],
    category: "Musical Theatre"
  },
  {
    question: "What year did 'Mamma Mia!' open in the West End?",
    difficulty: "Medium",
    correctAnswer: "1999",
    incorrectAnswers: ["1997", "2001", "2003"],
    category: "Musical Theatre"
  },
  {
    question: "What is Chile's official language?",
    difficulty: "Easy",
    correctAnswer: "Spanish",
    incorrectAnswers: ["Portuguese", "English", "French"],
    category: "Chile"
  },
  {
    question: "What is Chile's largest lake?",
    difficulty: "Medium",
    correctAnswer: "Lake Llanquihue",
    incorrectAnswers: ["Lake Villarrica", "Lake Puyehue", "Lake Ranco"],
    category: "Geography",
  },
  {
    question: "Which famous Chilean poet won the Nobel Prize for Literature?",
    difficulty: "Medium",
    correctAnswer: "Pablo Neruda",
    incorrectAnswers: ["Gabriela Mistral", "Vicente Huidobro", "Pablo de Rokha"],
    category: "Literature"
  },
  {
    question: "What is Chile's national animal?",
    difficulty: "Medium",
    correctAnswer: "Andean Condor",
    incorrectAnswers: ["Guanaco", "Puma", "Vicuña"],
    category: "Culture"
  },
  {
    question: "What is the largest city in Chile?",
    difficulty: "Easy",
    correctAnswer: "Santiago",
    incorrectAnswers: ["Valparaíso", "Concepción", "Antofagasta"],
    category: "Geography"
  },
  {
    question: "What is the traditional Welsh instrument?",
    difficulty: "Easy",
    correctAnswer: "Triple Harp",
    incorrectAnswers: ["Bagpipes", "Fiddle", "Flute"],
    category: "Culture"
  },
  {
    question: "Which Welsh castle was built by Edward I?",
    difficulty: "Medium",
    correctAnswer: "Caernarfon Castle",
    incorrectAnswers: ["Cardiff Castle", "Pembroke Castle", "Raglan Castle"],
    category: "History"
  },
  {
    question: "What is the highest mountain in Wales?",
    difficulty: "Easy",
    correctAnswer: "Snowdon",
    incorrectAnswers: ["Cader Idris", "Pen y Fan", "Glyder Fawr"],
    category: "Geography"
  },
  {
    question: "Which Welsh town has the longest place name in Europe?",
    difficulty: "Hard",
    correctAnswer: "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch",
    incorrectAnswers: ["Machynlleth", "Aberystwyth", "Pontypridd"],
    category: "Geography"
  },
  {
    question: "What is the capital city of Wales?",
    difficulty: "Easy",
    correctAnswer: "Cardiff",
    incorrectAnswers: ["Swansea", "Newport", "Bangor"],
    category: "Geography"
  },
  {
    question: "What is the maximum break possible in snooker without a free ball?",
    difficulty: "Easy",
    correctAnswer: "147",
    incorrectAnswers: ["150", "155", "145"],
    category: "Sport"
  },
  {
    question: "What color ball is worth 6 points in snooker?",
    difficulty: "Medium",
    correctAnswer: "Pink",
    incorrectAnswers: ["Blue", "Brown", "Green"],
    category: "Sport"
  },
  {
    question: "Who achieved the fastest 147 break in history?",
    difficulty: "Hard",
    correctAnswer: "Ronnie O'Sullivan",
    incorrectAnswers: ["Stephen Hendry", "Mark Williams", "John Higgins"],
    category: "Sport"
  },
  {
    question: "What is the diameter of a snooker ball?",
    difficulty: "Medium",
    correctAnswer: "52.5mm",
    incorrectAnswers: ["51mm", "54mm", "50mm"],
    category: "Sport"
  },
  {
    question: "What is the standard length of a snooker table?",
    difficulty: "Medium",
    correctAnswer: "12 feet",
    incorrectAnswers: ["10 feet", "14 feet", "15 feet"],
    category: "Sport"
  },
  {
    question: "What is the standard length of a golf course in yards?",
    difficulty: "Medium",
    correctAnswer: "7,200",
    incorrectAnswers: ["6,500", "8,000", "7,800"],
    category: "Sport"
  },
  {
    question: "How many clubs are you allowed in your golf bag?",
    difficulty: "Easy",
    correctAnswer: "14",
    incorrectAnswers: ["12", "16", "18"],
    category: "Sport"
  },
  {
    question: "What is the diameter of a golf hole in inches?",
    difficulty: "Medium",
    correctAnswer: "4.25",
    incorrectAnswers: ["4", "4.5", "3.75"],
    category: "Sport"
  },
  {
    question: "What is the term for a score of one over par?",
    difficulty: "Easy",
    correctAnswer: "Bogey",
    incorrectAnswers: ["Eagle", "Birdie", "Double Bogey"],
    category: "Sport"
  },
  {
    question: "Which golf major is played at Augusta National?",
    difficulty: "Easy",
    correctAnswer: "The Masters",
    incorrectAnswers: ["US Open", "The Open Championship", "PGA Championship"],
    category: "Sport"
  },
  {
    question: "What is the term for measuring a company's quick assets against its current liabilities?",
    difficulty: "Medium",
    correctAnswer: "Quick Ratio",
    incorrectAnswers: ["Current Ratio", "Debt Ratio", "Asset Ratio"],
    category: "Finance"
  },
  {
    question: "What is the term for the difference between a bond's face value and its price?",
    difficulty: "Medium",
    correctAnswer: "Premium/Discount",
    incorrectAnswers: ["Spread", "Yield", "Coupon"],
    category: "Finance"
  },
  {
    question: "What does EBITDA stand for?",
    difficulty: "Medium",
    correctAnswer: "Earnings Before Interest, Taxes, Depreciation, and Amortization",
    incorrectAnswers: ["Earnings Before Income Tax and Debt Assessment", "Earnings Before Interest and Tax Deduction Analysis", "Enterprise Before Interest Tax Debt Analysis"],
    category: "Finance"
  },
  {
    question: "What is the term for the initial offering of shares to the public?",
    difficulty: "Easy",
    correctAnswer: "IPO",
    incorrectAnswers: ["APO", "NGO", "NPO"],
    category: "Finance"
  },
  {
    question: "What does REST stand for in API development?",
    difficulty: "Medium",
    correctAnswer: "Representational State Transfer",
    incorrectAnswers: ["Remote State Transfer", "Resource State Transfer", "Remote System Transfer"],
    category: "Science"
  },
  {
    question: "What is the time complexity of binary search?",
    difficulty: "Medium",
    correctAnswer: "O(log n)",
    incorrectAnswers: ["O(n)", "O(n log n)", "O(1)"],
    category: "Science"
  },
  {
    question: "Which programming paradigm does JavaScript primarily follow?",
    difficulty: "Medium",
    correctAnswer: "Object-Oriented and Functional",
    incorrectAnswers: ["Procedural", "Logic", "Structured"],
    category: "Science"
  },
  {
    question: "What is the default port for HTTP?",
    difficulty: "Easy",
    correctAnswer: "80",
    incorrectAnswers: ["443", "8080", "3000"],
    category: "Science"
  },
  {
    question: "What does CSS stand for?",
    difficulty: "Easy",
    correctAnswer: "Cascading Style Sheets",
    incorrectAnswers: ["Computer Style Sheets", "Creative Style System", "Coded Style Structure"],
    category: "Science"
  },
  {
    question: "What is the term for the amount of light entering a camera?",
    difficulty: "Easy",
    correctAnswer: "Exposure",
    incorrectAnswers: ["Aperture", "Shutter", "ISO"],
    category: "Photography"
  },
  {
    question: "What is the 'Rule of Thirds' in photography?",
    difficulty: "Medium",
    correctAnswer: "Dividing frame into nine equal squares for composition",
    incorrectAnswers: ["Taking three identical photos", "Using three light sources", "Setting aperture to f/3"],
    category: "Photography"
  },
  {
    question: "What does DSLR stand for?",
    difficulty: "Easy",
    correctAnswer: "Digital Single-Lens Reflex",
    incorrectAnswers: ["Digital System Lens Return", "Dual Sensor Lens Reflex", "Digital Single Light Reflection"],
    category: "Photography"
  },
  {
    question: "What is bokeh in photography?",
    difficulty: "Medium",
    correctAnswer: "The aesthetic quality of background blur",
    incorrectAnswers: ["A type of camera", "A lens coating", "A lighting technique"],
    category: "Photography"
  },
  {
    question: "Which Japanese car manufacturer produces the Civic?",
    difficulty: "Easy",
    correctAnswer: "Honda",
    incorrectAnswers: ["Toyota", "Nissan", "Mazda"],
    category: "Cars"
  },
  {
    question: "Which Japanese car company owns Lexus?",
    difficulty: "Medium",
    correctAnswer: "Toyota",
    incorrectAnswers: ["Honda", "Nissan", "Mitsubishi"],
    category: "Cars"
  },
  {
    question: "What year was the first Nissan GT-R released?",
    difficulty: "Hard",
    correctAnswer: "2007",
    incorrectAnswers: ["2005", "2009", "2003"],
    category: "Cars"
  },
  {
    question: "Which Japanese manufacturer is known for the RX-7?",
    difficulty: "Medium",
    correctAnswer: "Mazda",
    incorrectAnswers: ["Toyota", "Honda", "Subaru"],
    category: "Cars"
  },
  {
    question: "What is the name of Toyota's luxury vehicle division?",
    difficulty: "Easy",
    correctAnswer: "Lexus",
    incorrectAnswers: ["Infiniti", "Acura", "Genesis"],
    category: "Cars"
  },
  {
    question: "What is the normal oxygen saturation range?",
    difficulty: "Easy",
    correctAnswer: "95-100%",
    incorrectAnswers: ["85-90%", "80-85%", "90-92%"],
    category: "Science"
  },
  {
    question: "What voltage does a GFCI need to trip?",
    difficulty: "Medium",
    correctAnswer: "5 milliamps",
    incorrectAnswers: ["10 milliamps", "15 milliamps", "20 milliamps"],
    category: "Science"
  },
  {
    question: "Who won the 2024 League Cup Final?",
    difficulty: "Easy",
    correctAnswer: "Liverpool",
    incorrectAnswers: ["Chelsea", "Manchester City", "Manchester United"],
    category: "Sport"
  },
  {
    question: "Which West End musical features the song 'Memory'?",
    difficulty: "Easy",
    correctAnswer: "Cats",
    incorrectAnswers: ["Les Misérables", "The Phantom of the Opera", "Miss Saigon"],
    category: "Musical Theatre"
  },
  {
    question: "What is Chile's main export?",
    difficulty: "Medium",
    correctAnswer: "Copper",
    incorrectAnswers: ["Wine", "Fish", "Fruit"],
    category: "Geography"
  },
  {
    question: "What is Wales's most famous rugby stadium?",
    difficulty: "Easy",
    correctAnswer: "Principality Stadium",
    incorrectAnswers: ["Liberty Stadium", "Cardiff City Stadium", "Parc y Scarlets"],
    category: "Sport"
  },
  {
    question: "What color is the blue ball worth in snooker?",
    difficulty: "Easy",
    correctAnswer: "5",
    incorrectAnswers: ["4", "6", "7"],
    category: "Sport"
  },
  {
    question: "What is ROI in finance?",
    difficulty: "Easy",
    correctAnswer: "Return on Investment",
    incorrectAnswers: ["Rate of Interest", "Return on Income", "Rate of Inflation"],
    category: "Finance"
  },
  {
    question: "What does JSON stand for?",
    difficulty: "Easy",
    correctAnswer: "JavaScript Object Notation",
    incorrectAnswers: ["Java Standard Object Notation", "JavaScript Oriented Navigation", "Java Source Object Network"],
    category: "Science"
  },
  {
    question: "What is the minimum focusing distance?",
    difficulty: "Medium",
    correctAnswer: "The closest point at which a lens can focus",
    incorrectAnswers: ["The furthest point of focus", "The midpoint of focus", "The optimal focusing range"],
    category: "Photography"
  },
  {
    question: "Which Japanese car manufacturer produces the WRX?",
    difficulty: "Medium",
    correctAnswer: "Subaru",
    incorrectAnswers: ["Mitsubishi", "Toyota", "Nissan"],
    category: "Cars"
  },
  {
    question: "What is the normal range for diastolic blood pressure?",
    difficulty: "Easy",
    correctAnswer: "60-80 mmHg",
    incorrectAnswers: ["90-100 mmHg", "40-50 mmHg", "100-120 mmHg"],
    category: "Science"
  },
  {
    question: "What size wire is required for a 15-amp circuit?",
    difficulty: "Medium",
    correctAnswer: "14 AWG",
    incorrectAnswers: ["12 AWG", "10 AWG", "16 AWG"],
    category: "Science"
  },
  {
    question: "Which team has won the most FA Cups?",
    difficulty: "Medium",
    correctAnswer: "Arsenal",
    incorrectAnswers: ["Manchester United", "Liverpool", "Chelsea"],
    category: "Sport"
  },
  {
    question: "Which theatre hosts 'Matilda the Musical'?",
    difficulty: "Medium",
    correctAnswer: "Cambridge Theatre",
    incorrectAnswers: ["Palace Theatre", "Novello Theatre", "Gielgud Theatre"],
    category: "Musical Theatre"
  },
  {
    question: "What is the name of Chile's most active volcano?",
    difficulty: "Hard",
    correctAnswer: "Villarrica",
    incorrectAnswers: ["Ojos del Salado", "Lascar", "Calbuco"],
    category: "Geography"
  },
  {
    question: "What is the Welsh word for Wales?",
    difficulty: "Medium",
    correctAnswer: "Cymru",
    incorrectAnswers: ["Cymraeg", "Gymru", "Cymry"],
    category: "Geography"
  },
  {
    question: "What is the value of the brown ball in snooker?",
    difficulty: "Easy",
    correctAnswer: "4",
    incorrectAnswers: ["3", "5", "6"],
    category: "Sport"
  },
  {
    question: "What is the term for making a hole in one shot?",
    difficulty: "Easy",
    correctAnswer: "Hole in One",
    incorrectAnswers: ["Eagle", "Double Eagle", "Ace"],
    category: "Sport"
  },
  {
    question: "What is a bear market?",
    difficulty: "Easy",
    correctAnswer: "A market characterized by falling prices",
    incorrectAnswers: ["A market with rising prices", "A stable market", "A volatile market"],
    category: "Finance"
  },
  {
    question: "What is Git?",
    difficulty: "Easy",
    correctAnswer: "Version Control System",
    incorrectAnswers: ["Programming Language", "Database System", "Web Framework"],
    category: "Science"
  },
  {
    question: "What does RAW mean in photography?",
    difficulty: "Medium",
    correctAnswer: "Uncompressed image format",
    incorrectAnswers: ["High resolution JPEG", "Black and white format", "Film negative"],
    category: "Photography"
  },
  {
    question: "Which Japanese company makes the Lancer Evolution?",
    difficulty: "Medium",
    correctAnswer: "Mitsubishi",
    incorrectAnswers: ["Subaru", "Toyota", "Honda"],
    category: "Cars"
  },
  {
    question: "What is the medical term for low blood sugar?",
    difficulty: "Medium",
    correctAnswer: "Hypoglycemia",
    incorrectAnswers: ["Hyperglycemia", "Hyperlipidemia", "Hyperkalemia"],
    category: "Science"
  },
  {
    question: "What is the purpose of a junction box?",
    difficulty: "Easy",
    correctAnswer: "To house wire connections",
    incorrectAnswers: ["To regulate voltage", "To measure current", "To ground circuits"],
    category: "Science"
  },
  {
    question: "Who holds the record for most Premier League clean sheets?",
    difficulty: "Medium",
    correctAnswer: "Petr Cech",
    incorrectAnswers: ["Peter Schmeichel", "David James", "Edwin van der Sar"],
    category: "Sport"
  },
  {
    question: "Which musical features the song 'Don't Cry For Me Argentina'?",
    difficulty: "Medium",
    correctAnswer: "Evita",
    incorrectAnswers: ["Chicago", "West Side Story", "Cats"],
    category: "Musical Theatre"
  },
  {
    question: "What is Chile's national dance?",
    difficulty: "Medium",
    correctAnswer: "Cueca",
    incorrectAnswers: ["Tango", "Salsa", "Samba"],
    category: "Chile"
  },
  {
    question: "What color is on the Welsh flag's dragon?",
    difficulty: "Easy",
    correctAnswer: "Red",
    incorrectAnswers: ["Green", "White", "Black"],
    category: "Geography"
  },
  {
    question: "What is the minimum number of reds needed for a 147 break?",
    difficulty: "Medium",
    correctAnswer: "15",
    incorrectAnswers: ["12", "14", "16"],
    category: "Sport"
  },
  {
    question: "What material are golf balls primarily made of?",
    difficulty: "Medium",
    correctAnswer: "Urethane",
    incorrectAnswers: ["Rubber", "Plastic", "Leather"],
    category: "Sport"
  },
  {
    question: "What is a hedge fund?",
    difficulty: "Medium",
    correctAnswer: "An investment partnership using pooled funds",
    incorrectAnswers: ["A savings account", "A government bond", "A stock market index"],
    category: "Finance"
  },
  {
    question: "What is an API endpoint?",
    difficulty: "Medium",
    correctAnswer: "A point of communication with a server",
    incorrectAnswers: ["A programming language", "A database type", "A web browser"],
    category: "Science"
  },
  {
    question: "What is a prime lens?",
    difficulty: "Medium",
    correctAnswer: "A lens with fixed focal length",
    incorrectAnswers: ["A zoom lens", "A wide-angle lens", "A telephoto lens"],
    category: "Photography"
  },
  {
    question: "Which Japanese car manufacturer created the RX-8?",
    difficulty: "Medium",
    correctAnswer: "Mazda",
    incorrectAnswers: ["Honda", "Toyota", "Nissan"],
    category: "Cars"
  },
  {
    question: "What is an MVP in software development",
    difficulty: "Easy",
    correctAnswer: "Minimum Viable Product",
    incorrectAnswer: ["Most Valuable Player", "Many Variants Perfected", "My Versatile Plugin"]
  },
  {
    question: "What is the medical term for inflammation of the appendix?",
    difficulty: "Medium",
    correctAnswer: "Appendicitis",
    incorrectAnswers: ["Tonsillitis", "Bronchitis", "Arthritis"],
    category: "Science"
  },
  {
    question: "What is the voltage drop allowed on a branch circuit?",
    difficulty: "Hard",
    correctAnswer: "3%",
    incorrectAnswers: ["5%", "2%", "4%"],
    category: "Science"
  },
  {
    question: "Which player scored the fastest Premier League hat-trick?",
    difficulty: "Hard",
    correctAnswer: "Sadio Mané",
    incorrectAnswers: ["Alan Shearer", "Robbie Fowler", "Mohamed Salah"],
    category: "Sport"
  },
  {
    question: "In which year did 'We Will Rock You' open in the West End?",
    difficulty: "Medium",
    correctAnswer: "2002",
    incorrectAnswers: ["2000", "2004", "2006"],
    category: "Musical Theatre"
  },
  {
    question: "What is the name of Chile's largest island?",
    difficulty: "Hard",
    correctAnswer: "Isla de Chiloé",
    incorrectAnswers: ["Easter Island", "Robinson Crusoe Island", "Isla Navarino"],
    category: "Geography"
  },
  {
    question: "What is the Welsh national vegetable?",
    difficulty: "Medium",
    correctAnswer: "Leek",
    incorrectAnswers: ["Carrot", "Potato", "Onion"],
    category: "Geography"
  },
  {
    question: "What is the width of a snooker table?",
    difficulty: "Medium",
    correctAnswer: "6 feet",
    incorrectAnswers: ["5 feet", "7 feet", "8 feet"],
    category: "Sport"
  },
  {
    question: "What is the standard weight of a golf ball in ounces?",
    difficulty: "Hard",
    correctAnswer: "1.62",
    incorrectAnswers: ["1.50", "1.75", "2.00"],
    category: "Sport"
  },
  {
    question: "What is a blue chip stock?",
    difficulty: "Medium",
    correctAnswer: "A stock of a well-established company",
    incorrectAnswers: ["A new technology stock", "A penny stock", "A government bond"],
    category: "Finance"
  },
  {
    question: "What does DNS stand for?",
    difficulty: "Easy",
    correctAnswer: "Domain Name System",
    incorrectAnswers: ["Dynamic Network Service", "Data Network Storage", "Digital Naming Service"],
    category: "Science"
  },
  {
    "question": "Who painted 'The Persistence of Memory'?",
    "difficulty": "Medium",
    "correctAnswer": "Salvador Dalí",
    "incorrectAnswers": ["Pablo Picasso", "Vincent van Gogh", "René Magritte"],
    "category": "Art"
  },
  {
    "question": "Which philosopher wrote 'Beyond Good and Evil'?",
    "difficulty": "Medium",
    "correctAnswer": "Friedrich Nietzsche",
    "incorrectAnswers": ["Jean-Paul Sartre", "Immanuel Kant", "Arthur Schopenhauer"],
    "category": "Philosophy"
  },
  {
    "question": "Who composed 'Symphony No. 5'?",
    "difficulty": "Easy",
    "correctAnswer": "Ludwig van Beethoven",
    "incorrectAnswers": ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Franz Schubert"],
    "category": "Music"
  },
  {
    "question": "Who directed 'The Godfather'?",
    "difficulty": "Easy",
    "correctAnswer": "Francis Ford Coppola",
    "incorrectAnswers": ["Martin Scorsese", "Stanley Kubrick", "Steven Spielberg"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'One Hundred Years of Solitude'?",
    "difficulty": "Medium",
    "correctAnswer": "Gabriel García Márquez",
    "incorrectAnswers": ["Jorge Luis Borges", "Mario Vargas Llosa", "Pablo Neruda"],
    "category": "Literature"
  },
  {
    "question": "Which band released 'Abbey Road'?",
    "difficulty": "Easy",
    "correctAnswer": "The Beatles",
    "incorrectAnswers": ["The Rolling Stones", "Led Zeppelin", "The Who"],
    "category": "Music"
  },
  {
    "question": "Who painted the ceiling of the Sistine Chapel?",
    "difficulty": "Easy",
    "correctAnswer": "Michelangelo",
    "incorrectAnswers": ["Leonardo da Vinci", "Raphael", "Botticelli"],
    "category": "Art"
  },
  {
    "question": "Which philosopher wrote 'The Social Contract'?",
    "difficulty": "Medium",
    "correctAnswer": "Jean-Jacques Rousseau",
    "incorrectAnswers": ["John Locke", "Thomas Hobbes", "Voltaire"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed '2001: A Space Odyssey'?",
    "difficulty": "Easy",
    "correctAnswer": "Stanley Kubrick",
    "incorrectAnswers": ["George Lucas", "Steven Spielberg", "Ridley Scott"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'Pride and Prejudice'?",
    "difficulty": "Easy",
    "correctAnswer": "Jane Austen",
    "incorrectAnswers": ["Charlotte Brontë", "Emily Brontë", "Virginia Woolf"],
    "category": "Literature"
  },
  {
    "question": "Which artist painted 'Girl with a Pearl Earring'?",
    "difficulty": "Medium",
    "correctAnswer": "Johannes Vermeer",
    "incorrectAnswers": ["Rembrandt", "Frans Hals", "Jan van Eyck"],
    "category": "Art"
  },
  {
    "question": "Who composed 'Für Elise'?",
    "difficulty": "Easy",
    "correctAnswer": "Ludwig van Beethoven",
    "incorrectAnswers": ["Wolfgang Amadeus Mozart", "Franz Schubert", "Johann Sebastian Bach"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'Critique of Pure Reason'?",
    "difficulty": "Medium",
    "correctAnswer": "Immanuel Kant",
    "incorrectAnswers": ["Georg Wilhelm Friedrich Hegel", "Arthur Schopenhauer", "Friedrich Nietzsche"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'Citizen Kane'?",
    "difficulty": "Easy",
    "correctAnswer": "Orson Welles",
    "incorrectAnswers": ["Alfred Hitchcock", "John Ford", "Howard Hawks"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'The Catcher in the Rye'?",
    "difficulty": "Easy",
    "correctAnswer": "J.D. Salinger",
    "incorrectAnswers": ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
    "category": "Literature"
  },
  {
    "question": "Which artist created 'The Birth of Venus'?",
    "difficulty": "Medium",
    "correctAnswer": "Sandro Botticelli",
    "incorrectAnswers": ["Leonardo da Vinci", "Raphael", "Michelangelo"],
    "category": "Art"
  },
  {
    "question": "Who composed 'The Magic Flute'?",
    "difficulty": "Easy",
    "correctAnswer": "Wolfgang Amadeus Mozart",
    "incorrectAnswers": ["Ludwig van Beethoven", "Johann Sebastian Bach", "Franz Schubert"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'Meditations on First Philosophy'?",
    "difficulty": "Medium",
    "correctAnswer": "René Descartes",
    "incorrectAnswers": ["Baruch Spinoza", "Gottfried Leibniz", "John Locke"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'Apocalypse Now'?",
    "difficulty": "Medium",
    "correctAnswer": "Francis Ford Coppola",
    "incorrectAnswers": ["Martin Scorsese", "Stanley Kubrick", "Steven Spielberg"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'The Great Gatsby'?",
    "difficulty": "Easy",
    "correctAnswer": "F. Scott Fitzgerald",
    "incorrectAnswers": ["Ernest Hemingway", "William Faulkner", "John Steinbeck"],
    "category": "Literature"
  },
  {
    "question": "Which artist painted 'The Night Watch'?",
    "difficulty": "Medium",
    "correctAnswer": "Rembrandt",
    "incorrectAnswers": ["Johannes Vermeer", "Frans Hals", "Jan van Eyck"],
    "category": "Art"
  },
  {
    "question": "Who composed 'The Nutcracker'?",
    "difficulty": "Medium",
    "correctAnswer": "Pyotr Ilyich Tchaikovsky",
    "incorrectAnswers": ["Igor Stravinsky", "Sergei Prokofiev", "Dmitri Shostakovich"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'The Prince'?",
    "difficulty": "Medium",
    "correctAnswer": "Niccolò Machiavelli",
    "incorrectAnswers": ["Thomas More", "Francis Bacon", "Thomas Hobbes"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'Schindler's List'?",
    "difficulty": "Easy",
    "correctAnswer": "Steven Spielberg",
    "incorrectAnswers": ["Martin Scorsese", "Francis Ford Coppola", "Roman Polanski"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "difficulty": "Easy",
    "correctAnswer": "Harper Lee",
    "incorrectAnswers": ["John Steinbeck", "William Faulkner", "Ernest Hemingway"],
    "category": "Literature"
  },
  {
    "question": "Which artist created 'The Thinker'?",
    "difficulty": "Medium",
    "correctAnswer": "Auguste Rodin",
    "incorrectAnswers": ["Michelangelo", "Bernini", "Donatello"],
    "category": "Art"
  },
  {
    "question": "Who composed 'Moonlight Sonata'?",
    "difficulty": "Easy",
    "correctAnswer": "Ludwig van Beethoven",
    "incorrectAnswers": ["Wolfgang Amadeus Mozart", "Franz Schubert", "Johannes Brahms"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'Being and Time'?",
    "difficulty": "Hard",
    "correctAnswer": "Martin Heidegger",
    "incorrectAnswers": ["Jean-Paul Sartre", "Edmund Husserl", "Maurice Merleau-Ponty"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'The Shawshank Redemption'?",
    "difficulty": "Medium",
    "correctAnswer": "Frank Darabont",
    "incorrectAnswers": ["Rob Reiner", "Brian De Palma", "Oliver Stone"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'Don Quixote'?",
    "difficulty": "Medium",
    "correctAnswer": "Miguel de Cervantes",
    "incorrectAnswers": ["Jorge Luis Borges", "Gabriel García Márquez", "Pablo Neruda"],
    "category": "Literature"
  },
  {
    "question": "Which artist painted 'The Scream'?",
    "difficulty": "Medium",
    "correctAnswer": "Edvard Munch",
    "incorrectAnswers": ["Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
    "category": "Art"
  },
  {
    "question": "Who composed 'Carmen'?",
    "difficulty": "Medium",
    "correctAnswer": "Georges Bizet",
    "incorrectAnswers": ["Giuseppe Verdi", "Giacomo Puccini", "Richard Wagner"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'Thus Spoke Zarathustra'?",
    "difficulty": "Medium",
    "correctAnswer": "Friedrich Nietzsche",
    "incorrectAnswers": ["Søren Kierkegaard", "Arthur Schopenhauer", "Jean-Paul Sartre"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'Vertigo'?",
    "difficulty": "Easy",
    "correctAnswer": "Alfred Hitchcock",
    "incorrectAnswers": ["Orson Welles", "Billy Wilder", "Howard Hawks"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'War and Peace'?",
    "difficulty": "Easy",
    "correctAnswer": "Leo Tolstoy",
    "incorrectAnswers": ["Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
    "category": "Literature"
  },
  {
    "question": "Which artist painted 'The Garden of Earthly Delights'?",
    "difficulty": "Hard",
    "correctAnswer": "Hieronymus Bosch",
    "incorrectAnswers": ["Pieter Bruegel", "Jan van Eyck", "Albrecht Dürer"],
    "category": "Art"
  },
  {
    "question": "Who composed 'Rhapsody in Blue'?",
    "difficulty": "Medium",
    "correctAnswer": "George Gershwin",
    "incorrectAnswers": ["Irving Berlin", "Cole Porter", "Leonard Bernstein"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'The Second Sex'?",
    "difficulty": "Medium",
    "correctAnswer": "Simone de Beauvoir",
    "incorrectAnswers": ["Mary Wollstonecraft", "Hannah Arendt", "Judith Butler"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'The Seventh Seal'?",
    "difficulty": "Medium",
    "correctAnswer": "Ingmar Bergman",
    "incorrectAnswers": ["Federico Fellini", "Akira Kurosawa", "François Truffaut"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'Brave New World'?",
    "difficulty": "Easy",
    "correctAnswer": "Aldous Huxley",
    "incorrectAnswers": ["George Orwell", "Ray Bradbury", "Philip K. Dick"],
    "category": "Literature"
  },
  {
    "question": "Which artist created 'The Kiss'?",
    "difficulty": "Medium",
    "correctAnswer": "Gustav Klimt",
    "incorrectAnswers": ["Auguste Rodin", "Constantin Brancusi", "Edgar Degas"],
    "category": "Art"
  },
  {
    "question": "Who composed 'The Rite of Spring'?",
    "difficulty": "Medium",
    "correctAnswer": "Igor Stravinsky",
    "incorrectAnswers": ["Claude Debussy", "Maurice Ravel", "Sergei Prokofiev"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'The Art of War'?",
    "difficulty": "Medium",
    "correctAnswer": "Sun Tzu",
    "incorrectAnswers": ["Confucius", "Lao Tzu", "Mencius"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed 'Rashomon'?",
    "difficulty": "Medium",
    "correctAnswer": "Akira Kurosawa",
    "incorrectAnswers": ["Yasujirō Ozu", "Kenji Mizoguchi", "Mikio Naruse"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'The Canterbury Tales'?",
    "difficulty": "Medium",
    "correctAnswer": "Geoffrey Chaucer",
    "incorrectAnswers": ["William Langland", "John Gower", "Thomas Malory"],
    "category": "Literature"
  },
  {
    "question": "Which artist painted 'Water Lilies'?",
    "difficulty": "Easy",
    "correctAnswer": "Claude Monet",
    "incorrectAnswers": ["Pierre-Auguste Renoir", "Edgar Degas", "Paul Cézanne"],
    "category": "Art"
  },
  {
    "question": "Who composed 'Bolero'?",
    "difficulty": "Medium",
    "correctAnswer": "Maurice Ravel",
    "incorrectAnswers": ["Claude Debussy", "Erik Satie", "Gabriel Fauré"],
    "category": "Music"
  },
  {
    "question": "Which philosopher wrote 'On Liberty'?",
    "difficulty": "Medium",
    "correctAnswer": "John Stuart Mill",
    "incorrectAnswers": ["Jeremy Bentham", "Thomas Hobbes", "John Locke"],
    "category": "Philosophy"
  },
  {
    "question": "Who directed '8½'?",
    "difficulty": "Medium",
    "correctAnswer": "Federico Fellini",
    "incorrectAnswers": ["Michelangelo Antonioni", "Vittorio De Sica", "Roberto Rossellini"],
    "category": "Movies"
  },
  {
    "question": "Who wrote 'The Divine Comedy'?",
    "difficulty": "Medium",
    "correctAnswer": "Dante Alighieri",
    "incorrectAnswers": ["Giovanni Boccaccio", "Francesco Petrarch", "Ludovico Ariosto"],
    "category": "Literature"
  },
  {
    question: "What is the largest desert in Africa?",
    difficulty: "Easy",
    correctAnswer: "Sahara Desert",
    incorrectAnswers: ["Arabian Desert", "Kalahari Desert", "Namib Desert"],
    category: "Geography"
  },
  {
    question: "Who developed the theory of evolution by natural selection?",
    difficulty: "Easy",
    correctAnswer: "Charles Darwin",
    incorrectAnswers: ["Gregor Mendel", "Louis Pasteur", "Alfred Wallace"],
    category: "Science"
  },
  {
    question: "Which ancient civilization built the pyramids at Giza?",
    difficulty: "Easy",
    correctAnswer: "Ancient Egyptians",
    incorrectAnswers: ["Ancient Greeks", "Romans", "Mayans"],
    category: "History"
  },
  {
    question: "What is the study of fossils called?",
    difficulty: "Medium",
    correctAnswer: "Paleontology",
    incorrectAnswers: ["Archaeology", "Geology", "Biology"],
    category: "Science"
  },
  {
    question: "Who painted 'The School of Athens'?",
    difficulty: "Medium",
    correctAnswer: "Raphael",
    incorrectAnswers: ["Michelangelo", "Leonardo da Vinci", "Botticelli"],
    category: "Art"
  },
  {
    question: "What is the capital of Argentina?",
    difficulty: "Medium",
    correctAnswer: "Buenos Aires",
    incorrectAnswers: ["Santiago", "Lima", "Montevideo"],
    category: "Geography"
  },
  {
    question: "Which element has the atomic number 79?",
    difficulty: "Hard",
    correctAnswer: "Gold",
    incorrectAnswers: ["Silver", "Platinum", "Copper"],
    category: "Science"
  },
  {
    question: "Who wrote 'The Republic'?",
    difficulty: "Medium",
    correctAnswer: "Plato",
    incorrectAnswers: ["Aristotle", "Socrates", "Herodotus"],
    category: "Philosophy"
  },
  {
    question: "What is the largest moon of Saturn?",
    difficulty: "Medium",
    correctAnswer: "Titan",
    incorrectAnswers: ["Europa", "Ganymede", "Phobos"],
    category: "Science"
  },
  {
    question: "Which composer wrote 'The Four Seasons'?",
    difficulty: "Medium",
    correctAnswer: "Antonio Vivaldi",
    incorrectAnswers: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven"],
    category: "Music"
  },
  {
    question: "What is the hardest natural substance on Earth?",
    difficulty: "Easy",
    correctAnswer: "Diamond",
    incorrectAnswers: ["Gold", "Iron", "Granite"],
    category: "Science"
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    difficulty: "Medium",
    correctAnswer: "Marie Curie",
    incorrectAnswers: ["Mother Teresa", "Jane Addams", "Pearl Buck"],
    category: "History"
  },
  {
    question: "What is the smallest bone in the human body?",
    difficulty: "Medium",
    correctAnswer: "Stapes",
    incorrectAnswers: ["Hammer", "Anvil", "Hyoid"],
    category: "Science"
  },
  {
    question: "Which ancient wonder was located in Alexandria?",
    difficulty: "Medium",
    correctAnswer: "The Lighthouse",
    incorrectAnswers: ["The Colossus", "The Hanging Gardens", "The Temple of Artemis"],
    category: "History"
  },
  {
    question: "What is the main component of the Sun?",
    difficulty: "Easy",
    correctAnswer: "Hydrogen",
    incorrectAnswers: ["Helium", "Oxygen", "Carbon"],
    category: "Science"
  },
  {
    question: "What is the capital of Morocco?",
    difficulty: "Medium",
    correctAnswer: "Rabat",
    incorrectAnswers: ["Casablanca", "Marrakech", "Fez"],
    category: "Geography"
  },
  {
    question: "Who discovered penicillin?",
    difficulty: "Medium",
    correctAnswer: "Alexander Fleming",
    incorrectAnswers: ["Louis Pasteur", "Robert Koch", "Joseph Lister"],
    category: "Science"
  },
  {
    question: "Which civilization built Machu Picchu?",
    difficulty: "Easy",
    correctAnswer: "Inca",
    incorrectAnswers: ["Maya", "Aztec", "Olmec"],
    category: "History"
  },
  {
    question: "What is the largest species of shark?",
    difficulty: "Easy",
    correctAnswer: "Whale Shark",
    incorrectAnswers: ["Great White Shark", "Hammerhead Shark", "Tiger Shark"],
    category: "Science"
  },
  {
    question: "Who composed 'Swan Lake'?",
    difficulty: "Medium",
    correctAnswer: "Tchaikovsky",
    incorrectAnswers: ["Mozart", "Beethoven", "Bach"],
    category: "Music"
  },
  {
    question: "What is the deepest point in the ocean?",
    difficulty: "Medium",
    correctAnswer: "Mariana Trench",
    incorrectAnswers: ["Puerto Rico Trench", "Java Trench", "Tonga Trench"],
    category: "Geography"
  },
  {
    question: "Who was the first Emperor of China?",
    difficulty: "Medium",
    correctAnswer: "Qin Shi Huang",
    incorrectAnswers: ["Han Wudi", "Tang Taizong", "Ming Hongwu"],
    category: "History"
  },
  {
    question: "What is the study of weather called?",
    difficulty: "Easy",
    correctAnswer: "Meteorology",
    incorrectAnswers: ["Climatology", "Geography", "Astronomy"],
    category: "Science"
  },
  {
    question: "Which artist painted 'The Persistence of Memory'?",
    difficulty: "Medium",
    correctAnswer: "Salvador Dalí",
    incorrectAnswers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
    category: "Art"
  },
  {
    question: "What is the largest organ in the human body?",
    difficulty: "Easy",
    correctAnswer: "Skin",
    incorrectAnswers: ["Liver", "Brain", "Heart"],
    category: "Science"
  },
  {
    question: "Who wrote 'The Art of War'?",
    difficulty: "Medium",
    correctAnswer: "Sun Tzu",
    incorrectAnswers: ["Confucius", "Lao Tzu", "Mencius"],
    category: "Literature"
  },
  {
    question: "What is the chemical symbol for silver?",
    difficulty: "Medium",
    correctAnswer: "Ag",
    incorrectAnswers: ["Si", "Au", "Fe"],
    category: "Science"
  },
  {
    question: "Which mountain range runs through South America?",
    difficulty: "Easy",
    correctAnswer: "Andes",
    incorrectAnswers: ["Rockies", "Alps", "Himalayas"],
    category: "Geography"
  },
  {
    question: "Who invented the telephone?",
    difficulty: "Easy",
    correctAnswer: "Alexander Graham Bell",
    incorrectAnswers: ["Thomas Edison", "Nikola Tesla", "George Eastman"],
    category: "History"
  },
  {
    question: "What is the hardest natural substance?",
    difficulty: "Easy",
    correctAnswer: "Diamond",
    incorrectAnswers: ["Iron", "Titanium", "Quartz"],
    category: "Science"
  },
  {
    question: "Which planet has the Great Red Spot?",
    difficulty: "Medium",
    correctAnswer: "Jupiter",
    incorrectAnswers: ["Mars", "Saturn", "Neptune"],
    category: "Science"
  },
  {
    question: "What is the capital of Finland?",
    difficulty: "Medium",
    correctAnswer: "Helsinki",
    incorrectAnswers: ["Oslo", "Stockholm", "Copenhagen"],
    category: "Geography"
  },
  {
    question: "Who wrote 'The Picture of Dorian Gray'?",
    difficulty: "Medium",
    correctAnswer: "Oscar Wilde",
    incorrectAnswers: ["Charles Dickens", "Edgar Allan Poe", "Mark Twain"],
    category: "Literature"
  },
  {
    question: "What is the chemical symbol for tungsten?",
    difficulty: "Hard",
    correctAnswer: "W",
    incorrectAnswers: ["Tu", "Tn", "Tg"],
    category: "Science"
  },
  {
    question: "Which ancient civilization created the Terracotta Army?",
    difficulty: "Medium",
    correctAnswer: "Chinese",
    incorrectAnswers: ["Roman", "Greek", "Persian"],
    category: "History"
  },
  {
    question: "What is the longest river in Europe?",
    difficulty: "Medium",
    correctAnswer: "Volga",
    incorrectAnswers: ["Danube", "Rhine", "Seine"],
    category: "Geography"
  },
  {
    question: "Who composed 'The Marriage of Figaro'?",
    difficulty: "Medium",
    correctAnswer: "Wolfgang Amadeus Mozart",
    incorrectAnswers: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Joseph Haydn"],
    category: "Music"
  },
  {
    question: "What is the study of fungi called?",
    difficulty: "Medium",
    correctAnswer: "Mycology",
    incorrectAnswers: ["Biology", "Botany", "Zoology"],
    category: "Science"
  },
  {
    question: "Which philosopher wrote 'The Republic'?",
    difficulty: "Medium",
    correctAnswer: "Plato",
    incorrectAnswers: ["Aristotle", "Socrates", "Pythagoras"],
    category: "Philosophy"
  },
  {
    question: "What is the capital of New Zealand?",
    difficulty: "Medium",
    correctAnswer: "Wellington",
    incorrectAnswers: ["Auckland", "Christchurch", "Hamilton"],
    category: "Geography"
  },
  {
    question: "Who painted 'The Night Café'?",
    difficulty: "Medium",
    correctAnswer: "Vincent van Gogh",
    incorrectAnswers: ["Paul Gauguin", "Paul Cézanne", "Claude Monet"],
    category: "Art"
  },
  {
    question: "What is the smallest prime number?",
    difficulty: "Easy",
    correctAnswer: "2",
    incorrectAnswers: ["1", "0", "3"],
    category: "Mathematics"
  },
  {
    question: "Which element has the atomic number 92?",
    difficulty: "Hard",
    correctAnswer: "Uranium",
    incorrectAnswers: ["Plutonium", "Thorium", "Radium"],
    category: "Science"
  },
  {
    question: "Who was the first woman in space?",
    difficulty: "Medium",
    correctAnswer: "Valentina Tereshkova",
    incorrectAnswers: ["Sally Ride", "Judith Resnik", "Svetlana Savitskaya"],
    category: "History"
  },
  {
    question: "What is the capital of Vietnam?",
    difficulty: "Medium",
    correctAnswer: "Hanoi",
    incorrectAnswers: ["Ho Chi Minh City", "Da Nang", "Hue"],
    category: "Geography"
  },
  {
    question: "Who wrote 'The Metamorphosis'?",
    difficulty: "Medium",
    correctAnswer: "Franz Kafka",
    incorrectAnswers: ["James Joyce", "Virginia Woolf", "Thomas Mann"],
    category: "Literature"
  },
  {
    question: "What is the speed of sound in air at sea level?",
    difficulty: "Hard",
    correctAnswer: "343 meters per second",
    incorrectAnswers: ["300 meters per second", "400 meters per second", "500 meters per second"],
    category: "Science"
  },
  {
    question: "What is the capital of Croatia?",
    difficulty: "Medium",
    correctAnswer: "Zagreb",
    incorrectAnswers: ["Split", "Dubrovnik", "Rijeka"],
    category: "Geography"
  },
  {
    question: "Who discovered radioactivity?",
    difficulty: "Medium",
    correctAnswer: "Henri Becquerel",
    incorrectAnswers: ["Marie Curie", "Wilhelm Röntgen", "Ernest Rutherford"],
    category: "Science"
  },
  {
    question: "Which composer wrote 'The Planets' suite?",
    difficulty: "Hard",
    correctAnswer: "Gustav Holst",
    incorrectAnswers: ["Claude Debussy", "Richard Strauss", "Igor Stravinsky"],
    category: "Music"
  },
  {
    question: "What is the largest species of penguin?",
    difficulty: "Medium",
    correctAnswer: "Emperor Penguin",
    incorrectAnswers: ["King Penguin", "Gentoo Penguin", "Royal Penguin"],
    category: "Science"
  },
  {
    question: "Who wrote 'One Flew Over the Cuckoo's Nest'?",
    difficulty: "Medium",
    correctAnswer: "Ken Kesey",
    incorrectAnswers: ["Jack Kerouac", "William S. Burroughs", "Allen Ginsberg"],
    category: "Literature"
  },
  {
    question: "What is the main component of Earth's atmosphere?",
    difficulty: "Easy",
    correctAnswer: "Nitrogen",
    incorrectAnswers: ["Oxygen", "Carbon Dioxide", "Argon"],
    category: "Science"
  },
  {
    question: "Which ancient civilization built the city of Petra?",
    difficulty: "Medium",
    correctAnswer: "Nabataeans",
    incorrectAnswers: ["Romans", "Greeks", "Persians"],
    category: "History"
  },
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
  }
]