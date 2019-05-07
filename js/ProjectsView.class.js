class ProjectsView {

  renderProjects(content){

    let projects_list = document.querySelector('.projects_list');
    let item = document.createElement('li');
    let title = document.createElement('span');
    let description = document.createElement('span');
    let del = document.createElement('button');

    title.innerText = content.title;

    description.innerText = content.description;

    del.innerText = 'del';
    del.classList.add('btn', 'del_button');

    item.classList.add('project_item');
    item.id = content.id;

    item.appendChild(title);
    item.appendChild(description);
    item.appendChild(del);


    projects_list.appendChild(item);

  }

  delProject(projects_list, id){
    projects_list.removeChild(document.getElementById(id))
  }

}
