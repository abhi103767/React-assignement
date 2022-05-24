import React, {createRef, useRef,useState} from 'react'

type TotalNumber = {
    totalInputs: Number;
    handleChange : (otp:string) => void
}

function OtpInput({ totalInputs , handleChange}: TotalNumber) {
const [otp,setOtp] = useState('');
console.log(otp)

const inputRef = useRef<HTMLInputElement[]>([]);


    return (
        <div>
   {
       new Array(totalInputs).fill(1).map((el,index) => {
        return <input
        type={'text'}
        onChange = {
            (e) => {
          setOtp(otp+e.target.value)
            }
        }
        onKeyUp={
            (e) => { 
                // console.log(index) 
           
        if(e.code === 'Backspace' && index > 0) inputRef.current[index-1].focus();
        if(e.code === 'Backspace') {
            let arr = otp.trim().split('').filter((item,i) => i !== index );
            setOtp(arr.join(''))
        }
       else if(index < inputRef.current.length - 1 && e.code !== 'Backspace')   inputRef.current[index+1].focus()
    //    handleChange(otp)
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