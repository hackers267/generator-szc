const Generator = require("yeoman-generator");
module.exports = class extends Generator {
  writing() {
    const template = this.templatePath();
    const destination = this.destinationPath();
    const context = { name: "temp" };
    console.warn(template);
    this.fs.copy(
      template,
      destination,
      { globOptions: { dot: true } },
      context
    );
  }
};
