const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("portrait.jpeg");
  eleventyConfig.addPassthroughCopy("writing/*.pdf");
  eleventyConfig.addPassthroughCopy("projects/**/*.{jpg,jpeg,png,gif,webp}");
  eleventyConfig.addPassthroughCopy("research");

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("projects/*/index.{md,txt}")
      .sort((a, b) => {
        return a.inputPath.localeCompare(b.inputPath);
      });
  });

  eleventyConfig.addCollection("research", function(collectionApi) {
    return collectionApi.getFilteredByGlob("research/**/index.md");
  });

  eleventyConfig.addFilter("getProjectImages", function(inputPath) {
    const dir = path.dirname(inputPath);

    if (!fs.existsSync(dir)) {
      return [];
    }

    return fs
      .readdirSync(dir)
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort();
  });
  eleventyConfig.addFilter("getNavImage", function(inputPath) {
  const dir = path.dirname(inputPath);

  const candidates = [
    "nav.jpg",
    "nav.jpeg",
    "nav.png",
    "nav.webp"
  ];

  for (const file of candidates) {
    if (fs.existsSync(path.join(dir, file))) {
      return "/" + path.join(dir, file).replace(/\\/g, "/");
    }
  }

  return null;
});

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
