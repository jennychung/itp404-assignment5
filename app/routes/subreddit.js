import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    model(params){
       console.log(params);
        let subreddit = params.subreddit;

        let url = `https://www.reddit.com/r/${subreddit}` + ".json";
        return $.getJSON(url).then(function(results){
            console.log(results);
            return results.data.children;
        })
    }
});
