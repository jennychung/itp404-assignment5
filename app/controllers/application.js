import Ember from 'ember';
// import $ from 'jquery';

export default Ember.Controller.extend({

  actions:{
             searchReddit(){
                 let subreddit  = this.get('subreddit');
console.log(subreddit);
                 this.transitionToRoute('subreddit', subreddit);

}
}


});
