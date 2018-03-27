module.exports = (sequelize,Sequelize) => {
    var image = sequelize.define('image', {
        guid: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING
        },
        image_url: {
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
    
      return image.schema('public');
}