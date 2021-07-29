const TEMPLATE = '\
<div class ="viewer">\
    <nav>\
        <div class="zoom-out">\
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M19 27C23.4183 27 27 23.4183 27 19C27 14.5817 23.4183 11 19 11C14.5817 11 11 14.5817 11 19C11 23.4183 14.5817 27 19 27Z" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <path d="M29 28.9999L24.65 24.6499" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <path d="M19 16V22" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <path d="M16 19H22" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
            </svg>\
        </div>\
        <div  class="zoom-in">\
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M19 27C23.4183 27 27 23.4183 27 19C27 14.5817 23.4183 11 19 11C14.5817 11 11 14.5817 11 19C11 23.4183 14.5817 27 19 27Z" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <path d="M29 28.9999L24.65 24.6499" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <path d="M16 19H22" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
            </svg>\
        </div>\
        <div  class="rotate-to">\
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M20 10L17 13L20 16" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <path d="M29 20V17C29 15.9391 28.5786 14.9217 27.8284 14.1716C27.0783 13.4214 26.0609 13 25 13H17" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
                <rect x="12" y="21" width="12" height="9" rx="1.5" stroke="#828282" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>\
            </svg>\
        </div>\
    </nav>\
    <div class="my-image">\
        <div class="img">\
            <canvas class="my-image-canvas"></canvas>\
        </div>\
    </div>\
</div>'
// <div class="point"></div>\
export default TEMPLATE