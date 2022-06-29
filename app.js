//using selectors inside the element 

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
//    console.log(question); 
const btn = question.querySelector(".question-btn");
// !!!!!here we have "question", which means only look inside the question class

// console.log(btn);
btn.addEventListener("click",function(){
// item and question here are similar. With ! ==, only one text open.
    questions.forEach(function(item){
        if(item !== question){
            item.classList.remove("show-text")
        }
    })

    question.classList.toggle("show-text")
})
})


// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         // parent once -- go above once
//         // till we get "question/article we can show the text"
//         question.classList.toggle("show-text");

//     });
// })