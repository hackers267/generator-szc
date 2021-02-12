const Generator = require("yeoman-generator");
module.exports = class extends Generator {
  async prompting() {
    this.answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "input",
        name: "desc",
        message: "Your project description",
        default: "",
      },
    ]);
  }

  writing() {
    const template = this.templatePath();
    const destination = this.destinationPath();
    const context = { name: this.answer.name, desc: this.answer.desc };
    console.warn(template);
    this.fs.copyTpl(template, destination, context, {
      globOptions: { dot: true },
    });
  }
};
