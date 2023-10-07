class Calculator {
    constructor(lasttextvalue, currenttextvalue) 
    {
      this.lasttextvalue = lasttextvalue
      this.currenttextvalue = currenttextvalue
      this.deleteall()
    }
  
    mathsequence(operation) {
        if (this.initialnumval === '') return
        if (this.secondvalue !== '') {
          this.calculate()
        }

        this.operation = operation
        this.secondvalue = this.initialnumval
        this.initialnumval = ''
      }

      calculate() 
    {
      let calculations
      const prev = parseFloat(this.secondvalue)
      const current = parseFloat(this.initialnumval)

      if (isNaN(prev) || isNaN(current)) return

      switch (this.operation) {
        case '*':
          calculations = prev * current
          break

        case '+':
          calculations = prev + current
          break

          case '÷':
            calculations = prev / current
            break

        case '-':
          calculations = prev - current
          break
        
        default:
          return
      }
      this.initialnumval = calculations
      this.operation = undefined
      this.secondvalue = ''
    }

    numselect(num1) 
    {
        if (num1 === '.' && this.initialnumval.includes('.')) 
        return

        this.initialnumval = this.initialnumval.toString() + num1.toString()
    }


    deleteall() 
    {
      this.initialnumval = ''
      this.secondvalue = ''
      this.operation = undefined
    }
  

    showvalues(num1) 
    {
      const stringNumber = num1.toString()
      const integernum1 = parseFloat(stringNumber.split('.')[0])
      const decimalnum1 = stringNumber.split('.')[1]
      let numberoutput
      if (isNaN(integernum1)) {
        numberoutput = ''
      } 
      else {
        numberoutput = integernum1.toLocaleString('en', { maximumFractionDigits: 0 })
      }

      if (decimalnum1 != null) {
        return `${numberoutput}.${decimalnum1}`

      } else {
        return numberoutput
      }
    }
  

    changedisplay() {
      this.currenttextvalue.innerText =
        this.showvalues(this.initialnumval)
      if (this.operation != null) {
        this.lasttextvalue.innerText =
          `${this.showvalues(this.secondvalue)} ${this.operation}`
      } else {
        this.lasttextvalue.innerText = ''
      }
    }
  }
  

  const lasttextvalue = document.querySelector('[previousvalue]')
  const currenttextvalue = document.querySelector('[selectvalue]')
  const cleareverything = document.querySelector('[clearbutton]')
  const numbutton = document.querySelectorAll('[numbervalue]')
  const mathbutton = document.querySelectorAll('[mathfunction]')
  const equalbutton = document.querySelector('[equalbutton]')
  const calculator = new Calculator(lasttextvalue, currenttextvalue)
  

  

  cleareverything.addEventListener('click', button => {
    calculator.deleteall()
    calculator.changedisplay()
  })

  mathbutton.forEach(button => {
    button.addEventListener('click', () => {
      calculator.mathsequence(button.innerText)
      calculator.changedisplay()
    })
  })

  numbutton.forEach(button => {
    button.addEventListener('click', () => {
      calculator.numselect(button.innerText)
      calculator.changedisplay()
    })
  })
  
  equalbutton.addEventListener('click', button => {
    calculator.calculate()
    calculator.changedisplay()
  })
  

  
