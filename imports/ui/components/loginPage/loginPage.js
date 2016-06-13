import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './loginPage.html';
import { name as FbButton } from '../fbButton/fbButton';


class LoginPage {
  constructor($scope, $reactive) {
    'ngInject';
 
    $reactive(this).attach($scope);
    
  }
}
 
const name = 'loginPage';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  FbButton
]).component(name, {
  template,
  controllerAs: name,
  controller: LoginPage
})
  .config(config);
 
function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login-page></login-page>'
    });
}