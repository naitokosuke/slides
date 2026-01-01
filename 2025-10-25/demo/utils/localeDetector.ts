interface Request {
  headers: Record<string, string>;
}

interface Locale {
  code: string;
  name: string;
  file: string;
}

interface Config {
  defaultLocale: string;
  locales: Locale[];
}

interface Language {
  locale: string;
  quality: number;
}

export default function (request: Request, config: Config): string {
  // Accept-Language ヘッダーから言語を検出
  const acceptLanguage = request.headers["accept-language"];

  if (!acceptLanguage) {
    return config.defaultLocale;
  }

  // 優先度付きで言語を解析
  const languages = acceptLanguage
    .split(",")
    .map((lang: string): Language => {
      const [locale, q = "1"] = lang.trim().split(";q=");
      return {
        locale: locale.split("-")[0], // ja-JP -> ja
        quality: parseFloat(q),
      };
    })
    .sort((a: Language, b: Language) => b.quality - a.quality);

  // 利用可能な言語と照合
  for (const lang of languages) {
    const availableLocale = config.locales.find(
      (locale: Locale) => locale.code === lang.locale,
    );
    if (availableLocale) {
      return availableLocale.code;
    }
  }

  return config.defaultLocale;
}
