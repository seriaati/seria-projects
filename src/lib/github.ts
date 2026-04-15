const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const OWNER = "seriaati";

export async function fetchStars(repos: string[]): Promise<Record<string, number>> {
  const fields = repos
    .map((repo, i) => {
      const alias = `r${i}`;
      return `${alias}: repository(owner: "${OWNER}", name: "${repo}") { stargazerCount }`;
    })
    .join("\n");

  const query = `{ ${fields} }`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers,
      body: JSON.stringify({ query }),
    });

    if (!res.ok) return {};

    const json = await res.json();
    const data = json.data ?? {};

    const result: Record<string, number> = {};
    repos.forEach((repo, i) => {
      const alias = `r${i}`;
      result[repo] = data[alias]?.stargazerCount ?? 0;
    });
    return result;
  } catch {
    return {};
  }
}
