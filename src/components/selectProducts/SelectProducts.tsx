import { ChangeEvent } from "react"
import styles from "./selectProducts.module.css"

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectProducts: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
  <select value={value} onChange={onChange} className={styles.select}>
      {options.map((option) => (
          <option key={option.value} value={option.value}>
              {option.label}
          </option>
      ))}
  </select>
  )
}