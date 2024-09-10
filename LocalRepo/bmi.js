const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const output = document.querySelector("#output");
    
    if(height === '' || height < 0 || isNaN(height)){
        output.innerHTML = `<span> Please give a valid height ${height} </span>`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        output.innerHTML = `<span> Please give a valid weight ${weight} </span>`
    }
    else if(weight === '' || weight < 18.6 || isNaN(weight)){
        output.innerHTML = `<span> Under weight ${weight}</span>`
    }
    else if(weight === '' || weight == 18.6, 24.9 || isNaN(weight)){
        output.innerHTML = `<span> Normal Range ${weight}</span>`
    }
    else if(weight === '' || weight > 24.9 || isNaN(weight)){
        output.innerHTML = `<span> Greate Than ${weight}</span>`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        output.innerHTML = `<span> ${bmi}</span>`
    }
})