// app/controller/csrf.js
const { Controller } = require('egg');

class CsrfController extends Controller {
    async token() {
        this.ctx.body = {
            csrfToken: this.ctx.csrf,
        };
    }
}

module.exports = CsrfController;