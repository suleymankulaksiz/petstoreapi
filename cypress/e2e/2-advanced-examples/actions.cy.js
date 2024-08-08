describe('User Tests', () => {

  it('Create User ', () => {
    const postData = {
      "id": 444444,
      "username": "marryireland",
      "firstName": "Marry",
      "lastName": "Chleo",
      "email": "marr@outlook.com",
      "password": "12341234",
      "phone": "5555555555",
      "userStatus": 0
    }
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: postData
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })
  
  it('Get User Info', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/user/marryireland')
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Update User ', () => {
    const postData = {
      "id": 2222222,
      "username": "marryireland",
      "firstName": "Marry",
      "lastName": "Chleo",
      "email": "marr@outlook.com",
      "password": "12341234",
      "phone": "5555555555",
      "userStatus": 0
    }
    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user/marryland',
      body: postData
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Delete User', () => {
    const headerBody = {
      "accept": "application/json"
    }
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/user/marryireland',
      headers: headerBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Create User ', () => {
    const postData = {
      "id": 3333,
      "username": "loginetc",
      "firstName": "Login",
      "lastName": "Test",
      "email": "loginn@outlook.com",
      "password": "123123",
      "phone": "543434345555",
      "userStatus": 0
    }
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: postData
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Get User Info', () => {
    cy.request('GET', 'https://petstore.swagger.io/v2/user/loginetc')
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Login User', () => {
    const queryBody = {
      "username": "loginetc",
      "password": "123123"
    }
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/login',
      query: queryBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Logout User', () => {
    const headerBody = {
      "accept": "application/json"
    }
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/logout',
      headers: headerBody
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Create With List User ', () => {
    const postData = [{
      "id": 7777,
      "username": "lotus",
      "firstName": "Rey",
      "lastName": "Miles",
      "email": "rey_miless@outlook.com",
      "password": "6666",
      "phone": "32323",
      "userStatus": 0
    },
    {
      "id": 8888,
      "username": "maxpayne8",
      "firstName": "Max",
      "lastName": "Payne",
      "email": "payne_max@outlook.com",
      "password": "753159",
      "phone": "532355544555",
      "userStatus": 0
    }
    ]
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithList',
      body: postData
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })

  it('Create With Array User ', () => {
    const headerBody = {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
    const postData = [{
      "id": 66,
      "username": "breach",
      "firstName": "James",
      "lastName": "Shield",
      "email": "jamess@outlook.com",
      "password": "1111",
      "phone": "32323333",
      "userStatus": 0
    }
    ]
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithArray',
      headers: headerBody,
      body: postData
    })
      .then((response) => {
        expect(response.status).to.eq(200)
    })
  })
})
