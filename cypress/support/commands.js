import { axeConfigDefault, severityIndicators } from './constants';

Cypress.Commands.add('visitHome', () => {
  cy.visit('/', {retryOnStatusCodeFailure: true, });
});

function terminalLog(violations) {
  violations.forEach((violation) => {
    const nodes = Cypress.$(
      violation.nodes.map((node) => node.target).join(','),
    );

    Cypress.log({
      name: `${severityIndicators[violation.impact]} A11Y`,
      consoleProps: () => violation,
      $el: nodes,
      message: `[${violation.help}](${violation.helpUrl})`,
    });

    violation.nodes.forEach(({ target }) => {
      Cypress.log({
        name: '🔧',
        consoleProps: () => violation,
        $el: Cypress.$(target.join(',')),
        message: target,
      });
    });
  });

  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );
}

Cypress.Commands.add(
  'checkAccessibility',
  (skipFailures = false, axeConfigCustom = axeConfigDefault) => {
    cy.injectAxe();

    cy.configureAxe(axeConfigCustom);
    cy.checkA11y(null, null, terminalLog, skipFailures);
  },
);