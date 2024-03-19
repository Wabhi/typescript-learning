// //autobind decorator

// //projectInput Class
// class ProjectInput {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLDivElement;
//   element: HTMLFormElement;
//   titleInputElement: HTMLInputElement;
//   descriptionInputElement: HTMLInputElement;
//   peopleInputElement: HTMLInputElement;

//   constructor() {
//     this.templateElement = document.getElementById(
//       "project-input"
//     )! as HTMLTemplateElement;
//     this.hostElement = document.getElementById("app")! as HTMLDivElement;

//     const importedNode = document.importNode(
//       this.templateElement.content,
//       true
//     );
//     this.element = importedNode.firstElementChild as HTMLFormElement;
//     this.element.id = "user-input";
//     this.titleInputElement = this.element.querySelector(
//       "#title"
//     )! as HTMLInputElement;
//     this.descriptionInputElement = this.element.querySelector(
//       "#description"
//     )! as HTMLInputElement;
//     this.peopleInputElement = this.element.querySelector(
//       "#people"
//     )! as HTMLInputElement;
//     this.configure();
//     this.attach();
//   }

//   private attach() {
//     this.hostElement.insertAdjacentElement("afterbegin", this.element);
//   }

//   private clearInputs(){
//     this.titleInputElement.value="";
//     this.descriptionInputElement.value="";
//     this.peopleInputElement.value="";
//   }
//   private getUserInputs():[string, string, number] | void{
//    const titleInput =  this.titleInputElement.value;
//    const descriptionInput = this.descriptionInputElement.value;
//    const peopleInput = this.peopleInputElement.value;
//    if(titleInput.trim().length===0 || descriptionInput.trim().length===0 || peopleInput.trim().length===0){
//     alert("please enter something in input box.....")
//     return
//    }else{
//     return [titleInput,descriptionInput,+peopleInput]
//    }
//   }
//   private submithandler(event: Event) {
//     event.preventDefault();
//     const inputs = this.getUserInputs()
//     if(Array.isArray(inputs)){
//         const [title,description,people] = inputs
//         console.log(title,description,people)
//         this.clearInputs()
//     }
//     // console.log(this.titleInputElement.value);
//     // console.log(this.descriptionInputElement.value);
//     // console.log(this.peopleInputElement.value);
//   }

//   private configure() {
//     this.element.addEventListener("submit", this.submithandler.bind(this));
//   }
// }

// const prjInput = new ProjectInput();

//autobind decorator

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Project state management class................................................................
class ProjectState {
  private projects: any[] = [];
  private listeners: any[] = [];
  private static instance: ProjectState;
  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new ProjectState();
      return this.instance;
    }
  }

  addListener(listener: Function) {
    this.listeners.push(listener);
  }

  addProject(title: string, description: string, people: number) {
    const newProject = {
      id: Math.random().toString(),
      title: title,
      description: description,
      people: people,
    };
    this.projects.push(newProject);
    for (const listener of this.listeners) {
      listener(this.projects.slice());
    }
  }
}

const project_state = ProjectState.getInstance();

//validator
interface Validatable {
  value: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validator(validateInput: Validatable) {
  let isValid = true;
  if (validateInput.required) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if (
    validateInput.minLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length <= validateInput.maxLength;
  }
  if (validateInput.min != null && typeof validateInput.value === "number") {
    isValid = isValid && validateInput.value >= validateInput.min;
  }
  if (validateInput.max != null && typeof validateInput.value === "number") {
    isValid = isValid && validateInput.value <= validateInput.max;
  }
  return isValid;
}

//ProjectList Class................................................................
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: any[];
  constructor(private type: "active" | "finished") {
    this.assignedProjects = [];
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `projects-${this.type}`;
    project_state.addListener((projects: any[]) => {
      const relevantProjects = projects.filter((project)=>{
        if(this.type === "active"){
          return project.status ===
        }
      })
      this.assignedProjects = projects;
      this.renderProjects();
    });
    this.attach();
    this.renderContent();
  }

  private renderContent() {
    const listId = `project-list-${this.type}`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + "PROJECTS";
  }
  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  private renderProjects() {
    const listElements = document.getElementById(
      `project-list-${this.type}`
    )! as HTMLUListElement;
    for (const projectItem of this.assignedProjects) {
      const listItem = document.createElement("li");
      listItem.textContent = projectItem.title;
      listElements.appendChild(listItem);
    }
  }
}

//projectInputs Class................................................................

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;
    this.configure();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }
  private getUserInputs(): [string, string, number] | void {
    const titleInput = this.titleInputElement.value;
    const descriptionInput = this.descriptionInputElement.value;
    const peopleInput = this.peopleInputElement.value;

    const titleValidate: Validatable = {
      value: titleInput,
      required: true,
    };
    const descriptionValidate: Validatable = {
      value: descriptionInput,
      required: true,
      minLength: 5,
    };
    const peopleValidate: Validatable = {
      value: +peopleInput,
      required: true,
      min: 1,
      max: 5,
    };
    if (
      !validator(titleValidate) ||
      !validator(descriptionValidate) ||
      !validator(peopleValidate)
    ) {
      alert("please enter something in input box.....");
      return;
    } else {
      return [titleInput, descriptionInput, +peopleInput];
    }
  }
  private submithandler(event: Event) {
    event.preventDefault();
    const inputs = this.getUserInputs();
    if (Array.isArray(inputs)) {
      const [title, description, people] = inputs;
      project_state.addProject(title, description, people);
      console.log(title, description, people);
      this.clearInputs();
    }
    // console.log(this.titleInputElement.value);
    // console.log(this.descriptionInputElement.value);
    // console.log(this.peopleInputElement.value);
  }

  private configure() {
    this.element.addEventListener("submit", this.submithandler.bind(this));
  }
}

const prjInput = new ProjectInput();

const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
