






/**
 * 基于fetch的get方法
 * @method post
 * @param {string} url
 * @param {function} callback 请求成功回调
 */
get: function(url, successCallback, failCallback){
  fetch(url)
    .then((response) => response.text())
    .then((responseText) => {
      successCallback(JSON.parse(responseText));
    })
    .catch(function(err){
      failCallback(err);
    });
},
/*loading效果*/
loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:40,marginLeft:Dimensions.get('window').width/2-10}}/>

};





fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
