export interface Question {
	question: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	correctAnswer: string | boolean;
	incorrectAnswers: string[] | boolean[];
	category: string;
}

export const questions: Question[] = [
	{
		question: 'What is the capital city of Belarus?',
		difficulty: 'Easy',
		correctAnswer: 'Minsk',
		incorrectAnswers: ['Brest', 'Grodno', 'Gomel'],
		category: 'Belarus'
	},
	{
		question: 'Which country does not border Belarus?',
		difficulty: 'Easy',
		correctAnswer: 'Germany',
		incorrectAnswers: ['Poland', 'Lithuania', 'Ukraine'],
		category: 'Geography'
	},
  {
    question: 'What is the traditional Belarusian dress for women called?',
    difficulty: 'Medium',
    correctAnswer: 'Vyshyvanka',
    incorrectAnswers: ['Kimono', 'Sari', 'Hanbok'],
    category: 'Culture'
  },
  {
    question: 'What is a common feature of traditional Belarusian dress?',
    difficulty: 'Medium',
    correctAnswer: 'Embroidery',
    incorrectAnswers: ['Sequins', 'Beads', 'Lace'],
    category: 'Culture'
  },
  {
    question: 'What is the traditional Belarusian headwear for women?',
    difficulty: 'Medium',
    correctAnswer: 'Kupalinka',
    incorrectAnswers: ['Beret', 'Turban', 'Veil'],
    category: 'Culture'
  }
  {
    question: 'Which Belarusian artist is known for his surrealist paintings?',
    difficulty: 'Medium',
    correctAnswer: 'Marc Chagall',
    incorrectAnswers: ['Kazimir Malevich', 'Wassily Kandinsky', 'Piet Mondrian'],
    category: 'Art'
  },
  {
    question: 'What is the name of the famous Belarusian ballet dancer?',
    difficulty: 'Medium',
    correctAnswer: 'Maya Plisetskaya',
    incorrectAnswers: ['Anna Pavlova', 'Galina Ulanova', 'Tamara Karsavina'],
    category: 'Art'
  },
  {
    question: 'Which Belarusian artist is known for his works in the Art Nouveau style?',
    difficulty: 'Hard',
    correctAnswer: 'Yehuda Pen',
    incorrectAnswers: ['Ivan Aivazovsky', 'Ilya Repin', 'Mikhail Vrubel'],
    category: 'Art'
  },
  {
    question: 'Which Belarusian painter is famous for his landscapes?',
    difficulty: 'Medium',
    correctAnswer: 'Ivan Khrutsky',
    incorrectAnswers: ['Isaac Levitan', 'Arkhip Kuindzhi', 'Alexei Savrasov'],
    category: 'Art'
  },
  {
    question: 'Which Belarusian artist is known for his graphic art and illustrations?',
    difficulty: 'Medium',
    correctAnswer: 'Mikhail Savitsky',
    incorrectAnswers: ['Viktor Vasnetsov', 'Ivan Bilibin', 'Mikhail Vrubel'],
    category: 'Art'
  },
  {
    question: 'Who is considered the father of Belarusian classical music?',
    difficulty: 'Medium',
    correctAnswer: 'Stanislaw Moniuszko',
    incorrectAnswers: ['Mikhail Glinka', 'Alexander Borodin', 'Nikolai Rimsky-Korsakov'],
    category: 'Music'
  },
  {
    question: 'Which Belarusian composer wrote the opera "The Forest Song"?',
    difficulty: 'Hard',
    correctAnswer: 'Yevstigney Fomin',
    incorrectAnswers: ['Modest Mussorgsky', 'Pyotr Tchaikovsky', 'Sergei Rachmaninoff'],
    category: 'Music'
  },
  {
    question: 'Which Belarusian musician is known for his contributions to jazz?',
    difficulty: 'Medium',
    correctAnswer: 'Leonid Chizhik',
    incorrectAnswers: ['Igor Butman', 'David Goloschekin', 'Oleg Lundstrem'],
    category: 'Music'
  },
  {
    question: 'Which Belarusian singer won the Eurovision Song Contest in 2009?',
    difficulty: 'Medium',
    correctAnswer: 'Alexander Rybak',
    incorrectAnswers: ['Dima Bilan', 'Ruslana', 'Loreen'],
    category: 'Music'
  },
  {
    question: 'Which Belarusian conductor is known for his work with the Bolshoi Theatre?',
    difficulty: 'Hard',
    correctAnswer: 'Mark Ermler',
    incorrectAnswers: ['Valery Gergiev', 'Yuri Temirkanov', 'Vladimir Spivakov'],
    category: 'Music'
  },
  {
    question: 'Who is considered the national poet of Belarus?',
    difficulty: 'Medium',
    correctAnswer: 'Yanka Kupala',
    incorrectAnswers: ['Adam Mickiewicz', 'Taras Shevchenko', 'Alexander Pushkin'],
    category: 'Literature'
  },
  {
    question: 'Which Belarusian author wrote "The Land Beneath White Wings"?',
    difficulty: 'Hard',
    correctAnswer: 'Vladimir Korotkevich',
    incorrectAnswers: ['Ivan Melezh', 'Vasil Bykaŭ', 'Yanka Kupala'],
    category: 'Literature'
  },
  {
    question: 'Which Belarusian writer won the Nobel Prize in Literature in 2015?',
    difficulty: 'Medium',
    correctAnswer: 'Svetlana Alexievich',
    incorrectAnswers: ['Orhan Pamuk', 'Alice Munro', 'Kazuo Ishiguro'],
    category: 'Literature'
  },
  {
    question: 'Which Belarusian author wrote "The Last Pastoral"?',
    difficulty: 'Hard',
    correctAnswer: 'Ivan Melezh',
    incorrectAnswers: ['Yanka Kupala', 'Vasil Bykaŭ', 'Vladimir Korotkevich'],
    category: 'Literature'
  },
  {
    question: 'Which Belarusian poet is known for his poem "The New Land"?',
    difficulty: 'Medium',
    correctAnswer: 'Yakub Kolas',
    incorrectAnswers: ['Yanka Kupala', 'Vasil Bykaŭ', 'Maxim Bogdanovich'],
    category: 'Literature'
  }
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
		difficulty: 'Easy',
		correctAnswer: 'Red, Green and White',
		incorrectAnswers: ['Blue and Yellow', 'Red and White only', 'Green and White only'],
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
		question: 'What is the average lifespan of a domestic cat?',
		difficulty: 'Easy',
		correctAnswer: '15 years',
		incorrectAnswers: ['10 years', '20 years', '25 years'],
		category: 'Cats'
	},
	{
		question: 'Which breed of cat is known for its lack of fur?',
		difficulty: 'Medium',
		correctAnswer: 'Sphynx',
		incorrectAnswers: ['Persian', 'Maine Coon', 'Siamese'],
		category: 'Cats'
	},
	{
		question: 'What is the largest breed of domestic cat?',
		difficulty: 'Medium',
		correctAnswer: 'Maine Coon',
		incorrectAnswers: ['Siamese', 'Persian', 'Bengal'],
		category: 'Cats'
	},
	{
		question: 'What is a group of cats called?',
		difficulty: 'Easy',
		correctAnswer: 'Clowder',
		incorrectAnswers: ['Pack', 'Flock', 'Herd'],
		category: 'Cats'
	},
	{
		question: "What is the name of Sabrina Carpenter's debut album?",
		difficulty: 'Medium',
		correctAnswer: 'Eyes Wide Open',
		incorrectAnswers: ['Evolution', 'Singular: Act I', 'Singular: Act II'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2018 single that became a hit?",
		difficulty: 'Medium',
		correctAnswer: 'Almost Love',
		incorrectAnswers: ['Sue Me', 'Thumbs', 'Why'],
		category: 'Sabrina Carpenter'
	},
	{
		question: 'Which breed of cat is known for its blue eyes and color-pointed coat?',
		difficulty: 'Medium',
		correctAnswer: 'Siamese',
		incorrectAnswers: ['Persian', 'Maine Coon', 'Bengal'],
		category: 'Cats'
	},
	{
		question: 'Which breed of cat is known for its distinctive folded ears?',
		difficulty: 'Medium',
		correctAnswer: 'Scottish Fold',
		incorrectAnswers: ['Sphynx', 'Maine Coon', 'Siamese'],
		category: 'Cats'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'All we have is love'?",
		difficulty: 'Medium',
		correctAnswer: 'All We Have Is Love',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: 'Which breed of cat is known for its short legs?',
		difficulty: 'Medium',
		correctAnswer: 'Munchkin',
		incorrectAnswers: ['Sphynx', 'Maine Coon', 'Siamese'],
		category: 'Cats'
	},
	{
		question: "What is the name of Sabrina Carpenter's second studio album?",
		difficulty: 'Medium',
		correctAnswer: 'Evolution',
		incorrectAnswers: ['Eyes Wide Open', 'Singular: Act I', 'Singular: Act II'],
		category: 'Sabrina Carpenter'
	},
	{
		question:
			"Which song by Sabrina Carpenter features the lyrics 'Can't blame a girl for trying'?",
		difficulty: 'Easy',
		correctAnswer: "Can't Blame a Girl for Trying",
		incorrectAnswers: ['Eyes Wide Open', 'On Purpose', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2019 single?",
		difficulty: 'Medium',
		correctAnswer: 'In My Bed',
		incorrectAnswers: ['Sue Me', 'Almost Love', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'We're burning bright'?",
		difficulty: 'Medium',
		correctAnswer: 'On Purpose',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's debut single?",
		difficulty: 'Medium',
		correctAnswer: "Can't Blame a Girl for Trying",
		incorrectAnswers: ['Eyes Wide Open', 'On Purpose', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'We're just kids in love'?",
		difficulty: 'Medium',
		correctAnswer: 'Why',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2016 single?",
		difficulty: 'Medium',
		correctAnswer: 'Thumbs',
		incorrectAnswers: ['Sue Me', 'Almost Love', 'Why'],
		category: 'Sabrina Carpenter'
	},
	{
		question:
			"Which song by Sabrina Carpenter features the lyrics 'You're my favorite kind of night'?",
		difficulty: 'Medium',
		correctAnswer: 'Sue Me',
		incorrectAnswers: ['Thumbs', 'Almost Love', 'Why'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2017 single?",
		difficulty: 'Medium',
		correctAnswer: 'Why',
		incorrectAnswers: ['Sue Me', 'Almost Love', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'We're just kids in love'?",
		difficulty: 'Medium',
		correctAnswer: 'Why',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2018 single?",
		difficulty: 'Medium',
		correctAnswer: 'Almost Love',
		incorrectAnswers: ['Sue Me', 'Thumbs', 'Why'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'All we have is love'?",
		difficulty: 'Medium',
		correctAnswer: 'All We Have Is Love',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2019 single?",
		difficulty: 'Medium',
		correctAnswer: 'In My Bed',
		incorrectAnswers: ['Sue Me', 'Almost Love', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question:
			"Which song by Sabrina Carpenter features the lyrics 'Can't blame a girl for trying'?",
		difficulty: 'Easy',
		correctAnswer: "Can't Blame a Girl for Trying",
		incorrectAnswers: ['Eyes Wide Open', 'On Purpose', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's debut single?",
		difficulty: 'Medium',
		correctAnswer: "Can't Blame a Girl for Trying",
		incorrectAnswers: ['Eyes Wide Open', 'On Purpose', 'Thumbs'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'We're burning bright'?",
		difficulty: 'Medium',
		correctAnswer: 'On Purpose',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's second studio album?",
		difficulty: 'Medium',
		correctAnswer: 'Evolution',
		incorrectAnswers: ['Eyes Wide Open', 'Singular: Act I', 'Singular: Act II'],
		category: 'Sabrina Carpenter'
	},
	{
		question:
			"Which song by Sabrina Carpenter features the lyrics 'You're my favorite kind of night'?",
		difficulty: 'Medium',
		correctAnswer: 'Sue Me',
		incorrectAnswers: ['Thumbs', 'Almost Love', 'Why'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "What is the name of Sabrina Carpenter's 2016 single?",
		difficulty: 'Medium',
		correctAnswer: 'Thumbs',
		incorrectAnswers: ['Sue Me', 'Almost Love', 'Why'],
		category: 'Sabrina Carpenter'
	},
	{
		question: "Which song by Sabrina Carpenter features the lyrics 'We're just kids in love'?",
		difficulty: 'Medium',
		correctAnswer: 'Why',
		incorrectAnswers: ['Thumbs', 'Sue Me', 'Almost Love'],
		category: 'Sabrina Carpenter'
	},
	{
		question: 'What is the name of the book often referred to as the "Witches\' Bible"?',
		difficulty: 'Medium',
		correctAnswer: "The Witches' Bible",
		incorrectAnswers: ['The Book of Shadows', 'The Necronomicon', 'The Lesser Key of Solomon'],
		category: 'Witchcraft'
	},
	{
		question: "What is the term for a witch's personal magical journal?",
		difficulty: 'Easy',
		correctAnswer: 'Book of Shadows',
		incorrectAnswers: ['Grimoire', 'Spellbook', 'Codex'],
		category: 'Witchcraft'
	},
	{
		question: 'Which herb is commonly used in protection spells?',
		difficulty: 'Medium',
		correctAnswer: 'Sage',
		incorrectAnswers: ['Lavender', 'Rosemary', 'Thyme'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the name of the festival celebrated by witches on October 31st?',
		difficulty: 'Easy',
		correctAnswer: 'Samhain',
		incorrectAnswers: ['Beltane', 'Imbolc', 'Lughnasadh'],
		category: 'Witchcraft'
	},
	{
		question: "What is the term for a witch's sacred space?",
		difficulty: 'Medium',
		correctAnswer: 'Circle',
		incorrectAnswers: ['Altar', 'Sanctuary', 'Temple'],
		category: 'Witchcraft'
	},
	{
		question: 'Which crystal is often used for healing and protection?',
		difficulty: 'Easy',
		correctAnswer: 'Amethyst',
		incorrectAnswers: ['Quartz', 'Obsidian', 'Citrine'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the name of the ritual tool used to direct energy?',
		difficulty: 'Medium',
		correctAnswer: 'Athame',
		incorrectAnswers: ['Wand', 'Chalice', 'Pentacle'],
		category: 'Witchcraft'
	},
	{
		question: 'Which phase of the moon is best for banishing spells?',
		difficulty: 'Medium',
		correctAnswer: 'Waning Moon',
		incorrectAnswers: ['New Moon', 'Full Moon', 'Waxing Moon'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the term for a spell that returns negative energy to its source?',
		difficulty: 'Hard',
		correctAnswer: 'Reversal Spell',
		incorrectAnswers: ['Binding Spell', 'Hex', 'Curse'],
		category: 'Witchcraft'
	},
	{
		question: 'Which element is associated with the direction East?',
		difficulty: 'Medium',
		correctAnswer: 'Air',
		incorrectAnswers: ['Fire', 'Water', 'Earth'],
		category: 'Witchcraft'
	},
	{
		question: "What is the name of the witch's holiday that marks the beginning of spring?",
		difficulty: 'Medium',
		correctAnswer: 'Imbolc',
		incorrectAnswers: ['Beltane', 'Ostara', 'Litha'],
		category: 'Witchcraft'
	},
	{
		question: 'Which plant is often used in love spells?',
		difficulty: 'Easy',
		correctAnswer: 'Rose',
		incorrectAnswers: ['Mint', 'Basil', 'Sage'],
		category: 'Witchcraft'
	},
	{
		question: "What is the term for a witch's magical working space?",
		difficulty: 'Medium',
		correctAnswer: 'Altar',
		incorrectAnswers: ['Circle', 'Sanctuary', 'Temple'],
		category: 'Witchcraft'
	},
	{
		question: 'Which metal is commonly associated with the planet Venus?',
		difficulty: 'Hard',
		correctAnswer: 'Copper',
		incorrectAnswers: ['Iron', 'Silver', 'Gold'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the name of the spell that seeks to attract something to the caster?',
		difficulty: 'Medium',
		correctAnswer: 'Attraction Spell',
		incorrectAnswers: ['Banishing Spell', 'Binding Spell', 'Hex'],
		category: 'Witchcraft'
	},
	{
		question: 'Which color candle is often used in protection spells?',
		difficulty: 'Easy',
		correctAnswer: 'Black',
		incorrectAnswers: ['White', 'Red', 'Green'],
		category: 'Witchcraft'
	},
	{
		question: "What is the term for a witch's magical name?",
		difficulty: 'Medium',
		correctAnswer: 'Craft Name',
		incorrectAnswers: ['Spirit Name', 'Shadow Name', 'Mystic Name'],
		category: 'Witchcraft'
	},
	{
		question: 'Which herb is often used in purification rituals?',
		difficulty: 'Easy',
		correctAnswer: 'Lavender',
		incorrectAnswers: ['Rosemary', 'Thyme', 'Basil'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the term for a spell that binds someone from causing harm?',
		difficulty: 'Medium',
		correctAnswer: 'Binding Spell',
		incorrectAnswers: ['Hex', 'Curse', 'Reversal Spell'],
		category: 'Witchcraft'
	},
	{
		question: 'Which element is associated with the direction South?',
		difficulty: 'Medium',
		correctAnswer: 'Fire',
		incorrectAnswers: ['Water', 'Earth', 'Air'],
		category: 'Witchcraft'
	},
	{
		question: "What is the name of the witch's holiday that celebrates the harvest?",
		difficulty: 'Medium',
		correctAnswer: 'Lughnasadh',
		incorrectAnswers: ['Mabon', 'Samhain', 'Beltane'],
		category: 'Witchcraft'
	},
	{
		question: 'Which crystal is often used for grounding and protection?',
		difficulty: 'Easy',
		correctAnswer: 'Obsidian',
		incorrectAnswers: ['Amethyst', 'Quartz', 'Citrine'],
		category: 'Witchcraft'
	},
	{
		question: "What is the term for a witch's magical spell book?",
		difficulty: 'Medium',
		correctAnswer: 'Grimoire',
		incorrectAnswers: ['Book of Shadows', 'Spellbook', 'Codex'],
		category: 'Witchcraft'
	},
	{
		question: 'Which metal is commonly associated with the planet Mars?',
		difficulty: 'Hard',
		correctAnswer: 'Iron',
		incorrectAnswers: ['Copper', 'Silver', 'Gold'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the name of the spell that seeks to remove negative energy?',
		difficulty: 'Medium',
		correctAnswer: 'Banishing Spell',
		incorrectAnswers: ['Attraction Spell', 'Binding Spell', 'Hex'],
		category: 'Witchcraft'
	},
	{
		question: 'Which color candle is often used in healing spells?',
		difficulty: 'Easy',
		correctAnswer: 'Blue',
		incorrectAnswers: ['White', 'Red', 'Green'],
		category: 'Witchcraft'
	},
	{
		question: "What is the term for a witch's magical tool used for divination?",
		difficulty: 'Medium',
		correctAnswer: 'Scrying Mirror',
		incorrectAnswers: ['Athame', 'Wand', 'Chalice'],
		category: 'Witchcraft'
	},
	{
		question: 'Which herb is often used in love potions?',
		difficulty: 'Easy',
		correctAnswer: 'Rosemary',
		incorrectAnswers: ['Mint', 'Basil', 'Sage'],
		category: 'Witchcraft'
	},
	{
		question: 'What is the term for a spell that seeks to cause harm?',
		difficulty: 'Medium',
		correctAnswer: 'Hex',
		incorrectAnswers: ['Binding Spell', 'Banishing Spell', 'Reversal Spell'],
		category: 'Witchcraft'
	},
	{
		question: 'Which element is associated with the direction West?',
		difficulty: 'Medium',
		correctAnswer: 'Water',
		incorrectAnswers: ['Fire', 'Earth', 'Air'],
		category: 'Witchcraft'
	},
	{
		question: "What is the name of the witch's holiday that celebrates the summer solstice?",
		difficulty: 'Medium',
		correctAnswer: 'Litha',
		incorrectAnswers: ['Beltane', 'Mabon', 'Samhain'],
		category: 'Witchcraft'
	}
];
