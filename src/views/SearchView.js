var App = App || {};

App.views.SearchView = Backbone.View.extend({
	el: '#search',

	events: {
  },
  template: Handlebars.compile($('#searchform--template').html()),

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.append(this.template());
  	return this;
  },

})