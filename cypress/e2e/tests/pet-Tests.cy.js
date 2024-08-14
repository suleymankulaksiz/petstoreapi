import Data from "../data-helper/data";
import Params from "../data-helper/params";
describe("User Tests", () => {
  const data = new Data();
  const params = new Params();
  var url = params.url();

  it("Check missing animal", () => {
    cy.request({
      method: "GET",
      url: url + "pet/44445555555555",
      failOnStatusCode: false, // 404 hatası vermesini engellemek için
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it("Create New Animal", () => {
    cy.request({
      method: "POST",
      url: url + "pet",
      body: data.createPostAnimal(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Check New Animal", () => {
    cy.request({
      method: "GET",
      url: url + "pet/4444",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Update Animal Name ", () => {
    cy.request({
      method: "PUT",
      url: url + "pet",
      body: data.PutAnimal("Çirkin"),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete Success Animal", () => {
    cy.request({
      method: "DELETE",
      url: url + "pet/4444",
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete expected 404 animal", () => {
    cy.request({
      method: "DELETE",
      url: url + "pet/44445555555555",
      failOnStatusCode: false, // 404 hatası vermesini engellemek için
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
