var AWS = require('aws-sdk');
var ec2 = new AWS.EC2();
exports.handler = function(event, context) {
    ec2.describeInstances( function(err, data) {
        if (err) console.log(err, err.stack); 
        //else     console.log(JSON.stringify(data));
        var instancesList='';
        for (var i in data.Reservations)
        {
            var ins = data.Reservations[i].Instances[0];
            var tags  = findInstanceName(ins);
            if(tags === null) continue;
           
            
        }
        function findInstanceName(ins){
            for(var j in ins.Tags){
                if(ins.Tags[j].Key === 'Name'){
                    var tag='Tags:'+ins.Tags[j].Value
                    instancesList= 'InstanceId: ' +ins.InstanceId +'  Status: ' + ins.State.Name  ;
                    return  console.log(instancesList +'  '+ tag);
        
                    
                }
                
            }
            
        }
    });
};
