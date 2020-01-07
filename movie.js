var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
// プレーヤーを埋め込む場所指定
var ytArea = 'background';
// 埋め込むYouTube ID指定
var ytID = 'a1u0IqVxN9k';
 
// プレーヤーの埋め込み
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player(ytArea, {
        videoId: ytID,
        playerVars: {
            rel: 0,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
 
// YouTubeの準備完了後
function onPlayerReady(e) {
    ytPlayer.playVideo();
    ytPlayer.mute();
}
 
// 再生完了後
function onPlayerStateChange(e) {
    var ytStatus = e.target.getPlayerState();
    if (ytStatus == YT.PlayerState.ENDED) {
        ytPlayer.playVideo();
        ytPlayer.mute();
    }
}


$(function(){
    $('a[href^=/#home]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
    });