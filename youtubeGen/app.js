$('#submit-search').click(function() {
    var searchItem = $('#search-item').val();
    var everything = "<ul>";
    console.log(everything);
    var myurl= "https://www.googleapis.com/youtube/v3/search?part=snippet&safeSearch=strict&maxResults=25&key=AIzaSyCUdNPjVYJln_JIlm31tbAmdK24-XYNGsQ&q=";
    myurl += searchItem;
    //myurl += ".json";
    console.log(myurl);
        $.ajax({
            type: "GET",
            url: myurl,
            cache: false,
            dataType:'jsonp',
            success: function(parsed_json){
                console.log(parsed_json);
                var index = Math.floor((Math.random() * 24) + 0);
                var title = parsed_json.items[index].snippet.title;
                var channel = parsed_json.items[index].snippet.channelTitle;
                var description = parsed_json.items[index].snippet.description;
                var id = parsed_json.items[index].id.videoId;
                var videoSource= "https://www.youtube.com/watch?v=" + id;
                console.log(everything);
                everything += "<li><strong>Title</strong>: "+title +"</li>";
                everything += "<li><strong>Channel</strong>: "+channel +"</li>";
                everything += "<li><strong>Description</strong>: "+description +"</li>";
                everything += "</ul>";
                console.log(everything);
                $("#results").html(everything);
                $('#yt-player iframe').remove();
                $('<iframe allowfullscreen></iframe>')
                .attr("src", "http://www.youtube.com/embed/" + id)
                .appendTo("#yt-player");
            }
        });
    return false;
});