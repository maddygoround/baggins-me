const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
  name: "Mahendra Rathod",
  subtitle: "Code · Design · Film",
  birthday: "1989-04-16",
  githubUsername: "maddygoround",
  notionBlogTableId: "af2e2a2641004c60b05694cac92294dc",
  notionAchievementTableId: "8375c8473202406e97ad6c6f6848d9d9",
  notionProjectTableId: "a081bb4a79234c55afae6acd346134af",
  githubToken,
};
