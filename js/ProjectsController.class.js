class ProjectsController {
  constructor(model, view) {
    // console.log("controller");
    this.model = model;
    this.view = view;

    this.form = document.querySelector('.add_project_form');
    this.projects_list = document.querySelector('.projects_list');


    this.addEvent = new Event(this.form);
    this.listEvent = new Event(this.projects_list);


    this.loadProjects();
    this.assignEvent();

  }

  assignEvent() {
      this.addEvent.attach('submit', this.formHandler.bind(this));
      this.listEvent.attach('click', this.listHandler.bind(this));
  }

  formHandler(event){
    event.preventDefault();
    let form = event.target;
    let data = {}

    data.id = new Date().getTime();
    data.title = form.querySelector('input[name="title"]').value;
    data.description = form.querySelector('input[name="description"]').value;
    data.link = form.querySelector('input[name="link"]').value;

    this.model.addProject(data);

    this.view.renderProjects(data);

    form.reset();

  }

  listHandler(event){
    if(event.target.classList.contains('del_button')){
      // console.log(event.target.parentNode.id, 'asd');
      this.delProject(event.target.parentNode.id);
    }
  }

  delProject(id){
    // console.log(id);
    this.model.delProject(id);
    this.view.delProject(this.projects_list, id);
  }

  loadProjects(){
    this.model.getProjects().forEach( (i) => {
      // console.log(i)
      this.view.renderProjects(i);
    })
  }
}
