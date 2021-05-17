"use strict";

function getData(data) {

    let HTML = '';
    let sectionBody = document.querySelector('.section');

    if (Array.isArray(data)) {

        //-------------
        // for (let i = 0; i < data.length; i++) {
            
        //     HTML += getList(data[i]);
        // }

        for (let index of data) {
            HTML += getList(index);
        }

        return sectionBody.innerHTML = HTML;
       
        //--------------

    } else {
        return console.log('Tai ne masyvas!');
    }

}

// Main function

// function getList(list) {

//     let HTML = ` <div class="card">
//                     <div class="card__head">
//                         <img src="./img/avatar/user.png" alt="avataras">
//                         <div class="user">
//                             <div class="name">${list.autorius.vardas} ${list.autorius.pavarde} </div>
//                             <div class="time">${list.laikas}</div> 
//                         </div>  
//                         <div class="more">
//                             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
//                         </div>
//                     </div>
//                     <div class="card__main">
//                         <p>${list.pranesimas.tekstas}</p>
//                         <div class="gallery">
//                             <img src="./img/5.jpeg" alt="img">
//                         </div>
//                     </div> 
                        
//                     <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                    
//                     <div class="like">
//                         <a href="#"><i class="fa fa-heart" aria-hidden="true">Like</i></a>
//                         <a href="#"><i class="fa fa-comment" aria-hidden="true">Comment</i></a>
//                     </div>
                
//                     <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                    
//                     <div class="card__footer">
//                         <img src="./img/avatar/user.png" alt="avataras">
//                         <form class="comments" action="/comments_page.php">
//                             <input type="text" placeholder="comments" id="comments" name="comments">
//                             <button type="submit"></button>
//                             <div class="icons">
//                                 <i class="fa fa-smile-o" aria-hidden="true"></i>
//                                 <i class="fa fa-camera" aria-hidden="true"></i>
//                                 <i class="fa fa-file-image-o" aria-hidden="true"></i>
//                                 <i class="fa fa-user-circle" aria-hidden="true"></i>
//                             </div>    
//                         </form>    
//                     </div>
//                 </div>`;

// return HTML;
// }


function getList(list) {

    let HTML = `<div class="card">
                    ${returnHeader(list.autorius, list.laikas)}
                    ${returnMain(list.pranesimas)}
                    ${returnFooter(list.autorius)}
                </div>`;
    
    return HTML;
}


// Helper FUNCTION | Returns

function returnHeader(who, time) {

    let HTML = `<div class="card__head">
                    ${getAvatar(who)}
                    <div class="user">
                        <div class="name">${who.vardas} ${who.pavarde} </div>
                        ${getTime(time)} 
                    </div>  
                    <div class="more">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                </div>`;
    
    return HTML;
}

function returnMain(text) {

    let HTML = `<div class="card__main">
                    ${getText(text)}
                    ${getGallery(text.paveiksliukai)}  
                       
                </div>`;
    
    return HTML;
}


function returnFooter(who) {

    let HTML = `<hr style="height:2px;border-width:0;color:gray;background-color:gray"> 
                <div class="like">
                   <a href="#"><i class="fa fa-heart" aria-hidden="true">Like</i></a>
                   <a href="#"><i class="fa fa-comment" aria-hidden="true">Comment</i></a>
                </div>
    
                <hr style="height:2px;border-width:0;color:gray;background-color:gray"> 
                <div class="card__footer">
                ${getAvatar(who)}
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
                </div>`;
      
    return HTML;
}

function getGallery(img) {

    // console.log(img);

    let HTML = '';
    let pictures = '';
    let kiek = 4;

    if (img.length > 0) {

        for (let i = 0; i < img.length; i++) {
            pictures += `<img src="./img/${img[i]}" alt="pic">`;
            if (img.length > kiek) {

                img.length = kiek;
            }
                HTML = `<div class="gallery">
                    <div class="gallery__wrap length--${i + 1}">
                     ${pictures}   
                    </div>
                    <div class="count">+5</div>  
                </div>`;
            
        }
    }
    
    
    return HTML;
}


function getTime(time) {

    console.log(time);

    let HTML = '';

    HTML = `<div class="time">${time}</div>`;
}



function getText(message) {

    let messageText = message.tekstas;

    // console.log(messageText);

    let HTML;
    let kiek = 10;
    let cutted;
    let print;
    let textArr = messageText.split(' ');

   //. cutted text first
    if (textArr.length > kiek) {
        cutted = textArr.slice();
        cutted.length = kiek;
        print = cutted.join(' ');
        HTML = `<p value="${messageText}">${print}<span> ...show more</span></p>`;
    } else {

        print = textArr.join(' ');
        HTML= `<p>${print}<span></span></p>`;
    }  

    return HTML;
}

function renderText() {
    
    let cards = document.querySelectorAll('.card');
    let showButton = document.querySelectorAll('.card__main span');
    let cardMain = document.querySelectorAll('.card__main p');

    for (let i = 0; i < showButton.length; i++) {

        let feedText = feed[i].pranesimas.tekstas;

        showButton[i].addEventListener('click', (e) => {
            console.log(i);
            cardMain[i].innerHTML = feedText;

        });
    }
}


//--Global function------------------

function getAvatar(img) {

    if (img.avataras === '') {
        img.avataras = 'user.png';
    }

    let HTML = `<img src="./img/avatar/${img.avataras}" alt="avataras">`;

    return HTML;

}


//--------------
getData(feed);

renderText();

