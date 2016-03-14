var xhr = require('./promiseXHR');

var task = xhr('GET', path, {param:"data"}).then(function(response){
                            // success callback
                            console.log(response);
                            return response;
});
