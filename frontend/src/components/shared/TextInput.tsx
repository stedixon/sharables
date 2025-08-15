import React from 'react';
import './TextInput.css';

interface TextInputProps {
    id: string;
    isLoading: boolean;
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type: string;
    value: string;
}

const TextInput: React.FC<TextInputProps> = ({label, value, type, id, placeholder, isLoading, onChange}) => {

    return (
        <div className="form-group">
          <label htmlFor={id}>{label}:</label>
          <input
            id = {id}
            type={type}
            name={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
            disabled={isLoading}
          />
        </div>
    );
};

export default TextInput;