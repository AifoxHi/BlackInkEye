function randomquote() {

    var one = "The quote mean nothing if this placeholder, I'm right? Why would I should use Lorem Ipsum here? This is stupid. I mean this thing is not even try to work. I'm no one and I come from black hole. ~ Sofia";
    var two = "The whale farted underwater, now all fish is dead. ~ Sofia";
    var three = "3. ~ Sofia";
    var four = "4. ~ Sofia";
    var five = "5. ~ Sofia";

    var quote = [one, two, three, four, five];

    var randOne = [Math.floor(Math.random() * quote.length)];

    document.getElementById('quoteText').innerHTML = quote[randOne];
}
randomquote();

function randomimage() {
  
  var images = [
    "<img src='https://placehold.co/500'>",
    "<img src='https://placehold.co/600'>",
    "<img src='https://placehold.co/800'>",
    "<img src='https://placehold.co/400'>"
  ];

  var index = Math.floor(Math.random() * images.length);

  document.getElementById('quoteimg').innerHTML = images[index];
  
}
randomimage();