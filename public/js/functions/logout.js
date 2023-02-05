window.addEventListener('load', function() {
    
        document.addEventListener('click', event => {
            if (event.target.id == 'logout-button') {
    
                event.preventDefault();
    
                serverRequest('/auth/logout', 'POST', {}, (err, res) => {
                    if (err) {
                        return;
                    }
    
                    if (res.success) {
                        console.log('yeees')
                        this.window.location = '/'
                        return document.location.reload();
                    }
                });
            }
        });
    
    });