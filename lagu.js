var lagu = [
    ['Mangu', 'Fourtwnty', 4000, 8000, 'mangu.jpg','Mangu.mp3'],
    ['Always', 'Daniel Caesar', 1500, 2300, 'Always.jpg','Always.mp3'],
    ['Queen', 'Bohemian Rhapsody', 2440, 5400, 'queen.jpg','Queen.mp3'],
    ['Pluto Projector', 'R.O.C', 2000, 5000, 'pluto rejector.jpg','Pluto Projector.mp3'],
    ['Sparks', 'Coldplay', 1440, 3400, 'sparks.jpg','Coldplay - Sparks.mp3'],
    ['No Suprises', 'Radiohead', 2040, 4400, 'no suprises.jpg','No Surprises.mp3'],
    
];

var element = ` `

var konten = document.getElementById('container')

for (let i = 0; i < lagu.length; i++) {
         element+= `<div class="lagu">
            <h2>${lagu[i][0]}</h2>
            <small>
                <i>Oleh ${lagu[i][1]}</i>
            </small>
            <img src="${lagu[i][4]}" alt="" srcset="">
            <audio controls id="audio-player">
                    <source src="${lagu[i][5]}"type="audio/mp3">
                </audio>
            <div class="bawah">
                <div class="kanan">${lagu[i][2]}</div>
                <div class="kiri">${lagu[i][3]}</div>
            </div>
        </div>
    </div>`;   
        }
konten.innerHTML = element