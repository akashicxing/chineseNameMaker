// Naming Taboos
export const namingTaboos = [
  {
    title: "Homophone Avoidance",
    description: "Avoid characters that sound similar to unlucky words like 'death', 'loss', or 'decline'.",
    examples: ["柏 (sounds like 'white/defeat')", "想 (similar to 'mutual')", "灵 (sounds like 'zero')"]
  },
  {
    title: "Rare Characters",
    description: "Avoid using extremely rare or complex characters that are difficult to write and pronounce.",
    examples: ["鬱 (depression)", "龘 (dragon-like)", "䗪 (insect name)"]
  },
  {
    title: "Character Repetition",
    description: "Avoid using characters that are similar to or the same as the surname, or repeating characters in the given name.",
    examples: ["Wang Wang (王旺)", "Chen Chen (陈辰)", "Lin Lin (林霖)"]
  },
  {
    title: "Negative Connotations",
    description: "Avoid characters with negative, derogatory, or inappropriate meanings.",
    examples: ["丑 (ugly)", "怨 (resentment)", "痛 (pain)"]
  }
];

// Common Chinese Surnames and Their Origins
export const familyNames = [
  {
    surname: "Li (李)",
    origin: "Originated from the Ying clan, descendants of Bo Yi. During the Warring States period, the Li clan took their name from their fief.",
    famous: ["Li Bai (poet)", "Li Qingzhao (poetess)", "Li Shangyin (poet)"],
    rank: 1
  },
  {
    surname: "Wang (王)",
    origin: "Descended from the Ji clan, offspring of King Wen of Zhou. Named after their fief Wang City.",
    famous: ["Wang Wei (poet)", "Wang Anshi (statesman)", "Wang Xizhi (calligrapher)"],
    rank: 2
  },
  {
    surname: "Zhang (张)",
    origin: "Descended from the Yellow Emperor's clan. Named for their expertise in archery and bow-making.",
    famous: ["Zhang Heng (astronomer)", "Zhang Zeduan (painter)", "Zhang Jiuling (poet)"],
    rank: 3
  },
  {
    surname: "Liu (刘)",
    origin: "Descended from King Wen of Zhou's third son. Named for their skill in handling six horses.",
    famous: ["Liu Bang (emperor)", "Liu Yuxi (poet)", "Liu Bei (warlord)"],
    rank: 4
  },
  {
    surname: "Chen (陈)",
    origin: "Descended from Emperor Shun's clan. Named after their fief Chen (modern Huaiyang, Henan).",
    famous: ["Chen Shou (historian)", "Chen Ziang (poet)", "Chen Tuan (philosopher)"],
    rank: 5
  }
];

// Recommended Characters for Names
export const recommendedCharacters = {
  male: {
    virtue: [
      { character: "德", meaning: "virtue" },
      { character: "仁", meaning: "benevolence" },
      { character: "义", meaning: "righteousness" },
      { character: "礼", meaning: "courtesy" },
      { character: "智", meaning: "wisdom" },
      { character: "信", meaning: "trust" },
      { character: "诚", meaning: "sincerity" },
      { character: "正", meaning: "upright" }
    ],
    strength: [
      { character: "强", meaning: "strong" },
      { character: "勇", meaning: "brave" },
      { character: "毅", meaning: "resolute" },
      { character: "刚", meaning: "firm" },
      { character: "威", meaning: "mighty" },
      { character: "武", meaning: "martial" },
      { character: "雄", meaning: "heroic" },
      { character: "壮", meaning: "robust" }
    ],
    talent: [
      { character: "才", meaning: "talent" },
      { character: "文", meaning: "cultural" },
      { character: "学", meaning: "scholarly" },
      { character: "博", meaning: "extensive" },
      { character: "达", meaning: "accomplished" },
      { character: "明", meaning: "bright" },
      { character: "哲", meaning: "philosophical" },
      { character: "思", meaning: "thoughtful" }
    ],
    nature: [
      { character: "山", meaning: "mountain" },
      { character: "海", meaning: "ocean" },
      { character: "天", meaning: "heaven" },
      { character: "云", meaning: "cloud" },
      { character: "风", meaning: "wind" },
      { character: "雨", meaning: "rain" },
      { character: "阳", meaning: "sun" },
      { character: "光", meaning: "light" }
    ]
  },
  female: {
    elegance: [
      { character: "雅", meaning: "elegant" },
      { character: "婉", meaning: "graceful" },
      { character: "淑", meaning: "virtuous" },
      { character: "静", meaning: "serene" },
      { character: "素", meaning: "pure" },
      { character: "清", meaning: "clear" },
      { character: "芳", meaning: "fragrant" },
      { character: "菁", meaning: "refined" }
    ],
    beauty: [
      { character: "美", meaning: "beautiful" },
      { character: "丽", meaning: "pretty" },
      { character: "姿", meaning: "posture" },
      { character: "韵", meaning: "charm" },
      { character: "秀", meaning: "elegant" },
      { character: "华", meaning: "splendid" },
      { character: "英", meaning: "outstanding" },
      { character: "慧", meaning: "intelligent" }
    ],
    virtue: [
      { character: "德", meaning: "virtue" },
      { character: "贤", meaning: "worthy" },
      { character: "淑", meaning: "gentle" },
      { character: "仪", meaning: "deportment" },
      { character: "敏", meaning: "quick" },
      { character: "慈", meaning: "kind" },
      { character: "雯", meaning: "refined" },
      { character: "婷", meaning: "graceful" }
    ],
    nature: [
      { character: "月", meaning: "moon" },
      { character: "花", meaning: "flower" },
      { character: "春", meaning: "spring" },
      { character: "兰", meaning: "orchid" },
      { character: "雪", meaning: "snow" },
      { character: "琳", meaning: "jade" },
      { character: "璃", meaning: "glass" },
      { character: "瑶", meaning: "precious jade" }
    ]
  }
}; 