import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router'; 
 
import template from './cheatapp.html';
import { name as ChannelList } from '../channelList/channelList';
import { name as ChatView } from '../chatView/chatView';
import { name as LoginPage } from '../loginPage/loginPage';


class CheatApp {}
 
const name = 'cheatapp';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  ChannelList,
  ChatView,
  LoginPage
]).component(name, {
  template,
  controllerAs: name,
  controller: CheatApp
})
  .config(config);
 
function config($locationProvider, $urlRouterProvider) {
  'ngInject';
 
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/channels');
}