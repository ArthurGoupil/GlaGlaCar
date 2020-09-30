export interface InputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: string;
  hasMarginRight?: boolean;
}

export interface DatePickerInputProps {
  date?: Date;
  onChange: (date: Date) => void;
  placeholder: string;
  hasMarginRight?: boolean;
}

export interface NumericInputProps {
  value: number;
  onChange: (type: 'INCREMENT' | 'DECREMENT') => void;
  hasMarginRight?: boolean;
}

export interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
