(() => {

  // console.log("run");

  let projectsModel = new ProjectsModel();
  let projectsView = new ProjectsView();

  new ProjectsController(projectsModel, projectsView);

})();
