type Icon = {
	"icon-name": string;
	type: string;
	variants?: string[];
};

export function bigram_search(data: Icon[], query: string): Icon[] {
	const bigrams = (str: string): string[] => {
		const n = 2;
		const bigrams: string[] = [];
		for (let i = 0; i <= str.length - n; i++) {
			bigrams.push(str.slice(i, i + n));
		}
		return bigrams;
	};

	const querybigrams = bigrams(query.toLowerCase());

	return data.filter((item) => {
		const iconNamebigrams = bigrams(item["icon-name"].toLowerCase());
		return querybigrams.every((bigram) => iconNamebigrams.includes(bigram));
	});
}

export function linear_search(data: Icon[], query: string): Icon[] {
	return data.filter((icon) => icon["icon-name"].toLowerCase().includes(query.toLowerCase()));
}
