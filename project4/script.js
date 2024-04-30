document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }

const colors = [
    "rgb(221, 167, 74)",
    "rgb(45, 154, 253)",
    "rgb(255, 127, 95)",
    "rgb(255, 201, 210)",
    "rgb(89, 149, 194)",
    "rgb(0, 69, 255)",
    "rgb(0, 211, 255)",
    "rgb(0, 111, 212)",
    "rgb(0, 48, 116)",
    "rgb(0, 8, 40)",
    "rgb(255, 61, 40)",
];

let index = 0;

function changeBackgroundColor() {
    document.body.style.transition = "background 2s ease";
    document.body.style.background = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds



// $(document).ready(function(){
//     $(".sun").click(function(){
//         $(this).stop().css('left', '0vw'); // Stop ongoing animations and set initial left position
//         $(this).animate({
//             left: '-50vw', // Animate left position to -50px
//             width: '100vw',
//             height: '100vh',
//             'border-radius': '0'
//         });
//     });
// });


$(document).ready(function(){
    $(".sun").click(function(){
        $(this).css('animation', 'none');
        $(this).css({'left': '70vw', 
        'bottom': '45vw',
        // 'z-index': '11',
        'background': 'white',
    });

    $(".text1").css('animation', 'none');
    $(".text1").css({
        'bottom': '1vw',
        'left': '50%',
        'transform': 'translate(-50%)',
        'opacity': '1'
    });

        $(this).animate({
            left: '-30vw',
            bottom: '80vw',
            width: '150vw',
            height: '150vw',
        }, 3000, function() {
            // Animation complete, change page
            window.location.href = "page2.html"; // Replace "your_page_url_here" with the URL you want to redirect to

        });

        $(".text1").animate({
            'bottom': '-10vw',
            'opacity': '0'
        },3000);


    });

    $(".sun").mouseenter(function(){
        $("#invertedcursor").animate({
            width: '40px',
            height: '40px'
        });
    })

    $(".sun").mouseleave(function(){
        $("#invertedcursor").animate({
            width: '25px',
            height: '25px'
        });
    })
});





