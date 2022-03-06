const addButton = document.querySelector("button.addgoal");
const input = document.querySelector("#goaladd");
input.addEventListener("keydown",(e) => {
    if (e.key == "Enter")
    {
        addGoal();
    }
});

function showInputGoal() {
    const inactives = document.querySelectorAll(".inactive");
    for (i of inactives)
    {
        i.classList.add("actve");
        i.classList.remove("inactive");
    }
    addButton.textContent = "Add";
    addButton.removeEventListener("click",showInputGoal);
    addButton.addEventListener("click",addGoal);
    input.select();
}

function addGoal() {
    if (input.value == "") {
        hideInputSub();
        return 0;
    }
    const row = document.createElement("tr");

    const goal = document.createElement("td");
    const checkbox = document.createElement("td");
    const checkboxinner = document.createElement("input");

    goal.textContent = input.value;
    checkboxinner.setAttribute("type","checkbox");
    checkboxinner.setAttribute("name",input.value);
    checkboxinner.classList.add("goal");

    checkbox.appendChild(checkboxinner);
    row.appendChild(goal);
    row.appendChild(checkbox);

    document.querySelector("table").appendChild(row);
    hideInputSub();
}

function hideInputSub() {
    const goalinputs = document.querySelectorAll(".actve");
    for (goalinput of goalinputs)
    {
        goalinput.classList.add("inactive");
        goalinput.classList.remove("actve");
    }
    addButton.textContent = "Add Goal"
    addButton.removeEventListener("click",addGoal);
    addButton.addEventListener("click",showInputGoal);
}

addButton.addEventListener("click",showInputGoal);
