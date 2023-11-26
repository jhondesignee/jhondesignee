import path from "path"

export default function resolveProjectPath(projectPath: string): string {
  return path.join("/projects/", projectPath)
}