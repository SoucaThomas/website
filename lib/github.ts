export interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  image?: string;
}

// This function is kept for backward compatibility
// but we're now using the data from JSON files
export async function getGithubProjects(): Promise<Project[]> {
  try {
    // In a real implementation, this would fetch from the GitHub API
    // const response = await fetch('https://api.github.com/users/SoucaThomas/repos');
    // const data = await response.json();

    // Import the projects from the JSON file
    const { getProjects } = await import("./data");
    return getProjects();
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
}
