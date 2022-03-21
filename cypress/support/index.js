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