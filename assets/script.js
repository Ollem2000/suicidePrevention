var chartMainDivs = ["chartTitle", "chartY", "chartL", "chartX"];
var chartYDivs = ["chartYTitle", "chartYAxis", "chartArea"];
var chartXDivs = ["chartXName", "chartXAxis"];
var chartLDivs = ["chartLName", "chartLAxis"];

for(var iChartMain = 0; iChartMain < document.getElementsByClassName("chartMain").length; iChartMain++){

	var chartMain = document.getElementsByClassName("chartMain")[iChartMain];
	var chartMainIdSplit = chartMain.id.split("|")
	var chartMainId = []
	var chartMainIdFirst = chartMainIdSplit[0].split("'");
	for(var iIdSplit = 0; iIdSplit < chartMainIdSplit.length; iIdSplit++){
		chartMainId.push((chartMainIdSplit[iIdSplit].split("'")))
		if(chartMainId[iIdSplit] != 0){
			chartMainId[iIdSplit].shift()
		}
	}
	chartMainId[0] = chartMainIdFirst;
	console.log(chartMainId)

	for(var iChartMainDivs = 0; iChartMainDivs < 4; iChartMainDivs++){
		var chartMainDiv = document.createElement("div");
		chartMain.appendChild(chartMainDiv);
		chartMainDiv.id = iChartMain+chartMainDivs[iChartMainDivs]
		chartMainDiv.className = chartMainDivs[iChartMainDivs]
	}

	var chartY = document.getElementById(iChartMain+"chartY")

	for(var iChartY = 0; iChartY < 3; iChartY++){
		var chartYDiv = document.createElement("div");
		chartY.appendChild(chartYDiv);
		chartYDiv.id = iChartMain+chartYDivs[iChartY]
		chartYDiv.className = chartYDivs[iChartY]
	}

	var chartYAxis = document.getElementById(iChartMain+"chartYAxis")

	for(var iChartYAxisRow = chartMainId[1][0]-1; iChartYAxisRow >= 0; iChartYAxisRow--){
		var chartYAxisRow = document.createElement("div");
		chartYAxis.appendChild(chartYAxisRow)
		chartYAxisRow.className = "chartYAxisRow"
		chartYAxisRow.innerHTML = chartMainId[2][iChartYAxisRow]
	}

	var chartYTitleAngle = document.createElement("p");
	document.getElementById(iChartMain+chartYDivs[0]).appendChild(chartYTitleAngle)
	document.getElementById(iChartMain+chartMainDivs[0]).innerHTML = chartMainId[0][0]
	chartYTitleAngle.innerHTML = chartMainId[0][1]

	var chartX = document.getElementById(iChartMain+"chartX")

	for(var iChartXRow = 0; iChartXRow < chartMainId[1][2]; iChartXRow++){
		for(var iChartX = 0; iChartX < 2; iChartX++){
			var chartXDiv = document.createElement("div");
			chartX.appendChild(chartXDiv);
			chartXDiv.id = iChartMain+chartXDivs[iChartX]+iChartXRow
			chartXDiv.className = chartXDivs[iChartX]
			chartXDivColor = 100+(50*iChartXRow);
			chartXDiv.style.color = "hsl("+chartXDivColor+", 50%, 50%)";
		}
		chartX.getElementsByClassName("chartXName")[iChartXRow].innerHTML = chartMainId[3][iChartXRow];
		
		var chartXAxis = document.getElementById(iChartMain+"chartXAxis"+iChartXRow)
		
		for(var iChartXAxisColumn = 0; iChartXAxisColumn < chartMainId[1][1]; iChartXAxisColumn++){
			var chartXAxisColumn = document.createElement("div");
			chartXAxis.appendChild(chartXAxisColumn)
			chartXAxisColumn.className = "chartXAxisColumn"
			chartXAxisColumnValue = (chartMainId[5+iChartXRow][iChartXAxisColumn])/chartMainId[1][3];
			chartXAxisColumn.innerHTML = chartXAxisColumnValue.toFixed(2);
			//chartXAxisColumn.innerHTML += "<br/>"+chartMainId[5+iChartXRow][(iChartXAxisColumn)+parseInt(chartMainId[1][1])];
			//Precisa de melhorias
		}
	}	

	for(var iChartAreaColumn = 0; iChartAreaColumn < chartMainId[1][1]; iChartAreaColumn++){
		var chartAreaColumn = document.createElement("div");
		document.getElementById(iChartMain+chartYDivs[2]).appendChild(chartAreaColumn);
		//chartAreaColumn.id = iChartAreaColumn+"areaColumn";
		chartAreaColumn.className = "areaColumn";
		
		for(var iChartAreaRow = 0; iChartAreaRow < chartMainId[1][0]; iChartAreaRow++){
			var chartAreaRow = document.createElement("div");
			chartAreaColumn.appendChild(chartAreaRow);
			//chartAreaRow.id = iChartAreaColumn+"areaColumn"+iChartAreaRow;
			chartAreaRow.className = "areaRow";
		}
		
		var chartBarUl = document.createElement("ul");
		var chartAreaRowLast = chartAreaColumn.getElementsByClassName("areaRow")[chartMainId[1][0]-1];
		/*chartAreaRowLast.style.padding = "0";
		chartAreaRowLast.style.margin = "0";
		chartAreaRowLast.style.position = "relative";
		chartAreaRowLast.style.display = "inline-block";
		//chartAreaRowLast.style.transform = "rotate(180deg)";*/
		chartAreaRowLast.appendChild(chartBarUl);
		chartBarUl.className = "chartBarUl";
		chartBarUl.style.height = chartMainId[1][4]+"px";
		
		for(var iBarByColumn = 0; iBarByColumn < chartMainId[1][2]; iBarByColumn++){
			var chartBar = document.createElement("li");
			chartBarUl.appendChild(chartBar);
			chartBar.className = "chartBar";
			chartBar.innerHTML = "ㅤ";
			chartBar.style.height = chartMainId[5+iBarByColumn][0+iChartAreaColumn]+"%";
			chartBarColor = 100+(50*iBarByColumn);
			chartBar.style.background = "hsl("+chartBarColor+", 50%, 50%)";
		}
		
	}
	
	var chartL = document.getElementById(iChartMain+chartMainDivs[2]);
	var chartLName = document.createElement("div")
	chartL.appendChild(chartLName)
	chartLName.className = "chartLName"
	var chartLAxis = document.createElement("div")
	chartL.appendChild(chartLAxis)
	chartLAxis.className = "chartLAxis"
	for(var iChartLAxisColumn = 0; iChartLAxisColumn < chartMainId[1][1]; iChartLAxisColumn++){
		var chartLAxisColumn = document.createElement("div")
		chartLAxis.appendChild(chartLAxisColumn)
		chartLAxisColumn.className = "chartLAxisColumn"
		chartLAxisColumn.innerHTML = chartMainId[4][iChartLAxisColumn]
	}
	//Incoming Patchs
	//deixar dinamico o lado esquerdo do gráfico (yTitle, xName)
		/*
		//Calc Left Side Size
		var chartYTitleSize = (document.getElementById(iChartMain+chartYDivs[0]).getBoundingClientRect().width)+(document.getElementById(iChartMain+chartYDivs[1]).getBoundingClientRect().width);
		
		//document.getElementById("0chartXName1").style.width = "200px";
		
		for(var iChartXNameReSize = 0; iChartXNameReSize < chartMain.getElementsByClassName(chartXDivs[0]).length; iChartXNameReSize++){
			//console.log(iChartXNameReSize);
			//console.log(chartMain.getElementsByClassName(chartXDivs[0]).length)
			var iChartXNameReSizePattern = document.getElementById(iChartMain+chartXDivs[0]+0).getBoundingClientRect().width;
			console.log("pattern "+document.getElementById(iChartMain+chartXDivs[0]+0).getBoundingClientRect().width);
			console.log(iChartXNameReSize+" "+document.getElementById(iChartMain+chartXDivs[0]+iChartXNameReSize).getBoundingClientRect().width);
			//console.log(iChartXNameReSizePattern.id)
			if(iChartXNameReSizePattern >= document.getElementById(iChartMain+chartXDivs[0]+iChartXNameReSize).getBoundingClientRect().width){
				console.log("s")
				//document.getElementById(iChartMain+chartXDivs[0]+iChartXNameReSize).style.width = 200+"px";
			}
		}

		document.getElementById(iChartMain+chartXDivs[0]+0).innerHTML = "aaaaaaaaaaa"
		var chartXNameSize = document.getElementById(iChartMain+chartXDivs[0]+0).getBoundingClientRect().width;
		
		if(chartYTitleSize > chartXNameSize){
			console.log("Y: "+chartYTitleSize)
			//for(var iChartXRow)
			document.getElementById(iChartMain+chartXDivs[0]+0).style.width=chartYTitleSize+"px";
			console.log("MX: "+chartXNameSize)
		}
		else if(chartYTitleSize < chartXNameSize){
			console.log("N: "+chartXNameSize)
			document.getElementById(iChartMain+chartYDivs[0]).style.width="158px"; 
			console.log("MY: "+chartYTitleSize)
		}*/

}

