const natural =
  require("natural");

const tokenizer =
  new natural.WordTokenizer();

const extractKeywords =
  (jobDescription) => {
    const tokens =
      tokenizer.tokenize(
        jobDescription.toLowerCase()
      );

    const commonSkills = [
      "react",
      "node",
      "mongodb",
      "javascript",
      "express",
      "tailwind",
      "docker",
      "aws",
      "sql",
      "python",
      "java",
      "api",
      "github",
    ];

    return commonSkills.filter(
      (skill) =>
        tokens.includes(
          skill
        )
    );
  };

module.exports = {
  extractKeywords,
};