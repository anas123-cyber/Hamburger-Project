// const goalContainer = document.querySelectorAll('.goal-container')
// const checkBoxList = document.querySelectorAll('.custom-checkbox')
// const goalInput = document.querySelectorAll('.goal-input')
// const alertMsg = document.querySelector('.error-label')
// const progressBar = document.querySelector('.progress-bar')
// const progressVal = document.querySelector('.progress-value')
// const firstIp = document.querySelector('#first') 
// const secondIp = document.querySelector('#second') 
// const thirdIp = document.querySelector('#third') 

// const progressLabel = document.querySelector('.progress-label')

// const Quote = document.querySelector('.quote')

// const allQuotes = ['Raise the bar by completing your goals!', 'Beginning well is already halfway to completion.','Just a step away, keep going!','Whoa! You just completed all the goals,time for chill :D']

// const endQuote = ['“Move one step ahead, today!”','“Keep going, you’re making great progress!”','“Stay focused, success is getting closer!”','“Celebrate your growth — you’ve come so far!”']

// // const allGoals = {
//     // first:{
//     //     name: 'learn JS',
//     //     completed: false,
//     // },
//     // second:{
//     //     name: 'learn JS',
//     //     completed: false,
//     // },
//     // third:{
//     //     name: 'learn JS',
//     //     completed: false,
//     // }
// // }


// checkBoxList.forEach((checkbox,index)=>{ 
    
//     checkbox.addEventListener('click',(e)=>{

//         const allGoalsAdded = [...goalInput].every((i)=>{  //converting node list into array tpo use every method.
//             return i.value
//         })

//         if(allGoalsAdded){
//             checkbox.parentElement.classList.toggle('completed')
            
//             const inputID = checkbox.nextElementSibling.id
//             console.log(inputID);
//             allGoals[inputID].completed = !allGoals[inputID].completed

//              completedGoalsCount = Object.values(allGoals).filter((goals)=>
//                  goals.completed 
//             ).length
//             progressVal.style.width = `${(completedGoalsCount / goalInput.length) * 100}%`

//             progressVal.firstElementChild.innerText = `${completedGoalsCount}/ 3 Completed`

//             progressLabel.innerText = allQuotes[completedGoalsCount]

//             Quote.innerText = endQuote              [completedGoalsCount]

//             localStorage.setItem('allGoals',JSON.stringify(allGoals))
//         }
//         else{
//             progressBar.classList.add('show-error') //yeh error show karega agar checkbox click kiye bina sare input fields me likhe beger. But yeh error hamesha reh jayega display me to jab hum error 1 baar dekhliya to wapas se usko remove krne ke liye hum ek focus event laga sakte hai input field me ke jaise usme click karenge error gayab ho jayega.
//         }
       
//         // let value = goalInput[index].value.trim()
//         // if(value === ''){
//         //     alertMsg.classList.add('show-error')
//         // }else{
//         //     alertMsg.classList.remove('show-error');
//         //     checkbox.parentElement.classList.toggle('completed')
//         // }
// //         if(goalContainer[index]){
// //             goalContainer[index].classList.add('completed')
//         // }
//     })
// })


// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//     first:{
//         name:'',
//         completed: false
//     },
//     second:{
//         name:'',
//         completed: false
//     },
//     third:{
//         name:'',
//         completed: false
//     }
// }


// let completedGoalsCount = Object.values(allGoals).filter((goals)=>{
//     return goals.completed 
// })

// progressVal.style.width = `${(completedGoalsCount / goalInput.length) * 100}%`

// progressVal.firstElementChild.innerText = `${completedGoalsCount}/ 3 Completed`

// //as goalInput is a nodeList containing 3 input tags so we have to access it using forEach method:
// goalInput.forEach((input)=>{
//     if(allGoals[input.id]){
//     input.value = allGoals[input.id].name

//     if(allGoals[input.id].completed){
//         input.parentElement.classList.add('completed')
//     }
// }

//     input.addEventListener('focus',()=>{
//     progressBar.classList.remove('show-error')
// })

//     input.addEventListener('input',(e)=>{
//         if(allGoals[input.id].completed){
//         input.value = allGoals[input.id].name
//         return
//     }


//         console.log(input.id);//this will give us the id wether first ,second or third on which input we are typing now.
//         allGoals[input.id] = {
//             name : input.value,
//             completed: false,
//         } //this will create a key inside the allGoals object named fist or second or third and value will the one which we are typing inside the input field.
//         //allGoals ek khud object hai uska andar first,second or third naam se ek object hoga fir iska andar ek name aur completed naam se key hoga.
//         console.log(allGoals);
        
//         localStorage.setItem('allGoals',JSON.stringify(allGoals))
//     })
// })


