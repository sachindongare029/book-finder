var App = App || {};

App.views.SearchView = Backbone.View.extend({
	el: '#search',

	events: {
  },

  template: Handlebars.compile($('#searchform--template').html()),

  initialize: function() {
  	console.log("in the search view");
  	_.bindAll(this, 'render');
  	this.render();
  },

  render: function() {
  	this.$el.append(this.template({}));
  	return this;
  },

})