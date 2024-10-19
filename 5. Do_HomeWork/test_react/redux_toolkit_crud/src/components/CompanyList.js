import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompany, removeCompany } from './redux/Store';
import { Link } from 'react-router-dom';

function CompanyList() {
    const companies = useSelector(state => state.companies)
    const dispatch = useDispatch();
    console.log(companies);
    return (
        <div>

            <h1>Companies</h1>
            <Link to={'/create'}>
                <button className='btn btn-success m-3'>Create</button>
            </Link >

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">cateogy</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <tr>

                            <th scope="row">{company.id}</th>
                            <td>{company.name}</td>
                            <td>{company.category}</td>
                            <td>
                                <button onClick={() => dispatch(removeCompany(company.id))} type="button" class="btn btn-danger m-2">Delete</button>
                                <Link to={`/update/${company.id}`}>
                                    <button className='btn btn-primary'>Update</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* 
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        {company.name}   {company.category}
                        <Link to={`/update/${company.id}`}>
                            <button className='btn btn-sm btn-primary'>Update</button>
                        </Link>
                        <button onClick={() => dispatch(removeCompany(company.id))}>Remove</button>
                    </li>
                ))}
            </ul> */}
        </div >
    )
}

export default CompanyList