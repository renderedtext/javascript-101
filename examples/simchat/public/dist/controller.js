'use strict';

(function () {
  var module = angular.module('app');

  module.controller('cont', cont);

  cont.$inject = [];

  function cont() {
    var vm = this;
    vm.msg = '';
    vm.msgs = '';
    vm.socket = io();

    vm.socket.on('msg', function (msg) {
      vm.msgs += '\n' + msg;
      console.log(vm.msgs);
    });

    vm.sendMessage = function (keyEvent) {
      if (keyEvent.which === 13) {
        vm.socket.emit('msg', vm.msg);
        vm.msgs += '\n' + vm.msg;
        console.log(vm.msg);
        vm.msg = '';
      }
    };
  };
})();