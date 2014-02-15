define(['durandal/system', 'plugins/router'], function(system, router){
  
  var service = {
  };
  
  router.on('router:navigation:composition-complete', onRouteNavigationCompositionComplete.bind(service));

  return service;


  function onRouteNavigationCompositionComplete(instance, instruction){
    system.log(system.getModuleId(service), 'onRouteNavigationCompositionComplete called', instruction);
  }
});
