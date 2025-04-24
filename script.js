function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
}

function navigate(page) {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(page).classList.remove('hidden');
}


window.onerror = function (message) {
  const errorBox = document.getElementById('errorBox');
  errorBox.textContent = '⚠️ Помилка: ' + message;
  errorBox.style.display = 'block';
  return true;
};

// TODO App
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✔️';
  doneBtn.onclick = () => li.classList.toggle('done');

  const delBtn = document.createElement('button');
  delBtn.textContent = '🗑️';
  delBtn.onclick = () => li.remove();

  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}


window.addEventListener('load', () => {
  navigate('home');
});