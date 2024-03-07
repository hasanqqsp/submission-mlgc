async function getPredictionByImage(request,h){
   const {image} = request.payload 
   const predictionResult = await predict(request.server.app.model,image)
   console.log(predictionResult)
}

function getPredictionHistories(request,h){

}

module.exports = {getPredictionByImage,getPredictionHistories}