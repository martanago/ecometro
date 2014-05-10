'use strict';

define([
  'backbone',
  'models/project'
], function(Backbone, ProjectModel) {

  var ProjectsCollection = Backbone.Collection.extend({

    url: 'http://ecometro.cartodb.com/api/v2/sql',
    model: ProjectModel,

    parse: function(data) {
      return data.rows;
    },

    getData: function(callback) {
      var options = {

        data: {
          q: 'SELECT * FROM tabla_de_proyectos',
          format: 'json'
        },

        success: function() {
          if (callback && typeof callback === 'function') {
            callback(undefined, callback);
          }
        },

        error: function(err) {
          if (callback && typeof callback === 'function') {
            callback(err);
          }
        }

      };

      this.fetch(options);

    }

  });

  return ProjectsCollection;

});
