describe('Routes Users', () => {
    const Users = app.datasource.models.Users;
    const defaultUser = {
      id: 1,
      name: 'Default Users',
      email: 'test@mail.com',
      password: 'test',
    };
    beforeEach((done) => {
      Users
        .destroy({ where: {} })
        .then(() => Users.create(defaultUser))
        .then(() => {
          done();
        });
    });
  
    describe('Route GET /Users', () => {
      it('should return a list of users', (done) => {
        request
          .get('/users')
          .end((err, res) => {
            expect(res.body[0].id).to.be.eql(defaultUser.id);
            expect(res.body[0].name).to.be.eql(defaultUser.name);
            expect(res.body[0].email).to.be.eql(defaultUser.email);
            
  
            done(err);
          });
      });
    });
  
    describe('Route GET /users/{id}', () => {
      it('should a list of users', (done) => {
        request
          .get(`/users/${defaultUser.id}`)
          .end((err, res) => {
            console.log(res.body);
            expect(res.body.name).to.be.eql(defaultUser.name);
            expect(res.body.id).to.be.eql(defaultUser.id);
            expect(res.body.email).to.be.eql(defaultUser.email);
           
  
            done(err);
          });
      });
    });
  
    describe('Route POST /users', () => {
      it('should create a user', (done) => {
        const newUser = {
          id: 2,
          name: 'New User',
          email: 'test@mail.com',
          password: 'test',
        };
  
        request
          .post('/users')
          .send(newUser)
          .end((err, res) => {
            expect(res.body.name).to.be.eql(newUser.name);
            expect(res.body.id).to.be.eql(newUser.id);
            expect(res.body.email).to.be.eql(newUser.email);
            expect(res.body.password).to.be.eql(res.body.password);
  
            done(err);
          });
      });
    });
  
    describe('Route PUT /users/{id}', () => {
      it('should update a user', (done) => {
        const updateUser = {
          id: 2,
          name: 'Update User',
          email: 'test@mail.com',
          password: 'test'
        };
  
        request
          .put(`/users/${updateUser.id}`)
          .send(updateUser)
          .end((err, res) => {
            expect(res.body).to.be.eql([0]);
  
            done(err);
          });
      });
    });
  
    describe('Route DELETE /users/{id}', () => {
      it('should delete a user', (done) => {
        request
          .delete(`/users/${defaultUser.id}`)
          .end((err, res) => {
            expect(res.statusCode).to.be.eql(204);
  
            done(err);
          });
      });
    });
  });
  