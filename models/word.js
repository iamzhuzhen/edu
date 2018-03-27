module.exports = (sequelize,Sequelize) => {
    var word = sequelize.define('word', {
        guid: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        name: {
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
    
      return word.schema('public');
}