import { RootState } from './store'

export const selectValue = ({ counter }: RootState) => counter.value
