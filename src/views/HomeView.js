var App = App || {};

App.views.HomeView = Backbone.View.extend({
  el: '#root',

  events: {
  },
  template: Handlebars.compile($('#home--template').html()),
  initialize: function() {
    console.log("homeView");
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.append(this.template());
  	return this;
  },

});
