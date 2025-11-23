function init(): void {
  console.log('Web UI initialized');
  
  const body = document.body;
  const div = document.createElement('div');
  div.textContent = 'Hello from TypeScript!';
  body.appendChild(div);
}

document.addEventListener('DOMContentLoaded', init);