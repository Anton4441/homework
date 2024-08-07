(function () {
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const navLink = e.target.closest('.nav__link')
        if (!burgerIcon && !navLink) return
        if (document.documentElement.clientWidth > 900) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')
    modal.addEventListener('click', closeModal)
    modalButton.addEventListener('click', openModal)
    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }
    function closeModal(e) {
        e.preventDefault()
        const target = e.target
        if(target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }
})()