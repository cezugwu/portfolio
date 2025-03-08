document.addEventListener('DOMContentLoaded', () => {
    const dark = document.getElementById('dark');
    const body = document.body;
    const header = document.getElementById('header')
    const span = document.getElementById('span');
    const navbar2 = document.getElementById('nav-bar');
    const blue = document.querySelectorAll('.blue');
    const bluebutton = document.querySelectorAll('.bluebutton');
    const bluebutton2 = document.querySelectorAll('.bluebutton2');
    const bluehover = document.querySelectorAll('.bluehover');
    const skillbar = document.querySelectorAll('.skill__bar');
    const bordercolor = document.querySelectorAll('.border__color');

    const enableDarkMode = () => {
        body.classList.remove('bg-gray-200');
        body.classList.add('bg-black/90', 'text-slate-300');
        dark.classList.toggle('ri-sun-line');

        header.classList.remove('bg-gray-200');
        header.classList.add('bg-black', 'text-slate-100');

        if (span) {
            span.classList.remove('bg-gradient-to-r', 'from-cyan-400', 'to-blue-400');
            span.classList.add('bg-gradient-to-r', 'from-cyan-950', 'to-blue-950');
        }

        if (navbar2) {
            navbar2.classList.remove('bg-gray-200/30');
            navbar2.classList.add('bg-black/30');
        }

        blue.forEach(item => {
            item.classList.replace('bg-blue-300', 'bg-blue-950');
        });
        bluebutton.forEach(item => {
            item.classList.remove('border-blue-300', 'hover:bg-blue-300');
            item.classList.add('border-blue-950', 'hover:bg-blue-950');
        });
        bluebutton2.forEach(item => {
            item.classList.remove('border-blue-300', 'hover:bg-blue-300');
            item.classList.add('bg-blue-950', 'hover:bg-blue-950/70', 'border-blue-950');
        });
        bluehover.forEach(item => {
            item.classList.replace('text-blue-300/60', 'text-blue-950/40')
        })

        if (skillbar) {
            skillbar.forEach(item => {
                item.classList.remove('hover:bg-white', 'text-gray-700')
                item.classList.add('hover:bg-gray-950', 'text-slate-400')
            })
        }

        if (bordercolor) {
            bordercolor.forEach(item => {
                item.classList.remove('border-gray-300')
                item.classList.add('border-gray-500')
            })
        }
        localStorage.setItem('dark_', 'enable');
    }


    const disableDarkMode = () => {
        body.classList.remove('bg-black/90', 'text-slate-300');
        body.classList.add('bg-gray-200');
        dark.classList.toggle('ri-sun-line')

        header.classList.remove('bg-black', 'text-slate-100');
        header.classList.add('bg-gray-200');

        if (span) {
            span.classList.remove('bg-gradient-to-r', 'from-cyan-950', 'to-blue-950');
            span.classList.add('bg-gradient-to-r', 'from-cyan-400', 'to-blue-400');
        }

        if (navbar2) {
            navbar2.classList.remove('bg-black/30');
            navbar2.classList.add('bg-gray-200/30');  
        }

        blue.forEach(item => {
            item.classList.replace('bg-blue-950', 'bg-blue-300');
        });
        bluebutton.forEach(item => {
            item.classList.remove('border-blue-950', 'hover:bg-blue-950');
            item.classList.add('border-blue-300', 'hover:bg-blue-300');
        });
        bluebutton2.forEach(item => {
            item.classList.remove('bg-blue-950', 'hover:bg-blue-950/70', 'border-blue-950');
            item.classList.add('border-blue-300', 'hover:bg-blue-300');
        });
        bluehover.forEach(item => {
            item.classList.replace('text-blue-950/40', 'text-blue-300/60')
        })

        if (skillbar) {
            skillbar.forEach(item => {
                item.classList.remove('hover:bg-gray-950', 'text-slate-400')
                item.classList.add('hover:bg-white', 'text-gray-700')
            })
        }

        if (bordercolor) {
            bordercolor.forEach(item => {
                item.classList.remove('border-gray-500')
                item.classList.add('border-gray-300')
            })
        }
        localStorage.setItem('dark_', 'disable')
    }

    const applyDarkMode = () => {
        if (localStorage.getItem('dark_') === 'enable') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    applyDarkMode();

    const darkMode = () => {
        if (localStorage.getItem('dark_') !== 'enable') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    dark.addEventListener('click', darkMode);

    window.addEventListener("pageshow", applyDarkMode);
})




window.addEventListener('popstate', darkMode);