FlowRouter.route('/',{
  name: 'homepage',
  action: function(params,queryParams){
    BlazeLayout.render("homepage");
  }
});

FlowRouter.route('/login',{
  name: 'login',
  action: function(params,queryParams){
    BlazeLayout.render("login");
  }
});

FlowRouter.route('/:userId',{
  name: 'userPage',
  action: function(params,queryParams){
    BlazeLayout.render("userPage");
  }
});
