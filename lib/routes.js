FlowRouter.route('/', {
    name: 'main',
    action: function() {
        BlazeLayout.render('main');
    }
});

FlowRouter.route('/page2', {
    name: 'secret',
    action: function() {
        BlazeLayout.render('page2');
    }
});
