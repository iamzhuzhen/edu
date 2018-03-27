
var mapping = {
    mappings : [
        {
            'source' : 'card',
            'target' : 'word',
            'association': 'hasOne'
        },
        {
            'source' : 'card',
            'target' : 'image',
            'association': 'hasMany'
        },
        {
            'source' : 'scenario',
            'target' : 'card',
            'association': 'hasMany'
        }
    ],

    init: (sequelize) => {
        mapping.buildAssociation(sequelize);
    },

    buildAssociation: (sequelize) => {
        mapping.mappings.map((map) => {
            var source = sequelize.import(global.architecture['models'][map.source]);
            var target = sequelize.import(global.architecture['models'][map.target]);
            var association = map.association;
            mapping.getAssociationAction(source,target,association);
        })
    },

    getAssociationAction: (source,target,association) => {
        if(association == 'hasOne') {
            return source.hasOne(target,{
                constraints: false,
            });
        } else if(association == 'hasMany') {
            return source.hasMany(target,{
                constraints: false,
            });
        }
    }

}

module.exports = mapping;
