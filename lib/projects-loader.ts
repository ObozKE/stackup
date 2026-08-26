import fs from "fs";
import path from "path";
import projectsData from "@/content/projects.json";

export interface LoadedProjectItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  subtitle?: string;
  summary?: string;
  tags?: string[];
  image: string;
  images?: string[];
  websiteUrl?: string;
  medium?: string;
}

export function getProjectsWithExistingImages(): LoadedProjectItem[] {
  const publicDir = path.join(process.cwd(), "public");

  // Read all actual image files in brand design folder
  const brandDesignDir = path.join(publicDir, "images", "projects", "brand-design");
  let brandFiles: string[] = [];
  if (fs.existsSync(brandDesignDir)) {
    brandFiles = fs
      .readdirSync(brandDesignDir)
      .filter((file) => /\.(webp|png|jpg|jpeg|svg|gif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((file) => `/images/projects/brand-design/${file}`);
  }

  const result: LoadedProjectItem[] = [];

  for (const proj of projectsData) {
    if (proj.category === "Brand Design") {
      // If we have actual brand files uploaded, include all of them in the carousel
      if (brandFiles.length > 0) {
        // Prevent duplicate brand design entries if we already attached all brand files
        if (result.some((r) => r.category === "Brand Design")) {
          continue;
        }

        result.push({
          id: proj.id,
          title: proj.title || "Brand Design Project",
          slug: proj.slug || "brand-design-project",
          category: "Brand Design",
          subtitle: proj.subtitle,
          summary: proj.summary,
          tags: proj.tags,
          image: brandFiles[0],
          images: brandFiles, // Includes ALL 12+ uploaded brand files (b1, b1a, b1b... b1k)
        });
      }
    } else {
      // For Web Dev, Graphic Design, SMM: check if the project image file exists on disk
      const relativeImagePath = proj.image.replace(/^\//, "");
      const fullPath = path.join(publicDir, relativeImagePath);

      if (fs.existsSync(fullPath)) {
        result.push({
          id: proj.id,
          title: proj.title,
          slug: proj.slug,
          category: proj.category,
          subtitle: proj.subtitle,
          summary: proj.summary,
          tags: proj.tags,
          image: proj.image,
          websiteUrl: proj.websiteUrl,
          medium: proj.medium,
        });
      }
    }
  }

  return result;
}
