module.exports = (sequelize,Sequelize) => {
    var user = sequelize.define('user', {
        guid: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        first_name: {
          type: Sequelize.STRING
        },
        last_name: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        session_token: {
          type: Sequelize.STRING
        },
        active_status:{
          type: Sequelize.STRING,
          defaultValue:'ACTIVE'
        },
        inactive_date:{
          type: Sequelize.DATE
        }
      });
    
      return user.schema('public');
}