let date = new Date();
let elapsedTime = 0;
let apiKey = "hgft4jdb6h3hjuemp9a1283jdk342";
const focus = function() {
    date = new Date();
};
const blur = function() {
    const endDate = new Date();
    const spentTime = endDate.getTime() - date.getTime();
    elapsedTime += spentTime;
};
const beforeunload = function (e) {
	const endDate = new Date();
	const spentTime = endDate.getTime() - date.getTime();
	elapsedTime += spentTime;
	sendNewTimeLog(apiKey,(elapsedTime/1000).toString().split('.')[0],date);
}
const getCoords = (event) => {
  let x = event.pageX;
  let y = event.pageY;
  console.log((elapsedTime/1000).toString().split('.')[0])
  sendHeatmapData(apiKey,x,y,convertDateToMySqlFormat(date));
};
const convertDateToMySqlFormat = (date) => {
    return date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + 'T' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
};

const sendHeatmapData = async (api,x,y,creationDate) => {
	await fetch('http://127.0.0.1:8080/api/heatmapData/create', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey:api,
                coordinateX:x,
				coordinateY:y,
                date:creationDate
            }).toString()
          })
            .then(responseData => {
              console.log(responseData);
            })
            .catch(err => {
              console.log('error : ' + err);
            });
};
const sendNewTimeLog = async (apiKey,totalTime, creationDate) => {
	await fetch('http://127.0.0.1:8080/api/timeLog/create', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey:apiKey,
                timeSpent:totalTime,
                date:creationDate
            }).toString()
          })
            .then(responseData => {
              console.log(responseData);
            })
            .catch(err => {
              console.log('error : ' + err);
            });
};
window.addEventListener('beforeunload', beforeunload);
window.addEventListener('focus', focus);
window.addEventListener('blur', blur);