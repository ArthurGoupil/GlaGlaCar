export interface IInputProps {
  name: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: string;
  hasMarginRight?: boolean;
}

export interface IDatePickerInputProps {
  date: Date;
  onChange: (date: Date) => void;
  placeholder: string;
  hasMarginRight?: boolean;
}

export interface INumericInputProps {
  value: number;
  onChange: (type: 'INCREMENT' | 'DECREMENT') => void;
  hasMarginRight?: boolean;
}

export interface IButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: string;
  disabled: boolean;
}
