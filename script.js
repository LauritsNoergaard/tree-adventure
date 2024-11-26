let scene1 = {
    title: `<h1>Welcome Traveller</h1>`,
    text: /*HTML*/`<p> You are a warrior going into battle, and you know that to be successful</p>
        <p>in said battle you will need a certain potion sellers strongest potions </p>`,
    choices: [
        {btnText: "A: Potion seller, I'm going into battle, and I need your strongest potion",
            nextScene: null
    }, {btnText: "B: Kill the potion seller and steal his potions",
        nextScene: null
    }, {btnText: "C: Steal his potions without killing him",
        nextScene: null
    }]
}

let scene2A = {
    title: `<h1>Potion Seller</h1>`,
    text: /*HTML*/`<p>My potions are too strong for you, traveller, you cannot handle my strongest potions.</p>`,
    choices: [
        {btnText: "A: Potion seller, I'm a warrior, I can handle all potions", 
            nextScene: null},
        {btnText: "B: You're a rascal, I'll go elsewhere for my potions", 
            nextScene: null},
        {btnText: "C: Kill him for being disrespectful and steal his potion", 
            nextScene: null}
    ]
};

let scene3A = {
    title: `<h1>Potion Seller</h1>`,
    text: /*HTML*/`<p>Fine, if you wish to perish from this earth by a potion too strong for you then I will not stand in your way</p>
    <p>*You drink the potion and perish*</p>`,
    choices: []
};

let scene3B = {
    title: `<h1>Potion Seller</h1>`,
    text: /*HTML*/`<p>Good!</p>
    <p>*You go elsewhere for your potions*</p>`,
    choices: []
};

let scene2B = {
    title: `<h1>Welcome Traveller</h1>`,
    text: /*HTML*/`<p>Potion seller evades your sword, drinks his own strongest potion, and kills you</p>`,
    choices: []
}

let scene2C = {
    title: `<h1>Stealthy Success</h1>`,
    text: /*HTML*/`<p>You successfully steal his potions.</p>`,
    choices: [
        {btnText: "A: Drink a potion now", 
            nextScene: null},
        {btnText: "B: Drink a potion once you go into battle", 
            nextScene: null}
    ]
};

let scene4A = {
    title: `<h1>Stealthy Success</h1>`,
    text: /*HTML*/`<p>*You drink the potion and die because it is only for the strongest and you are of the weakest*</p>`,
    choices: []
};

let scene4B = {
    title: `<h1>Stealthy Success</h1>`,
    text: /*HTML*/`<p>*You drink the potion right before battle and die because it is only for the strongest and you are of the weakest</p>`,
    choices: []
};

function showScene(scene) {
    document.getElementById("scenes").innerHTML="";
    // Find #scenes object
    //console.log(scene.choices[0].nextScene);
    const sceneHtml = document.getElementById("scenes");

    // Add h1 with scene.title
    sceneHtml.insertAdjacentHTML("beforeend", scene.title)

    // Add scene.txt
    sceneHtml.insertAdjacentHTML("beforeend", scene.text)

    // Add div id=buttons
    sceneHtml.insertAdjacentHTML("beforeend", `<div id="buttons"></div>`)
        // Add a button for each choice in choices
        const buttons = document.getElementById("buttons");
        for (let i = 0; i < scene.choices.length; i++) {
            buttons.insertAdjacentHTML("beforeend", `<button id="${i}"> ${scene.choices[i].btnText}</button>`)
            // MAKE EVENTLISTENER ON THE BUTTONS
            connectNodes();
            console.log(scene.choices[i])
            document.getElementById(`${i}`).addEventListener("click", () => showScene(scene.choices[i].nextScene));
        }
        
}

function connectNodes() {
    nodeConnect(scene1, 0, scene2A);
    nodeConnect(scene1, 1, scene2B);
    nodeConnect(scene1, 2, scene2C);

    nodeConnect(scene2A, 0, scene3A);
    nodeConnect(scene2A, 1, scene3B);
    nodeConnect(scene2A, 2, scene2B);

    nodeConnect(scene2C, 0, scene4A);
    nodeConnect(scene2C, 1, scene4B);
    
}

function nodeConnect(scene, choiceindex, nextSceneInput) {
    scene.choices[choiceindex].nextScene = nextSceneInput;
}



showScene(scene1);