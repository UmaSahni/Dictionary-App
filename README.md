# Dictionary-App

 # 3,000 / month Hard Limit


  ${
            meaning.map((el)=>{
                return `
                    <h3>${el.tag}</h3>
                    <ol>
                    ${
                        el.values.map((item)=>{
                            return `
                            <li>${item} </li>
                            `
                        })
                    } 
                `
            })
        }