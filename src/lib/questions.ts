export interface Question {
	question: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	correctAnswer: string | boolean;
	incorrectAnswers: string[] | boolean[];
	category: string;
}

export const questions: Question[] = [
	{
		question: 'Earth is within the Milky Way galaxy',
		difficulty: 'Easy',
		correctAnswer: true,
		incorrectAnswers: [false],
		category: 'Science'
	},
	{
		question: 'What is the largest planet in our solar system?',
		difficulty: 'Easy',
		correctAnswer: 'Jupiter',
		incorrectAnswers: ['Saturn', 'Neptune', 'Earth'],
		category: 'Science'
	},
	{
		question: 'What year did World War I begin?',
		difficulty: 'Medium',
		correctAnswer: '1914',
		incorrectAnswers: ['1915', '1916', '1917'],
		category: 'History'
	},
	{
		question: 'What is the chemical symbol for gold?',
		difficulty: 'Easy',
		correctAnswer: 'Au',
		incorrectAnswers: ['Ag', 'Fe', 'Cu'],
		category: 'Science'
	},
	{
		question: 'Which continent is the largest by land area?',
		difficulty: 'Easy',
		correctAnswer: 'Asia',
		incorrectAnswers: ['Africa', 'North America', 'Europe'],
		category: 'Geography'
	},
	{
		question: 'Who painted the Mona Lisa?',
		difficulty: 'Easy',
		correctAnswer: 'Leonardo da Vinci',
		incorrectAnswers: ['Michelangelo', 'Raphael', 'Vincent van Gogh'],
		category: 'Art'
	},
	{
		question: 'The human body has 206 bones',
		difficulty: 'Medium',
		correctAnswer: true,
		incorrectAnswers: [false],
		category: 'Science'
	},
	{
		question: 'Which planet is known as the Red Planet?',
		difficulty: 'Easy',
		correctAnswer: 'Mars',
		incorrectAnswers: ['Venus', 'Mercury', 'Jupiter'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Japan?',
		difficulty: 'Easy',
		correctAnswer: 'Tokyo',
		incorrectAnswers: ['Seoul', 'Beijing', 'Bangkok'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'Romeo and Juliet'?",
		difficulty: 'Easy',
		correctAnswer: 'William Shakespeare',
		incorrectAnswers: ['Charles Dickens', 'Jane Austen', 'Mark Twain'],
		category: 'Literature'
	},
	{
		question: 'What is the chemical formula for water?',
		difficulty: 'Easy',
		correctAnswer: 'H2O',
		incorrectAnswers: ['CO2', 'O2', 'NaCl'],
		category: 'Science'
	},
	{
		question: 'Which country is home to the Great Barrier Reef?',
		difficulty: 'Easy',
		correctAnswer: 'Australia',
		incorrectAnswers: ['Brazil', 'Indonesia', 'Thailand'],
		category: 'Geography'
	},
	{
		question: 'Who was the first person to step on the moon?',
		difficulty: 'Easy',
		correctAnswer: 'Neil Armstrong',
		incorrectAnswers: ['Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'],
		category: 'History'
	},
	{
		question: 'Which element has the atomic number 1?',
		difficulty: 'Medium',
		correctAnswer: 'Hydrogen',
		incorrectAnswers: ['Helium', 'Carbon', 'Oxygen'],
		category: 'Science'
	},
	{
		question: 'What is the capital of France?',
		difficulty: 'Easy',
		correctAnswer: 'Paris',
		incorrectAnswers: ['London', 'Berlin', 'Rome'],
		category: 'Geography'
	},
	{
		question: 'The Great Wall of China is visible from space',
		difficulty: 'Medium',
		correctAnswer: false,
		incorrectAnswers: [true],
		category: 'Science'
	},
	{
		question: "Who painted 'The Starry Night'?",
		difficulty: 'Medium',
		correctAnswer: 'Vincent van Gogh',
		incorrectAnswers: ['Pablo Picasso', 'Claude Monet', 'Salvador Dali'],
		category: 'Art'
	},
	{
		question: 'What is the largest organ in the human body?',
		difficulty: 'Easy',
		correctAnswer: 'Skin',
		incorrectAnswers: ['Liver', 'Brain', 'Heart'],
		category: 'Science'
	},
	{
		question: 'In what year did World War II end?',
		difficulty: 'Medium',
		correctAnswer: '1945',
		incorrectAnswers: ['1944', '1946', '1943'],
		category: 'History'
	},
	{
		question: 'What is the capital of Brazil?',
		difficulty: 'Medium',
		correctAnswer: 'Brasília',
		incorrectAnswers: ['Rio de Janeiro', 'São Paulo', 'Salvador'],
		category: 'Geography'
	},
	{
		question: "Who wrote '1984'?",
		difficulty: 'Medium',
		correctAnswer: 'George Orwell',
		incorrectAnswers: ['Aldous Huxley', 'Ray Bradbury', 'Ernest Hemingway'],
		category: 'Literature'
	},
	{
		question: 'What is the speed of light in vacuum?',
		difficulty: 'Hard',
		correctAnswer: '299,792,458 meters per second',
		incorrectAnswers: [
			'300,000,000 meters per second',
			'299,000,000 meters per second',
			'298,792,458 meters per second'
		],
		category: 'Science'
	},
	{
		question: 'Which country has the largest population?',
		difficulty: 'Easy',
		correctAnswer: 'China',
		incorrectAnswers: ['India', 'United States', 'Indonesia'],
		category: 'Geography'
	},
	{
		question: 'Who developed the theory of relativity?',
		difficulty: 'Easy',
		correctAnswer: 'Albert Einstein',
		incorrectAnswers: ['Isaac Newton', 'Stephen Hawking', 'Niels Bohr'],
		category: 'Science'
	},
	{
		question: 'Which planet is closest to the Sun?',
		difficulty: 'Easy',
		correctAnswer: 'Mercury',
		incorrectAnswers: ['Venus', 'Mars', 'Earth'],
		category: 'Science'
	},
	{
		question: 'Who painted the Sistine Chapel ceiling?',
		difficulty: 'Medium',
		correctAnswer: 'Michelangelo',
		incorrectAnswers: ['Leonardo da Vinci', 'Raphael', 'Botticelli'],
		category: 'Art'
	},
	{
		question: 'What is the capital of China?',
		difficulty: 'Easy',
		correctAnswer: 'Beijing',
		incorrectAnswers: ['Shanghai', 'Hong Kong', 'Tokyo'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'The Great Gatsby'?",
		difficulty: 'Medium',
		correctAnswer: 'F. Scott Fitzgerald',
		incorrectAnswers: ['Ernest Hemingway', 'John Steinbeck', 'William Faulkner'],
		category: 'Literature'
	},
	{
		question: 'What is the chemical symbol for silver?',
		difficulty: 'Medium',
		correctAnswer: 'Ag',
		incorrectAnswers: ['Si', 'Au', 'Fe'],
		category: 'Science'
	},
	{
		question: 'The human heart has four chambers',
		difficulty: 'Easy',
		correctAnswer: true,
		incorrectAnswers: [false],
		category: 'Science'
	},
	{
		question: 'What is the largest ocean on Earth?',
		difficulty: 'Easy',
		correctAnswer: 'Pacific Ocean',
		incorrectAnswers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
		category: 'Geography'
	},
	{
		question: 'Who was the first President of the United States?',
		difficulty: 'Easy',
		correctAnswer: 'George Washington',
		incorrectAnswers: ['Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
		category: 'History'
	},
	{
		question: 'What is the square root of 144?',
		difficulty: 'Medium',
		correctAnswer: '12',
		incorrectAnswers: ['14', '10', '16'],
		category: 'Science'
	},
	{
		question: "Which element has the chemical symbol 'Fe'?",
		difficulty: 'Medium',
		correctAnswer: 'Iron',
		incorrectAnswers: ['Fluorine', 'Francium', 'Fermium'],
		category: 'Science'
	},
	{
		question: "Who wrote 'To Kill a Mockingbird'?",
		difficulty: 'Medium',
		correctAnswer: 'Harper Lee',
		incorrectAnswers: ['John Steinbeck', 'Ernest Hemingway', 'William Faulkner'],
		category: 'Literature'
	},
	{
		question: 'What is the capital of Russia?',
		difficulty: 'Easy',
		correctAnswer: 'Moscow',
		incorrectAnswers: ['St. Petersburg', 'Kiev', 'Warsaw'],
		category: 'Geography'
	},
	{
		question: 'The Eiffel Tower is in London',
		difficulty: 'Easy',
		correctAnswer: false,
		incorrectAnswers: [true],
		category: 'Geography'
	},
	{
		question: 'What is the longest river in the world?',
		difficulty: 'Medium',
		correctAnswer: 'Nile',
		incorrectAnswers: ['Amazon', 'Mississippi', 'Yangtze'],
		category: 'Geography'
	},
	{
		question: "Who painted 'The Last Supper'?",
		difficulty: 'Medium',
		correctAnswer: 'Leonardo da Vinci',
		incorrectAnswers: ['Michelangelo', 'Raphael', 'Botticelli'],
		category: 'Art'
	},
	{
		question: 'What is the chemical symbol for sodium?',
		difficulty: 'Medium',
		correctAnswer: 'Na',
		incorrectAnswers: ['So', 'Sd', 'Sa'],
		category: 'Science'
	},
	{
		question: "Which planet is known as the 'Morning Star'?",
		difficulty: 'Medium',
		correctAnswer: 'Venus',
		incorrectAnswers: ['Mars', 'Mercury', 'Jupiter'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Spain?',
		difficulty: 'Easy',
		correctAnswer: 'Madrid',
		incorrectAnswers: ['Barcelona', 'Seville', 'Valencia'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'Pride and Prejudice'?",
		difficulty: 'Medium',
		correctAnswer: 'Jane Austen',
		incorrectAnswers: ['Emily Brontë', 'Charlotte Brontë', 'Virginia Woolf'],
		category: 'Literature'
	},
	{
		question: 'What is the atomic number of carbon?',
		difficulty: 'Medium',
		correctAnswer: '6',
		incorrectAnswers: ['4', '8', '12'],
		category: 'Science'
	},
	{
		question: 'The Sun is a planet',
		difficulty: 'Easy',
		correctAnswer: false,
		incorrectAnswers: [true],
		category: 'Science'
	},
	{
		question: 'What is the smallest country in the world?',
		difficulty: 'Medium',
		correctAnswer: 'Vatican City',
		incorrectAnswers: ['Monaco', 'San Marino', 'Liechtenstein'],
		category: 'Geography'
	},
	{
		question: 'Who discovered penicillin?',
		difficulty: 'Medium',
		correctAnswer: 'Alexander Fleming',
		incorrectAnswers: ['Louis Pasteur', 'Robert Koch', 'Joseph Lister'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Italy?',
		difficulty: 'Easy',
		correctAnswer: 'Rome',
		incorrectAnswers: ['Milan', 'Venice', 'Florence'],
		category: 'Geography'
	},
	{
		question: "Who composed the 'Moonlight Sonata'?",
		difficulty: 'Medium',
		correctAnswer: 'Ludwig van Beethoven',
		incorrectAnswers: ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert'],
		category: 'Music'
	},
	{
		question: 'What is the chemical symbol for potassium?',
		difficulty: 'Medium',
		correctAnswer: 'K',
		incorrectAnswers: ['P', 'Pt', 'Po'],
		category: 'Science'
	},
	{
		question: 'Which continent is the coldest?',
		difficulty: 'Easy',
		correctAnswer: 'Antarctica',
		incorrectAnswers: ['Arctic', 'North America', 'Europe'],
		category: 'Geography'
	},
	{
		question: 'Who invented the telephone?',
		difficulty: 'Medium',
		correctAnswer: 'Alexander Graham Bell',
		incorrectAnswers: ['Thomas Edison', 'Nikola Tesla', 'George Eastman'],
		category: 'History'
	},
	{
		question: 'What is the capital of Germany?',
		difficulty: 'Easy',
		correctAnswer: 'Berlin',
		incorrectAnswers: ['Munich', 'Hamburg', 'Frankfurt'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'The Catcher in the Rye'?",
		difficulty: 'Medium',
		correctAnswer: 'J.D. Salinger',
		incorrectAnswers: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'John Steinbeck'],
		category: 'Literature'
	},
	{
		question: 'What is the boiling point of water in Celsius?',
		difficulty: 'Easy',
		correctAnswer: '100',
		incorrectAnswers: ['90', '110', '95'],
		category: 'Science'
	},
	{
		question: 'Mount Everest is the highest mountain on Earth',
		difficulty: 'Easy',
		correctAnswer: true,
		incorrectAnswers: [false],
		category: 'Geography'
	},
	{
		question: "Who painted 'The Birth of Venus'?",
		difficulty: 'Hard',
		correctAnswer: 'Sandro Botticelli',
		incorrectAnswers: ['Leonardo da Vinci', 'Michelangelo', 'Raphael'],
		category: 'Art'
	},
	{
		question: 'What is the chemical symbol for lead?',
		difficulty: 'Medium',
		correctAnswer: 'Pb',
		incorrectAnswers: ['Ld', 'Le', 'Lu'],
		category: 'Science'
	},
	{
		question: 'Which planet has the most moons?',
		difficulty: 'Medium',
		correctAnswer: 'Jupiter',
		incorrectAnswers: ['Saturn', 'Uranus', 'Neptune'],
		category: 'Science'
	},
	{
		question: 'What is the capital of South Korea?',
		difficulty: 'Medium',
		correctAnswer: 'Seoul',
		incorrectAnswers: ['Tokyo', 'Beijing', 'Bangkok'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'The Odyssey'?",
		difficulty: 'Medium',
		correctAnswer: 'Homer',
		incorrectAnswers: ['Virgil', 'Sophocles', 'Plato'],
		category: 'Literature'
	},
	{
		question: 'What is the atomic number of oxygen?',
		difficulty: 'Medium',
		correctAnswer: '8',
		incorrectAnswers: ['6', '10', '12'],
		category: 'Science'
	},
	{
		question: 'What is the normal resting heart rate range for adults?',
		difficulty: 'Medium',
		correctAnswer: '60-100 beats per minute',
		incorrectAnswers: [
			'40-60 beats per minute',
			'100-120 beats per minute',
			'120-140 beats per minute'
		],
		category: 'Science'
	},
	{
		question:
			'What color wire is typically used for the neutral conductor in US residential wiring?',
		difficulty: 'Medium',
		correctAnswer: 'White',
		incorrectAnswers: ['Black', 'Green', 'Red'],
		category: 'Science'
	},
	{
		question:
			"Which musical premiered at London's Prince Edward Theatre in 1989 with Lea Salonga as Kim?",
		difficulty: 'Medium',
		correctAnswer: 'Miss Saigon',
		incorrectAnswers: ['Les Misérables', 'Cats', 'The Phantom of the Opera'],
		category: 'Musical Theatre'
	},
	{
		question: 'What is the national flower of Wales?',
		difficulty: 'Easy',
		correctAnswer: 'Daffodil',
		incorrectAnswers: ['Rose', 'Thistle', 'Leek'],
		category: 'Geography'
	},
	{
		question: 'Which Japanese car manufacturer produces the Skyline GT-R?',
		difficulty: 'Easy',
		correctAnswer: 'Nissan',
		incorrectAnswers: ['Toyota', 'Honda', 'Mazda'],
		category: 'Cars'
	},
	{
		question: 'What is the maximum number of points possible from a single break in snooker?',
		difficulty: 'Medium',
		correctAnswer: '147',
		incorrectAnswers: ['140', '155', '167'],
		category: 'Sport'
	},
	{
		question: "What is the name of Chile's driest desert?",
		difficulty: 'Medium',
		correctAnswer: 'Atacama Desert',
		incorrectAnswers: ['Gobi Desert', 'Sahara Desert', 'Mojave Desert'],
		category: 'Geography'
	},
	{
		question: 'What does API stand for in software development?',
		difficulty: 'Easy',
		correctAnswer: 'Application Programming Interface',
		incorrectAnswers: [
			'Application Protocol Interface',
			'Advanced Programming Interface',
			'Automated Program Integration'
		],
		category: 'Science'
	},
	{
		question: 'What is the standard aperture f-stop scale?',
		difficulty: 'Medium',
		correctAnswer: 'f/1.4, f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16',
		incorrectAnswers: [
			'f/1, f/2, f/3, f/4, f/5, f/6, f/7, f/8',
			'f/2, f/4, f/6, f/8, f/10, f/12, f/14, f/16',
			'f/1.8, f/2.8, f/3.8, f/4.8, f/5.8, f/6.8, f/7.8, f/8.8'
		],
		category: 'Photography'
	},
	{
		question: 'What is the term for a score of three under par on a single hole in golf?',
		difficulty: 'Easy',
		correctAnswer: 'Albatross',
		incorrectAnswers: ['Eagle', 'Birdie', 'Bogey'],
		category: 'Sport'
	},
	{
		question: 'What is the normal resting heart rate range for adults?',
		difficulty: 'Medium',
		correctAnswer: '60-100 beats per minute',
		incorrectAnswers: [
			'40-60 beats per minute',
			'100-120 beats per minute',
			'120-140 beats per minute'
		],
		category: 'Science'
	},
	{
		question: 'Which medication is used as the first-line treatment for Type 2 Diabetes?',
		difficulty: 'Medium',
		correctAnswer: 'Metformin',
		incorrectAnswers: ['Insulin', 'Glipizide', 'Januvia'],
		category: 'Science'
	},
	{
		question: 'What is the normal range for systolic blood pressure in adults?',
		difficulty: 'Easy',
		correctAnswer: '90-120 mmHg',
		incorrectAnswers: ['140-160 mmHg', '70-80 mmHg', '130-150 mmHg'],
		category: 'Science'
	},
	{
		question: 'What color wire is typically used for the ground wire in US residential wiring?',
		difficulty: 'Easy',
		correctAnswer: 'Green',
		incorrectAnswers: ['White', 'Black', 'Red'],
		category: 'Science'
	},
	{
		question: 'What is the standard residential voltage in the United States?',
		difficulty: 'Easy',
		correctAnswer: '120V',
		incorrectAnswers: ['240V', '110V', '220V'],
		category: 'Science'
	},
	{
		question: 'Which type of electrical box must be used for ceiling fan installation?',
		difficulty: 'Medium',
		correctAnswer: 'Fan-rated box',
		incorrectAnswers: ['Standard junction box', 'Plastic box', 'Surface mount box'],
		category: 'Science'
	},
	{
		question: 'Which team has won the most Premier League titles?',
		difficulty: 'Easy',
		correctAnswer: 'Manchester United',
		incorrectAnswers: ['Liverpool', 'Chelsea', 'Arsenal'],
		category: 'Sport'
	},
	{
		question: 'Who holds the record for most goals in a single Premier League season?',
		difficulty: 'Medium',
		correctAnswer: 'Erling Haaland',
		incorrectAnswers: ['Alan Shearer', 'Mohamed Salah', 'Cristiano Ronaldo'],
		category: 'Sport'
	},
	{
		question: "Who composed 'The Phantom of the Opera'?",
		difficulty: 'Easy',
		correctAnswer: 'Andrew Lloyd Webber',
		incorrectAnswers: ['Stephen Sondheim', 'Claude-Michel Schönberg', 'Lin-Manuel Miranda'],
		category: 'Musical Theatre'
	},
	{
		question: "Which West End theatre has hosted 'Les Misérables' since 2004?",
		difficulty: 'Medium',
		correctAnswer: "Queen's Theatre",
		incorrectAnswers: ['London Palladium', 'Theatre Royal', 'Victoria Palace Theatre'],
		category: 'Musical Theatre'
	},
	{
		question: 'What is the capital city of Chile?',
		difficulty: 'Easy',
		correctAnswer: 'Santiago',
		incorrectAnswers: ['Valparaíso', 'Concepción', 'Antofagasta'],
		category: 'Geography'
	},
	{
		question: 'Which mountain range runs through Chile?',
		difficulty: 'Easy',
		correctAnswer: 'The Andes',
		incorrectAnswers: ['The Rockies', 'The Alps', 'The Himalayas'],
		category: 'Geography'
	},
	{
		question: 'What is the highest mountain in Wales?',
		difficulty: 'Medium',
		correctAnswer: 'Snowdon',
		incorrectAnswers: ['Cader Idris', 'Pen y Fan', 'Glyder Fawr'],
		category: 'Geography'
	},
	{
		question: "Which Welsh castle is known as the 'Castle of Welsh Princes'?",
		difficulty: 'Medium',
		correctAnswer: 'Caernarfon Castle',
		incorrectAnswers: ['Cardiff Castle', 'Conwy Castle', 'Harlech Castle'],
		category: 'Geography'
	},
	{
		question: 'How many points is the black ball worth in snooker?',
		difficulty: 'Easy',
		correctAnswer: '7',
		incorrectAnswers: ['5', '6', '8'],
		category: 'Sport'
	},
	{
		question: 'Who holds the record for most World Snooker Championship wins?',
		difficulty: 'Medium',
		correctAnswer: "Ronnie O'Sullivan",
		incorrectAnswers: ['Stephen Hendry', 'Steve Davis', 'John Higgins'],
		category: 'Sport'
	},
	{
		question: "Which golf tournament is known as 'The Masters'?",
		difficulty: 'Easy',
		correctAnswer: 'Augusta National',
		incorrectAnswers: ['The Open Championship', 'US Open', 'PGA Championship'],
		category: 'Sport'
	},
	{
		question: 'What is the term for completing a hole one stroke under par?',
		difficulty: 'Easy',
		correctAnswer: 'Birdie',
		incorrectAnswers: ['Eagle', 'Bogey', 'Par'],
		category: 'Sport'
	},
	{
		question: "What is the term for the total market value of a company's shares?",
		difficulty: 'Medium',
		correctAnswer: 'Market Capitalization',
		incorrectAnswers: ['Book Value', 'Enterprise Value', 'Equity Value'],
		category: 'Finance'
	},
	{
		question: 'What does P/E ratio stand for in stock market analysis?',
		difficulty: 'Medium',
		correctAnswer: 'Price to Earnings',
		incorrectAnswers: ['Profit to Equity', 'Price to Enterprise', 'Profit to Expense'],
		category: 'Finance'
	},
	{
		question: 'What does SQL stand for?',
		difficulty: 'Easy',
		correctAnswer: 'Structured Query Language',
		incorrectAnswers: ['Simple Query Language', 'Standard Query Logic', 'System Query Language'],
		category: 'Science'
	},
	{
		question: 'Which data structure operates on a LIFO principle?',
		difficulty: 'Medium',
		correctAnswer: 'Stack',
		incorrectAnswers: ['Queue', 'Array', 'Linked List'],
		category: 'Science'
	},
	{
		question: 'What does ISO measure in photography?',
		difficulty: 'Medium',
		correctAnswer: 'Light Sensitivity',
		incorrectAnswers: ['Shutter Speed', 'Aperture Size', 'Focal Length'],
		category: 'Photography'
	},
	{
		question: "What is the 'Golden Hour' in photography?",
		difficulty: 'Easy',
		correctAnswer: 'The period shortly after sunrise or before sunset',
		incorrectAnswers: ['Midnight', 'Noon', 'Dusk only'],
		category: 'Photography'
	},
	{
		question: 'Which Japanese manufacturer produces the Supra?',
		difficulty: 'Easy',
		correctAnswer: 'Toyota',
		incorrectAnswers: ['Honda', 'Nissan', 'Mazda'],
		category: 'Cars'
	},
	{
		question: 'What is the normal body temperature range in Celsius?',
		difficulty: 'Easy',
		correctAnswer: '36.5-37.5°C',
		incorrectAnswers: ['35-36°C', '38-39°C', '34-35°C'],
		category: 'Science'
	},
	{
		question: 'Which vaccine is typically given at birth?',
		difficulty: 'Medium',
		correctAnswer: 'Hepatitis B',
		incorrectAnswers: ['MMR', 'DPT', 'Polio'],
		category: 'Science'
	},
	{
		question: 'What is the most common type of shock?',
		difficulty: 'Medium',
		correctAnswer: 'Hypovolemic',
		incorrectAnswers: ['Cardiogenic', 'Neurogenic', 'Septic'],
		category: 'Science'
	},
	{
		question: "What is the Glasgow Coma Scale's maximum score?",
		difficulty: 'Medium',
		correctAnswer: '15',
		incorrectAnswers: ['10', '12', '20'],
		category: 'Science'
	},
	{
		question: 'Which position is recommended for preventing aspiration?',
		difficulty: 'Medium',
		correctAnswer: "Fowler's position",
		incorrectAnswers: ['Supine position', 'Trendelenburg position', 'Prone position'],
		category: 'Science'
	},
	{
		question: 'What is the normal respiratory rate range for adults?',
		difficulty: 'Easy',
		correctAnswer: '12-20 breaths per minute',
		incorrectAnswers: [
			'8-10 breaths per minute',
			'20-30 breaths per minute',
			'30-40 breaths per minute'
		],
		category: 'Science'
	},
	{
		question: 'Which blood type is considered the universal donor?',
		difficulty: 'Easy',
		correctAnswer: 'O negative',
		incorrectAnswers: ['A positive', 'B negative', 'AB positive'],
		category: 'Science'
	},
	{
		question: 'What is the medical term for high blood pressure?',
		difficulty: 'Easy',
		correctAnswer: 'Hypertension',
		incorrectAnswers: ['Hypotension', 'Hyponatremia', 'Hyperglycemia'],
		category: 'Science'
	},
	{
		question: 'What is the minimum wire size for a 20-amp circuit?',
		difficulty: 'Medium',
		correctAnswer: '12 AWG',
		incorrectAnswers: ['14 AWG', '10 AWG', '8 AWG'],
		category: 'Science'
	},
	{
		question: 'What color wire indicates a hot wire in US residential wiring?',
		difficulty: 'Easy',
		correctAnswer: 'Black',
		incorrectAnswers: ['White', 'Green', 'Blue'],
		category: 'Science'
	},
	{
		question: 'What is the maximum number of outlets allowed on a 20-amp circuit?',
		difficulty: 'Medium',
		correctAnswer: '10',
		incorrectAnswers: ['8', '12', '15'],
		category: 'Science'
	},
	{
		question: 'What type of conduit is most commonly used outdoors?',
		difficulty: 'Medium',
		correctAnswer: 'PVC',
		incorrectAnswers: ['EMT', 'IMC', 'RMC'],
		category: 'Science'
	},
	{
		question: 'What is the required GFCI protection distance from a kitchen sink?',
		difficulty: 'Medium',
		correctAnswer: '6 feet',
		incorrectAnswers: ['4 feet', '8 feet', '10 feet'],
		category: 'Science'
	},
	{
		question: 'What is the standard height for electrical outlets?',
		difficulty: 'Easy',
		correctAnswer: '12-18 inches',
		incorrectAnswers: ['24 inches', '6 inches', '30 inches'],
		category: 'Science'
	},
	{
		question: 'What size breaker is required for an electric range?',
		difficulty: 'Medium',
		correctAnswer: '50 amp',
		incorrectAnswers: ['30 amp', '40 amp', '60 amp'],
		category: 'Science'
	},
	{
		question: 'What is the standard wire color for a 240V circuit?',
		difficulty: 'Medium',
		correctAnswer: 'Red and Black',
		incorrectAnswers: ['White and Black', 'Green and White', 'Blue and Yellow'],
		category: 'Science'
	},
	{
		question: 'Which team won the first Premier League title?',
		difficulty: 'Medium',
		correctAnswer: 'Manchester United',
		incorrectAnswers: ['Arsenal', 'Liverpool', 'Chelsea'],
		category: 'Sport'
	},
	{
		question: 'Who holds the record for most Premier League appearances?',
		difficulty: 'Medium',
		correctAnswer: 'Gareth Barry',
		incorrectAnswers: ['Ryan Giggs', 'Frank Lampard', 'James Milner'],
		category: 'Sport'
	},
	{
		question: 'Which stadium has the largest capacity in the Premier League?',
		difficulty: 'Easy',
		correctAnswer: 'Old Trafford',
		incorrectAnswers: ['Emirates Stadium', 'Anfield', 'Tottenham Hotspur Stadium'],
		category: 'Sport'
	},
	{
		question: 'Who won the first FIFA World Cup?',
		difficulty: 'Medium',
		correctAnswer: 'Uruguay',
		incorrectAnswers: ['Brazil', 'Argentina', 'Italy'],
		category: 'Sport'
	},
	{
		question: 'What year was the Premier League founded?',
		difficulty: 'Medium',
		correctAnswer: '1992',
		incorrectAnswers: ['1990', '1988', '1994'],
		category: 'Sport'
	},
	{
		question: 'Which player has won the most Premier League Golden Boots?',
		difficulty: 'Medium',
		correctAnswer: 'Thierry Henry',
		incorrectAnswers: ['Alan Shearer', 'Harry Kane', 'Mohamed Salah'],
		category: 'Sport'
	},
	{
		question: 'What is the nickname of Manchester City?',
		difficulty: 'Easy',
		correctAnswer: 'The Citizens',
		incorrectAnswers: ['The Red Devils', 'The Gunners', 'The Blues'],
		category: 'Sport'
	},
	{
		question: 'Which musical is the longest-running in West End history?',
		difficulty: 'Easy',
		correctAnswer: 'Les Misérables',
		incorrectAnswers: ['The Phantom of the Opera', 'Cats', 'Chicago'],
		category: 'Musical Theatre'
	},
	{
		question: "In which theatre did 'The Mousetrap' originally open?",
		difficulty: 'Medium',
		correctAnswer: 'Ambassadors Theatre',
		incorrectAnswers: ["St Martin's Theatre", 'Lyceum Theatre', 'Apollo Theatre'],
		category: 'Musical Theatre'
	},
	{
		question: "Who composed 'Cats'?",
		difficulty: 'Easy',
		correctAnswer: 'Andrew Lloyd Webber',
		incorrectAnswers: ['Stephen Sondheim', 'Claude-Michel Schönberg', 'George Gershwin'],
		category: 'Musical Theatre'
	},
	{
		question: "Which theatre hosts 'The Lion King' in London?",
		difficulty: 'Medium',
		correctAnswer: 'Lyceum Theatre',
		incorrectAnswers: ['Apollo Victoria', 'Prince Edward Theatre', 'Adelphi Theatre'],
		category: 'Musical Theatre'
	},
	{
		question: "What year did 'Blood Brothers' premiere in the West End?",
		difficulty: 'Hard',
		correctAnswer: '1983',
		incorrectAnswers: ['1985', '1988', '1981'],
		category: 'Musical Theatre'
	},
	{
		question: "Which West End theatre is home to 'Wicked'?",
		difficulty: 'Medium',
		correctAnswer: 'Apollo Victoria',
		incorrectAnswers: ['London Palladium', 'Dominion Theatre', 'Victoria Palace'],
		category: 'Musical Theatre'
	},
	{
		question: "What year did 'Mamma Mia!' open in the West End?",
		difficulty: 'Medium',
		correctAnswer: '1999',
		incorrectAnswers: ['1997', '2001', '2003'],
		category: 'Musical Theatre'
	},
	{
		question: "What is Chile's official language?",
		difficulty: 'Easy',
		correctAnswer: 'Spanish',
		incorrectAnswers: ['Portuguese', 'English', 'French'],
		category: 'Chile'
	},
	{
		question: "What is Chile's largest lake?",
		difficulty: 'Medium',
		correctAnswer: 'Lake Llanquihue',
		incorrectAnswers: ['Lake Villarrica', 'Lake Puyehue', 'Lake Ranco'],
		category: 'Geography'
	},
	{
		question: 'Which famous Chilean poet won the Nobel Prize for Literature?',
		difficulty: 'Medium',
		correctAnswer: 'Pablo Neruda',
		incorrectAnswers: ['Gabriela Mistral', 'Vicente Huidobro', 'Pablo de Rokha'],
		category: 'Literature'
	},
	{
		question: "What is Chile's national animal?",
		difficulty: 'Medium',
		correctAnswer: 'Andean Condor',
		incorrectAnswers: ['Guanaco', 'Puma', 'Vicuña'],
		category: 'Culture'
	},
	{
		question: 'What is the largest city in Chile?',
		difficulty: 'Easy',
		correctAnswer: 'Santiago',
		incorrectAnswers: ['Valparaíso', 'Concepción', 'Antofagasta'],
		category: 'Geography'
	},
	{
		question: 'What is the traditional Welsh instrument?',
		difficulty: 'Easy',
		correctAnswer: 'Triple Harp',
		incorrectAnswers: ['Bagpipes', 'Fiddle', 'Flute'],
		category: 'Culture'
	},
	{
		question: 'Which Welsh castle was built by Edward I?',
		difficulty: 'Medium',
		correctAnswer: 'Caernarfon Castle',
		incorrectAnswers: ['Cardiff Castle', 'Pembroke Castle', 'Raglan Castle'],
		category: 'History'
	},
	{
		question: 'What is the highest mountain in Wales?',
		difficulty: 'Easy',
		correctAnswer: 'Snowdon',
		incorrectAnswers: ['Cader Idris', 'Pen y Fan', 'Glyder Fawr'],
		category: 'Geography'
	},
	{
		question: 'Which Welsh town has the longest place name in Europe?',
		difficulty: 'Hard',
		correctAnswer: 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch',
		incorrectAnswers: ['Machynlleth', 'Aberystwyth', 'Pontypridd'],
		category: 'Geography'
	},
	{
		question: 'What is the capital city of Wales?',
		difficulty: 'Easy',
		correctAnswer: 'Cardiff',
		incorrectAnswers: ['Swansea', 'Newport', 'Bangor'],
		category: 'Geography'
	},
	{
		question: 'What is the maximum break possible in snooker without a free ball?',
		difficulty: 'Easy',
		correctAnswer: '147',
		incorrectAnswers: ['150', '155', '145'],
		category: 'Sport'
	},
	{
		question: 'What color ball is worth 6 points in snooker?',
		difficulty: 'Medium',
		correctAnswer: 'Pink',
		incorrectAnswers: ['Blue', 'Brown', 'Green'],
		category: 'Sport'
	},
	{
		question: 'Who achieved the fastest 147 break in history?',
		difficulty: 'Hard',
		correctAnswer: "Ronnie O'Sullivan",
		incorrectAnswers: ['Stephen Hendry', 'Mark Williams', 'John Higgins'],
		category: 'Sport'
	},
	{
		question: 'What is the diameter of a snooker ball?',
		difficulty: 'Medium',
		correctAnswer: '52.5mm',
		incorrectAnswers: ['51mm', '54mm', '50mm'],
		category: 'Sport'
	},
	{
		question: 'What is the standard length of a snooker table?',
		difficulty: 'Medium',
		correctAnswer: '12 feet',
		incorrectAnswers: ['10 feet', '14 feet', '15 feet'],
		category: 'Sport'
	},
	{
		question: 'What is the standard length of a golf course in yards?',
		difficulty: 'Medium',
		correctAnswer: '7,200',
		incorrectAnswers: ['6,500', '8,000', '7,800'],
		category: 'Sport'
	},
	{
		question: 'How many clubs are you allowed in your golf bag?',
		difficulty: 'Easy',
		correctAnswer: '14',
		incorrectAnswers: ['12', '16', '18'],
		category: 'Sport'
	},
	{
		question: 'What is the diameter of a golf hole in inches?',
		difficulty: 'Medium',
		correctAnswer: '4.25',
		incorrectAnswers: ['4', '4.5', '3.75'],
		category: 'Sport'
	},
	{
		question: 'What is the term for a score of one over par?',
		difficulty: 'Easy',
		correctAnswer: 'Bogey',
		incorrectAnswers: ['Eagle', 'Birdie', 'Double Bogey'],
		category: 'Sport'
	},
	{
		question: 'Which golf major is played at Augusta National?',
		difficulty: 'Easy',
		correctAnswer: 'The Masters',
		incorrectAnswers: ['US Open', 'The Open Championship', 'PGA Championship'],
		category: 'Sport'
	},
	{
		question:
			"What is the term for measuring a company's quick assets against its current liabilities?",
		difficulty: 'Medium',
		correctAnswer: 'Quick Ratio',
		incorrectAnswers: ['Current Ratio', 'Debt Ratio', 'Asset Ratio'],
		category: 'Finance'
	},
	{
		question: "What is the term for the difference between a bond's face value and its price?",
		difficulty: 'Medium',
		correctAnswer: 'Premium/Discount',
		incorrectAnswers: ['Spread', 'Yield', 'Coupon'],
		category: 'Finance'
	},
	{
		question: 'What does EBITDA stand for?',
		difficulty: 'Medium',
		correctAnswer: 'Earnings Before Interest, Taxes, Depreciation, and Amortization',
		incorrectAnswers: [
			'Earnings Before Income Tax and Debt Assessment',
			'Earnings Before Interest and Tax Deduction Analysis',
			'Enterprise Before Interest Tax Debt Analysis'
		],
		category: 'Finance'
	},
	{
		question: 'What is the term for the initial offering of shares to the public?',
		difficulty: 'Easy',
		correctAnswer: 'IPO',
		incorrectAnswers: ['APO', 'NGO', 'NPO'],
		category: 'Finance'
	},
	{
		question: 'What does REST stand for in API development?',
		difficulty: 'Medium',
		correctAnswer: 'Representational State Transfer',
		incorrectAnswers: [
			'Remote State Transfer',
			'Resource State Transfer',
			'Remote System Transfer'
		],
		category: 'Science'
	},
	{
		question: 'What is the time complexity of binary search?',
		difficulty: 'Medium',
		correctAnswer: 'O(log n)',
		incorrectAnswers: ['O(n)', 'O(n log n)', 'O(1)'],
		category: 'Science'
	},
	{
		question: 'Which programming paradigm does JavaScript primarily follow?',
		difficulty: 'Medium',
		correctAnswer: 'Object-Oriented and Functional',
		incorrectAnswers: ['Procedural', 'Logic', 'Structured'],
		category: 'Science'
	},
	{
		question: 'What is the default port for HTTP?',
		difficulty: 'Easy',
		correctAnswer: '80',
		incorrectAnswers: ['443', '8080', '3000'],
		category: 'Science'
	},
	{
		question: 'What does CSS stand for?',
		difficulty: 'Easy',
		correctAnswer: 'Cascading Style Sheets',
		incorrectAnswers: ['Computer Style Sheets', 'Creative Style System', 'Coded Style Structure'],
		category: 'Science'
	},
	{
		question: 'What is the term for the amount of light entering a camera?',
		difficulty: 'Easy',
		correctAnswer: 'Exposure',
		incorrectAnswers: ['Aperture', 'Shutter', 'ISO'],
		category: 'Photography'
	},
	{
		question: "What is the 'Rule of Thirds' in photography?",
		difficulty: 'Medium',
		correctAnswer: 'Dividing frame into nine equal squares for composition',
		incorrectAnswers: [
			'Taking three identical photos',
			'Using three light sources',
			'Setting aperture to f/3'
		],
		category: 'Photography'
	},
	{
		question: 'What does DSLR stand for?',
		difficulty: 'Easy',
		correctAnswer: 'Digital Single-Lens Reflex',
		incorrectAnswers: [
			'Digital System Lens Return',
			'Dual Sensor Lens Reflex',
			'Digital Single Light Reflection'
		],
		category: 'Photography'
	},
	{
		question: 'What is bokeh in photography?',
		difficulty: 'Medium',
		correctAnswer: 'The aesthetic quality of background blur',
		incorrectAnswers: ['A type of camera', 'A lens coating', 'A lighting technique'],
		category: 'Photography'
	},
	{
		question: 'Which Japanese car manufacturer produces the Civic?',
		difficulty: 'Easy',
		correctAnswer: 'Honda',
		incorrectAnswers: ['Toyota', 'Nissan', 'Mazda'],
		category: 'Cars'
	},
	{
		question: 'Which Japanese car company owns Lexus?',
		difficulty: 'Medium',
		correctAnswer: 'Toyota',
		incorrectAnswers: ['Honda', 'Nissan', 'Mitsubishi'],
		category: 'Cars'
	},
	{
		question: 'What year was the first Nissan GT-R released?',
		difficulty: 'Hard',
		correctAnswer: '2007',
		incorrectAnswers: ['2005', '2009', '2003'],
		category: 'Cars'
	},
	{
		question: 'Which Japanese manufacturer is known for the RX-7?',
		difficulty: 'Medium',
		correctAnswer: 'Mazda',
		incorrectAnswers: ['Toyota', 'Honda', 'Subaru'],
		category: 'Cars'
	},
	{
		question: "What is the name of Toyota's luxury vehicle division?",
		difficulty: 'Easy',
		correctAnswer: 'Lexus',
		incorrectAnswers: ['Infiniti', 'Acura', 'Genesis'],
		category: 'Cars'
	},
	{
		question: 'What is the normal oxygen saturation range?',
		difficulty: 'Easy',
		correctAnswer: '95-100%',
		incorrectAnswers: ['85-90%', '80-85%', '90-92%'],
		category: 'Science'
	},
	{
		question: 'What voltage does a GFCI need to trip?',
		difficulty: 'Medium',
		correctAnswer: '5 milliamps',
		incorrectAnswers: ['10 milliamps', '15 milliamps', '20 milliamps'],
		category: 'Science'
	},
	{
		question: 'Who won the 2024 League Cup Final?',
		difficulty: 'Easy',
		correctAnswer: 'Liverpool',
		incorrectAnswers: ['Chelsea', 'Manchester City', 'Manchester United'],
		category: 'Sport'
	},
	{
		question: "Which West End musical features the song 'Memory'?",
		difficulty: 'Easy',
		correctAnswer: 'Cats',
		incorrectAnswers: ['Les Misérables', 'The Phantom of the Opera', 'Miss Saigon'],
		category: 'Musical Theatre'
	},
	{
		question: "What is Chile's main export?",
		difficulty: 'Medium',
		correctAnswer: 'Copper',
		incorrectAnswers: ['Wine', 'Fish', 'Fruit'],
		category: 'Geography'
	},
	{
		question: "What is Wales's most famous rugby stadium?",
		difficulty: 'Easy',
		correctAnswer: 'Principality Stadium',
		incorrectAnswers: ['Liberty Stadium', 'Cardiff City Stadium', 'Parc y Scarlets'],
		category: 'Sport'
	},
	{
		question: 'What color is the blue ball worth in snooker?',
		difficulty: 'Easy',
		correctAnswer: '5',
		incorrectAnswers: ['4', '6', '7'],
		category: 'Sport'
	},
	{
		question: 'What is ROI in finance?',
		difficulty: 'Easy',
		correctAnswer: 'Return on Investment',
		incorrectAnswers: ['Rate of Interest', 'Return on Income', 'Rate of Inflation'],
		category: 'Finance'
	},
	{
		question: 'What does JSON stand for?',
		difficulty: 'Easy',
		correctAnswer: 'JavaScript Object Notation',
		incorrectAnswers: [
			'Java Standard Object Notation',
			'JavaScript Oriented Navigation',
			'Java Source Object Network'
		],
		category: 'Science'
	},
	{
		question: 'What is the minimum focusing distance?',
		difficulty: 'Medium',
		correctAnswer: 'The closest point at which a lens can focus',
		incorrectAnswers: [
			'The furthest point of focus',
			'The midpoint of focus',
			'The optimal focusing range'
		],
		category: 'Photography'
	},
	{
		question: 'Which Japanese car manufacturer produces the WRX?',
		difficulty: 'Medium',
		correctAnswer: 'Subaru',
		incorrectAnswers: ['Mitsubishi', 'Toyota', 'Nissan'],
		category: 'Cars'
	},
	{
		question: 'What is the normal range for diastolic blood pressure?',
		difficulty: 'Easy',
		correctAnswer: '60-80 mmHg',
		incorrectAnswers: ['90-100 mmHg', '40-50 mmHg', '100-120 mmHg'],
		category: 'Science'
	},
	{
		question: 'What size wire is required for a 15-amp circuit?',
		difficulty: 'Medium',
		correctAnswer: '14 AWG',
		incorrectAnswers: ['12 AWG', '10 AWG', '16 AWG'],
		category: 'Science'
	},
	{
		question: 'Which team has won the most FA Cups?',
		difficulty: 'Medium',
		correctAnswer: 'Arsenal',
		incorrectAnswers: ['Manchester United', 'Liverpool', 'Chelsea'],
		category: 'Sport'
	},
	{
		question: "Which theatre hosts 'Matilda the Musical'?",
		difficulty: 'Medium',
		correctAnswer: 'Cambridge Theatre',
		incorrectAnswers: ['Palace Theatre', 'Novello Theatre', 'Gielgud Theatre'],
		category: 'Musical Theatre'
	},
	{
		question: "What is the name of Chile's most active volcano?",
		difficulty: 'Hard',
		correctAnswer: 'Villarrica',
		incorrectAnswers: ['Ojos del Salado', 'Lascar', 'Calbuco'],
		category: 'Geography'
	},
	{
		question: 'What is the Welsh word for Wales?',
		difficulty: 'Medium',
		correctAnswer: 'Cymru',
		incorrectAnswers: ['Cymraeg', 'Gymru', 'Cymry'],
		category: 'Geography'
	},
	{
		question: 'What is the value of the brown ball in snooker?',
		difficulty: 'Easy',
		correctAnswer: '4',
		incorrectAnswers: ['3', '5', '6'],
		category: 'Sport'
	},
	{
		question: 'What is the term for making a hole in one shot?',
		difficulty: 'Easy',
		correctAnswer: 'Hole in One',
		incorrectAnswers: ['Eagle', 'Double Eagle', 'Ace'],
		category: 'Sport'
	},
	{
		question: 'What is a bear market?',
		difficulty: 'Easy',
		correctAnswer: 'A market characterized by falling prices',
		incorrectAnswers: ['A market with rising prices', 'A stable market', 'A volatile market'],
		category: 'Finance'
	},
	{
		question: 'What is Git?',
		difficulty: 'Easy',
		correctAnswer: 'Version Control System',
		incorrectAnswers: ['Programming Language', 'Database System', 'Web Framework'],
		category: 'Science'
	},
	{
		question: 'What does RAW mean in photography?',
		difficulty: 'Medium',
		correctAnswer: 'Uncompressed image format',
		incorrectAnswers: ['High resolution JPEG', 'Black and white format', 'Film negative'],
		category: 'Photography'
	},
	{
		question: 'Which Japanese company makes the Lancer Evolution?',
		difficulty: 'Medium',
		correctAnswer: 'Mitsubishi',
		incorrectAnswers: ['Subaru', 'Toyota', 'Honda'],
		category: 'Cars'
	},
	{
		question: 'What is the medical term for low blood sugar?',
		difficulty: 'Medium',
		correctAnswer: 'Hypoglycemia',
		incorrectAnswers: ['Hyperglycemia', 'Hyperlipidemia', 'Hyperkalemia'],
		category: 'Science'
	},
	{
		question: 'What is the purpose of a junction box?',
		difficulty: 'Easy',
		correctAnswer: 'To house wire connections',
		incorrectAnswers: ['To regulate voltage', 'To measure current', 'To ground circuits'],
		category: 'Science'
	},
	{
		question: 'Who holds the record for most Premier League clean sheets?',
		difficulty: 'Medium',
		correctAnswer: 'Petr Cech',
		incorrectAnswers: ['Peter Schmeichel', 'David James', 'Edwin van der Sar'],
		category: 'Sport'
	},
	{
		question: "Which musical features the song 'Don't Cry For Me Argentina'?",
		difficulty: 'Medium',
		correctAnswer: 'Evita',
		incorrectAnswers: ['Chicago', 'West Side Story', 'Cats'],
		category: 'Musical Theatre'
	},
	{
		question: "What is Chile's national dance?",
		difficulty: 'Medium',
		correctAnswer: 'Cueca',
		incorrectAnswers: ['Tango', 'Salsa', 'Samba'],
		category: 'Chile'
	},
	{
		question: "What color is on the Welsh flag's dragon?",
		difficulty: 'Easy',
		correctAnswer: 'Red',
		incorrectAnswers: ['Green', 'White', 'Black'],
		category: 'Geography'
	},
	{
		question: 'What is the minimum number of reds needed for a 147 break?',
		difficulty: 'Medium',
		correctAnswer: '15',
		incorrectAnswers: ['12', '14', '16'],
		category: 'Sport'
	},
	{
		question: 'What material are golf balls primarily made of?',
		difficulty: 'Medium',
		correctAnswer: 'Urethane',
		incorrectAnswers: ['Rubber', 'Plastic', 'Leather'],
		category: 'Sport'
	},
	{
		question: 'What is a hedge fund?',
		difficulty: 'Medium',
		correctAnswer: 'An investment partnership using pooled funds',
		incorrectAnswers: ['A savings account', 'A government bond', 'A stock market index'],
		category: 'Finance'
	},
	{
		question: 'What is an API endpoint?',
		difficulty: 'Medium',
		correctAnswer: 'A point of communication with a server',
		incorrectAnswers: ['A programming language', 'A database type', 'A web browser'],
		category: 'Science'
	},
	{
		question: 'What is a prime lens?',
		difficulty: 'Medium',
		correctAnswer: 'A lens with fixed focal length',
		incorrectAnswers: ['A zoom lens', 'A wide-angle lens', 'A telephoto lens'],
		category: 'Photography'
	},
	{
		question: 'Which Japanese car manufacturer created the RX-8?',
		difficulty: 'Medium',
		correctAnswer: 'Mazda',
		incorrectAnswers: ['Honda', 'Toyota', 'Nissan'],
		category: 'Cars'
	},
	{
		question: 'What is an MVP in software development',
		difficulty: 'Easy',
		correctAnswer: 'Minimum Viable Product',
		incorrectAnswers: ['Most Valuable Player', 'Many Variants Perfected', 'My Versatile Plugin'],
		category: 'Science'
	},
	{
		question: 'What is the medical term for inflammation of the appendix?',
		difficulty: 'Medium',
		correctAnswer: 'Appendicitis',
		incorrectAnswers: ['Tonsillitis', 'Bronchitis', 'Arthritis'],
		category: 'Science'
	},
	{
		question: 'What is the voltage drop allowed on a branch circuit?',
		difficulty: 'Hard',
		correctAnswer: '3%',
		incorrectAnswers: ['5%', '2%', '4%'],
		category: 'Science'
	},
	{
		question: 'Which player scored the fastest Premier League hat-trick?',
		difficulty: 'Hard',
		correctAnswer: 'Sadio Mané',
		incorrectAnswers: ['Alan Shearer', 'Robbie Fowler', 'Mohamed Salah'],
		category: 'Sport'
	},
	{
		question: "In which year did 'We Will Rock You' open in the West End?",
		difficulty: 'Medium',
		correctAnswer: '2002',
		incorrectAnswers: ['2000', '2004', '2006'],
		category: 'Musical Theatre'
	},
	{
		question: "What is the name of Chile's largest island?",
		difficulty: 'Hard',
		correctAnswer: 'Isla de Chiloé',
		incorrectAnswers: ['Easter Island', 'Robinson Crusoe Island', 'Isla Navarino'],
		category: 'Geography'
	},
	{
		question: 'What is the Welsh national vegetable?',
		difficulty: 'Medium',
		correctAnswer: 'Leek',
		incorrectAnswers: ['Carrot', 'Potato', 'Onion'],
		category: 'Geography'
	},
	{
		question: 'What is the width of a snooker table?',
		difficulty: 'Medium',
		correctAnswer: '6 feet',
		incorrectAnswers: ['5 feet', '7 feet', '8 feet'],
		category: 'Sport'
	},
	{
		question: 'What is the standard weight of a golf ball in ounces?',
		difficulty: 'Hard',
		correctAnswer: '1.62',
		incorrectAnswers: ['1.50', '1.75', '2.00'],
		category: 'Sport'
	},
	{
		question: 'What is a blue chip stock?',
		difficulty: 'Medium',
		correctAnswer: 'A stock of a well-established company',
		incorrectAnswers: ['A new technology stock', 'A penny stock', 'A government bond'],
		category: 'Finance'
	},
	{
		question: 'What does DNS stand for?',
		difficulty: 'Easy',
		correctAnswer: 'Domain Name System',
		incorrectAnswers: ['Dynamic Network Service', 'Data Network Storage', 'Digital Naming Service'],
		category: 'Science'
	},
	{
		question: "Who painted 'The Persistence of Memory'?",
		difficulty: 'Medium',
		correctAnswer: 'Salvador Dalí',
		incorrectAnswers: ['Pablo Picasso', 'Vincent van Gogh', 'René Magritte'],
		category: 'Art'
	},
	{
		question: "Which philosopher wrote 'Beyond Good and Evil'?",
		difficulty: 'Medium',
		correctAnswer: 'Friedrich Nietzsche',
		incorrectAnswers: ['Jean-Paul Sartre', 'Immanuel Kant', 'Arthur Schopenhauer'],
		category: 'Philosophy'
	},
	{
		question: "Who composed 'Symphony No. 5'?",
		difficulty: 'Easy',
		correctAnswer: 'Ludwig van Beethoven',
		incorrectAnswers: ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert'],
		category: 'Music'
	},
	{
		question: "Who directed 'The Godfather'?",
		difficulty: 'Easy',
		correctAnswer: 'Francis Ford Coppola',
		incorrectAnswers: ['Martin Scorsese', 'Stanley Kubrick', 'Steven Spielberg'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'One Hundred Years of Solitude'?",
		difficulty: 'Medium',
		correctAnswer: 'Gabriel García Márquez',
		incorrectAnswers: ['Jorge Luis Borges', 'Mario Vargas Llosa', 'Pablo Neruda'],
		category: 'Literature'
	},
	{
		question: "Which band released 'Abbey Road'?",
		difficulty: 'Easy',
		correctAnswer: 'The Beatles',
		incorrectAnswers: ['The Rolling Stones', 'Led Zeppelin', 'The Who'],
		category: 'Music'
	},
	{
		question: 'Who painted the ceiling of the Sistine Chapel?',
		difficulty: 'Easy',
		correctAnswer: 'Michelangelo',
		incorrectAnswers: ['Leonardo da Vinci', 'Raphael', 'Botticelli'],
		category: 'Art'
	},
	{
		question: "Which philosopher wrote 'The Social Contract'?",
		difficulty: 'Medium',
		correctAnswer: 'Jean-Jacques Rousseau',
		incorrectAnswers: ['John Locke', 'Thomas Hobbes', 'Voltaire'],
		category: 'Philosophy'
	},
	{
		question: "Who directed '2001: A Space Odyssey'?",
		difficulty: 'Easy',
		correctAnswer: 'Stanley Kubrick',
		incorrectAnswers: ['George Lucas', 'Steven Spielberg', 'Ridley Scott'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'Pride and Prejudice'?",
		difficulty: 'Easy',
		correctAnswer: 'Jane Austen',
		incorrectAnswers: ['Charlotte Brontë', 'Emily Brontë', 'Virginia Woolf'],
		category: 'Literature'
	},
	{
		question: "Which artist painted 'Girl with a Pearl Earring'?",
		difficulty: 'Medium',
		correctAnswer: 'Johannes Vermeer',
		incorrectAnswers: ['Rembrandt', 'Frans Hals', 'Jan van Eyck'],
		category: 'Art'
	},
	{
		question: "Who composed 'Für Elise'?",
		difficulty: 'Easy',
		correctAnswer: 'Ludwig van Beethoven',
		incorrectAnswers: ['Wolfgang Amadeus Mozart', 'Franz Schubert', 'Johann Sebastian Bach'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'Critique of Pure Reason'?",
		difficulty: 'Medium',
		correctAnswer: 'Immanuel Kant',
		incorrectAnswers: [
			'Georg Wilhelm Friedrich Hegel',
			'Arthur Schopenhauer',
			'Friedrich Nietzsche'
		],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'Citizen Kane'?",
		difficulty: 'Easy',
		correctAnswer: 'Orson Welles',
		incorrectAnswers: ['Alfred Hitchcock', 'John Ford', 'Howard Hawks'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'The Catcher in the Rye'?",
		difficulty: 'Easy',
		correctAnswer: 'J.D. Salinger',
		incorrectAnswers: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'John Steinbeck'],
		category: 'Literature'
	},
	{
		question: "Which artist created 'The Birth of Venus'?",
		difficulty: 'Medium',
		correctAnswer: 'Sandro Botticelli',
		incorrectAnswers: ['Leonardo da Vinci', 'Raphael', 'Michelangelo'],
		category: 'Art'
	},
	{
		question: "Who composed 'The Magic Flute'?",
		difficulty: 'Easy',
		correctAnswer: 'Wolfgang Amadeus Mozart',
		incorrectAnswers: ['Ludwig van Beethoven', 'Johann Sebastian Bach', 'Franz Schubert'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'Meditations on First Philosophy'?",
		difficulty: 'Medium',
		correctAnswer: 'René Descartes',
		incorrectAnswers: ['Baruch Spinoza', 'Gottfried Leibniz', 'John Locke'],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'Apocalypse Now'?",
		difficulty: 'Medium',
		correctAnswer: 'Francis Ford Coppola',
		incorrectAnswers: ['Martin Scorsese', 'Stanley Kubrick', 'Steven Spielberg'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'The Great Gatsby'?",
		difficulty: 'Easy',
		correctAnswer: 'F. Scott Fitzgerald',
		incorrectAnswers: ['Ernest Hemingway', 'William Faulkner', 'John Steinbeck'],
		category: 'Literature'
	},
	{
		question: "Which artist painted 'The Night Watch'?",
		difficulty: 'Medium',
		correctAnswer: 'Rembrandt',
		incorrectAnswers: ['Johannes Vermeer', 'Frans Hals', 'Jan van Eyck'],
		category: 'Art'
	},
	{
		question: "Who composed 'The Nutcracker'?",
		difficulty: 'Medium',
		correctAnswer: 'Pyotr Ilyich Tchaikovsky',
		incorrectAnswers: ['Igor Stravinsky', 'Sergei Prokofiev', 'Dmitri Shostakovich'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'The Prince'?",
		difficulty: 'Medium',
		correctAnswer: 'Niccolò Machiavelli',
		incorrectAnswers: ['Thomas More', 'Francis Bacon', 'Thomas Hobbes'],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'Schindler's List'?",
		difficulty: 'Easy',
		correctAnswer: 'Steven Spielberg',
		incorrectAnswers: ['Martin Scorsese', 'Francis Ford Coppola', 'Roman Polanski'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'To Kill a Mockingbird'?",
		difficulty: 'Easy',
		correctAnswer: 'Harper Lee',
		incorrectAnswers: ['John Steinbeck', 'William Faulkner', 'Ernest Hemingway'],
		category: 'Literature'
	},
	{
		question: "Which artist created 'The Thinker'?",
		difficulty: 'Medium',
		correctAnswer: 'Auguste Rodin',
		incorrectAnswers: ['Michelangelo', 'Bernini', 'Donatello'],
		category: 'Art'
	},
	{
		question: "Who composed 'Moonlight Sonata'?",
		difficulty: 'Easy',
		correctAnswer: 'Ludwig van Beethoven',
		incorrectAnswers: ['Wolfgang Amadeus Mozart', 'Franz Schubert', 'Johannes Brahms'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'Being and Time'?",
		difficulty: 'Hard',
		correctAnswer: 'Martin Heidegger',
		incorrectAnswers: ['Jean-Paul Sartre', 'Edmund Husserl', 'Maurice Merleau-Ponty'],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'The Shawshank Redemption'?",
		difficulty: 'Medium',
		correctAnswer: 'Frank Darabont',
		incorrectAnswers: ['Rob Reiner', 'Brian De Palma', 'Oliver Stone'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'Don Quixote'?",
		difficulty: 'Medium',
		correctAnswer: 'Miguel de Cervantes',
		incorrectAnswers: ['Jorge Luis Borges', 'Gabriel García Márquez', 'Pablo Neruda'],
		category: 'Literature'
	},
	{
		question: "Which artist painted 'The Scream'?",
		difficulty: 'Medium',
		correctAnswer: 'Edvard Munch',
		incorrectAnswers: ['Vincent van Gogh', 'Pablo Picasso', 'Salvador Dalí'],
		category: 'Art'
	},
	{
		question: "Who composed 'Carmen'?",
		difficulty: 'Medium',
		correctAnswer: 'Georges Bizet',
		incorrectAnswers: ['Giuseppe Verdi', 'Giacomo Puccini', 'Richard Wagner'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'Thus Spoke Zarathustra'?",
		difficulty: 'Medium',
		correctAnswer: 'Friedrich Nietzsche',
		incorrectAnswers: ['Søren Kierkegaard', 'Arthur Schopenhauer', 'Jean-Paul Sartre'],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'Vertigo'?",
		difficulty: 'Easy',
		correctAnswer: 'Alfred Hitchcock',
		incorrectAnswers: ['Orson Welles', 'Billy Wilder', 'Howard Hawks'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'War and Peace'?",
		difficulty: 'Easy',
		correctAnswer: 'Leo Tolstoy',
		incorrectAnswers: ['Fyodor Dostoevsky', 'Anton Chekhov', 'Ivan Turgenev'],
		category: 'Literature'
	},
	{
		question: "Which artist painted 'The Garden of Earthly Delights'?",
		difficulty: 'Hard',
		correctAnswer: 'Hieronymus Bosch',
		incorrectAnswers: ['Pieter Bruegel', 'Jan van Eyck', 'Albrecht Dürer'],
		category: 'Art'
	},
	{
		question: "Who composed 'Rhapsody in Blue'?",
		difficulty: 'Medium',
		correctAnswer: 'George Gershwin',
		incorrectAnswers: ['Irving Berlin', 'Cole Porter', 'Leonard Bernstein'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'The Second Sex'?",
		difficulty: 'Medium',
		correctAnswer: 'Simone de Beauvoir',
		incorrectAnswers: ['Mary Wollstonecraft', 'Hannah Arendt', 'Judith Butler'],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'The Seventh Seal'?",
		difficulty: 'Medium',
		correctAnswer: 'Ingmar Bergman',
		incorrectAnswers: ['Federico Fellini', 'Akira Kurosawa', 'François Truffaut'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'Brave New World'?",
		difficulty: 'Easy',
		correctAnswer: 'Aldous Huxley',
		incorrectAnswers: ['George Orwell', 'Ray Bradbury', 'Philip K. Dick'],
		category: 'Literature'
	},
	{
		question: "Which artist created 'The Kiss'?",
		difficulty: 'Medium',
		correctAnswer: 'Gustav Klimt',
		incorrectAnswers: ['Auguste Rodin', 'Constantin Brancusi', 'Edgar Degas'],
		category: 'Art'
	},
	{
		question: "Who composed 'The Rite of Spring'?",
		difficulty: 'Medium',
		correctAnswer: 'Igor Stravinsky',
		incorrectAnswers: ['Claude Debussy', 'Maurice Ravel', 'Sergei Prokofiev'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'The Art of War'?",
		difficulty: 'Medium',
		correctAnswer: 'Sun Tzu',
		incorrectAnswers: ['Confucius', 'Lao Tzu', 'Mencius'],
		category: 'Philosophy'
	},
	{
		question: "Who directed 'Rashomon'?",
		difficulty: 'Medium',
		correctAnswer: 'Akira Kurosawa',
		incorrectAnswers: ['Yasujirō Ozu', 'Kenji Mizoguchi', 'Mikio Naruse'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'The Canterbury Tales'?",
		difficulty: 'Medium',
		correctAnswer: 'Geoffrey Chaucer',
		incorrectAnswers: ['William Langland', 'John Gower', 'Thomas Malory'],
		category: 'Literature'
	},
	{
		question: "Which artist painted 'Water Lilies'?",
		difficulty: 'Easy',
		correctAnswer: 'Claude Monet',
		incorrectAnswers: ['Pierre-Auguste Renoir', 'Edgar Degas', 'Paul Cézanne'],
		category: 'Art'
	},
	{
		question: "Who composed 'Bolero'?",
		difficulty: 'Medium',
		correctAnswer: 'Maurice Ravel',
		incorrectAnswers: ['Claude Debussy', 'Erik Satie', 'Gabriel Fauré'],
		category: 'Music'
	},
	{
		question: "Which philosopher wrote 'On Liberty'?",
		difficulty: 'Medium',
		correctAnswer: 'John Stuart Mill',
		incorrectAnswers: ['Jeremy Bentham', 'Thomas Hobbes', 'John Locke'],
		category: 'Philosophy'
	},
	{
		question: "Who directed '8½'?",
		difficulty: 'Medium',
		correctAnswer: 'Federico Fellini',
		incorrectAnswers: ['Michelangelo Antonioni', 'Vittorio De Sica', 'Roberto Rossellini'],
		category: 'Movies'
	},
	{
		question: "Who wrote 'The Divine Comedy'?",
		difficulty: 'Medium',
		correctAnswer: 'Dante Alighieri',
		incorrectAnswers: ['Giovanni Boccaccio', 'Francesco Petrarch', 'Ludovico Ariosto'],
		category: 'Literature'
	},
	{
		question: 'What is the largest desert in Africa?',
		difficulty: 'Easy',
		correctAnswer: 'Sahara Desert',
		incorrectAnswers: ['Arabian Desert', 'Kalahari Desert', 'Namib Desert'],
		category: 'Geography'
	},
	{
		question: 'Who developed the theory of evolution by natural selection?',
		difficulty: 'Easy',
		correctAnswer: 'Charles Darwin',
		incorrectAnswers: ['Gregor Mendel', 'Louis Pasteur', 'Alfred Wallace'],
		category: 'Science'
	},
	{
		question: 'Which ancient civilization built the pyramids at Giza?',
		difficulty: 'Easy',
		correctAnswer: 'Ancient Egyptians',
		incorrectAnswers: ['Ancient Greeks', 'Romans', 'Mayans'],
		category: 'History'
	},
	{
		question: 'What is the study of fossils called?',
		difficulty: 'Medium',
		correctAnswer: 'Paleontology',
		incorrectAnswers: ['Archaeology', 'Geology', 'Biology'],
		category: 'Science'
	},
	{
		question: "Who painted 'The School of Athens'?",
		difficulty: 'Medium',
		correctAnswer: 'Raphael',
		incorrectAnswers: ['Michelangelo', 'Leonardo da Vinci', 'Botticelli'],
		category: 'Art'
	},
	{
		question: 'What is the capital of Argentina?',
		difficulty: 'Medium',
		correctAnswer: 'Buenos Aires',
		incorrectAnswers: ['Santiago', 'Lima', 'Montevideo'],
		category: 'Geography'
	},
	{
		question: 'Which element has the atomic number 79?',
		difficulty: 'Hard',
		correctAnswer: 'Gold',
		incorrectAnswers: ['Silver', 'Platinum', 'Copper'],
		category: 'Science'
	},
	{
		question: "Who wrote 'The Republic'?",
		difficulty: 'Medium',
		correctAnswer: 'Plato',
		incorrectAnswers: ['Aristotle', 'Socrates', 'Herodotus'],
		category: 'Philosophy'
	},
	{
		question: 'What is the largest moon of Saturn?',
		difficulty: 'Medium',
		correctAnswer: 'Titan',
		incorrectAnswers: ['Europa', 'Ganymede', 'Phobos'],
		category: 'Science'
	},
	{
		question: "Which composer wrote 'The Four Seasons'?",
		difficulty: 'Medium',
		correctAnswer: 'Antonio Vivaldi',
		incorrectAnswers: ['Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven'],
		category: 'Music'
	},
	{
		question: 'What is the hardest natural substance on Earth?',
		difficulty: 'Easy',
		correctAnswer: 'Diamond',
		incorrectAnswers: ['Gold', 'Iron', 'Granite'],
		category: 'Science'
	},
	{
		question: 'Who was the first woman to win a Nobel Prize?',
		difficulty: 'Medium',
		correctAnswer: 'Marie Curie',
		incorrectAnswers: ['Mother Teresa', 'Jane Addams', 'Pearl Buck'],
		category: 'History'
	},
	{
		question: 'What is the smallest bone in the human body?',
		difficulty: 'Medium',
		correctAnswer: 'Stapes',
		incorrectAnswers: ['Hammer', 'Anvil', 'Hyoid'],
		category: 'Science'
	},
	{
		question: 'Which ancient wonder was located in Alexandria?',
		difficulty: 'Medium',
		correctAnswer: 'The Lighthouse',
		incorrectAnswers: ['The Colossus', 'The Hanging Gardens', 'The Temple of Artemis'],
		category: 'History'
	},
	{
		question: 'What is the main component of the Sun?',
		difficulty: 'Easy',
		correctAnswer: 'Hydrogen',
		incorrectAnswers: ['Helium', 'Oxygen', 'Carbon'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Morocco?',
		difficulty: 'Medium',
		correctAnswer: 'Rabat',
		incorrectAnswers: ['Casablanca', 'Marrakech', 'Fez'],
		category: 'Geography'
	},
	{
		question: 'Who discovered penicillin?',
		difficulty: 'Medium',
		correctAnswer: 'Alexander Fleming',
		incorrectAnswers: ['Louis Pasteur', 'Robert Koch', 'Joseph Lister'],
		category: 'Science'
	},
	{
		question: 'Which civilization built Machu Picchu?',
		difficulty: 'Easy',
		correctAnswer: 'Inca',
		incorrectAnswers: ['Maya', 'Aztec', 'Olmec'],
		category: 'History'
	},
	{
		question: 'What is the largest species of shark?',
		difficulty: 'Easy',
		correctAnswer: 'Whale Shark',
		incorrectAnswers: ['Great White Shark', 'Hammerhead Shark', 'Tiger Shark'],
		category: 'Science'
	},
	{
		question: "Who composed 'Swan Lake'?",
		difficulty: 'Medium',
		correctAnswer: 'Tchaikovsky',
		incorrectAnswers: ['Mozart', 'Beethoven', 'Bach'],
		category: 'Music'
	},
	{
		question: 'What is the deepest point in the ocean?',
		difficulty: 'Medium',
		correctAnswer: 'Mariana Trench',
		incorrectAnswers: ['Puerto Rico Trench', 'Java Trench', 'Tonga Trench'],
		category: 'Geography'
	},
	{
		question: 'Who was the first Emperor of China?',
		difficulty: 'Medium',
		correctAnswer: 'Qin Shi Huang',
		incorrectAnswers: ['Han Wudi', 'Tang Taizong', 'Ming Hongwu'],
		category: 'History'
	},
	{
		question: 'What is the study of weather called?',
		difficulty: 'Easy',
		correctAnswer: 'Meteorology',
		incorrectAnswers: ['Climatology', 'Geography', 'Astronomy'],
		category: 'Science'
	},
	{
		question: "Which artist painted 'The Persistence of Memory'?",
		difficulty: 'Medium',
		correctAnswer: 'Salvador Dalí',
		incorrectAnswers: ['Pablo Picasso', 'Vincent van Gogh', 'Claude Monet'],
		category: 'Art'
	},
	{
		question: 'What is the largest organ in the human body?',
		difficulty: 'Easy',
		correctAnswer: 'Skin',
		incorrectAnswers: ['Liver', 'Brain', 'Heart'],
		category: 'Science'
	},
	{
		question: "Who wrote 'The Art of War'?",
		difficulty: 'Medium',
		correctAnswer: 'Sun Tzu',
		incorrectAnswers: ['Confucius', 'Lao Tzu', 'Mencius'],
		category: 'Literature'
	},
	{
		question: 'What is the chemical symbol for silver?',
		difficulty: 'Medium',
		correctAnswer: 'Ag',
		incorrectAnswers: ['Si', 'Au', 'Fe'],
		category: 'Science'
	},
	{
		question: 'Which mountain range runs through South America?',
		difficulty: 'Easy',
		correctAnswer: 'Andes',
		incorrectAnswers: ['Rockies', 'Alps', 'Himalayas'],
		category: 'Geography'
	},
	{
		question: 'Who invented the telephone?',
		difficulty: 'Easy',
		correctAnswer: 'Alexander Graham Bell',
		incorrectAnswers: ['Thomas Edison', 'Nikola Tesla', 'George Eastman'],
		category: 'History'
	},
	{
		question: 'What is the hardest natural substance?',
		difficulty: 'Easy',
		correctAnswer: 'Diamond',
		incorrectAnswers: ['Iron', 'Titanium', 'Quartz'],
		category: 'Science'
	},
	{
		question: 'Which planet has the Great Red Spot?',
		difficulty: 'Medium',
		correctAnswer: 'Jupiter',
		incorrectAnswers: ['Mars', 'Saturn', 'Neptune'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Finland?',
		difficulty: 'Medium',
		correctAnswer: 'Helsinki',
		incorrectAnswers: ['Oslo', 'Stockholm', 'Copenhagen'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'The Picture of Dorian Gray'?",
		difficulty: 'Medium',
		correctAnswer: 'Oscar Wilde',
		incorrectAnswers: ['Charles Dickens', 'Edgar Allan Poe', 'Mark Twain'],
		category: 'Literature'
	},
	{
		question: 'What is the chemical symbol for tungsten?',
		difficulty: 'Hard',
		correctAnswer: 'W',
		incorrectAnswers: ['Tu', 'Tn', 'Tg'],
		category: 'Science'
	},
	{
		question: 'Which ancient civilization created the Terracotta Army?',
		difficulty: 'Medium',
		correctAnswer: 'Chinese',
		incorrectAnswers: ['Roman', 'Greek', 'Persian'],
		category: 'History'
	},
	{
		question: 'What is the longest river in Europe?',
		difficulty: 'Medium',
		correctAnswer: 'Volga',
		incorrectAnswers: ['Danube', 'Rhine', 'Seine'],
		category: 'Geography'
	},
	{
		question: "Who composed 'The Marriage of Figaro'?",
		difficulty: 'Medium',
		correctAnswer: 'Wolfgang Amadeus Mozart',
		incorrectAnswers: ['Ludwig van Beethoven', 'Johann Sebastian Bach', 'Joseph Haydn'],
		category: 'Music'
	},
	{
		question: 'What is the study of fungi called?',
		difficulty: 'Medium',
		correctAnswer: 'Mycology',
		incorrectAnswers: ['Biology', 'Botany', 'Zoology'],
		category: 'Science'
	},
	{
		question: "Which philosopher wrote 'The Republic'?",
		difficulty: 'Medium',
		correctAnswer: 'Plato',
		incorrectAnswers: ['Aristotle', 'Socrates', 'Pythagoras'],
		category: 'Philosophy'
	},
	{
		question: 'What is the capital of New Zealand?',
		difficulty: 'Medium',
		correctAnswer: 'Wellington',
		incorrectAnswers: ['Auckland', 'Christchurch', 'Hamilton'],
		category: 'Geography'
	},
	{
		question: "Who painted 'The Night Café'?",
		difficulty: 'Medium',
		correctAnswer: 'Vincent van Gogh',
		incorrectAnswers: ['Paul Gauguin', 'Paul Cézanne', 'Claude Monet'],
		category: 'Art'
	},
	{
		question: 'Which element has the atomic number 92?',
		difficulty: 'Hard',
		correctAnswer: 'Uranium',
		incorrectAnswers: ['Plutonium', 'Thorium', 'Radium'],
		category: 'Science'
	},
	{
		question: 'Who was the first woman in space?',
		difficulty: 'Medium',
		correctAnswer: 'Valentina Tereshkova',
		incorrectAnswers: ['Sally Ride', 'Judith Resnik', 'Svetlana Savitskaya'],
		category: 'History'
	},
	{
		question: 'What is the capital of Vietnam?',
		difficulty: 'Medium',
		correctAnswer: 'Hanoi',
		incorrectAnswers: ['Ho Chi Minh City', 'Da Nang', 'Hue'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'The Metamorphosis'?",
		difficulty: 'Medium',
		correctAnswer: 'Franz Kafka',
		incorrectAnswers: ['James Joyce', 'Virginia Woolf', 'Thomas Mann'],
		category: 'Literature'
	},
	{
		question: 'What is the speed of sound in air at sea level?',
		difficulty: 'Hard',
		correctAnswer: '343 meters per second',
		incorrectAnswers: ['300 meters per second', '400 meters per second', '500 meters per second'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Croatia?',
		difficulty: 'Medium',
		correctAnswer: 'Zagreb',
		incorrectAnswers: ['Split', 'Dubrovnik', 'Rijeka'],
		category: 'Geography'
	},
	{
		question: 'Who discovered radioactivity?',
		difficulty: 'Medium',
		correctAnswer: 'Henri Becquerel',
		incorrectAnswers: ['Marie Curie', 'Wilhelm Röntgen', 'Ernest Rutherford'],
		category: 'Science'
	},
	{
		question: "Which composer wrote 'The Planets' suite?",
		difficulty: 'Hard',
		correctAnswer: 'Gustav Holst',
		incorrectAnswers: ['Claude Debussy', 'Richard Strauss', 'Igor Stravinsky'],
		category: 'Music'
	},
	{
		question: 'What is the largest species of penguin?',
		difficulty: 'Medium',
		correctAnswer: 'Emperor Penguin',
		incorrectAnswers: ['King Penguin', 'Gentoo Penguin', 'Royal Penguin'],
		category: 'Science'
	},
	{
		question: "Who wrote 'One Flew Over the Cuckoo's Nest'?",
		difficulty: 'Medium',
		correctAnswer: 'Ken Kesey',
		incorrectAnswers: ['Jack Kerouac', 'William S. Burroughs', 'Allen Ginsberg'],
		category: 'Literature'
	},
	{
		question: "What is the main component of Earth's atmosphere?",
		difficulty: 'Easy',
		correctAnswer: 'Nitrogen',
		incorrectAnswers: ['Oxygen', 'Carbon Dioxide', 'Argon'],
		category: 'Science'
	},
	{
		question: 'Which ancient civilization built the city of Petra?',
		difficulty: 'Medium',
		correctAnswer: 'Nabataeans',
		incorrectAnswers: ['Romans', 'Greeks', 'Persians'],
		category: 'History'
	},
	{
		question: 'What is the capital city of Belarus?',
		difficulty: 'Easy',
		correctAnswer: 'Minsk',
		incorrectAnswers: ['Brest', 'Grodno', 'Gomel'],
		category: 'Belarus'
	},
	{
		question: 'What are the official languages of Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Belarusian and Russian',
		incorrectAnswers: ['Only Belarusian', 'Only Russian', 'Belarusian and Ukrainian'],
		category: 'Geography'
	},
	{
		question: "Which famous artist from Belarus painted 'The Birthday'?",
		difficulty: 'Medium',
		correctAnswer: 'Marc Chagall',
		incorrectAnswers: ['Chaim Soutine', 'Leon Bakst', 'Ossip Zadkine'],
		category: 'Art'
	},
	{
		question: 'What is the national flower of Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Cornflower',
		incorrectAnswers: ['Rose', 'Lily', 'Tulip'],
		category: 'Culture'
	},
	{
		question: 'Which UNESCO World Heritage site is located in Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Mir Castle Complex',
		incorrectAnswers: ['Peterhof Palace', 'Catherine Palace', 'Winter Palace'],
		category: 'Geography'
	},
	{
		question: 'What is the traditional Belarusian folk dance?',
		difficulty: 'Medium',
		correctAnswer: 'Lyavonikha',
		incorrectAnswers: ['Hopak', 'Kalinka', 'Trepak'],
		category: 'Culture'
	},
	{
		question: 'What is a traditional Belarusian dish made from grated potatoes?',
		difficulty: 'Medium',
		correctAnswer: 'Draniki',
		incorrectAnswers: ['Borscht', 'Pelmeni', 'Vareniki'],
		category: 'Culture'
	},
	{
		question: "Which famous Belarusian author wrote 'War to the Death'?",
		difficulty: 'Hard',
		correctAnswer: 'Vasil Bykaŭ',
		incorrectAnswers: ['Yakub Kolas', 'Yanka Kupala', 'Ivan Melezh'],
		category: 'Culture'
	},
	{
		question: 'What is the largest lake in Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Lake Narach',
		incorrectAnswers: ['Lake Svityaz', 'Lake Chervonoye', 'Lake Lukoml'],
		category: 'Geography'
	},
	{
		question: 'What is the national animal of Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'European Bison',
		incorrectAnswers: ['Brown Bear', 'Wolf', 'Lynx'],
		category: 'Geography'
	},
	{
		question: 'Which traditional Belarusian festival celebrates the summer solstice?',
		difficulty: 'Medium',
		correctAnswer: 'Kupalle',
		incorrectAnswers: ['Maslenitsa', 'Kaliady', 'Dazhynki'],
		category: 'Culture'
	},
	{
		question: 'What is the name of the largest forest in Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Belovezhskaya Pushcha',
		incorrectAnswers: ['Naliboki Forest', 'Pripyat Forest', 'Braslav Forest'],
		category: 'Geography'
	},
	{
		question: 'What is the traditional Belarusian musical instrument similar to a flute?',
		difficulty: 'Medium',
		correctAnswer: 'Dudka',
		incorrectAnswers: ['Balalaika', 'Domra', 'Gusli'],
		category: 'Culture'
	},
	{
		question: 'Which Belarusian city was a major center of Jewish culture before WWII?',
		difficulty: 'Hard',
		correctAnswer: 'Vitebsk',
		incorrectAnswers: ['Brest', 'Grodno', 'Minsk'],
		category: 'History'
	},
	{
		question: 'What colors are on the Belarusian flag?',
		difficulty: 'Medium',
		correctAnswer: 'Red and White',
		incorrectAnswers: ['Blue and Yellow', 'Red, Green and White', 'Green and White only'],
		category: 'Geography'
	},
	{
		question: 'Which river is the longest in Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Dnieper',
		incorrectAnswers: ['Pripyat', 'Western Dvina', 'Nemunas'],
		category: 'Geography'
	},
	{
		question: 'What is the traditional Belarusian wedding bread called?',
		difficulty: 'Hard',
		correctAnswer: 'Karavai',
		incorrectAnswers: ['Babka', 'Draniki', 'Khleb'],
		category: 'Culture'
	},
	{
		question: "Which famous Belarusian poet wrote 'The Banner'?",
		difficulty: 'Hard',
		correctAnswer: 'Yanka Kupala',
		incorrectAnswers: ['Yakub Kolas', 'Maksim Bahdanovich', 'Vasil Bykaŭ'],
		category: 'Culture'
	},
	{
		question: 'What is the name of the main opera house in Minsk?',
		difficulty: 'Medium',
		correctAnswer: 'National Academic Bolshoi Opera and Ballet Theatre',
		incorrectAnswers: ['Minsk Opera House', 'Belarus State Opera', 'Royal Opera House Minsk'],
		category: 'Culture'
	},
	{
		question: 'What is the traditional Belarusian drink made from fermented bread?',
		difficulty: 'Medium',
		correctAnswer: 'Kvass',
		incorrectAnswers: ['Kompot', 'Medovukha', 'Sbiten'],
		category: 'Culture'
	},
	{
		question: 'Which Belarusian city was a major center of the Radziwill family?',
		difficulty: 'Hard',
		correctAnswer: 'Nesvizh',
		incorrectAnswers: ['Minsk', 'Grodno', 'Brest'],
		category: 'History'
	},
	{
		question: 'What is the name of the largest technology park in Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Hi-Tech Park',
		incorrectAnswers: ['Belarus Tech Valley', 'Minsk Innovation Center', 'Digital City Belarus'],
		category: 'Geography'
	},
	{
		question: 'What is the traditional Belarusian embroidery pattern called?',
		difficulty: 'Hard',
		correctAnswer: 'Vyshyvanka',
		incorrectAnswers: ['Rushnik', 'Pysanka', 'Malyavanka'],
		category: 'Culture'
	},
	{
		question: 'Which medieval trade route passed through Belarus?',
		difficulty: 'Medium',
		correctAnswer: 'Route from the Varangians to the Greeks',
		incorrectAnswers: ['Silk Road', 'Amber Road', 'Salt Road'],
		category: 'History'
	},
	{
		question: 'Which car manufacturer produces the 911 model?',
		difficulty: 'Easy',
		correctAnswer: 'Porsche',
		incorrectAnswers: ['BMW', 'Mercedes', 'Audi'],
		category: 'Cars'
	},
	{
		question: 'What country is Ferrari from?',
		difficulty: 'Easy',
		correctAnswer: 'Italy',
		incorrectAnswers: ['Germany', 'France', 'Spain'],
		category: 'Cars'
	},
	{
		question: 'What does BMW stand for in English?',
		difficulty: 'Medium',
		correctAnswer: 'Bavarian Motor Works',
		incorrectAnswers: ['British Motor Works', 'Belgian Motor Works', 'Berlin Motor Works'],
		category: 'Cars'
	},
	{
		question: 'What is the traditional Japanese tea ceremony called?',
		difficulty: 'Medium',
		correctAnswer: 'Chanoyu',
		incorrectAnswers: ['Kabuki', 'Ikebana', 'Origami'],
		category: 'Culture'
	},
	{
		question: 'What is the national dress of Scotland called?',
		difficulty: 'Easy',
		correctAnswer: 'Kilt',
		incorrectAnswers: ['Sarong', 'Kimono', 'Lederhosen'],
		category: 'Culture'
	},
	{
		question: "Which band released 'Hotel California' in 1977?",
		difficulty: 'Easy',
		correctAnswer: 'Eagles',
		incorrectAnswers: ['Led Zeppelin', 'Pink Floyd', 'The Beatles'],
		category: 'Music'
	},
	{
		question: "Who sang 'Dancing Queen' in 1976?",
		difficulty: 'Easy',
		correctAnswer: 'ABBA',
		incorrectAnswers: ['Queen', 'The Bee Gees', 'Blondie'],
		category: 'Music'
	},
	{
		question: "Which band released 'Sweet Child O' Mine' in 1987?",
		difficulty: 'Medium',
		correctAnswer: "Guns N' Roses",
		incorrectAnswers: ['Aerosmith', 'Bon Jovi', 'Mötley Crüe'],
		category: 'Music'
	},
	{
		question: "Who sang 'Smells Like Teen Spirit' in 1991?",
		difficulty: 'Easy',
		correctAnswer: 'Nirvana',
		incorrectAnswers: ['Pearl Jam', 'Soundgarden', 'Alice in Chains'],
		category: 'Music'
	},
	{
		question: "Which artist released 'Shape of You' in 2017?",
		difficulty: 'Easy',
		correctAnswer: 'Ed Sheeran',
		incorrectAnswers: ['Justin Bieber', 'Bruno Mars', 'The Weeknd'],
		category: 'Music'
	},
	{
		question: 'Which car manufacturer produces the Mustang?',
		difficulty: 'Easy',
		correctAnswer: 'Ford',
		incorrectAnswers: ['Chevrolet', 'Dodge', 'Plymouth'],
		category: 'Cars'
	},
	{
		question: 'What is the flagship supercar model of McLaren?',
		difficulty: 'Medium',
		correctAnswer: 'P1',
		incorrectAnswers: ['F1', '720S', 'Senna'],
		category: 'Cars'
	},
	{
		question: "Which car company uses the tagline 'The Ultimate Driving Machine'?",
		difficulty: 'Medium',
		correctAnswer: 'BMW',
		incorrectAnswers: ['Mercedes-Benz', 'Audi', 'Porsche'],
		category: 'Cars'
	},
	{
		question: 'What is the traditional greeting in Japan called?',
		difficulty: 'Easy',
		correctAnswer: 'Bow',
		incorrectAnswers: ['Handshake', 'Namaste', 'Wai'],
		category: 'Culture'
	},
	{
		question: "Which festival is known as the 'Festival of Colors'?",
		difficulty: 'Medium',
		correctAnswer: 'Holi',
		incorrectAnswers: ['Diwali', 'Songkran', 'Carnival'],
		category: 'Culture'
	},
	{
		question: "Who released 'Stairway to Heaven' in 1971?",
		difficulty: 'Easy',
		correctAnswer: 'Led Zeppelin',
		incorrectAnswers: ['Deep Purple', 'Black Sabbath', 'The Who'],
		category: 'Music'
	},
	{
		question: "Which band released 'Another Brick in the Wall' in 1979?",
		difficulty: 'Easy',
		correctAnswer: 'Pink Floyd',
		incorrectAnswers: ['The Who', 'Genesis', 'Yes'],
		category: 'Music'
	},
	{
		question: "Who sang 'Like a Prayer' in 1989?",
		difficulty: 'Easy',
		correctAnswer: 'Madonna',
		incorrectAnswers: ['Cyndi Lauper', 'Whitney Houston', 'Janet Jackson'],
		category: 'Music'
	},
	{
		question: "Which band released 'Black or White' in 1991?",
		difficulty: 'Easy',
		correctAnswer: 'Michael Jackson',
		incorrectAnswers: ['Prince', 'George Michael', 'Bobby Brown'],
		category: 'Music'
	},
	{
		question: "Who performed 'Blinding Lights' released in 2020?",
		difficulty: 'Easy',
		correctAnswer: 'The Weeknd',
		incorrectAnswers: ['Post Malone', 'Drake', 'Justin Bieber'],
		category: 'Music'
	},
	{
		question: 'What car company owns Lamborghini?',
		difficulty: 'Medium',
		correctAnswer: 'Volkswagen Group',
		incorrectAnswers: ['BMW', 'Mercedes-Benz', 'Ferrari'],
		category: 'Cars'
	},
	{
		question: 'Which car manufacturer created the GT-R?',
		difficulty: 'Medium',
		correctAnswer: 'Nissan',
		incorrectAnswers: ['Toyota', 'Honda', 'Mazda'],
		category: 'Cars'
	},
	{
		question: 'What car company produces the Model S?',
		difficulty: 'Easy',
		correctAnswer: 'Tesla',
		incorrectAnswers: ['Lucid', 'Rivian', 'Polestar'],
		category: 'Cars'
	},
	{
		question: 'What is the traditional dress of Korea called?',
		difficulty: 'Medium',
		correctAnswer: 'Hanbok',
		incorrectAnswers: ['Kimono', 'Cheongsam', 'Ao Dai'],
		category: 'Culture'
	},
	{
		question: 'Which country originated the art of origami?',
		difficulty: 'Medium',
		correctAnswer: 'Japan',
		incorrectAnswers: ['China', 'Korea', 'Vietnam'],
		category: 'Culture'
	},
	{
		question: "Who sang 'Stayin' Alive' in 1977?",
		difficulty: 'Easy',
		correctAnswer: 'Bee Gees',
		incorrectAnswers: ['ABBA', 'Queen', 'The Jackson 5'],
		category: 'Music'
	},
	{
		question: "Which band released 'Walk This Way' in 1986?",
		difficulty: 'Medium',
		correctAnswer: 'Run-DMC with Aerosmith',
		incorrectAnswers: ['Beastie Boys', 'The Police', 'Bon Jovi'],
		category: 'Music'
	},
	{
		question: "Who performed 'Ice Ice Baby' in 1990?",
		difficulty: 'Easy',
		correctAnswer: 'Vanilla Ice',
		incorrectAnswers: ['MC Hammer', 'Beastie Boys', 'Public Enemy'],
		category: 'Music'
	},
	{
		question: "Which artist released 'Bad Guy' in 2019?",
		difficulty: 'Easy',
		correctAnswer: 'Billie Eilish',
		incorrectAnswers: ['Ariana Grande', 'Taylor Swift', 'Lorde'],
		category: 'Music'
	},
	{
		question: "Who sang 'Sweet Dreams (Are Made of This)' in 1983?",
		difficulty: 'Medium',
		correctAnswer: 'Eurythmics',
		incorrectAnswers: ['Duran Duran', 'Culture Club', 'The Human League'],
		category: 'Music'
	},
	{
		question: 'Which 2019 film features Joaquin Phoenix as Arthur Fleck?',
		difficulty: 'Easy',
		correctAnswer: 'Joker',
		incorrectAnswers: ['The Batman', 'Venom', 'Dark Phoenix'],
		category: 'Movies'
	},
	{
		question: 'What 2008 superhero film stars Robert Downey Jr. as Tony Stark?',
		difficulty: 'Easy',
		correctAnswer: 'Iron Man',
		incorrectAnswers: ['The Dark Knight', 'Hulk', 'Spider-Man'],
		category: 'Movies'
	},
	{
		question: "Which Korean TV series became Netflix's most-watched show in 2021?",
		difficulty: 'Easy',
		correctAnswer: 'Squid Game',
		incorrectAnswers: ['All of Us Are Dead', 'Kingdom', 'Sweet Home'],
		category: 'Television'
	},
	{
		question: "Which HBO series features dragons and is based on George R.R. Martin's books?",
		difficulty: 'Easy',
		correctAnswer: 'Game of Thrones',
		incorrectAnswers: ['The Witcher', 'Shadow and Bone', 'Wheel of Time'],
		category: 'Television'
	},
	{
		question: 'What is the traditional New Year celebration in China called?',
		difficulty: 'Medium',
		correctAnswer: 'Spring Festival',
		incorrectAnswers: ['Mid-Autumn Festival', 'Dragon Boat Festival', 'Lantern Festival'],
		category: 'Culture'
	},
	{
		question: 'What is the traditional Indian wedding dress called?',
		difficulty: 'Medium',
		correctAnswer: 'Lehenga',
		incorrectAnswers: ['Sari', 'Salwar', 'Kurti'],
		category: 'Culture'
	},
	{
		question: "Who released 'As It Was' in 2022?",
		difficulty: 'Easy',
		correctAnswer: 'Harry Styles',
		incorrectAnswers: ['Ed Sheeran', 'Justin Bieber', 'The Weeknd'],
		category: 'Music'
	},
	{
		question: "Which artist released 'Anti-Hero' in 2022?",
		difficulty: 'Easy',
		correctAnswer: 'Taylor Swift',
		incorrectAnswers: ['Lana Del Rey', 'Billie Eilish', 'Olivia Rodrigo'],
		category: 'Music'
	},
	{
		question: "Who performed 'Uptown Funk' in 2014?",
		difficulty: 'Easy',
		correctAnswer: 'Mark Ronson ft. Bruno Mars',
		incorrectAnswers: ['Pharrell Williams', 'Justin Timberlake', 'The Weeknd'],
		category: 'Music'
	},
	{
		question: 'Which Netflix series features the character Eleven?',
		difficulty: 'Easy',
		correctAnswer: 'Stranger Things',
		incorrectAnswers: ['Wednesday', 'The Umbrella Academy', 'Dark'],
		category: 'Television'
	},
	{
		question: 'Which 2023 film features Margot Robbie and Ryan Gosling in pink?',
		difficulty: 'Easy',
		correctAnswer: 'Barbie',
		incorrectAnswers: ['Mean Girls', 'Legally Blonde 3', 'Princess Diaries 3'],
		category: 'Movies'
	},
	{
		question: 'What 2023 Christopher Nolan film explores the creation of the atomic bomb?',
		difficulty: 'Easy',
		correctAnswer: 'Oppenheimer',
		incorrectAnswers: ['Dunkirk', 'Tenet', 'Interstellar'],
		category: 'Movies'
	},
	{
		question:
			'Which Apple TV+ series stars Jason Sudeikis as an American football coach in England?',
		difficulty: 'Easy',
		correctAnswer: 'Ted Lasso',
		incorrectAnswers: ['The Morning Show', 'Shrinking', 'Bad Sisters'],
		category: 'Television'
	},
	{
		question: "What Netflix series follows Queen Elizabeth II's reign?",
		difficulty: 'Easy',
		correctAnswer: 'The Crown',
		incorrectAnswers: ['Bridgerton', 'The Great', 'Victoria'],
		category: 'Television'
	},
	{
		question: 'What is the traditional Moon viewing festival in Japan called?',
		difficulty: 'Medium',
		correctAnswer: 'Tsukimi',
		incorrectAnswers: ['Hanami', 'Tanabata', 'Obon'],
		category: 'Culture'
	},
	{
		question: 'What is the traditional Korean martial art called?',
		difficulty: 'Medium',
		correctAnswer: 'Taekwondo',
		incorrectAnswers: ['Karate', 'Judo', 'Kung Fu'],
		category: 'Culture'
	},
	{
		question: "Who released 'Flowers' in 2023?",
		difficulty: 'Easy',
		correctAnswer: 'Miley Cyrus',
		incorrectAnswers: ['Dua Lipa', 'Ariana Grande', 'Selena Gomez'],
		category: 'Music'
	},
	{
		question: "Which artist released 'Vampire' in 2023?",
		difficulty: 'Easy',
		correctAnswer: 'Olivia Rodrigo',
		incorrectAnswers: ['Taylor Swift', 'Billie Eilish', 'Lorde'],
		category: 'Music'
	},
	{
		question: "Who performed 'Unholy' in 2022?",
		difficulty: 'Easy',
		correctAnswer: 'Sam Smith & Kim Petras',
		incorrectAnswers: ['Doja Cat', 'Lady Gaga', 'The Weeknd'],
		category: 'Music'
	},
	{
		question: 'Which Disney+ series features Pedro Pascal as Din Djarin?',
		difficulty: 'Medium',
		correctAnswer: 'The Mandalorian',
		incorrectAnswers: ['Andor', 'Obi-Wan Kenobi', 'The Book of Boba Fett'],
		category: 'Television'
	},
	{
		question: 'Which 2023 film stars Tom Cruise in his final Mission Impossible role?',
		difficulty: 'Easy',
		correctAnswer: 'Mission: Impossible - Dead Reckoning Part One',
		incorrectAnswers: ['Top Gun: Maverick', 'Edge of Tomorrow 2', 'Mission: Impossible 7'],
		category: 'Movies'
	},
	{
		question: 'What 2022 film won the Oscar for Best Picture?',
		difficulty: 'Medium',
		correctAnswer: 'Everything Everywhere All at Once',
		incorrectAnswers: ['The Banshees of Inisherin', 'Top Gun: Maverick', 'Elvis'],
		category: 'Movies'
	},
	{
		question: 'Which HBO series is based on a video game featuring zombies?',
		difficulty: 'Easy',
		correctAnswer: 'The Last of Us',
		incorrectAnswers: ['House of the Dragon', 'The Walking Dead', 'Resident Evil'],
		category: 'Television'
	},
	{
		question: 'What Disney+ Marvel series features Tatiana Maslany as Jennifer Walters?',
		difficulty: 'Medium',
		correctAnswer: 'She-Hulk: Attorney at Law',
		incorrectAnswers: ['Ms. Marvel', 'WandaVision', 'Loki'],
		category: 'Television'
	},
	{
		question: 'What is the traditional Vietnamese New Year called?',
		difficulty: 'Medium',
		correctAnswer: 'Tết',
		incorrectAnswers: ['Songkran', 'Seollal', 'Losar'],
		category: 'Culture'
	},
	{
		question: 'What is the traditional Mexican Day of the Dead celebration called?',
		difficulty: 'Easy',
		correctAnswer: 'Día de los Muertos',
		incorrectAnswers: ['Cinco de Mayo', 'Las Posadas', 'Carnival'],
		category: 'Culture'
	},
	{
		question: "Who released 'Rich Flex' in 2022?",
		difficulty: 'Easy',
		correctAnswer: 'Drake & 21 Savage',
		incorrectAnswers: ['Travis Scott', 'Future', 'Lil Baby'],
		category: 'Music'
	},
	{
		question: "Which artist released 'Kill Bill' in 2023?",
		difficulty: 'Easy',
		correctAnswer: 'SZA',
		incorrectAnswers: ['Doja Cat', 'Megan Thee Stallion', 'Cardi B'],
		category: 'Music'
	},
	{
		question: "Who performed 'About Damn Time' in 2022?",
		difficulty: 'Easy',
		correctAnswer: 'Lizzo',
		incorrectAnswers: ['Beyoncé', 'Adele', 'Meghan Trainor'],
		category: 'Music'
	},
	{
		question: 'Which Apple TV+ series features Harrison Ford in his first major TV role?',
		difficulty: 'Medium',
		correctAnswer: 'Shrinking',
		incorrectAnswers: ['Foundation', 'For All Mankind', 'Slow Horses'],
		category: 'Television'
	},
	{
		question:
			'Which 2023 film directed by Greta Gerwig broke box office records for a female director?',
		difficulty: 'Medium',
		correctAnswer: 'Barbie',
		incorrectAnswers: ['Little Women', 'Lady Bird', 'White Noise'],
		category: 'Movies'
	},
	{
		question: 'What 2022 film features Brendan Fraser in his Oscar-winning comeback role?',
		difficulty: 'Hard',
		correctAnswer: 'The Whale',
		incorrectAnswers: ['The Mummy Returns', 'Killers of the Flower Moon', 'Amsterdam'],
		category: 'Movies'
	},
	{
		question: "Which showrunner created both 'Succession' and 'Peep Show'?",
		difficulty: 'Hard',
		correctAnswer: 'Jesse Armstrong',
		incorrectAnswers: ['Vince Gilligan', 'Ryan Murphy', 'Shonda Rhimes'],
		category: 'Television'
	},
	{
		question: "What is the name of the fictional language created for 'Game of Thrones'?",
		difficulty: 'Medium',
		correctAnswer: 'Dothraki',
		incorrectAnswers: ['Valyrian', 'Westerosi', 'Ghiscari'],
		category: 'Television'
	},
	{
		question: 'What ancient Chinese philosophy emphasizes harmony with the Tao?',
		difficulty: 'Hard',
		correctAnswer: 'Taoism',
		incorrectAnswers: ['Confucianism', 'Buddhism', 'Legalism'],
		category: 'Culture'
	},
	{
		question: 'Which traditional Indian classical dance form originated in Kerala?',
		difficulty: 'Hard',
		correctAnswer: 'Kathakali',
		incorrectAnswers: ['Bharatanatyam', 'Odissi', 'Kuchipudi'],
		category: 'Culture'
	},
	{
		question: "Who produced Taylor Swift's album 'Midnights'?",
		difficulty: 'Medium',
		correctAnswer: 'Jack Antonoff',
		incorrectAnswers: ['Max Martin', 'Aaron Dessner', 'Rick Rubin'],
		category: 'Music'
	},
	{
		question: "Which artist's 2022 album 'Renaissance' was part of a planned trilogy?",
		difficulty: 'Medium',
		correctAnswer: 'Beyoncé',
		incorrectAnswers: ['Rihanna', 'Lady Gaga', 'Adele'],
		category: 'Music'
	},
	{
		question: 'What was the first K-pop group to headline Coachella?',
		difficulty: 'Hard',
		correctAnswer: 'BLACKPINK',
		incorrectAnswers: ['BTS', 'TWICE', 'Red Velvet'],
		category: 'Music'
	},
	{
		question: "Which 2023 series finale broke HBO's streaming record with 12.1 million viewers?",
		difficulty: 'Medium',
		correctAnswer: 'Succession',
		incorrectAnswers: ['The Last of Us', 'House of the Dragon', 'The White Lotus'],
		category: 'Television'
	},
	{
		question: 'Which 2023 Martin Scorsese film stars Leonardo DiCaprio and Robert De Niro?',
		difficulty: 'Medium',
		correctAnswer: 'Killers of the Flower Moon',
		incorrectAnswers: ['The Departed 2', 'The Irishman 2', 'Gangs of New York 2'],
		category: 'Movies'
	},
	{
		question: 'What was the highest-grossing non-English language film of all time?',
		difficulty: 'Hard',
		correctAnswer: 'Demon Slayer: Mugen Train',
		incorrectAnswers: ['Crouching Tiger, Hidden Dragon', 'Parasite', 'Life Is Beautiful'],
		category: 'Movies'
	},
	{
		question: "Which actor plays both Roman Roy in 'Succession' and General Zod in 'Man of Steel'?",
		difficulty: 'Medium',
		correctAnswer: 'Kieran Culkin',
		incorrectAnswers: ['Michael Shannon', 'Jeremy Strong', 'Matthew Macfadyen'],
		category: 'Television'
	},
	{
		question: "What is the name of the AI robot in the 2023 series 'Mrs. Davis'?",
		difficulty: 'Hard',
		correctAnswer: 'Mrs. Davis',
		incorrectAnswers: ['Mother', 'The Algorithm', 'The Machine'],
		category: 'Television'
	},
	{
		question: 'What is the traditional fire-walking ceremony in Fiji called?',
		difficulty: 'Hard',
		correctAnswer: 'Vilavilairevo',
		incorrectAnswers: ['Bula', 'Meke', 'Sevusevu'],
		category: 'Culture'
	},
	{
		question: 'Which traditional Japanese art form involves arranging flowers?',
		difficulty: 'Medium',
		correctAnswer: 'Ikebana',
		incorrectAnswers: ['Bonsai', 'Origami', 'Kintsugi'],
		category: 'Culture'
	},
	{
		question:
			"Which producer worked on both The Weeknd's 'Blinding Lights' and Taylor Swift's '1989'?",
		difficulty: 'Hard',
		correctAnswer: 'Max Martin',
		incorrectAnswers: ['Jack Antonoff', 'Rick Rubin', 'Mark Ronson'],
		category: 'Music'
	},
	{
		question: "What was Travis Scott's 2023 album that followed 'Astroworld'?",
		difficulty: 'Medium',
		correctAnswer: 'UTOPIA',
		incorrectAnswers: ['DYSTOPIA', 'RODEO 2', 'BIRDS'],
		category: 'Music'
	},
	{
		question: "Which artist's 2023 tour became the first to gross over $1 billion?",
		difficulty: 'Medium',
		correctAnswer: 'Taylor Swift',
		incorrectAnswers: ['Beyoncé', 'Ed Sheeran', 'The Weeknd'],
		category: 'Music'
	},
	{
		question: "What is the name of the fictional tech company in the series 'Black Mirror'?",
		difficulty: 'Hard',
		correctAnswer: 'Tuckersoft',
		incorrectAnswers: ['Saito Corp', 'TCKR Systems', 'Black Mirror Inc'],
		category: 'Television'
	},
	{
		question: 'Which 2023 film stars Bradley Cooper as Leonard Bernstein?',
		difficulty: 'Medium',
		correctAnswer: 'Maestro',
		incorrectAnswers: ['A Star is Born 2', 'The Conductor', 'Symphony'],
		category: 'Movies'
	},
	{
		question: "What was Wes Anderson's 2023 Netflix anthology film?",
		difficulty: 'Hard',
		correctAnswer: 'The Wonderful Story of Henry Sugar',
		incorrectAnswers: ['Asteroid City', 'The French Dispatch 2', 'Budapest Hotel Returns'],
		category: 'Movies'
	},
	{
		question: 'Which 2023 series features Steven Yeun and Ali Wong in a road rage incident?',
		difficulty: 'Medium',
		correctAnswer: 'Beef',
		incorrectAnswers: ['Road Kill', 'Rage', 'The Incident'],
		category: 'Television'
	},
	{
		question: "What is the name of the fictional drug company in 'The Bear' Season 2?",
		difficulty: 'Hard',
		correctAnswer: 'KBL Dynamics',
		incorrectAnswers: ['Chicago Pharma', 'Bear Pharmaceuticals', 'Midwest Medical'],
		category: 'Television'
	},
	{
		question: 'What is the traditional coming-of-age ceremony in Japan called?',
		difficulty: 'Hard',
		correctAnswer: 'Seijin no Hi',
		incorrectAnswers: ['Shichi-Go-San', 'Omiyamairi', 'Yuino'],
		category: 'Culture'
	},
	{
		question: 'Which traditional Korean art form involves natural fermentation?',
		difficulty: 'Medium',
		correctAnswer: 'Kimchi-making',
		incorrectAnswers: ['Soju-brewing', 'Tea ceremony', 'Rice wine production'],
		category: 'Culture'
	},
	{
		question: "Which song on Taylor Swift's 'Midnights' features Lana Del Rey?",
		difficulty: 'Hard',
		correctAnswer: 'Snow on the Beach',
		incorrectAnswers: ['Karma', 'Lavender Haze', 'Anti-Hero'],
		category: 'Music'
	},
	{
		question: "What was the name of Jung Kook's 2023 solo debut album?",
		difficulty: 'Medium',
		correctAnswer: 'GOLDEN',
		incorrectAnswers: ['SILVER', 'SEVEN', 'STILL WITH YOU'],
		category: 'Music'
	},
	{
		question: "Which artist broke Drake's record for most monthly Spotify listeners in 2023?",
		difficulty: 'Hard',
		correctAnswer: 'Taylor Swift',
		incorrectAnswers: ['The Weeknd', 'Bad Bunny', 'Ed Sheeran'],
		category: 'Music'
	},
	{
		question: "What is the name of the AI companion in the series 'Black Mirror: Joan Is Awful'?",
		difficulty: 'Hard',
		correctAnswer: 'Streamberry Assistant',
		incorrectAnswers: ['NetAI', 'StreamHelper', 'Digital Friend'],
		category: 'Television'
	},
	{
		question: "Which 2023 film stars Cillian Murphy as J. Robert Oppenheimer's rival?",
		difficulty: 'Hard',
		correctAnswer: 'Lewis Strauss',
		incorrectAnswers: ['Edward Teller', 'Klaus Fuchs', 'Ernest Lawrence'],
		category: 'Movies'
	},
	{
		question: 'What 2023 horror film features a robotic AI doll?',
		difficulty: 'Medium',
		correctAnswer: 'M3GAN',
		incorrectAnswers: ['Annabelle Comes Home', "Child's Play 2023", 'The Doll'],
		category: 'Movies'
	},
	{
		question: "In 'The Last of Us', what song does Joel sing to Ellie in Episode 3?",
		difficulty: 'Hard',
		correctAnswer: 'Long Long Time',
		incorrectAnswers: ['Take On Me', 'Future Days', 'Just Like Heaven'],
		category: 'Television'
	},
	{
		question: 'Which 2023 series is based on a Pulitzer Prize-winning novel by Anthony Doerr?',
		difficulty: 'Medium',
		correctAnswer: 'All the Light We Cannot See',
		incorrectAnswers: ['Lessons in Chemistry', 'Daisy Jones & The Six', 'Fleishman Is in Trouble'],
		category: 'Television'
	},
	{
		question:
			'What is the traditional Aboriginal Australian ceremony for spiritual cleansing called?',
		difficulty: 'Hard',
		correctAnswer: 'Smoking Ceremony',
		incorrectAnswers: ['Dreamtime Ritual', 'Walkabout', 'Corroboree'],
		category: 'Culture'
	},
	{
		question: 'Which traditional Chinese festival celebrates the end of winter?',
		difficulty: 'Medium',
		correctAnswer: 'Lantern Festival',
		incorrectAnswers: ['Dragon Boat Festival', 'Ghost Festival', 'Double Ninth Festival'],
		category: 'Culture'
	},
	{
		question: "Which song samples Madonna's 'Material Girl' on Ice Spice's 2023 album?",
		difficulty: 'Hard',
		correctAnswer: 'Princess Diana',
		incorrectAnswers: ['Munch', 'Bikini Bottom', 'In Ha Mood'],
		category: 'Music'
	},
	{
		question: "What was the name of NewJeans' 2023 EP?",
		difficulty: 'Medium',
		correctAnswer: 'Get Up',
		incorrectAnswers: ['OMG', 'Ditto', 'Super Shy'],
		category: 'Music'
	},
	{
		question: "Which producer worked on both Lana Del Rey's and Bleachers' 2023 albums?",
		difficulty: 'Hard',
		correctAnswer: 'Jack Antonoff',
		incorrectAnswers: ['Rick Rubin', 'Max Martin', 'Aaron Dessner'],
		category: 'Music'
	},
	{
		question: "What is the name of the fictional streaming service in 'Succession' Season 4?",
		difficulty: 'Hard',
		correctAnswer: 'GoJo',
		incorrectAnswers: ['Waystar+', 'RoyCo Stream', 'ATN+'],
		category: 'Television'
	},
	{
		question: 'Which 2023 film features Timothée Chalamet as a young Willy Wonka?',
		difficulty: 'Medium',
		correctAnswer: 'Wonka',
		incorrectAnswers: ['Charlie', 'The Chocolate Factory', 'Pure Imagination'],
		category: 'Movies'
	},
	{
		question: "What was the name of the fictional band in 'Daisy Jones & The Six'?",
		difficulty: 'Hard',
		correctAnswer: 'The Six',
		incorrectAnswers: ['The Dunne Brothers', 'The Aurora', 'Sunset Sound'],
		category: 'Movies'
	},
	{
		question: "Which actor plays Joel Miller in 'The Last of Us'?",
		difficulty: 'Medium',
		correctAnswer: 'Pedro Pascal',
		incorrectAnswers: ['Oscar Isaac', 'Wagner Moura', 'Nikolaj Coster-Waldau'],
		category: 'Television'
	},
	{
		question: "What is the name of the AI system in 'Foundation' Season 2?",
		difficulty: 'Hard',
		correctAnswer: 'Demerzel',
		incorrectAnswers: ['Hari', 'Prime Radiant', 'Seldon AI'],
		category: 'Television'
	},
	{
		question: 'What is the traditional Maori welcoming ceremony called?',
		difficulty: 'Hard',
		correctAnswer: 'Pōwhiri',
		incorrectAnswers: ['Haka', 'Hongi', 'Karanga'],
		category: 'Culture'
	},
	{
		question: 'Which traditional Indian art form uses colored powder to create floor designs?',
		difficulty: 'Medium',
		correctAnswer: 'Rangoli',
		incorrectAnswers: ['Mehndi', 'Warli', 'Madhubani'],
		category: 'Culture'
	},
	{
		question: "Which song on Beyoncé's 'Cowboy Carter' features Willie Nelson?",
		difficulty: 'Hard',
		correctAnswer: 'Smoke Hour',
		incorrectAnswers: ["Texas Hold 'Em", '16 Carriages', 'American Requiem'],
		category: 'Music'
	},
	{
		question: "What was Doja Cat's controversial 2023 album called?",
		difficulty: 'Medium',
		correctAnswer: 'Scarlet',
		incorrectAnswers: ['Paint the Town Red', 'Demons', 'Vegas'],
		category: 'Music'
	},
	{
		question: "Which artist's 2023 tour caused 'seismic activity' in Seattle?",
		difficulty: 'Hard',
		correctAnswer: 'Taylor Swift',
		incorrectAnswers: ['Beyoncé', 'The Weeknd', 'Drake'],
		category: 'Music'
	},
	{
		question: "What is the name of the fictional tech company in 'Severance'?",
		difficulty: 'Hard',
		correctAnswer: 'Lumon Industries',
		incorrectAnswers: ['Waystar Royco', 'Massive Dynamic', 'Delos Incorporated'],
		category: 'Television'
	},
	{
		question: 'Which 2023 film stars Paul Giamatti as a prep school teacher?',
		difficulty: 'Easy',
		correctAnswer: 'The Holdovers',
		incorrectAnswers: ['Dead Poets Society 2', 'School Days', 'Winter Break'],
		category: 'Movies'
	},
	{
		question: "What was Sofia Coppola's 2023 Priscilla Presley biopic called?",
		difficulty: 'Medium',
		correctAnswer: 'Priscilla',
		incorrectAnswers: ['Elvis & Me', 'Graceland', "The King's Wife"],
		category: 'Movies'
	},
	{
		question:
			"Which director's cut of Napoleon was over 4 hours longer than the theatrical release?",
		difficulty: 'Hard',
		correctAnswer: 'Ridley Scott',
		incorrectAnswers: ['Christopher Nolan', 'Martin Scorsese', 'Steven Spielberg'],
		category: 'Movies'
	},
	{
		question: "What is the name of the main character in 'Wednesday'?",
		difficulty: 'Easy',
		correctAnswer: 'Wednesday Addams',
		incorrectAnswers: ['Morticia Addams', 'Enid Sinclair', 'Bianca Barclay'],
		category: 'Television'
	},
	{
		question: 'Which 2023 series is based on a video game and stars Ella Purnell?',
		difficulty: 'Medium',
		correctAnswer: 'Fallout',
		incorrectAnswers: ['The Last of Us', 'Halo', 'Mass Effect'],
		category: 'Television'
	},
	{
		question: "What is the fictional language spoken by the Dothraki in 'House of the Dragon'?",
		difficulty: 'Hard',
		correctAnswer: 'High Valyrian',
		incorrectAnswers: ['Low Valyrian', 'Ancient Ghiscari', 'Old Tongue'],
		category: 'Television'
	},
	{
		question: "Who released 'Vampire' in 2023?",
		difficulty: 'Easy',
		correctAnswer: 'Olivia Rodrigo',
		incorrectAnswers: ['Taylor Swift', 'Billie Eilish', 'Lorde'],
		category: 'Music'
	},
	{
		question: "Which K-pop group released 'Super Shy' in 2023?",
		difficulty: 'Medium',
		correctAnswer: 'NewJeans',
		incorrectAnswers: ['BLACKPINK', 'TWICE', 'IVE'],
		category: 'Music'
	},
	{
		question: 'What was the first song to reach 4 billion streams on Spotify?',
		difficulty: 'Hard',
		correctAnswer: 'Blinding Lights',
		incorrectAnswers: ['Shape of You', 'Dance Monkey', 'Someone You Loved'],
		category: 'Music'
	},
	{
		question: 'What traditional Japanese art form involves the cultivation of miniature trees?',
		difficulty: 'Easy',
		correctAnswer: 'Bonsai',
		incorrectAnswers: ['Ikebana', 'Origami', 'Kintsugi'],
		category: 'Culture'
	},
	{
		question: 'Which 2023 Disney film features the voice of Chris Pine as a dragon?',
		difficulty: 'Easy',
		correctAnswer: 'Wish',
		incorrectAnswers: ['Elemental', 'Strange World', 'Dragon Empire'],
		category: 'Movies'
	},
	{
		question: "What was the name of the 2023 film about Nike's pursuit of Michael Jordan?",
		difficulty: 'Medium',
		correctAnswer: 'Air',
		incorrectAnswers: ['Just Do It', 'Swoosh', 'The Deal'],
		category: 'Movies'
	},
	{
		question: "Which 2023 film required actors to speak a fictional 'whale language'?",
		difficulty: 'Hard',
		correctAnswer: 'Nyad',
		incorrectAnswers: ['The Deep', "Ocean's Song", 'Blue Deep'],
		category: 'Movies'
	},
	{
		question: "Who plays Joel's brother Tommy in 'The Last of Us'?",
		difficulty: 'Easy',
		correctAnswer: 'Gabriel Luna',
		incorrectAnswers: ['Pedro Pascal', 'Nick Offerman', 'Murray Bartlett'],
		category: 'Television'
	},
	{
		question: "What is the name of the school in 'Wednesday'?",
		difficulty: 'Medium',
		correctAnswer: 'Nevermore Academy',
		incorrectAnswers: ['Darkwood Academy', 'Thornhill School', 'Ravenwood Institute'],
		category: 'Television'
	},
	{
		question: "What is the real name of the character 'The Bear' in 'The Bear'?",
		difficulty: 'Hard',
		correctAnswer: 'Carmen Berzatto',
		incorrectAnswers: ['Michael Berzatto', 'Richard Jerimovich', 'Marcus Brooks'],
		category: 'Television'
	},
	{
		question: "Who released 'Paint The Town Red' in 2023?",
		difficulty: 'Easy',
		correctAnswer: 'Doja Cat',
		incorrectAnswers: ['Megan Thee Stallion', 'Nicki Minaj', 'Ice Spice'],
		category: 'Music'
	},
	{
		question: "Which artist's 2023 album features the song 'Karma is My Boyfriend'?",
		difficulty: 'Medium',
		correctAnswer: 'Taylor Swift',
		incorrectAnswers: ['Lana Del Rey', 'Olivia Rodrigo', 'Billie Eilish'],
		category: 'Music'
	},
	{
		question: "What was the original title of SZA's 'Kill Bill' before release?",
		difficulty: 'Hard',
		correctAnswer: 'Kill Bill (Slight Return)',
		incorrectAnswers: ['Bill Must Die', 'Revenge Song', "Ex's Revenge"],
		category: 'Music'
	},
	{
		question: 'What traditional Korean side dishes are collectively called?',
		difficulty: 'Medium',
		correctAnswer: 'Banchan',
		incorrectAnswers: ['Kimchi', 'Namul', 'Jeon'],
		category: 'Culture'
	},
	{
		question: 'What is the capital of Canada?',
		difficulty: 'Easy',
		correctAnswer: 'Ottawa',
		incorrectAnswers: ['Toronto', 'Vancouver', 'Montreal'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'The Catcher in the Rye'?",
		difficulty: 'Easy',
		correctAnswer: 'J.D. Salinger',
		incorrectAnswers: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'John Steinbeck'],
		category: 'Literature'
	},
	{
		question: 'What is the largest planet in our solar system?',
		difficulty: 'Easy',
		correctAnswer: 'Jupiter',
		incorrectAnswers: ['Saturn', 'Neptune', 'Earth'],
		category: 'Science'
	},
	{
		question: 'Who painted the Mona Lisa?',
		difficulty: 'Easy',
		correctAnswer: 'Leonardo da Vinci',
		incorrectAnswers: ['Michelangelo', 'Raphael', 'Vincent van Gogh'],
		category: 'Art'
	},
	{
		question: 'What is the chemical symbol for gold?',
		difficulty: 'Easy',
		correctAnswer: 'Au',
		incorrectAnswers: ['Ag', 'Fe', 'Cu'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Japan?',
		difficulty: 'Easy',
		correctAnswer: 'Tokyo',
		incorrectAnswers: ['Seoul', 'Beijing', 'Bangkok'],
		category: 'Geography'
	},
	{
		question: "Who wrote '1984'?",
		difficulty: 'Medium',
		correctAnswer: 'George Orwell',
		incorrectAnswers: ['Aldous Huxley', 'Ray Bradbury', 'Ernest Hemingway'],
		category: 'Literature'
	},
	{
		question: 'What is the speed of light in vacuum?',
		difficulty: 'Hard',
		correctAnswer: '299,792,458 meters per second',
		incorrectAnswers: [
			'300,000,000 meters per second',
			'299,000,000 meters per second',
			'298,792,458 meters per second'
		],
		category: 'Science'
	},
	{
		question: 'Which country has the largest population?',
		difficulty: 'Easy',
		correctAnswer: 'China',
		incorrectAnswers: ['India', 'United States', 'Indonesia'],
		category: 'Geography'
	},
	{
		question: 'Who developed the theory of relativity?',
		difficulty: 'Easy',
		correctAnswer: 'Albert Einstein',
		incorrectAnswers: ['Isaac Newton', 'Stephen Hawking', 'Niels Bohr'],
		category: 'Science'
	},
	{
		question: 'Which planet is closest to the Sun?',
		difficulty: 'Easy',
		correctAnswer: 'Mercury',
		incorrectAnswers: ['Venus', 'Mars', 'Earth'],
		category: 'Science'
	},
	{
		question: 'Who painted the Sistine Chapel ceiling?',
		difficulty: 'Medium',
		correctAnswer: 'Michelangelo',
		incorrectAnswers: ['Leonardo da Vinci', 'Raphael', 'Botticelli'],
		category: 'Art'
	},
	{
		question: 'What is the capital of France?',
		difficulty: 'Easy',
		correctAnswer: 'Paris',
		incorrectAnswers: ['London', 'Berlin', 'Rome'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'To Kill a Mockingbird'?",
		difficulty: 'Medium',
		correctAnswer: 'Harper Lee',
		incorrectAnswers: ['John Steinbeck', 'Ernest Hemingway', 'William Faulkner'],
		category: 'Literature'
	},
	{
		question: 'What is the chemical symbol for silver?',
		difficulty: 'Medium',
		correctAnswer: 'Ag',
		incorrectAnswers: ['Si', 'Au', 'Fe'],
		category: 'Science'
	},
	{
		question: 'The human heart has how many chambers?',
		difficulty: 'Easy',
		correctAnswer: 'Four',
		incorrectAnswers: ['Two', 'Three', 'Five'],
		category: 'Science'
	},
	{
		question: 'What is the largest ocean on Earth?',
		difficulty: 'Easy',
		correctAnswer: 'Pacific Ocean',
		incorrectAnswers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
		category: 'Geography'
	},
	{
		question: 'Who was the first President of the United States?',
		difficulty: 'Easy',
		correctAnswer: 'George Washington',
		incorrectAnswers: ['Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
		category: 'History'
	},
	{
		question: 'What is the square root of 144?',
		difficulty: 'Medium',
		correctAnswer: '12',
		incorrectAnswers: ['14', '10', '16'],
		category: 'Science'
	},
	{
		question: "Which element has the chemical symbol 'Fe'?",
		difficulty: 'Medium',
		correctAnswer: 'Iron',
		incorrectAnswers: ['Fluorine', 'Francium', 'Fermium'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Russia?',
		difficulty: 'Easy',
		correctAnswer: 'Moscow',
		incorrectAnswers: ['St. Petersburg', 'Kiev', 'Warsaw'],
		category: 'Geography'
	},
	{
		question: 'The Eiffel Tower is in which city?',
		difficulty: 'Easy',
		correctAnswer: 'Paris',
		incorrectAnswers: ['London', 'Rome', 'Berlin'],
		category: 'Geography'
	},
	{
		question: 'What is the longest river in the world?',
		difficulty: 'Medium',
		correctAnswer: 'Nile',
		incorrectAnswers: ['Amazon', 'Mississippi', 'Yangtze'],
		category: 'Geography'
	},
	{
		question: "Who painted 'The Last Supper'?",
		difficulty: 'Medium',
		correctAnswer: 'Leonardo da Vinci',
		incorrectAnswers: ['Michelangelo', 'Raphael', 'Botticelli'],
		category: 'Art'
	},
	{
		question: 'What is the chemical symbol for sodium?',
		difficulty: 'Medium',
		correctAnswer: 'Na',
		incorrectAnswers: ['So', 'Sd', 'Sa'],
		category: 'Science'
	},
	{
		question: "Which planet is known as the 'Morning Star'?",
		difficulty: 'Medium',
		correctAnswer: 'Venus',
		incorrectAnswers: ['Mars', 'Mercury', 'Jupiter'],
		category: 'Science'
	},
	{
		question: 'What is the capital of Spain?',
		difficulty: 'Easy',
		correctAnswer: 'Madrid',
		incorrectAnswers: ['Barcelona', 'Seville', 'Valencia'],
		category: 'Geography'
	},
	{
		question: "Who wrote 'Pride and Prejudice'?",
		difficulty: 'Medium',
		correctAnswer: 'Jane Austen',
		incorrectAnswers: ['Emily Brontë', 'Charlotte Brontë', 'Virginia Woolf'],
		category: 'Literature'
	},
	{
		question: 'What is the atomic number of carbon?',
		difficulty: 'Medium',
		correctAnswer: '6',
		incorrectAnswers: ['4', '8', '12'],
		category: 'Science'
	},
	{
		question: 'The Sun is a what?',
		difficulty: 'Easy',
		correctAnswer: 'Star',
		incorrectAnswers: ['Planet', 'Moon', 'Comet'],
		category: 'Science'
	},
	{
		question: 'What is the smallest country in the world?',
		difficulty: 'Medium',
		correctAnswer: 'Vatican City',
		incorrectAnswers: ['Monaco', 'San Marino', 'Liechtenstein'],
		category: 'Geography'
	},
	{
		question: 'Who discovered penicillin?',
		difficulty: 'Medium',
		correctAnswer: 'Alexander Fleming',
		incorrectAnswers: ['Louis Pasteur', 'Robert Koch', 'Joseph Lister'],
		category: 'Science'
	},
	{
		question: "Who played the lead role in the 2023 film 'The Last Duel'?",
		difficulty: 'Medium',
		correctAnswer: 'Jodie Comer',
		incorrectAnswers: ['Margot Robbie', 'Emma Stone', 'Scarlett Johansson'],
		category: 'Movies'
	},
	{
		question: "Which musical features the song 'Cell Block Tango'?",
		difficulty: 'Easy',
		correctAnswer: 'Chicago',
		incorrectAnswers: ['Cabaret', 'Rent', 'Wicked'],
		category: 'Musical Theatre'
	},
	{
		question: "Who wrote the musical 'Hamilton'?",
		difficulty: 'Easy',
		correctAnswer: 'Lin-Manuel Miranda',
		incorrectAnswers: ['Andrew Lloyd Webber', 'Stephen Sondheim', 'Jonathan Larson'],
		category: 'Musical Theatre'
	},
	{
		question: 'Which TV series features the character Villanelle?',
		difficulty: 'Medium',
		correctAnswer: 'Killing Eve',
		incorrectAnswers: ['Fleabag', 'The Crown', 'Bodyguard'],
		category: 'Television'
	},
	{
		question: "Who released the album '25' in 2015?",
		difficulty: 'Easy',
		correctAnswer: 'Adele',
		incorrectAnswers: ['Beyoncé', 'Taylor Swift', 'Rihanna'],
		category: 'Music'
	},
	{
		question: "Which musical features the song 'Candy Store'?",
		difficulty: 'Medium',
		correctAnswer: 'Heathers',
		incorrectAnswers: ['Mean Girls', 'Legally Blonde', 'Spring Awakening'],
		category: 'Musical Theatre'
	},
	{
		question: "Who wrote the novel 'Gone Girl'?",
		difficulty: 'Medium',
		correctAnswer: 'Gillian Flynn',
		incorrectAnswers: ['Paula Hawkins', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series is based on the true crime story of the Menendez brothers?',
		difficulty: 'Medium',
		correctAnswer: 'Law & Order True Crime',
		incorrectAnswers: ['Mindhunter', 'Making a Murderer', 'The People v. O.J. Simpson'],
		category: 'Television'
	},
	{
		question: "Who directed the 2021 film 'Dune'?",
		difficulty: 'Medium',
		correctAnswer: 'Denis Villeneuve',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the song 'Blinding Lights' in 2019?",
		difficulty: 'Easy',
		correctAnswer: 'The Weeknd',
		incorrectAnswers: ['Drake', 'Post Malone', 'Justin Bieber'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Road'?",
		difficulty: 'Medium',
		correctAnswer: 'Cormac McCarthy',
		incorrectAnswers: ['Stephen King', 'George Orwell', 'Margaret Atwood'],
		category: 'Literature'
	},
	{
		question: 'Which TV series features the character Eleven?',
		difficulty: 'Easy',
		correctAnswer: 'Stranger Things',
		incorrectAnswers: ['The Umbrella Academy', 'Dark', 'The Witcher'],
		category: 'Television'
	},
	{
		question: "Who directed the 2020 film 'Tenet'?",
		difficulty: 'Medium',
		correctAnswer: 'Christopher Nolan',
		incorrectAnswers: ['Quentin Tarantino', 'Steven Spielberg', 'Martin Scorsese'],
		category: 'Movies'
	},
	{
		question: "Which artist released the album 'Lemonade' in 2016?",
		difficulty: 'Easy',
		correctAnswer: 'Beyoncé',
		incorrectAnswers: ['Rihanna', 'Adele', 'Taylor Swift'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Girl on the Train'?",
		difficulty: 'Medium',
		correctAnswer: 'Paula Hawkins',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series is based on the true crime story of Gypsy Rose Blanchard?',
		difficulty: 'Medium',
		correctAnswer: 'The Act',
		incorrectAnswers: ['Mindhunter', 'Making a Murderer', 'The People v. O.J. Simpson'],
		category: 'Television'
	},
	{
		question: "Who directed the 2019 film 'Once Upon a Time in Hollywood'?",
		difficulty: 'Medium',
		correctAnswer: 'Quentin Tarantino',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the song 'Shape of You' in 2017?",
		difficulty: 'Easy',
		correctAnswer: 'Ed Sheeran',
		incorrectAnswers: ['Justin Bieber', 'Shawn Mendes', 'Bruno Mars'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'Big Little Lies'?",
		difficulty: 'Medium',
		correctAnswer: 'Liane Moriarty',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series features the character Raymond Reddington?',
		difficulty: 'Medium',
		correctAnswer: 'The Blacklist',
		incorrectAnswers: ['Breaking Bad', 'Better Call Saul', 'True Detective'],
		category: 'Television'
	},
	{
		question: "Who directed the 2018 film 'A Star is Born'?",
		difficulty: 'Medium',
		correctAnswer: 'Bradley Cooper',
		incorrectAnswers: ['Clint Eastwood', 'Steven Spielberg', 'Martin Scorsese'],
		category: 'Movies'
	},
	{
		question: "Which artist released the album 'Future Nostalgia' in 2020?",
		difficulty: 'Easy',
		correctAnswer: 'Dua Lipa',
		incorrectAnswers: ['Ariana Grande', 'Taylor Swift', 'Billie Eilish'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Night Circus'?",
		difficulty: 'Medium',
		correctAnswer: 'Erin Morgenstern',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series is based on the true crime story of the Central Park Five?',
		difficulty: 'Medium',
		correctAnswer: 'When They See Us',
		incorrectAnswers: ['Mindhunter', 'Making a Murderer', 'The People v. O.J. Simpson'],
		category: 'Television'
	},
	{
		question: "Who directed the 2017 film 'Get Out'?",
		difficulty: 'Medium',
		correctAnswer: 'Jordan Peele',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the song 'Bad Guy' in 2019?",
		difficulty: 'Easy',
		correctAnswer: 'Billie Eilish',
		incorrectAnswers: ['Ariana Grande', 'Taylor Swift', 'Dua Lipa'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Goldfinch'?",
		difficulty: 'Medium',
		correctAnswer: 'Donna Tartt',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series features the character Ruth Langmore?',
		difficulty: 'Medium',
		correctAnswer: 'Ozark',
		incorrectAnswers: ['Breaking Bad', 'Better Call Saul', 'True Detective'],
		category: 'Television'
	},
	{
		question: "Who directed the 2016 film 'La La Land'?",
		difficulty: 'Medium',
		correctAnswer: 'Damien Chazelle',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the album 'After Hours' in 2020?",
		difficulty: 'Easy',
		correctAnswer: 'The Weeknd',
		incorrectAnswers: ['Drake', 'Post Malone', 'Justin Bieber'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Underground Railroad'?",
		difficulty: 'Medium',
		correctAnswer: 'Colson Whitehead',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series is based on the true crime story of the Golden State Killer?',
		difficulty: 'Medium',
		correctAnswer: "I'll Be Gone in the Dark",
		incorrectAnswers: ['Mindhunter', 'Making a Murderer', 'The People v. O.J. Simpson'],
		category: 'Television'
	},
	{
		question: "Who directed the 2015 film 'Mad Max: Fury Road'?",
		difficulty: 'Medium',
		correctAnswer: 'George Miller',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the song 'Levitating' in 2020?",
		difficulty: 'Easy',
		correctAnswer: 'Dua Lipa',
		incorrectAnswers: ['Ariana Grande', 'Taylor Swift', 'Billie Eilish'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Martian'?",
		difficulty: 'Medium',
		correctAnswer: 'Andy Weir',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series features the character June Osborne?',
		difficulty: 'Medium',
		correctAnswer: "The Handmaid's Tale",
		incorrectAnswers: ['Breaking Bad', 'Better Call Saul', 'True Detective'],
		category: 'Television'
	},
	{
		question: "Who directed the 2014 film 'Interstellar'?",
		difficulty: 'Medium',
		correctAnswer: 'Christopher Nolan',
		incorrectAnswers: ['Quentin Tarantino', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the album 'Fine Line' in 2019?",
		difficulty: 'Easy',
		correctAnswer: 'Harry Styles',
		incorrectAnswers: ['Shawn Mendes', 'Justin Bieber', 'Bruno Mars'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Nightingale'?",
		difficulty: 'Medium',
		correctAnswer: 'Kristin Hannah',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series is based on the true crime story of the Unabomber?',
		difficulty: 'Medium',
		correctAnswer: 'Manhunt: Unabomber',
		incorrectAnswers: ['Mindhunter', 'Making a Murderer', 'The People v. O.J. Simpson'],
		category: 'Television'
	},
	{
		question: "Who directed the 2013 film 'Gravity'?",
		difficulty: 'Medium',
		correctAnswer: 'Alfonso Cuarón',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the song 'Watermelon Sugar' in 2019?",
		difficulty: 'Easy',
		correctAnswer: 'Harry Styles',
		incorrectAnswers: ['Shawn Mendes', 'Justin Bieber', 'Bruno Mars'],
		category: 'Music'
	},
	{
		question: "Who wrote the novel 'The Light We Lost'?",
		difficulty: 'Medium',
		correctAnswer: 'Jill Santopolo',
		incorrectAnswers: ['Gillian Flynn', 'Stephen King', 'John Grisham'],
		category: 'Literature'
	},
	{
		question: 'Which TV series features the character Claire Underwood?',
		difficulty: 'Medium',
		correctAnswer: 'House of Cards',
		incorrectAnswers: ['Breaking Bad', 'Better Call Saul', 'True Detective'],
		category: 'Television'
	},
	{
		question: "Who directed the 2012 film 'Life of Pi'?",
		difficulty: 'Medium',
		correctAnswer: 'Ang Lee',
		incorrectAnswers: ['Christopher Nolan', 'Ridley Scott', 'James Cameron'],
		category: 'Movies'
	},
	{
		question: "Which artist released the album 'FutureSex/LoveSounds' in 2006?",
		difficulty: 'Easy',
		correctAnswer: 'Justin Timberlake',
		incorrectAnswers: ['Usher', 'Bruno Mars', 'Chris Brown'],
		category: 'Music'
	},
  {
    question: 'What year was the game "The Legend of Zelda: Breath of the Wild" released?',
    difficulty: 'Easy',
    correctAnswer: '2017',
    incorrectAnswers: ['2015', '2016', '2018'],
    category: 'Video Games'
  },
  {
    question: 'Which game won the Game of the Year award at The Game Awards 2020?',
    difficulty: 'Medium',
    correctAnswer: 'The Last of Us Part II',
    incorrectAnswers: ['Ghost of Tsushima', 'Hades', 'Doom Eternal'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "Cyberpunk 2077"?',
    difficulty: 'Medium',
    correctAnswer: 'Night City',
    incorrectAnswers: ['Rapture', 'Midgar', 'Los Santos'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional island of Tsushima?',
    difficulty: 'Medium',
    correctAnswer: 'Ghost of Tsushima',
    incorrectAnswers: ['Sekiro: Shadows Die Twice', 'Nioh', 'Dark Souls'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Red Dead Redemption 2" released?',
    difficulty: 'Easy',
    correctAnswer: '2018',
    incorrectAnswers: ['2016', '2017', '2019'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for the phrase "Would you kindly"?',
    difficulty: 'Medium',
    correctAnswer: 'BioShock',
    incorrectAnswers: ['Half-Life', 'Portal', 'Deus Ex'],
    category: 'Video Games'
  },
  {
    question: 'What is the main objective in the game "Among Us"?',
    difficulty: 'Easy',
    correctAnswer: 'Identify the impostors',
    incorrectAnswers: ['Collect resources', 'Build structures', 'Defeat the dragon'],
    category: 'Video Games'
  },
  {
    question: 'Which game is set in the Norse mythology world of Midgard?',
    difficulty: 'Medium',
    correctAnswer: 'God of War (2018)',
    incorrectAnswers: ['The Witcher 3', 'Dark Souls', 'Elder Scrolls V: Skyrim'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Fortnite" released?',
    difficulty: 'Easy',
    correctAnswer: '2017',
    incorrectAnswers: ['2016', '2018', '2019'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional city of Los Santos?',
    difficulty: 'Easy',
    correctAnswer: 'Grand Theft Auto V',
    incorrectAnswers: ['Watch Dogs', 'Saints Row', 'Sleeping Dogs'],
    category: 'Video Games'
  },
  {
    question: 'What is the main theme of the game "Hades"?',
    difficulty: 'Medium',
    correctAnswer: 'Greek mythology',
    incorrectAnswers: ['Norse mythology', 'Egyptian mythology', 'Roman mythology'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Battle Royale" mode?',
    difficulty: 'Easy',
    correctAnswer: 'Fortnite',
    incorrectAnswers: ['Overwatch', 'Apex Legends', 'Valorant'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "The Witcher 3: Wild Hunt" released?',
    difficulty: 'Medium',
    correctAnswer: '2015',
    incorrectAnswers: ['2014', '2016', '2017'],
    category: 'Video Games'
  },
  {
    question: 'Which game is set in the post-apocalyptic world of Boston?',
    difficulty: 'Medium',
    correctAnswer: 'Fallout 4',
    incorrectAnswers: ['The Last of Us', 'Metro Exodus', 'Days Gone'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Minecraft" officially released?',
    difficulty: 'Easy',
    correctAnswer: '2011',
    incorrectAnswers: ['2009', '2010', '2012'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional land of Tamriel?',
    difficulty: 'Medium',
    correctAnswer: 'The Elder Scrolls V: Skyrim',
    incorrectAnswers: ['Dragon Age: Inquisition', 'The Witcher 3', 'Dark Souls'],
    category: 'Video Games'
  },
  {
    question: 'What is the main objective in the game "Stardew Valley"?',
    difficulty: 'Easy',
    correctAnswer: 'Manage a farm',
    incorrectAnswers: ['Explore dungeons', 'Fight monsters', 'Build a city'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Nemesis System"?',
    difficulty: 'Medium',
    correctAnswer: 'Middle-earth: Shadow of Mordor',
    incorrectAnswers: ['Assassin’s Creed', 'Dark Souls', 'The Witcher 3'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Overwatch" released?',
    difficulty: 'Easy',
    correctAnswer: '2016',
    incorrectAnswers: ['2015', '2017', '2018'],
    category: 'Video Games'
  },
  {
    question: 'Which game is set in the fictional city of Rapture?',
    difficulty: 'Medium',
    correctAnswer: 'BioShock',
    incorrectAnswers: ['Dishonored', 'Prey', 'Deus Ex'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "Horizon Zero Dawn"?',
    difficulty: 'Medium',
    correctAnswer: 'Post-apocalyptic Earth',
    incorrectAnswers: ['Alien planet', 'Fantasy world', 'Virtual reality'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional region of Sinnoh?',
    difficulty: 'Medium',
    correctAnswer: 'Pokémon Diamond and Pearl',
    incorrectAnswers: ['Pokémon Red and Blue', 'Pokémon Gold and Silver', 'Pokémon Black and White'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Animal Crossing: New Horizons" released?',
    difficulty: 'Easy',
    correctAnswer: '2020',
    incorrectAnswers: ['2019', '2021', '2018'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Vault-Tec" theme?',
    difficulty: 'Medium',
    correctAnswer: 'Fallout',
    incorrectAnswers: ['Borderlands', 'Bioshock', 'Metro'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "The Last of Us Part II"?',
    difficulty: 'Medium',
    correctAnswer: 'Post-apocalyptic United States',
    incorrectAnswers: ['Fantasy world', 'Alien planet', 'Virtual reality'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional island of Yara?',
    difficulty: 'Medium',
    correctAnswer: 'Far Cry 6',
    incorrectAnswers: ['Just Cause 4', 'Ghost Recon Wildlands', 'Assassin’s Creed Odyssey'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Sekiro: Shadows Die Twice" released?',
    difficulty: 'Medium',
    correctAnswer: '2019',
    incorrectAnswers: ['2018', '2020', '2021'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Wasteland" setting?',
    difficulty: 'Medium',
    correctAnswer: 'Fallout',
    incorrectAnswers: ['Borderlands', 'Mad Max', 'Metro'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "Bloodborne"?',
    difficulty: 'Medium',
    correctAnswer: 'Gothic city of Yharnam',
    incorrectAnswers: ['Fantasy world', 'Post-apocalyptic Earth', 'Alien planet'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional city of Columbia?',
    difficulty: 'Medium',
    correctAnswer: 'BioShock Infinite',
    incorrectAnswers: ['Dishonored', 'Prey', 'Deus Ex'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Dark Souls III" released?',
    difficulty: 'Medium',
    correctAnswer: '2016',
    incorrectAnswers: ['2015', '2017', '2018'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Wild West" setting?',
    difficulty: 'Easy',
    correctAnswer: 'Red Dead Redemption',
    incorrectAnswers: ['Fallout', 'Far Cry', 'Assassin’s Creed'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "Persona 5"?',
    difficulty: 'Medium',
    correctAnswer: 'Modern-day Tokyo',
    incorrectAnswers: ['Fantasy world', 'Post-apocalyptic Earth', 'Virtual reality'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional region of Hyrule?',
    difficulty: 'Easy',
    correctAnswer: 'The Legend of Zelda',
    incorrectAnswers: ['Final Fantasy', 'Dragon Quest', 'Elder Scrolls'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Monster Hunter: World" released?',
    difficulty: 'Medium',
    correctAnswer: '2018',
    incorrectAnswers: ['2017', '2019', '2020'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Vault Boy" mascot?',
    difficulty: 'Easy',
    correctAnswer: 'Fallout',
    incorrectAnswers: ['Borderlands', 'Bioshock', 'Metro'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "Control"?',
    difficulty: 'Medium',
    correctAnswer: 'Federal Bureau of Control',
    incorrectAnswers: ['Fantasy world', 'Post-apocalyptic Earth', 'Alien planet'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional city of Midgar?',
    difficulty: 'Medium',
    correctAnswer: 'Final Fantasy VII',
    incorrectAnswers: ['Kingdom Hearts', 'Dragon Quest', 'Persona'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Death Stranding" released?',
    difficulty: 'Medium',
    correctAnswer: '2019',
    incorrectAnswers: ['2018', '2020', '2021'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Spartan" theme?',
    difficulty: 'Easy',
    correctAnswer: 'Halo',
    incorrectAnswers: ['Gears of War', 'Call of Duty', 'Destiny'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "Dishonored"?',
    difficulty: 'Medium',
    correctAnswer: 'City of Dunwall',
    incorrectAnswers: ['Fantasy world', 'Post-apocalyptic Earth', 'Alien planet'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional region of Kanto?',
    difficulty: 'Medium',
    correctAnswer: 'Pokémon Red and Blue',
    incorrectAnswers: ['Pokémon Gold and Silver', 'Pokémon Ruby and Sapphire', 'Pokémon Diamond and Pearl'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "The Outer Worlds" released?',
    difficulty: 'Medium',
    correctAnswer: '2019',
    incorrectAnswers: ['2018', '2020', '2021'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Vault-Tec" theme?',
    difficulty: 'Medium',
    correctAnswer: 'Fallout',
    incorrectAnswers: ['Borderlands', 'Bioshock', 'Metro'],
    category: 'Video Games'
  },
  {
    question: 'What is the main setting of the game "The Last of Us Part II"?',
    difficulty: 'Medium',
    correctAnswer: 'Post-apocalyptic United States',
    incorrectAnswers: ['Fantasy world', 'Alien planet', 'Virtual reality'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the fictional island of Yara?',
    difficulty: 'Medium',
    correctAnswer: 'Far Cry 6',
    incorrectAnswers: ['Just Cause 4', 'Ghost Recon Wildlands', 'Assassin’s Creed Odyssey'],
    category: 'Video Games'
  },
  {
    question: 'What year was the game "Sekiro: Shadows Die Twice" released?',
    difficulty: 'Medium',
    correctAnswer: '2019',
    incorrectAnswers: ['2018', '2020', '2021'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for its "Wasteland" setting?',
    difficulty: 'Medium',
    correctAnswer: 'Fallout',
    incorrectAnswers: ['Borderlands', 'Mad Max', 'Metro'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in The Legend of Zelda series?',
    difficulty: 'Easy',
    correctAnswer: 'Link',
    incorrectAnswers: ['Zelda', 'Ganon', 'Epona'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Master Chief?',
    difficulty: 'Easy',
    correctAnswer: 'Halo',
    incorrectAnswers: ['Gears of War', 'Call of Duty', 'Destiny'],
    category: 'Video Games'
  },
  {
    question: 'What is the highest-selling video game of all time?',
    difficulty: 'Medium',
    correctAnswer: 'Minecraft',
    incorrectAnswers: ['Tetris', 'Grand Theft Auto V', 'Wii Sports'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Lara Croft?',
    difficulty: 'Easy',
    correctAnswer: 'Tomb Raider',
    incorrectAnswers: ['Uncharted', 'Assassin’s Creed', 'Far Cry'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Pac-Man arcade game released?',
    difficulty: 'Medium',
    correctAnswer: '1980',
    incorrectAnswers: ['1978', '1982', '1984'],
    category: 'Video Games'
  },
  {
    question: 'Which game is known for the phrase "The cake is a lie"?',
    difficulty: 'Medium',
    correctAnswer: 'Portal',
    incorrectAnswers: ['Half-Life', 'BioShock', 'Mass Effect'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main protagonist in the God of War series?',
    difficulty: 'Easy',
    correctAnswer: 'Kratos',
    incorrectAnswers: ['Zeus', 'Ares', 'Hades'],
    category: 'Video Games'
  },
  {
    question: 'Which game features a battle royale mode called Warzone?',
    difficulty: 'Easy',
    correctAnswer: 'Call of Duty',
    incorrectAnswers: ['Fortnite', 'Apex Legends', 'PUBG'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the city where the game BioShock is set?',
    difficulty: 'Medium',
    correctAnswer: 'Rapture',
    incorrectAnswers: ['Columbia', 'New York', 'Atlantis'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Solid Snake?',
    difficulty: 'Easy',
    correctAnswer: 'Metal Gear Solid',
    incorrectAnswers: ['Splinter Cell', 'Hitman', 'Deus Ex'],
    category: 'Video Games'
  },
  {
    question: 'What year was the first Super Mario Bros. game released?',
    difficulty: 'Medium',
    correctAnswer: '1985',
    incorrectAnswers: ['1983', '1987', '1990'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Geralt of Rivia?',
    difficulty: 'Easy',
    correctAnswer: 'The Witcher',
    incorrectAnswers: ['Dragon Age', 'Skyrim', 'Dark Souls'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Half-Life series?',
    difficulty: 'Medium',
    correctAnswer: 'Gordon Freeman',
    incorrectAnswers: ['Alyx Vance', 'Isaac Clarke', 'Jack Cooper'],
    category: 'Video Games'
  },
  {
    question: 'Which game is set in the fictional land of Hyrule?',
    difficulty: 'Easy',
    correctAnswer: 'The Legend of Zelda',
    incorrectAnswers: ['Final Fantasy', 'Elder Scrolls', 'Dragon Quest'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Ezio Auditore?',
    difficulty: 'Medium',
    correctAnswer: 'Assassin’s Creed',
    incorrectAnswers: ['Prince of Persia', 'The Witcher', 'Dark Souls'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Red Dead Redemption series?',
    difficulty: 'Medium',
    correctAnswer: 'John Marston',
    incorrectAnswers: ['Arthur Morgan', 'Dutch van der Linde', 'Bill Williamson'],
    category: 'Video Games'
  },
  {
    question: 'Which game features a post-apocalyptic world with robotic dinosaurs?',
    difficulty: 'Medium',
    correctAnswer: 'Horizon Zero Dawn',
    incorrectAnswers: ['Fallout', 'The Last of Us', 'Metro Exodus'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Uncharted series?',
    difficulty: 'Easy',
    correctAnswer: 'Nathan Drake',
    incorrectAnswers: ['Lara Croft', 'Joel Miller', 'Marcus Fenix'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Samus Aran?',
    difficulty: 'Medium',
    correctAnswer: 'Metroid',
    incorrectAnswers: ['Mega Man', 'Castlevania', 'Contra'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Doom game released?',
    difficulty: 'Medium',
    correctAnswer: '1993',
    incorrectAnswers: ['1991', '1995', '1997'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Arthur Morgan?',
    difficulty: 'Easy',
    correctAnswer: 'Red Dead Redemption 2',
    incorrectAnswers: ['Grand Theft Auto V', 'The Witcher 3', 'Far Cry 5'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Mass Effect series?',
    difficulty: 'Medium',
    correctAnswer: 'Commander Shepard',
    incorrectAnswers: ['Garrus Vakarian', 'Tali’Zorah', 'Liara T’Soni'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Cloud Strife?',
    difficulty: 'Medium',
    correctAnswer: 'Final Fantasy',
    incorrectAnswers: ['Kingdom Hearts', 'Dragon Quest', 'Persona'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Resident Evil series?',
    difficulty: 'Medium',
    correctAnswer: 'Leon S. Kennedy',
    incorrectAnswers: ['Chris Redfield', 'Jill Valentine', 'Claire Redfield'],
    category: 'Video Games'
  },
  {
    question: 'Which game features a city called Night City?',
    difficulty: 'Medium',
    correctAnswer: 'Cyberpunk 2077',
    incorrectAnswers: ['Deus Ex', 'Watch Dogs', 'Mirror’s Edge'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Assassin’s Creed series?',
    difficulty: 'Medium',
    correctAnswer: 'Desmond Miles',
    incorrectAnswers: ['Ezio Auditore', 'Altaïr Ibn-La\'Ahad', 'Connor Kenway'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Marcus Fenix?',
    difficulty: 'Easy',
    correctAnswer: 'Gears of War',
    incorrectAnswers: ['Halo', 'Call of Duty', 'Battlefield'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Final Fantasy game released?',
    difficulty: 'Medium',
    correctAnswer: '1987',
    incorrectAnswers: ['1985', '1989', '1991'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Ellie?',
    difficulty: 'Easy',
    correctAnswer: 'The Last of Us',
    incorrectAnswers: ['Uncharted', 'Tomb Raider', 'Resident Evil'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Fallout series?',
    difficulty: 'Medium',
    correctAnswer: 'The Vault Dweller',
    incorrectAnswers: ['The Courier', 'The Lone Wanderer', 'The Sole Survivor'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Mega Man?',
    difficulty: 'Easy',
    correctAnswer: 'Mega Man',
    incorrectAnswers: ['Metroid', 'Castlevania', 'Contra'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Street Fighter game released?',
    difficulty: 'Medium',
    correctAnswer: '1987',
    incorrectAnswers: ['1985', '1989', '1991'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Aloy?',
    difficulty: 'Easy',
    correctAnswer: 'Horizon Zero Dawn',
    incorrectAnswers: ['The Witcher 3', 'Assassin’s Creed', 'Far Cry'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Dark Souls series?',
    difficulty: 'Medium',
    correctAnswer: 'The Chosen Undead',
    incorrectAnswers: ['The Ashen One', 'The Bearer of the Curse', 'The Hunter'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Dante?',
    difficulty: 'Medium',
    correctAnswer: 'Devil May Cry',
    incorrectAnswers: ['Bayonetta', 'God of War', 'Ninja Gaiden'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Grand Theft Auto game released?',
    difficulty: 'Medium',
    correctAnswer: '1997',
    incorrectAnswers: ['1995', '1999', '2001'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Sora?',
    difficulty: 'Easy',
    correctAnswer: 'Kingdom Hearts',
    incorrectAnswers: ['Final Fantasy', 'Dragon Quest', 'Persona'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the BioShock series?',
    difficulty: 'Medium',
    correctAnswer: 'Jack',
    incorrectAnswers: ['Booker DeWitt', 'Andrew Ryan', 'Atlas'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Sam Fisher?',
    difficulty: 'Medium',
    correctAnswer: 'Splinter Cell',
    incorrectAnswers: ['Hitman', 'Metal Gear Solid', 'Deus Ex'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Sonic the Hedgehog game released?',
    difficulty: 'Medium',
    correctAnswer: '1991',
    incorrectAnswers: ['1989', '1993', '1995'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Isaac Clarke?',
    difficulty: 'Medium',
    correctAnswer: 'Dead Space',
    incorrectAnswers: ['Mass Effect', 'BioShock', 'The Outer Worlds'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Dragon Age series?',
    difficulty: 'Medium',
    correctAnswer: 'The Warden',
    incorrectAnswers: ['The Inquisitor', 'The Champion', 'The Hero of Ferelden'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Ryu?',
    difficulty: 'Easy',
    correctAnswer: 'Street Fighter',
    incorrectAnswers: ['Tekken', 'Mortal Kombat', 'King of Fighters'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original Mortal Kombat game released?',
    difficulty: 'Medium',
    correctAnswer: '1992',
    incorrectAnswers: ['1990', '1994', '1996'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Bayonetta?',
    difficulty: 'Easy',
    correctAnswer: 'Bayonetta',
    incorrectAnswers: ['Devil May Cry', 'Ninja Gaiden', 'God of War'],
    category: 'Video Games'
  },
  {
    question: 'What is the name of the main character in the Far Cry series?',
    difficulty: 'Medium',
    correctAnswer: 'Jason Brody',
    incorrectAnswers: ['Ajay Ghale', 'Dani Rojas', 'Vaas Montenegro'],
    category: 'Video Games'
  },
  {
    question: 'Which game series features the character Jill Valentine?',
    difficulty: 'Medium',
    correctAnswer: 'Resident Evil',
    incorrectAnswers: ['Silent Hill', 'Dead Space', 'The Evil Within'],
    category: 'Video Games'
  },
  {
    question: 'What year was the original The Legend of Zelda game released?',
    difficulty: 'Medium',
    correctAnswer: '1986',
    incorrectAnswers: ['1984', '1988', '1990'],
    category: 'Video Games'
  },
  {
    question: 'Which game features the character Booker DeWitt?',
    difficulty: 'Medium',
    correctAnswer: 'BioShock Infinite',
    incorrectAnswers: ['BioShock', 'Dishonored', 'Prey'],
    category: 'Video Games'
  }
];
