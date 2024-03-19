"use strict";
function movingAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("the moving speed of animal : ", speed);
}
movingAnimal({ type: "bird", flyingSpeed: 180 });
movingAnimal({ type: "horse", runningSpeed: 280 });
const errorBag = {
    name: "abhishek",
    email: 'ddjdj@gmail.com'
};
//# sourceMappingURL=intersection.js.map