   function createTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      // Create main task div
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";

      // Take the text
      const taskBox = document.createElement("div");
      taskBox.textContent = "Task: " + taskText;

      // Creation time
      const timeBox = document.createElement("div");
      timeBox.className = "timestamp";
      const createdAt = new Date();
      timeBox.textContent = "Created at: " + createdAt.toLocaleString();

      // Completion time 
      const completionBox = document.createElement("div");
      completionBox.className = "timestamp";

      // Buttons box
      const buttonBox = document.createElement("div");
      buttonBox.className = "buttons";


      //for adding button eventlistiner for done button

      const doneButton = document.createElement("button");
      doneButton.className="doneBtn";
      doneButton.textContent = "Done";
      doneButton.onclick = () => {
        taskDiv.style.backgroundColor = "#4ae934";
        const completedAt = new Date();
        completionBox.textContent = "Completed at: " + completedAt.toLocaleString();
      };

      // this will work for delete button

      const deleteButton = document.createElement("button");
      deleteButton.className="deletBtn"
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => {
        taskDiv.remove();
      };

      //adding things to button box

      buttonBox.appendChild(doneButton);
      buttonBox.appendChild(deleteButton);

      // Assemble task div
      taskDiv.appendChild(taskBox);
      taskDiv.appendChild(timeBox);
      taskDiv.appendChild(completionBox); // initially empty
      taskDiv.appendChild(buttonBox);

      // Add to page
      document.getElementById("taskContainer").appendChild(taskDiv);

      // Clear input
      input.value = "";
      
    }

    // when we press enter then task will be added

    document.getElementById("taskInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    createTask();
  }
});