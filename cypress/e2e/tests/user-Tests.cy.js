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
});
