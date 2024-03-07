const { getPredictionByImage, getPredictionHistories } = require("./handler");

module.exports = [
    {
        path : '/predict',
        method : 'POST',
        handler : getPredictionByImage,
        options: {
            payload: {
              allow: 'multipart/form-data',
              multipart: true,
            }
          }
    },
    {
        path :'/predict/histories',
        method : 'GET',
        handler: getPredictionHistories
    }
]