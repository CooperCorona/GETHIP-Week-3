import { Strengths } from '../collections/strengths.js';

export function setup() {
    if (Strengths.find().count() > 0) {
        return;
    }
    Strengths.insert({
        name: 'Cooper',
        strength: 'Competition'
    });
    Strengths.insert({
        name: 'Maxim',
        strength: 'Analytical'
    });
    Strengths.insert({
        name: 'Melanie',
        strength: 'Achiever'
    });
    Strengths.insert({
        name: 'Jim',
        strength: 'Activator'
    });
    Strengths.insert({
        name: 'Andy',
        strength: 'Connectedness'
    });
}
