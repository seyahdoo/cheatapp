import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import template from './chatView.html';
import { name as SendMessageBox } from '../sendMessageBox/sendMessageBox';

 
class ChatView {
  constructor($scope, $reactive, $stateParams) {
    'ngInject';
 
    $reactive(this).attach($scope);

    this.channelId = $stateParams.channelId;
    _curChannel = this.channelId;
    _messages = new Mongo.Collection(null);
    
    messagesRef = fireapp.database().ref().child('channel_messages').child(this.channelId);

    messagesRef.on("child_added", function(snapshot) {
      _messages.insert(snapshot.val());
    });


    this.helpers({
      messages() {
        return _messages.find({});
      }
    });

  }
}
 
const name = 'chatView';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  SendMessageBox
]).component(name, {
  template,
  controllerAs: name,
  controller: ChatView
})
  .config(config);
 
function config($stateProvider) {
  'ngInject';
 
  $stateProvider.state('chatView', {
    url: '/channel/:channelId',
    template: '<chat-view></chat-view>'
  });
}