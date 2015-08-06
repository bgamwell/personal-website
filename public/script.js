$( document ).ready(function() {

  // mouseover animation for "email me" button
  $('#email-me').hover(function() {
    $(this).addClass('underline');
    $('#email-icon').addClass('glow');
  }, function() {
    $(this).removeClass('underline');
    $('#email-icon').removeClass('glow');
     }
  );

  // mouseover animation for "Github" button
  $('#github').hover(function() {
    $(this).addClass('underline');
    $('#github-icon').addClass('glow');
  }, function() {
    $(this).removeClass('underline');
    $('#github-icon').removeClass('glow');
     }
  );

  // mouseover animation for "Twitter" button
  $('#twitter').hover(function() {
    $(this).addClass('underline');
    $('#twitter-icon').addClass('glow');
  }, function() {
    $(this).removeClass('underline');
    $('#twitter-icon').removeClass('glow');
     }
  );

  // mouseover animation for "LinkedIn" button
  $('#linkedin').hover(function() {
    $(this).addClass('underline');
    $('#linkedin-icon').addClass('glow');
  }, function() {
    $(this).removeClass('underline');
    $('#linkedin-icon').removeClass('glow');
     }
  );

  // mouseover animation for profile picture
  $("h1").hover(function() {
    $('#portrait').addClass('glow');
  }, function() {
    $('#portrait').removeClass('glow');
  });

});
