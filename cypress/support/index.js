import 'cypress-axe'
import './commands'
import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
    
    let videoName = Cypress.spec.name;
    videoName = videoName.replace('/.js.*', '.js');
    const videoUrl = 'videos/' + videoName + '.mp4';

    addContext({ test }, videoUrl)
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      let item = runnable
      const nameParts = [runnable.title]
  
      while (item.parent) {
        nameParts.unshift(item.parent.title)
        item = item.parent
      }
  
      const fullTestName = nameParts
              .filter(Boolean)
              .join(' -- ')
  
      const imageUrl = `screenshots/${
        Cypress.spec.name
      }/${fullTestName} (failed).png`
  
      addContext({ test }, imageUrl)
    }
})