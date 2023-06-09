import styles from './AreaCodeSelect.module.css';
import countryCodes from '../../utils/countryCodes.json';

const AreaCodeSelect = ({ handleAreaCode,defaultValue }) => {
    const handleChange = (e) => {
        handleAreaCode(e.target.value)
    }
    return (
        <div>
            <select
                className={styles.areaCodeSelect}
                onChange={(e) => handleChange(e)}
                name="area-code"
                id="area-code"
                defaultValue={defaultValue}>
                {countryCodes.map((el, index) => (
                    <option
                        key={index}
                        defaultValue={el.code}
                        value={el.dial_code}
                    >
                        {el.code}
                        {' '}
                        {`(${el.dial_code})`}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default AreaCodeSelect