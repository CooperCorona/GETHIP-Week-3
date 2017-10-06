import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  Template.instance().counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter: function() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button': function(event) {
    // increment the counter when button is clicked
    value = Template.instance().counter.get() + 1;
    Template.instance().counter.set(value);
  },
});