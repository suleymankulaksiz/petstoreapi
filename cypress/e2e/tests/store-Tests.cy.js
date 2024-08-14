import Data from "../data-helper/data";
import Params from "../data-helper/params";
describe("User Tests", () => {
  const data = new Data();
  const params = new Params();
  var url = params.url();
  var storeWay =params.storeWay();

  it("Create PetStore Order", () => {
    cy.request({
      method: "POST",
      url: url + storeWay,
      body: data.orderPetBody(),
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
    });
  });

  it("Find Order ID", () => {
    cy.request("GET", url + storeWay + data.orderPetBody().id.toString()).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", data.orderPetBody().id);
      }
    );
  });
});
