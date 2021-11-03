import { Component } from '@angular/core';

@Component({
    selector: 'contact-bar',
    styleUrls: ['./contact-bar.component.css'],
    template: `
    <div class="bg-dark py-2 contact-bar">
        <div class="container">
            <div class="row color-white align-item-center">
                <div class="col-auto pe-4">
                    <i class="fas fa-envelope me-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:geral@impoace.pt">geral@impoace.pt</a>
                </div>
                <div class="col-auto pe-4">
                    <i class="fas fa-phone me-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:+351-225-105-788">+351 225 105 788</a>
                </div>
                <div class="col-auto pe-4">
                    <i class="fas fa-phone me-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:+351 966 723 512">+351 966 723 512</a>
                </div>
                <div class="col-auto pe-4">
                    <i class="fab fa-whatsapp me-2"></i>
                    <a class="text-light text-decoration-none" target="_blank" href="https://web.whatsapp.com/send?phone=+351966723512">+351 966 723 512</a>
                </div>
                <div class="col-auto pl-2 fs-17px">
                    <a class="text-light" href="https://www.facebook.com/impoace" target="https://www.facebook.com/impoace" rel="sponsored">
                        <i class="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                    </a>
                    <a class="text-light" href="https://www.instagram.com/impoace" target="https://www.instagram.com/impoace">
                        <i class="fab fa-instagram fa-sm fa-fw me-2"></i>
                    </a>
                    <a class="text-light" href="https://www.linkedin.com/company/impoace" target="https://www.linkedin.com/company/impoace">
                        <i class="fab fa-linkedin fa-sm fa-fw"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
})

export class ContactBarComponent {

}