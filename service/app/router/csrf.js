module.exports = app => {
    const { router, controller } = app;
    router.get('/getCsrfToken', controller.csrf.token);
};