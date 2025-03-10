document.addEventListener('DOMContentLoaded', () => {
    // TASKS
    const todoInput = document.getElementById('todo-input');
    const todoAddBtn = document.getElementById('todo-add-btn');
    const todoList = document.getElementById('todo-list');
  
    // GOALS
    const goalsInput = document.getElementById('goals-input');
    const goalsAddBtn = document.getElementById('goals-add-btn');
    const goalsList = document.getElementById('goals-list');
  
    // JOURNAL
    const journalInput = document.getElementById('journal-input');
    const journalSaveBtn = document.getElementById('journal-save-btn');
    const journalEntries = document.getElementById('journal-entries');
  
    // Add Task Function (creates a numbered task with text and a checkbox on the right)
    function addTask() {
      const text = todoInput.value.trim();
      if (!text) return;
      const li = document.createElement('li');
      li.className = 'checklist-item';
      li.innerHTML = `
        <div class="task-info"><span class="task-text">${text}</span></div>
        <input type="checkbox" class="task-checkbox" />
      `;
      todoList.appendChild(li);
      todoInput.value = '';
    }
  
    // Add Goal Function (remains unchanged)
    function addGoal() {
      const text = goalsInput.value.trim();
      if (!text) return;
      const li = document.createElement('li');
      li.className = 'checklist-item';
      li.innerHTML = `<span>${text}</span>`;
      goalsList.appendChild(li);
      goalsInput.value = '';
    }
  
    // Save Journal Entry Function (remains unchanged)
    function saveJournal() {
      const text = journalInput.value.trim();
      if (!text) return;
      const entryDiv = document.createElement('div');
      entryDiv.className = 'entry';
      entryDiv.textContent = text;
      journalEntries.prepend(entryDiv);
      journalInput.value = '';
    }
  
    // Event Listeners for Tasks
    todoAddBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addTask();
    });
  
    // Event Listeners for Goals
    goalsAddBtn.addEventListener('click', addGoal);
    goalsInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addGoal();
    });
  
    // Event Listener for Journal
    journalSaveBtn.addEventListener('click', saveJournal);
  });
  
