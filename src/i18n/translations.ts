export const locales = ["en", "zh-TW"] as const;
export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
    },
    footer: {
      crafted: "Crafted with care.",
    },
    hero: {
      ariaLabel: "Seria's Projects",
      scrollHint: "Scroll to next section",
    },
    featured: {
      eyebrow: "Selected work",
      title: "Featured Projects",
      viewAll: "View all projects",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's build",
      titleEm: "something together",
      body: "Open to freelance projects, collaborations, and interesting conversations. If you have an idea worth building, I'd love to hear about it.",
      freelanceLabel: "Freelance",
    },
    projects: {
      eyebrow: "All work",
      title: "Projects",
      sub: "A curated list of things I've built.",
      searchPlaceholder: "Search projects…",
      searchAriaLabel: "Search projects",
      filterAriaLabel: "Filter by tag",
      tagAll: "All",
      resultsCount: (n: number) => `${n} project${n !== 1 ? "s" : ""}`,
      emptyTitle: "No projects found",
      emptySub: "Try a different search term or tag.",
    },
    langToggle: "中文",
  },
  "zh-TW": {
    nav: {
      home: "首頁",
      projects: "專案",
    },
    footer: {
      crafted: "用心打造。",
    },
    hero: {
      ariaLabel: "Seria 的專案",
      scrollHint: "捲動至下一區塊",
    },
    featured: {
      eyebrow: "精選作品",
      title: "精選專案",
      viewAll: "查看所有專案",
    },
    contact: {
      eyebrow: "聯絡我",
      title: "一起打造",
      titleEm: "有意義的作品",
      body: "歡迎自由接案、合作提案，或只是聊聊有趣的想法。如果你有值得實現的點子，我很樂意聆聽。",
      freelanceLabel: "自由接案",
    },
    projects: {
      eyebrow: "所有作品",
      title: "專案列表",
      sub: "我精心挑選的一些作品。",
      searchPlaceholder: "搜尋專案…",
      searchAriaLabel: "搜尋專案",
      filterAriaLabel: "依標籤篩選",
      tagAll: "全部",
      resultsCount: (n: number) => `${n} 個專案`,
      emptyTitle: "找不到專案",
      emptySub: "請嘗試不同的搜尋詞或標籤。",
    },
    langToggle: "English",
  },
} satisfies Record<Locale, unknown>;

export type Translations = (typeof translations)[Locale];
