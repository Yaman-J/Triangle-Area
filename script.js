function triArea() {
    let Base = document.getElementById("base").value
    let Height = document.getElementById("height").value
    let Result = (Base * Height)/2
    document.getElementById("result").innerHTML = "Area of Triangle is: " + Result;
}