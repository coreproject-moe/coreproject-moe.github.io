type Icon = {
  'icon-name': string;
  type: string;
  variants?: string[];
};

export function trigram_search(data: Icon[], query: string): Icon[] {
  const trigrams = (str: string): string[] => {
    const n = 1;
    const trigrams: string[] = [];
    for (let i = 0; i <= str.length - n; i++) {
      trigrams.push(str.slice(i, i + n));
    }
    return trigrams;
  };

  const queryTrigrams = trigrams(query.toLowerCase());

  return data.filter((item) => {
    const iconNameTrigrams = trigrams(item['icon-name'].toLowerCase());
    return queryTrigrams.every((trigram) =>
      iconNameTrigrams.includes(trigram)
    );
  });
}
