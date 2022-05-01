var tabs = document.querySelectorAll(".tabs_wrap ul li");
var bio = document.querySelectorAll(".biography");
var fic = document.querySelectorAll(".fiction");
var kid = document.querySelectorAll(".kids");
var thrill = document.querySelectorAll(".thriller");
var nonf = document.querySelectorAll(".non_fiction");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})	
		tab.classList.add("active");

		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
				item.style.display = "none";
			})

		if (tabval == "biography") {
			bio.forEach((biography)=>{
				biography.style.display = "block";
			})
		}
		else if(tabval == "fiction"){
			fic.forEach((fiction)=>{
				fiction.style.display = "block";
			})
		}
		else if(tabval == "kids"){
			kid.forEach((kids)=>{
				kids.style.display = "block";
			})
		}
		else if(tabval == "thriller"){
			thrill.forEach((thriller)=>{
				thriller.style.display = "block";
			})
		}
		else if(tabval == "non_fiction"){
			nonf.forEach((non_fiction)=>{
				non_fiction.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}
	})
})