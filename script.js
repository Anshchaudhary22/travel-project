function bookPackage(place)
{
document.getElementById("destination").value = place;

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});
}

function searchLocation()
{
let input =
document.getElementById("searchBox")
.value
.toUpperCase();

let cards =
document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++)
{
let title =
cards[i]
.getElementsByTagName("h3")[0];

if(title.innerHTML
.toUpperCase()
.indexOf(input) > -1)
{
cards[i].style.display = "";
}
else
{
cards[i].style.display = "none";
}
}
}

document
.getElementById("bookingForm")
.addEventListener("submit", function(e)
{
e.preventDefault();

document
.getElementById("bookingForm")
.style.display = "none";

document
.getElementById("successBox")
.style.display = "block";

setTimeout(() => {

alert(
"Booking Successful!\n\nThank you for choosing Travel Explorer."
);

},500);

});