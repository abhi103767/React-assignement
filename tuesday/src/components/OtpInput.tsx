import React, {createRef, useRef} from 'react'

type TotalNumber = {
    totalInputs: Number;
}

function OtpInput({ totalInputs }: TotalNumber) {


const inputRef = useRef<HTMLInputElement[]>([]);

    return (
        <div>
   {
       new Array(totalInputs).fill(1).map((el,index) => {
        return <input
        type={'text'}
        onKeyUp={
            (e) => {
                console.log(e.target)
                
        if(e.code === 'Backspace' && index > 0) inputRef.current[index-1].focus();
      else if(index < inputRef.current.length - 1)   inputRef.current[index+1].focus()
       }
        }
        ref = {(element) => {

          if(element)  inputRef.current[index] = element;
          
        }}
        
        maxLength={1}
        className='otpInput'
        key={index}
         />
       })
   }
        </div>
    )
}

export default OtpInput