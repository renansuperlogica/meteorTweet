Template.homepage.onCreated(function() {
console.log("ta vivo o monstro");

  document.body.style.backgroundColor = "#e6ecf0";
})

Template.homepage.helpers({
  userID: function(){
    if (Meteor.user()) {
        return Meteor.userId();
    }
  },

  allTweets: function(){
    return Tweets.find();
  }
})

Template.homepage.events({

    'click #postTweetButton': function(event){

        tweet = $('#postTweet').val();

        Tweets.insert({
          tweet: tweet,
          createdAt: new Date(),
          userId: Meteor.userId()
        });

        $('#postTweet').val("");
    },
})
