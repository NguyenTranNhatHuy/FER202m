import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, deleteCompany } from './Store';

function CompanyList() {
    const companies = useSelector(state => state.companies)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Companies</h1>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        {company.name}   {company.category}
                        <button onClick={() => dispatch(deleteCompany(company.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyList