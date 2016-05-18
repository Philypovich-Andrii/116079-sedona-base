var link = document.querySelector(".hotel-search-btn");
			var popup = document.querySelector(".hotel-search-form");
			var close = document.querySelector(".find-btn");
			
			
			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("hotel-search-form-show");
				ar_date.focus();
				});
			
		    close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("hotel-search-form-show");
      });