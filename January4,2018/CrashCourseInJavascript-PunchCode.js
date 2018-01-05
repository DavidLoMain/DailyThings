// Javascript Practice at Punchcode
// January 4, 2018
// Crash Course on Javascript


// Asked neighbor about why no semi-colon at the end of each line, 
// Semi-colon (;) not needed at the end of each line.
// Only really use if you want to break up lines


// Five native types of variable.
var myVariable = 474.2
var myString   =  "Michael Sweeney PunchCode"
var myBoolean  = true
var nil        = null
var undef      = undefined

// Five non-native (built-in) types of variables
var list = [1, "asdf", true, null, [1,2,3,4]]

// Returns 3
list[4][2]

/* Obj can store numbers, strings, booleans, nil, undef,
**   arrays, obj
**/
var obj = {
	height: 69,
	hair: "red",
	name: "Michael"
}

obj.name    // "Michael"
obj.hair    // "red"
obj["name"] // Same as obj.name
/***************************************************/

/*
** Conditionals
**/

1 ==  "1" // true
1 === "1" // False, because Number =/= String

if(name === "Michael")
{
	
}

var x = 5
if(x == 5){
	
}
else if(x == 4){
	
	
}
else{
	
}

var x = 5
while(x < 10){
	
	
}

for(var i = x; i < 10; i = i+1){
	
}

/**********************************************/
/* Functions
**
**/
function doThat(name){
	for(var i = x; i < 10; i = i+1){
	  console.log("Hello " + name)
    }

}
doThat()

function greet(name1, name2){
	console.log("Hello ")
}


/**
*** HTML was made based on Newspapers
***/

/*
** CSS
** tags, id, 
**/