"use strict";
// type Admin={
//     name: string,
//     privilages: string[],
// }
function movingAnimal(animal) {
    //   if ("flyingSpeed" in animal) {
    //     console.log("the speed of moving animal : ", animal.flyingSpeed);
    //   }
    //   if (animal instanceof Bird) {
    //     console.log("the speed of moving animal : ", animal.flyingSpeed);
    //     //it won't accessible we have to do something else for make is accessible.
    //     //we can
    //   }
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
//function overload.....................
