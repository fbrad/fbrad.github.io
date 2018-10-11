var vm = new Vue({
  el: '#app',
  data: {
    message: 'player <end> no . <end> nationality <end> position <end> years in toronto <end> what is terrence ross nationality',
    sql_message: 'TODO' 
  },
  methods: {
    generateSql: function () {
  		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      			var responseJson = eval(this.response)
      			document.getElementById("sql_message").innerHTML = responseJson[0][0]["tgt"]
    		}};
  		xhttp.open("POST", "https://www.floydlabs.com/serve/KRaueSY6gNBdtLsd8UtH2W", true);
  		xhttp.setRequestHeader("Content-Type", "application/json");
  		nlDescription = document.getElementById("nldescription").value

  		sourceObj = [{"src": nlDescription, 
  			  "id":100}]
  		xhttp.send(JSON.stringify(sourceObj));
	}
  }
})
