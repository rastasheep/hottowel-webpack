import angular from 'angular';

class Exception {
 /* @ngInject */
 constructor($q, logger) {
   this.$q = $q;
   this.logger = logger;
 }

 catcher(message) {
   return (e) => {
     var thrownDescription;
     var newMessage;
     if (e.data && e.data.description) {
       thrownDescription = '\n' + e.data.description;
       newMessage = message + thrownDescription;
     }
     e.data.description = newMessage;
     this.logger.error(newMessage);
     return this.$q.reject(e);
   };
 }
}
Exception.$inject = ['$q', 'logger'];

angular
  .module('blocks.exception')
  .service('exception', Exception);

