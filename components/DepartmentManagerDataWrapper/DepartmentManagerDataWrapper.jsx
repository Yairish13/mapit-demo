"use client"
import React, { useState } from 'react'
import styles from './DepartmentManagerDataWrapper.module.scss'

function DepartmentManagerDataWrapper() {
    const [departmentManagerData, setDepartmentManagerData] = useState({
      departmentManagerName: "",
      departmentManagerRole: "",
    });
    // useEffect(() => {
    //   fetch("http://localhost:1337/api/projects/1")
    //     .then((response) => response.json())
    //     .then((responseJSON) => {
    //       setDepartmentManagerData({
    //         departmentManagerName:
    //           responseJSON.data?.attributes?.departmentManagerName,
    //         departmentManagerRole:
    //           responseJSON.data?.attributes?.departmentManagerRole,
    //       });
  
    //     });
    // }, [])
    return (
      <div className={styles.departmentManagerData}>
        <div>{`${departmentManagerData?.departmentManagerName || 'ישראל ישראלי'}`}</div>
        <div>{`${departmentManagerData?.departmentManagerRole || 'מנהל'}`}</div>
      </div>
    );
  }

export default DepartmentManagerDataWrapper