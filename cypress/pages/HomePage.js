export class HomePage {

    logout() {
        cy.get (".next-vhmemw > .MuiBox-root").click();
        cy.contains(":nth-child(12) > .next-bve2vl").click();
    }
}