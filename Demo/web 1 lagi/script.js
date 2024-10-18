document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Menambahkan tugas
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Hapus</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Edit tugas
            li.querySelector(".editBtn").addEventListener("click", function () {
                const newTaskText = prompt("Edit tugas:", taskText);
                if (newTaskText) {
                    li.firstChild.textContent = newTaskText;
                }
            });

            // Hapus tugas
            li.querySelector(".deleteBtn").addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });
});