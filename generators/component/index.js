var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('componentname', {type: String, required: true});
  },
  generateComponentES6: function() {
    this.fs.copyTpl(
      this.templatePath('component.es6'),
      this.destinationPath('app/assets/javascripts/components/' + this.componentname + '.es6'),
      { title: 'TG Component ES6 generated' }
    );
  },
  generateComponentSTYLESHEET: function() {
    this.fs.copyTpl(
      this.templatePath('component.scss'),
      this.destinationPath('app/assets/stylesheets/components/' + this.componentname + '.scss'),
      { title: 'TG Component SCSS generated' }
    );
  },
  generateComponentHANDLEBARS: function() {
    this.fs.copyTpl(
      this.templatePath('component.handlebars'),
      this.destinationPath('app/assets/javascripts/templates/components/' + this.componentname + '.handlebars'),
      { title: 'TG Component HandleBars generated' }
    );
  }

});
