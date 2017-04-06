import Acoru from '../../dist/acoru.es.js';

(() => {
  const acoru1 = new Acoru(document.getElementById('vertical'));
  acoru1.init();
  acoru1
    .on('open', collection => {
      console.log(`%c${collection.name} %copen`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('opened', collection => {
      console.log(`%c${collection.name} %copened`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('close', collection => {
      console.log(`%c${collection.name} %cclose`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('closed', collection => {
      console.log(`%c${collection.name} %cclosed`, 'color: #CB1B45', 'color: #1E88A8');
    });

  const acoru2 = new Acoru(document.getElementById('horizontal'));
  acoru2.init();
  acoru2.open('h-sec3');
  acoru2
    .on('open', collection => {
      console.log(`%c${collection.name} %copen`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('opened', collection => {
      console.log(`%c${collection.name} %copened`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('close', collection => {
      console.log(`%c${collection.name} %cclose`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('closed', collection => {
      console.log(`%c${collection.name} %cclosed`, 'color: #CB1B45', 'color: #1E88A8');
    });
})();
