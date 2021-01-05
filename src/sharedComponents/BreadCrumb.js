import React from 'react';
import '../styles/navbar.style.css';
import {useHistory} from 'react-router-dom';

export default function Breadcrumb({ breadCrumbArray = [] }) {
  const history = useHistory();
  const handleRedirect = (path) => {
    history.push(path)
  }
  return (

    <ul className="breadcrumb">
      {breadCrumbArray.map((breadcrumb,index) => (
        <li key={index}>
          <span onClick={()=>handleRedirect(breadcrumb.path)}>{breadcrumb.name}</span>
        </li>
      ))}
    </ul>
  );
}
