Template.registerHelper('isLoggedUser',function(){
  if(Meteor.user()){
    return true;
  }
});
