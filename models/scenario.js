module.exports = (sequelize,Sequelize) => {
    var scenario = sequelize.define('scenario', {
        guid: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING
        },
        order: {
          type: Sequelize.INTEGER
        },
        like_count: {
          type: Sequelize.BIGINT
        },
        dislike_count: {
          type: Sequelize.BIGINT
        },
        active_status:{
          type: Sequelize.STRING,
          defaultValue:'ACTIVE'
        },
        inactive_date:{
          type: Sequelize.DATE
        }
      });
    
      return scenario.schema('public');
}