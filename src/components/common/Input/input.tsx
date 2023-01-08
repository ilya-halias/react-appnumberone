import type {FC} from 'react'

interface  InputProps{
    value: string
}

export const Input: FC<InputProps> =({value}) => <input value={value}/>
