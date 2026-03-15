module.exports = function (eleventyConfig) {
  // Zero-pad a number: {{ 3 | padZero }} → "003"
  eleventyConfig.addFilter("padZero", (num, len = 3) =>
    String(num).padStart(len, "0")
  );

  // Convert tag slug to display name: {{ "open-source" | tagName }} → "Open Source"
  eleventyConfig.addFilter("tagName", (tag) =>
    tag.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
  );

  // Collect all unique projectTags values across all project files
  eleventyConfig.addCollection("projectTagList", function (collectionApi) {
    const tags = new Set();
    collectionApi.getAll().forEach(item => {
      if (item.data.projectTags) {
        item.data.projectTags.forEach(tag => tags.add(tag));
      }
    });
    return [...tags].sort();
  });

  // Pass static assets through unchanged
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Watch CSS for changes during dev
  eleventyConfig.addWatchTarget("src/css/");

  return {
    // Set to "/" when using a custom domain; set to "/chrismenning.com/" for
    // the default GitHub Pages subdirectory URL.
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
