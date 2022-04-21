import { FormRenderProps } from 'react-final-form';

export interface FormValues {
    startNum?: string
    endNum?: string
}

export interface FormRenderValueProps extends FormRenderProps {
    values: FormValues
}
