module.exports = function(ORM){
    'use strict';

    return {
        name:'Suite',
        schema:{
            name:{
                type:ORM.STRING,
                validate:{
                    notEmpty:true,
                    notNull:true
                }
            },
            scheduleEnabled:{
                type:ORM.BOOLEAN,
                defaultValue:false
            },
            schedule:{
                type:ORM.TEXT
            },
            enabled:{
                type:ORM.BOOLEAN,
                defaultValue:true
            }
        },
        options:{},
        relationships:[
            {   kind:   "hasMany",
                model:  "User",
                options: {"as":"watchers"}
            },{
                kind:   "belongsTo",
                model:  "User",
                options:{"as":"creator"}
            },{
                kind:   "hasMany",
                model:  "MasterSnapshot"
            },{
                kind:   "hasMany",
                model:  "SuiteRun"
            }
        ]
    };

};