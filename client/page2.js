import { Strengths } from '../collections/strengths.js';

Template.page2.onCreated(function() {
    Meteor.subscribe('Strengths');
});

Template.page2.helpers({
    'strengths': function() {
        return Strengths.find();
    }
});

Template.page2.events({
    'submit #form':function(event) {
        event.preventDefault();

        name = event.target.name.value;
        strength = event.target.strength.value;
        Meteor.call('addDocument', name, strength);

        event.target.name.value = "";
        event.target.strength.value = "";
    },
    'click #remove':function(event) {
        name = this.name;
        Meteor.call('removeDocument', name);
    }
});
