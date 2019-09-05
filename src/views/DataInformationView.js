var App = App || {};

App.views.DataInformationView = Backbone.View.extend({
  el: '#info',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  template: Handlebars.compile($('#dataInfo--template').html()),

  render: function(args) {
    this.$el.empty();
    this.$el.append(this.template({
      q: args.q,
      totalItems: args.totalItems
    }));
  	return this;
  },

});
