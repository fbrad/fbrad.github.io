function tokenize(msg) {

}


var vm = new Vue({
  el: '#app',
  data: {
    sqlMessage: 'Resulting SQL query.',
    activeTable: 0,
    tableHeaders: [
        'player <end> no . <end> nationality <end> position <end> years in toronto <end> school / club <end> ',
        'member <end> electorate <end> province <end> term <end> election date <end> ',
        'track <end> song <end> singers <end> picturization <end> length <end> lyricist <end> '
    ]
  },
  methods: {
    generateSql: function () {
  		var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
    		if (this.readyState == 4 && this.status == 200) {
      			var responseJson = eval(this.response)
      			document.getElementById("sqlMessage").innerHTML = responseJson[0][0]["tgt"]
    		}};
  		xhttp.open("POST", "https://www.floydlabs.com/serve/KRaueSY6gNBdtLsd8UtH2W", true);
  		xhttp.setRequestHeader("Content-Type", "application/json");
  		nlDescription = document.getElementById("nldescription").value

      nlDescription = nlDescription.split(/([\[\](){}*@&=#,.:;%$\\\'`^"_\-–²+|<>?!/\s])/).filter(
        w => w != " " && w != "").join(" ").toLowerCase()
      console.log(nlDescription)

      wikiTableSchema = "player <end> no . <end> nationality <end> position <end> years in toronto <end> "
      console.log("Query: ", this.tableHeaders[this.activeTable])
  		sourceObj = [{"src": this.tableHeaders[this.activeTable] + nlDescription,
  			  "id":100}]
  		xhttp.send(JSON.stringify(sourceObj));
	  },
    modifyTable: function() {
      document.getElementById("table").innerHTML = "Replaceable"
    },
    setHeader1: function() {
        this.activeTable = 0
        //console.log("Table " + this.activeTable + " active")
    },
    setHeader2: function() {
        this.activeTable = 1
        //console.log("Table " + this.activeTable + " active")
    },
    setHeader3: function() {
        this.activeTable = 2
        //console.log("Table " + this.activeTable + " active")
    }
  }
})
