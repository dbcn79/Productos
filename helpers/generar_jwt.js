const jwt = require('jsonwebtoken');

const generaJWT = ( clientID = '', clientSECRET = '' ) => {

    return new Promise( (resolve, reject) => {

       const payload = { clientID };

       jwt.sign( payload, clientSECRET, {
            expiresIn: '4h'
       }, ( err, token ) => {
          if ( err ) {
            console.log(error);
            reject('No se pudo generar el token')
          } else {
                resolve( token );
          } 
       })

    })
}

module.exports = {
    generaJWT
}