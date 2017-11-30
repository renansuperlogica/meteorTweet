Template.userPage.helpers({

    thisUser: function() {
      userId = FlowRouter.getParam('userId');

      return Meteor.users.findOne({
        _id: userId
      });
    },

    allMyTweet: function(){
      return Tweets.find({userId: FlowRouter.getParam('userId') })
    }

});
