module.exports = function (eleventyConfig) {
  // Zero-pad a number: {{ 3 | padZero }} → "003"
  eleventyConfig.addFilter("padZero", (num, len = 3) =>
    String(num).padStart(len, "0")
  );

  // Convert tag slug to display name: {{ "open-source" | tagName }} → "Open Source"
  eleventyConfig.addFilter("tagName", (tag) =>
    tag.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
  );

  // Pass static assets through unchanged
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  // Watch CSS for changes during dev
  eleventyConfig.addWatchTarget("src/css/");

  return {
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
