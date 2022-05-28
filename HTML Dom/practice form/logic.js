function Validator(value) {
    let formElement = document.querySelector(value)
    let prevent = false
    let formRules = {};
    let formMessages = {};

    /*
    required: rule
    error message: return messag error
    else: return true or undefined

     */
    let validationRules = {

        required: function (value) {
            return value ? undefined : 'This field is required';
        }
        , email: function (value) {
            var regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regrex.test(value) ? undefined : 'pls enter right email';
        },
        min: function (min) {
            return function (value) {
                


                return value.length > min ? undefined : 'this is too short';
            }
        }

    }


    if (formElement) {
        let data = formElement.querySelectorAll('[name][rule]')
        for (let i of data) {
            let rules = i.getAttribute('rule').split('|')

            for (let rule of rules) {
                if (!formRules[i.getAttribute('name')]) {
                    formRules[i.getAttribute('name')] = []

                }




                if (rule.includes('min:')) {
                    let min = rule.split(':')[1]
                    rule = rule.split(':')[0]
                    formRules[i.getAttribute('name')].push(validationRules[rule](min))
 console.log(min)
                }


                else {
                    formRules[i.getAttribute('name')].push(validationRules[rule])
                }


            }
            i.onblur=handelEvent


           
            
            
        }
        
    }
    function handelEvent(value,ok=1)
     {
         if (ok==1){
            value=value.target
         }
       
        let final = []
        for (let i of formRules[value.id]) 
        {
            if (!final[(value.id)]) {
                final[(value.id)] = []
            }
            console.log(value.id)
            
            final[(value.id)].push(i(value.value))
        }
       

        let pos = formElement.querySelector(`[name=${value.id}]`).parentNode.querySelector(".form-message")
        console.log(final[(value.id)])
        pos.innerHTML = final[(value.id)].join('<br>')
        pos.style.color = "red"
        setTimeout(() => { pos.innerHTML = "" }, 2000)
        if (final[(value.id)].length == 0) {
            prevent = true
        }
        else {
            prevent = false
        }
    }
    // formRules["fullname"].push(validationRules["required"]


    formElement.onsubmit = function (e) {
        e.preventDefault()


        
        if (prevent) {
            window.alert("success")

        }
        else if(!prevent) 
        {
            
                  
            if (formElement) {
                let data = formElement.querySelectorAll('[name][rule]')
                console.log( data)
        
                for (let i of data) {
                   console.log(i)
                     handelEvent(i,2);
                }
                
            }
        }
        

      
    }



    // }
}