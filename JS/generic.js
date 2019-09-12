$(document).ready(function(){
	
	#Input value to convert
	var Conv = "";
	
	#Empty the input field just incase there is something there
	#that isn't supposed to be there, or to reset after use.
	$("#inputField").val("");
	
	$("#convert").click(function(){
		
		#Assign the input value and add the beginning and end syntax
		Conv = $("#inputField").val();
		Conv = '("' + Conv + '")';
		
		#Add after new line a new div and marker and add after other 
		#odd spacing markers
		Conv = Conv.replace(/\n/g, '"),<div class="bit"> >SPLITHERE<("');
		Conv = Conv.replace(/\t/g, '", >SPLITHERE<"');
		Conv = Conv.replace(/\:/g, '", >SPLITHERE<"');
		Conv = Conv.replace(/  +/g, '", >SPLITHERE<"');
		Conv = Conv.replace(/ \- +/g, '", >SPLITHERE<"');
		
		#Split the string into array based on markers
		var bits = Conv.split('>SPLITHERE<');
		
		#Prime the output field
		$("#outputField").html("<div class='bit'>");
		
		#Append every index to the ouput field
		for(var i = 0; i < bits.length; i++){
			
			#Filter out any images urls if they were copied along
			if(bits[i].toLowerCase().indexOf(".png") >= 0){
				bits[i] = "";
			}
			
			$("#outputField").append(bits[i]);
		}
		
		#Close the final div on the output field
		$("#outputField").append("</div>");

	});
	
});