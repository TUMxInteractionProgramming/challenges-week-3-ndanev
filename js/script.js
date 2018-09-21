
// consol function- be sure that console works
console.log('app is alive')


// function switch channel
function switchChannel(channelName) {
    console.log('Tuning into channel ' + channelName);
    document.getElementById('current-channel-name').innerHTML = channelName;
    document.getElementById('current-channel-location').innerHTML = '<a href="http://w3w.co/upgrading.never.helps" target="_blank">upgrading.never.helps</a>';
    changeStar();
}

// change channel star function
function changeStar() {
    $('#star-current-channel').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
}

// function select tab
function selectTab(tabId) {
    console.log('Changing to tab ' + tabId);
    $('#tab-bar').find('.selected').removeClass('selected');
    $('#' + tabId).addClass('selected');
}

function toggleEmoji() {
    $('#emojis').toggle();
}