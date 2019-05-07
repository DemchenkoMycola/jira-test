class ProjectsModel {
  constructor() {
    // console.log("model");
    this.projects = [
      {
        id: "1",
        title: "project 1",
        description: "project 1 description",
        link: "http://google.com",
        users: [],
      },
      {
        id: "2",
        title: "project 2",
        description: "project 2 description",
        link: "http://google.com",
        users: [],
      },
    ];
  }

  getProjects(){
    return this.projects;
  }

  addProject(item){
    this.projects.push(item);
  }

  delProject(id){
    let index = this.projects.findIndex( (i) => i.id === id );
    this.projects.splice(index, 1);
    console.log(this.projects);    
  }

}
