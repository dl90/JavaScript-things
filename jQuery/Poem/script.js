$("button").click(function () {
  // Scramble the poem...
  const $first = $("p strong:eq(0)").text();
  const $second = $("p strong:eq(1)").text();


  $("p strong:eq(0)").text($("p strong:eq(1)").text());
  $("p strong:eq(1)").text($first);

  const $lastLine = $("p:last");
  const $firstLine = $("p:first");

  // console.log($firstLine.text());
  // console.log($lastLine.text());

  $firstLine.after($lastLine);

  $("p").wrapAll("<div></div>");

  const $poem = $("div p");
  $poem.css("color", "blue");

  const $link = $("a");
  $link.attr("href", "https://www.quora.com/What-is-the-origin-of-the-roses-are-red-violets-are-blue-poem");

  // Disable the button
  $(this).attr("disabled", true);
});
