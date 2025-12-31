//your JS code here. If required.
 const codes = document.querySelectorAll('.code');

    codes[0].focus();

    codes.forEach((input, index) => {

        input.addEventListener('keydown', (e) => {

            if (e.key === 'Backspace') {
                if (input.value === '' && index > 0) {
                    codes[index - 1].value = '';
                    codes[index - 1].focus();
                } else {
                    input.value = '';
                }
            }
        });

        input.addEventListener('input', () => {
            if (input.value && index < codes.length - 1) {
                codes[index + 1].focus();
            }
        });

    });