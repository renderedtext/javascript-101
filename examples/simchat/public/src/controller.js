(() => {
  const module = angular.module('app');

  module.controller('cont', cont);

  cont.$inject = [];

  function cont() {
    const vm = this;
    vm.msg = '';
    vm.msgs = '';
    vm.socket = io();

    vm.socket.on('msg', msg => {
      vm.msgs += `\n${msg}`;
      console.log(vm.msgs);
    });

    vm.sendMessage = keyEvent => {
      if (keyEvent.which === 13)
      {
        vm.socket.emit('msg', vm.msg);
        vm.msgs += `\n${vm.msg}`;
        console.log(vm.msg);
        vm.msg='';
      }
    };

  };


}) ();
