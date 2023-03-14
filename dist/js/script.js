const 
    hamburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    menuLink = document.querySelector('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});

const 
    counters = document.querySelectorAll('.skills__percentages-item-value'),
    lines = document.querySelectorAll('.skills__percentages-item-line-purple')

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });


$(document).ready(function(){
        
    function validateForms(form) {
        
        jQuery.validator.setDefaults({
            debug: true,
            success: "valid"
          });

        $(form).validate({
            debug: true,
            rules: {          
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                agree: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("At least {0} characters")
                },
                email: {
                    required: "Please enter your email",
                    email: "Mail must be in the format name@domain.com"              
                },
                agree: {
                    required: "mandatory mark",
                },
                text: {
                    required: "a few words about ordering"
                }
            }
        });
    };

    validateForms('#send-form');

    $('form').submit(function(e) {
        e.preventDefault(); /* отменяем станартную перезагрузку страницы после отправки формы */

        if (!$(this).valid()) {
            return; /* если форма не прошла валидацию, дальше код не пойдет */
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.contacts__thnx, .overlay').fadeIn('slow');
            $('form').trigger('reset');
        });

        return false;

    })

 $('.contacts__close').on('click', function() {
        $('.contacts__thnx, .overlay').fadeOut('fast');
    });
 
});
    