import styles from './AreaCodeSelect.module.css'
const AreaCodeSelect = ({ handleAreaCode }) => {
    const handleChange = (e) => {
        handleAreaCode(e.target.value)
    }
    return (
        <div>
            <select className={styles.areaCodeSelect} onChange={(e) => handleChange(e)} name="cars" id="cars" form="carform">
                <option value="972">972</option>
                <option value="255">255</option>
                <option value="83">83</option>
                <option value="55">55</option>
            </select>
        </div>
    )
}

export default AreaCodeSelect