var graph = [
       /*1,2,3,4,5,6 */  
/*1*/	[0,1,0,1,0,0],
/*2*/	[1,0,1,0,0,0],
/*3*/	[0,1,0,1,0,0],
/*4*/	[1,0,1,0,1,1],
/*5*/	[0,0,0,1,0,1],
/*6*/	[0,0,0,1,1,0]
];


var S = [];
var Q = [];


function сheckingEulerGraph(graph){
	var evenVert = 0;
	for(var i = 0; i < graph.length; i++){
		var k = 0;
		for (var j = 0; j < graph[i].length; j++) {
			if(graph[i][j] == 1){k++}
		}

		if(k%2 == 0){
			evenVert++;
		}
	}
	if(evenVert == graph.length){
		searchingEulerCycle(graph)
	}
}


сheckingEulerGraph(graph);

function searchingEulerCycle(graph){
 	  var k = 0;
        S.push(0);
        while(S.length != 0){
           if(Passedvertex(S[S.length - 1], graph) == true){
                Q.push(S.pop());
           } else{
               for(var i = 0; i < graph.length; i++){
                   if(graph[S[S.length - 1]][i] == 1){
                       k = i;
                       graph[S[S.length - 1]][i] = 0;
                       graph[i][S[S.length - 1]] = 0;
                       break;
                   }
               }
               S.push(k);
           }
        }
        console.log(Q)
}

function Passedvertex(vertex, graph){
	var n = 0;
	for (var i = 0; i < graph.length; i++) {
		if(graph[vertex][i] == 1){
			n++;
		}
	}
	if(n == 0){ 
		return true
	}
	else return false
 
}