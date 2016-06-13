import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './channelList.html';
import { name as ChatView } from '../chatView/chatView';

class ChannelList {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
    
    //TODO on child_changed check visibility -> if false > remove id from _parties
    
    _channels = new Mongo.Collection(null);
    
    channelsRef = fireapp.database().ref().child('channels');

    channelsRef.on("child_added", function(snapshot) {
      _channels.insert(snapshot.val());
    });

    this.helpers({
      channels() {
        return _channels.find({});
      }
    });
    
  }
}
 
const name = 'channelList';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ChatView
]).component(name, {
  template,
  controllerAs: name,
  controller: ChannelList
})
  .config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('channels', {
      url: '/channels',
      template: '<channel-list></channel-list>'
    });
}