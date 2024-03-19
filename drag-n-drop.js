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
var ProjectState = /** @class */ (function () {
    function ProjectState() {
        this.projects = [];
        this.listeners = [];
    }
    ProjectState.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ProjectState();
            return this.instance;
        }
    };
    ProjectState.prototype.addListener = function (listener) {
        this.listeners.push(listener);
    };
    ProjectState.prototype.addProject = function (title, description, people) {
        var newProject = {
            id: Math.random().toString(),
            title: title,
            description: description,
            people: people,
        };
        this.projects.push(newProject);
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(this.projects.slice());
        }
    };
    return ProjectState;
}());
var project_state = ProjectState.getInstance();
function validator(validateInput) {
    var isValid = true;
    if (validateInput.required) {
        isValid = isValid && validateInput.value.toString().trim().length !== 0;
    }
    if (validateInput.minLength != null &&
        typeof validateInput.value === "string") {
        isValid = isValid && validateInput.value.length >= validateInput.minLength;
    }
    if (validateInput.maxLength != null &&
        typeof validateInput.value === "string") {
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
var ProjectList = /** @class */ (function () {
    function ProjectList(type) {
        var _this = this;
        this.type = type;
        this.assignedProjects = [];
        this.templateElement = document.getElementById("project-list");
        this.hostElement = document.getElementById("app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "projects-".concat(this.type);
        project_state.addListener(function (projects) {
            var relevantProjects = projects.filter(function (project) {
                if (_this.type === "active") {
                    return project.status ===
                    ;
                }
            });
            _this.assignedProjects = projects;
            _this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    ProjectList.prototype.renderContent = function () {
        var listId = "project-list-".concat(this.type);
        this.element.querySelector("ul").id = listId;
        this.element.querySelector("h2").textContent =
            this.type.toUpperCase() + "PROJECTS";
    };
    ProjectList.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    };
    ProjectList.prototype.renderProjects = function () {
        var listElements = document.getElementById("project-list-".concat(this.type));
        for (var _i = 0, _a = this.assignedProjects; _i < _a.length; _i++) {
            var projectItem = _a[_i];
            var listItem = document.createElement("li");
            listItem.textContent = projectItem.title;
            listElements.appendChild(listItem);
        }
    };
    return ProjectList;
}());
//projectInputs Class................................................................
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    ProjectInput.prototype.clearInputs = function () {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    };
    ProjectInput.prototype.getUserInputs = function () {
        var titleInput = this.titleInputElement.value;
        var descriptionInput = this.descriptionInputElement.value;
        var peopleInput = this.peopleInputElement.value;
        var titleValidate = {
            value: titleInput,
            required: true,
        };
        var descriptionValidate = {
            value: descriptionInput,
            required: true,
            minLength: 5,
        };
        var peopleValidate = {
            value: +peopleInput,
            required: true,
            min: 1,
            max: 5,
        };
        if (!validator(titleValidate) ||
            !validator(descriptionValidate) ||
            !validator(peopleValidate)) {
            alert("please enter something in input box.....");
            return;
        }
        else {
            return [titleInput, descriptionInput, +peopleInput];
        }
    };
    ProjectInput.prototype.submithandler = function (event) {
        event.preventDefault();
        var inputs = this.getUserInputs();
        if (Array.isArray(inputs)) {
            var title = inputs[0], description = inputs[1], people = inputs[2];
            project_state.addProject(title, description, people);
            console.log(title, description, people);
            this.clearInputs();
        }
        // console.log(this.titleInputElement.value);
        // console.log(this.descriptionInputElement.value);
        // console.log(this.peopleInputElement.value);
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener("submit", this.submithandler.bind(this));
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
var activeProjectList = new ProjectList("active");
var finishedProjectList = new ProjectList("finished");
