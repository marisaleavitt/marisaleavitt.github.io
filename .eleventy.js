const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("portrait.jpeg");
  eleventyConfig.addPassthroughCopy("writing/*.pdf");
  eleventyConfig.addPassthroughCopy("projects/**/*.{jpg,jpeg,png,gif,webp}");

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("projects/*/index.{md,txt}")
      .sort((a, b) => {
        return a.inputPath.localeCompare(b.inputPath);
      });
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

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
