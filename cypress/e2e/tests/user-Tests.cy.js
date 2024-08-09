import Data from "../data-helper/data";
import Params from "../data-helper/params";
describe("User Tests", () => {
  
  const data = new Data();
  const params = new Params();
  var url = params.url();

  it("Create User ", () => {
    cy.request({
      method: "POST",
      url: url + "user",
      body: data.bodyPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get User Info", () => {
    cy.request("GET", url + "user/marryireland").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Update User ", () => {
    cy.request({
      method: "PUT",
      url: url + "user/marryland",
      body: data.updatePayload("Cengizhan", "İlteriş"),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Delete User", () => {
    cy.request({
      method: "DELETE",
      url: url + "user/marryireland",
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Create User ", () => {
    cy.request({
      method: "POST",
      url: url + "user",
      body: data.createPostDatav2(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Get User Info", () => {
    cy.request("GET", url + "user/loginetc").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Login User", () => {
    cy.request({
      method: "GET",
      url: url + "user/login",
      query: data.userSign("loginetc", "123123"),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Logout User", () => {
    cy.request({
      method: "GET",
      url: url + "user/logout",
      headers: data.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Create With List User ", () => {
    cy.request({
      method: "POST",
      url: url + "user/createWithList",
      body: data.listPostData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Create With Array User ", () => {
    cy.request({
      method: "POST",
      url: url + "user/createWithArray",
      headers: data.headerPayload(),
      body: data.listArrayPostData(),
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

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
