import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function() {
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
    let value = Template.instance().counter.get() + 1;
    Template.instance().counter.set(value);
  },
});
