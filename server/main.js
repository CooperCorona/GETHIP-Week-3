import { Meteor } from 'meteor/meteor';
import { Strengths } from '../collections/strengths.js';
import { setup } from './setup.js';

Meteor.startup(function() {
    setup();

    Meteor.publish('Strengths', function() {
        return Strengths.find();
    });

    Meteor.methods({
        'addDocument':function(name, strength) {
            Strengths.insert({
                name: name,
                strength: strength
            });
        },
        'removeDocument':function(doc) {
            Strengths.remove({ name: doc });
        }
    });
});
