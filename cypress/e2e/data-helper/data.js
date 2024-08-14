class Data {
  headerPayload() {
    const headerBody = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    return headerBody;
  }
  bodyPayload() {
    const postData = {
      id: 444444,
      username: "marryireland",
      firstName: "Marry",
      lastName: "Chleo",
      email: "marr@outlook.com",
      password: "12341234",
      phone: "5555555555",
      userStatus: 0,
    };
    return postData;
  }
  updatePayload(firstName, lastName) {
    const postData = {
      id: 444444,
      username: "marryireland",
      firstName: firstName,
      lastName: lastName,
      email: "marr@outlook.com",
      password: "12341234",
      phone: "5555555555",
      userStatus: 0,
    };
    return postData;
  }
  userSign(usurname, password) {
    const queryBody = {
      username: usurname,
      password: password,
    };
    return queryBody;
  }
  listPostData() {
    const postData = [
      {
        id: 7777,
        username: "lotus",
        firstName: "Rey",
        lastName: "Miles",
        email: "rey_miless@outlook.com",
        password: "6666",
        phone: "32323",
        userStatus: 0,
      },
      {
        id: 8888,
        username: "maxpayne8",
        firstName: "Max",
        lastName: "Payne",
        email: "payne_max@outlook.com",
        password: "753159",
        phone: "532355544555",
        userStatus: 0,
      },
    ];
    return postData;
  }
  listArrayPostData() {
    const postData = [
      {
        id: 66,
        username: "breach",
        firstName: "James",
        lastName: "Shield",
        email: "jamess@outlook.com",
        password: "1111",
        phone: "32323333",
        userStatus: 0,
      },
    ];
    return postData;
  }
  createPostDatav2() {
    const postData = {
      id: 3333,
      username: "loginetc",
      firstName: "Login",
      lastName: "Test",
      email: "loginn@outlook.com",
      password: "123123",
      phone: "543434345555",
      userStatus: 0,
    };
    return postData;
  }
  createPostAnimal() {
    const postData = {
      id: 4444,
      category: {
        id: 66,
        name: "Camel",
      },
      name: "Cüce",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    };

    return postData;
  }
  PutAnimal(name) {
    const postData = {
      id: 4444,
      category: {
        id: 66,
        name: "Camel",
      },
      name: name,
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    };

    return postData;
  }
  orderPetBody() {
    const postData = {
        "id": 5,
        "petId": 66666,
        "quantity": 1,
        "shipDate": "2024-08-14T17:03:42.124Z",
        "status": "placed",
        "complete": true
    }
    return postData;
}
}

export default Data;
