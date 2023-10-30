const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

console.log("heading" , tabContents)
tabs.forEach((item) => {
    item.addEventListener("click" , () => {
        const target =  document.querySelector(item.dataset.tabTarget); 
        tabContents.forEach((ele) => {
            ele.classList.remove('active')
        })
        tabs.forEach((item1) => {
            item1.classList.remove('active')
        })
        item.classList.add('active')
        target.classList.add('active')
    })
})