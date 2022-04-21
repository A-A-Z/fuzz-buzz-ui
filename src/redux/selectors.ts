import { RootState } from './store'

export const selectValue = ({ counter }: RootState) => counter.value

export const selectFormValues = ({ counter: { startNum, endNum } }: RootState) => ({
    startNum: `${startNum}`, 
    endNum: `${endNum}`
})