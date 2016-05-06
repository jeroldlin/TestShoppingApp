angular.module('blueLightApp', [])
.controller('CategoryController', function($scope) {

	var product = this;

	product.categories = [
		{text:'BABY', 				selected:false,	style: "text-align:left		; color:rgb(0,133,185) 	; background-image:url('')"},
		{text:'PET', 				selected:false,	style: "text-align:right 	; color:white 			; background-image:url('')"},
		{text:'BEAUTY', 			selected:false,	style: "text-align:left 	; color:white 			; background-image:url('')	; padding: 30vw 0px 0px 0px; height: 10vw;"},
		{text:'BEVERAGE', 			selected:false,	style: "text-align:left 	; color:white			; background-image:url('')	; padding: 30vw 0px 0px 0px; height: 10vw;"},
		{text:"MEN'S GROOMING", 	selected:false,	style: "text-align:left 	; color:white			; background-image:url('')	; padding: 25vw 0px 0px 0px; height: 15vw;"},
		{text:"WOMEN'S GROOMING", 	selected:false,	style: "text-align:left 	; color:rgb(0,133,185) 	; background-image:url('')"},
		{text:'OFFICE', 			selected:false,	style: "text-align:left 	; color:rgb(0,133,185)	; background-image:url('')"},
		{text:'CLEANING', 			selected:false,	style: "text-align:left 	; color:rgb(0,133,185) 	; background-image:url('')"},
		{text:'COMPUTER', 			selected:false,	style: "text-align:left 	; color:rgb(0,133,185) 	; background-image:url('')"},
		{text:'NETWORK', 			selected:false,	style: "text-align:left 	; color:rgb(0,133,185) 	; background-image:url('')"},
		{text:'CLOTHING', 			selected:false,	style: "text-align:left 	; color:rgb(0,133,185) 	; background-image:url('')"},
		{text:'SURPRISE ME!', 		selected:false,	style: "text-align:left 	; color:rgb(0,133,185) 	; background-color:white			; padding: 13vw 0px 0px 0px; height: 27vw; text-align:center; font-size:3vh;"},
	];
	
	
	product.items = [
		{title:"Dr. Brown's Bottle Brush", 							price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"The First Years Quick Serve Bottle Warmer", 		price:"12.44",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Tommee Tippee Closer to Nature Bottles", 			price:"55.50",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"MAM Baby Feeding Gift Set, White", 					price:"9.75",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Dr. Brown's Bottle Brush", 							price:"15.25",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"The First Years Quick Serve Bottle Warmer", 		price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Tommee Tippee Closer to Nature Bottles", 			price:"24.50",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"MAM Baby Feeding Gift Set, White", 					price:"37.15",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Dr. Brown's Bottle Brush", 							price:"7.15",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"The First Years Quick Serve Bottle Warmer", 		price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Tommee Tippee Closer to Nature Bottles", 			price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"MAM Baby Feeding Gift Set, White", 					price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Dr. Brown's Bottle Brush", 							price:"12.44",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"The First Years Quick Serve Bottle Warmer", 		price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Tommee Tippee Closer to Nature Bottles", 			price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"MAM Baby Feeding Gift Set, White", 					price:"12.44",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },		
		{title:"Dr. Brown's Bottle Brush", 							price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"The First Years Quick Serve Bottle Warmer", 		price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"Tommee Tippee Closer to Nature Bottles", 			price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },
		{title:"MAM Baby Feeding Gift Set, White", 					price:"14.35",		description:"Baby product made special for your baby",	category: 'BABY', 		imageUrl: 'img/', },		
		{title:"PetSafe Drinkwell Platinum Pet Fountain", 			price:"9.75",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Bissell Pet Hair Eraser Handheld Vacuum", 			price:"17.15",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Waterproof Hammock Seat Cover for Pets", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },	
		{title:"SureFeed Microchip Pet Feeder", 					price:"12.44",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"PetSafe Drinkwell Platinum Pet Fountain", 			price:"55.50",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Bissell Pet Hair Eraser Handheld Vacuum", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Waterproof Hammock Seat Cover for Pets", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },	
		{title:"SureFeed Microchip Pet Feeder", 					price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"PetSafe Drinkwell Platinum Pet Fountain", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Bissell Pet Hair Eraser Handheld Vacuum", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Waterproof Hammock Seat Cover for Pets", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },	
		{title:"SureFeed Microchip Pet Feeder", 					price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"PetSafe Drinkwell Platinum Pet Fountain", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Bissell Pet Hair Eraser Handheld Vacuum", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
		{title:"Waterproof Hammock Seat Cover for Pets", 			price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },	
		{title:"SureFeed Microchip Pet Feeder", 					price:"14.35",		description:"Pet product made special for your pet",	category: 'PET', 		imageUrl: 'img/', },
	];

	
	product.selectedItems=[];
	
	product.theSelectedItems=[];
	
	categoriesIntroAnimation();
	
	product.goToDeals = function() {
		product.selectedItems=[];
		$("#index").css("display","none");
		$("#checkDeal").css("display","none");
		$("#yourDealsButton").css("display","inline");
		$("#savedDealsButton").css("display","inline");
		$("#yourDeals").css("display","inline");
		for (var i = 0; i < product.items.length; i++){
			for (var z = 0; z < product.categories.length; z++){
				if (product.categories[z].selected == true && product.items[i].category == product.categories[z].text){
					product.selectedItems.push(product.items[i]);
				}
			}
		}
		product.theSelectedItems=[];
		setTimeout(function(){dealsIntroAnimation();}, 30);
	}
	
	product.gotoCategories = function() {
		$("#yourDeals").css("display","none");
		$("#checkDeal").css("display","none");
		$("#yourDealsButton").css("display","inline");
		$("#savedDealsButton").css("display","inline");
		$("#index").css("display","inline");
		product.selectedItems=[];
		product.theSelectedItems=[];
		setTimeout(function(){categoriesIntroAnimation();}, 30);
	}
	
	product.pickCategory = function(index) {
		if ( product.categories[index].selected == false ){
			product.categories[index].selected = true;
		}else{
			product.categories[index].selected = false;
		}
	}
	
	product.goToTheDeal = function(index) {
		product.theSelectedItems.push(product.selectedItems[index]);
		$("#yourDeals").css("display","none");
		$("#index").css("display","none");
		$("#yourDealsButton").css("display","none");
		$("#savedDealsButton").css("display","none");
		$("#checkDeal").css("display","inline");
		setTimeout(function(){theDealIntroAnimation();}, 30);
	}
});

function dealsIntroAnimation(){
	$(".items").animate({height: "17vh", opacity: "1"}, 500);
	
	$("#indexCenter").animate({padding: "100vh 0px 18vh 0px"}, 0);
	$(".checking-item").animate({top: "300px", opacity: "0"}, 0);
}

function categoriesIntroAnimation(){
	$("#indexCenter").animate({padding: "20vh 0px 18vh 0px"}, 500);
	
	$(".items").animate({height: "0vh", opacity: "0"}, 0);
	$(".checking-item").animate({top: "300px", opacity: "0"}, 0);
}

function theDealIntroAnimation(){
	$(".checking-item").animate({top: "0px", opacity: "1"}, 500);
	
	$("#indexCenter").animate({padding: "100vh 0px 18vh 0px"}, 0);
	$(".items").animate({height: "0vh", opacity: "0"}, 0);
}