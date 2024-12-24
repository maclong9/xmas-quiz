export interface Question {
	question: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	correctAnswer: string | boolean;
	incorrectAnswers: string[] | boolean[];
	category: string;
}

export const questions: Question[] = [
	{
		question: 'How long was our first video call?',
		difficulty: 'Easy',
		correctAnswer: '88 minutes',
		incorrectAnswers: ['30 minutes', '45 minutes', '2 hours'],
		category: 'Personal'
	},
	{
		question: 'What date did we first exchange messages?',
		difficulty: 'Easy',
		correctAnswer: 'November 28th',
		incorrectAnswers: ['July 15th', 'May 15th', 'November 25th'],
		category: 'Personal'
	},
	{
		question: 'Where did we first meet?',
		difficulty: 'Easy',
		correctAnswer: 'Threads',
		incorrectAnswers: ['Instagram', 'YouTube', 'The Beach'],
		category: 'Personal'
	},
	{
		question: 'Which messaging app did you convince me to download?',
		difficulty: 'Easy',
		correctAnswer: 'Telegram',
		incorrectAnswers: ['WhatsApp', 'Signal', 'Slack'],
		category: 'Personal'
	},
	{
		question: 'What was our first topic of conversation?',
		difficulty: 'Medium',
		correctAnswer: 'Linkin Park',
		incorrectAnswers: ['Belarus', 'Sabrina Carpenter', 'Witchcraft'],
		category: 'Personal'
	},
	{
		question: 'In which city will we meet in person for the first time?',
		difficulty: 'Medium',
		correctAnswer: 'Poznan',
		incorrectAnswers: ['Warsaw', 'Krakow', 'London'],
		category: 'Personal'
	},
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
	},
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
		question: 'What colors are on the Belarusian flag?',
		difficulty: 'Easy',
		correctAnswer: 'Red and White',
		incorrectAnswers: ['Blue and Yellow', 'Red, Green and White', 'Green and White only'],
		category: 'Geography'
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
		question: "What is the name of the witch's holiday that celebrates the summer solstice?",
		difficulty: 'Medium',
		correctAnswer: 'Litha',
		incorrectAnswers: ['Beltane', 'Mabon', 'Samhain'],
		category: 'Witchcraft'
	}
];
