"use strict";

function getData(data) {

    let HTML = '';
    let sectionBody = document.querySelector('.section');

    if (Array.isArray(data)) {

        for (let i = 0; i < data.length; i++) {
            
            HTML += getList(data[i]);
        }

        return sectionBody.innerHTML = HTML;
        // return console.log(HTML);
        // return console.log(data);
    } else {
        return console.log('Tai ne masyvas!');
    }

}

function getList(list) {

    // console.log(list.pranesimas.tekstas)
    // console.log(list.laikas);
    // console.log(list.autorius.vardas);
    // console.log(list.autorius.pavarde);
    let HTML = ` <div class="card">
                    <div class="card__head">
                        <img src="./img/avatar/user.png" alt="avataras">
                        <div class="user">
                            <div class="name">${list.autorius.vardas} ${list.autorius.pavarde} </div>
                            <div class="time">${list.laikas}</div> 
                        </div>  
                        <div class="more">
                            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card__main">
                        <div><p>${list.pranesimas.tekstas}</p></div>
                        <hr style="height:2px;border-width:0;color:gray;background-color:gray"> 
                        <div class="like">
                            <a href="#"><i class="fa fa-heart" aria-hidden="true">Like</i></a>
                            <a href="#"><i class="fa fa-comment" aria-hidden="true">Comment</i></a>
                        </div>
                    </div>
                    <hr style="height:2px;border-width:0;color:gray;background-color:gray"> 
                    <div class="card__footer">
                        <img src="./img/avatar/user.png" alt="avataras">
                        <form class="comments" action="/comments_page.php">
                            <input type="text" placeholder="comments" id="comments" name="comments">
                            <button type="submit"></button>
                            <div class="icons">
                                <i class="fa fa-smile-o" aria-hidden="true"></i>
                                <i class="fa fa-camera" aria-hidden="true"></i>
                                <i class="fa fa-file-image-o" aria-hidden="true"></i>
                                <i class="fa fa-user-circle" aria-hidden="true"></i>
                            </div>    
                        </form>    
                    </div>
                </div>`;
    
    return HTML;
}


function createHead() {
    
}

function createMain() {

}

function create() {
      
    return 
}

getData(feed);

