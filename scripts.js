const loginForm = document.getElementById('loginForm');
        const formTitle = document.getElementById('formTitle');
        const toggleFormLink = document.getElementById('toggleForm');
        let isLoginForm = true;

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você adicionaria a lógica de autenticação
             window.location.href = "./feed.html"
        });

        toggleFormLink.addEventListener('click', (e) => {
            e.preventDefault();
            isLoginForm = !isLoginForm;
            formTitle.textContent = isLoginForm ? 'Login' : 'Registro';
            toggleFormLink.textContent = isLoginForm ? 'Registre-se' : 'Faça login';
            loginForm.querySelector('button[type="submit"]').textContent = isLoginForm ? 'Entrar' : 'Registrar';
            
            // Animação de transição
            const loginBox = document.querySelector('.login-box');
            loginBox.style.animation = 'none';
            loginBox.offsetHeight; // Trigger reflow
            loginBox.style.animation = 'fadeIn 0.5s ease-out forwards';
        });

        // Animação dos campos de input
        const inputs = document.querySelectorAll('.input-group input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focus');
            });
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.parentElement.classList.remove('focus');
                }
            });
        });

        // Efeito de hover nos botões sociais
        const socialBtns = document.querySelectorAll('.social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('mouseover', () => {
                btn.style.transform = 'scale(1.05)';
            });
            btn.addEventListener('mouseout', () => {
                btn.style.transform = 'scale(1)';
            });
        });