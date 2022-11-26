var lenb = document.querySelectorAll(".black").length;
var lenw = document.querySelectorAll(".white").length;

for(var i=0;i<lenb;i++)
{
    document.querySelectorAll(".black")[i].addEventListener("mouseup",function()
    {
        var xyz = this.className[6];
        console.log(xyz);

        switch (xyz) 
        {
            case 'B':
                var a = new Audio("Sounds/B.wav");
                a.play();
                clicked(xyz);
                break;

            case 'D':
                var a = new Audio("Sounds/D.wav");
                a.play();
                clicked(xyz);
                break;

            case 'G':
                var a = new Audio("Sounds/x.wav");
                a.play();
                clicked(xyz);
                break;

            case 'I':
                var a = new Audio("Sounds/Eb.mp3");
                a.play();
                clicked(xyz);
                break;

            case 'K':
                var a = new Audio("Sounds/E.wav");
                a.play();
                clicked(xyz);
                break;

            case 'N':
                var a = new Audio("Sounds/F.wav");
                a.play();
                clicked(xyz);
                break;

            default:
                break;
        }  
    }) 
}    



for(var i=0;i<lenw;i++)
{
    document.querySelectorAll(".white")[i].addEventListener("mouseup",function()
    {
        var xyz = this.className[6];
        console.log(xyz);

        switch (xyz) 
        {
            case 'A':
                var a = new Audio("Sounds/A.wav");
                a.play();
                clicked(xyz);
                break;

            case 'C':
                var a = new Audio("Sounds/C.wav");
                a.play();
                clicked(xyz);
                break;

            case 'E':
                var a = new Audio("Sounds/E.wav");
                a.play();
                clicked(xyz);
                break;

            case 'F':
                var a = new Audio("Sounds/F.wav");
                a.play();
                clicked(xyz);
                break;

            case 'H':
                var a = new Audio("Sounds/z.wav");
                a.play();
                clicked(xyz);
                break;

            case 'J':
                var a = new Audio("Sounds/Gb.mp3");
                a.play();
                clicked(xyz);
                break;

            case 'L':
                var a = new Audio("Sounds/E.wav");
                a.play();
                clicked(xyz);
                break;

            case 'M':
                var a = new Audio("Sounds/x.wav");
                a.play();
                clicked(xyz);
                break;

            case 'O':
                var a = new Audio("Sounds/z.wav");
                a.play();
                clicked(xyz);
                break;

            default:
                break;
        }  
    }) 
}    

function clicked(xyz)
{
    document.querySelector("."+xyz).classList.add("dis");
    setTimeout(function()
    {
        document.querySelector("."+xyz).classList.remove("dis");
    },100);
}


document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    var temp = event.key;
    temp = temp.toUpperCase(temp);
    clicked(temp);
});

    function makeSound(key)
    {
        switch(key)
        {
            case "a":
                var a = new Audio("Sounds/A.wav");
                a.play();
                break;
    
            case "b":
                var a = new Audio("Sounds/B.wav");
                a.play();
                break;
    
            case "c":
                var a = new Audio("Sounds/C.wav");
                a.play();
                break;
    
            case "d":
                var a = new Audio("Sounds/D.wav");
                a.play();
                break;
    
            case "e":
                var a = new Audio("Sounds/E.wav");
                a.play();
                break;
    
            case "f":
                var a = new Audio("Sounds/F.wav");
                a.play();
                break;
    
            case "g":
                var a = new Audio("Sounds/x.wav");
                a.play();
                break;

            case "h":
                var a = new Audio("Sounds/z.wav");
                a.play();
                break;

            case "i":
                var a = new Audio("Sounds/Eb.mp3");
                a.play();
                break;

            case "j":
                var a = new Audio("Sounds/Gb.mp3");
                a.play();
                break;

            case "k":
                var a = new Audio("Sounds/E.wav");
                a.play();
                break;

            case "l":
                var a = new Audio("Sounds/E.wav");
                a.play();
                break;

            case "m":
                var a = new Audio("Sounds/x.wav");
                a.play();
                break;

            case "n":
                var a = new Audio("Sounds/F.wav");
                a.play();
                break;

            case "o":
                var a = new Audio("Sounds/z.wav");
                a.play();
                break;

        }
    }































