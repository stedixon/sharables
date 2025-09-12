import React from 'react';
import './TextInput.css';
import { FaInfoCircle } from "react-icons/fa";

export enum MessageLevel {
  INFO,
  WARNING,
  ERROR,
  NONE
}

interface TextInputProps {
    id: string;
    isLoading: boolean;
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type: string;
    value: string;
    message?: string;
    messageLevel?: MessageLevel;
}

const TextInput: React.FC<TextInputProps> = ({label, value, type, id, placeholder, isLoading, onChange, message, messageLevel}) => {

    const getMessageClass = ():string => {
      switch (messageLevel) {
        case MessageLevel.INFO:
          return "info-message";
        case MessageLevel.WARNING:
          return "warning-message";
        case MessageLevel.ERROR:
          return "error-message";
        default: return ""
      }
    }

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
          {
            (message !== undefined && message.length > 0) && 
            (messageLevel !== undefined && messageLevel !== MessageLevel.NONE) && 
            <div className={getMessageClass()}><FaInfoCircle/>{message}</div>
          }
        </div>
    );
};

export default TextInput;