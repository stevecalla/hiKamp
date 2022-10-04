const favParentEl = document.getElementById('userCamp-aside');
const favBigCont = `<details open id="favorite-box" class="p-2 m-2 rounded">
    <summary class="text-center">
        FAVORITES
    </summary>
    <br>
    <div class="border-top border-dark pt-3">
        {{!-- SECTION --}}
        {{#each favorites as |favorite favoriteId|}}
        {{!-- {{#each users as |user userId|}} --}}
        <a href="api/campsites/{{ favorite.campsite_id }}" class="map-ahref">
            <div class="card" style="max-width: 100%; background-color: #b98f59;">
                <img class="card-img-top campsite-photo img-fluid max-width: 100%"
                    src="{{favorite.campsite_img_url}}" alt="image of {{favorite.campsite.name}} site">
                <div class="card-body" style="color: white!important; textAlign: center; background-color: #b98f59;">
                    <p class="card-text" style="font-size: 100%; background-color: #b98f59;">{{favorite.campsite.name}}</p>
                </div>
            </div>
        </a>
        {{/each}}
        {{!-- SECTION --}}
    </div>
    </details>`;
const favSmallCont = `<details id="favorite-box" class="p-2 m-2 rounded">
    <summary class="text-center">
        FAVORITES
    </summary>
    <br>
    <div class="border-top border-dark pt-3">
        {{!-- SECTION --}}
        {{#each favorites as |favorite favoriteId|}}
        {{!-- {{#each users as |user userId|}} --}}
        <a href="api/campsites/{{ favorite.campsite_id }}" class="map-ahref">
            <div class="card" style="max-width: 100%; background-color: #b98f59;">
                <img class="card-img-top campsite-photo img-fluid max-width: 100%"
                    src="{{favorite.campsite_img_url}}" alt="image of {{favorite.campsite.name}} site">
                <div class="card-body" style="color: white!important; textAlign: center; background-color: #b98f59;">
                    <p class="card-text" style="font-size: 100%; background-color: #b98f59;">{{favorite.campsite.name}}</p>
                </div>
            </div>
        </a>
        {{/each}}
        {{!-- SECTION --}}
    </div>
    </details>`;
const comParentEl = document.getElementById('comment-box-cont');
const comBigCont = `<details open id="comment-box" class="p-2 m-2 rounded">
    <summary class="text-center">
        COMMENTS
    </summary>
    <br>
    <div class="border-top border-dark p-2">
        {{#each comments as |comment|}}
        <p id="comment-element" style="p-3 m-2">
            Posted by: {{ comment.user.username }} <br>
            On: {{ format_date comment.createdAt }} <br>
            {{ comment.content }}
        </p>
        <p id="comment-element" style="p-3 m-2"> </p>
        {{/each}}
    </div>
    </details>`;
const comSmallCont = `<details id="comment-box" class="p-2 m-2 rounded">
    <summary class="text-center">
        COMMENTS
    </summary>
    <br>
    <div class="border-top border-dark p-2">
        {{#each comments as |comment|}}
        <p id="comment-element" style="p-3 m-2">
            Posted by: {{ comment.user.username }} <br>
            On: {{ format_date comment.createdAt }} <br>
            {{ comment.content }}
        </p>
        <p id="comment-element" style="p-3 m-2"> </p>
        {{/each}}
    </div>
    </details>`;

let s = 0;

function replaceContent(parent, small, big) {
    // check if a breakpoint has been "crossed"
    if (window.innerWidth < 481 && s === 1) {
        parent.setHTML('');
        parent.setHTML(small);
        s = 0;
    } else if (window.innerWidth > 480 && s === 0) {
        parent.setHTML('');
        parent.setHTML(big);
        s = 1;
    };
}

//call function every time the browser is re-sized
window.addEventListener('resize', function (event) {
    event.preventDefault();
    if (window.attachEvent) {
        window.attachEvent('onresize', function () {
            replaceContent(favParentEl, favSmallCont, favBigCont);
            replaceContent(comParentEl, comSmallCont, comBigCont);
        });
    }
    else if (window.addEventListener) {
        window.addEventListener('resize', function () {
            replaceContent(favParentEl, favSmallCont, favBigCont);
            replaceContent(comParentEl, comSmallCont, comBigCont);
        }, true);
    }
    else {
        //The browser does not support Javascript event binding
    }
});

window.onload = () => {
    replaceContent(favParentEl, favSmallCont, favBigCont);
};