import { useEffect, useState } from 'react'
import axios from 'axios'
import pkg from 'react-data-table-component'
const DataTable = pkg.default

const CountriesTable = () => {

    const [search, setsearch] = useState('')
    const [filterCountry, setfilterCountry] = useState([])
    const [countries, setcountries] = useState([])

    const getCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,currencies');
            setfilterCountry(response.data)
            setcountries(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const columns = [
        {
            name: 'Country Name',
            selector: (row) => row.name.official,
            sortable: true
        },
        {
            name: 'Common Name',
            selector: (row) => row.name.common
        },
        {
            name: 'Capital',
            selector: (row) => row.capital?.[0] || 'N/A'   
        },
        {
            name: 'Currency',
            selector: (row) => Object.values(row.currencies || {})[0]?.name || 'N/A'   
        },
    ]

    useEffect(() => {
        getCountries();
    }, [])

    useEffect(() => {
        const result = countries.filter(country => {
            return country.name.common.toLowerCase()  //  
                .match(search.toLowerCase())
        })
        setfilterCountry(result)
    }, [search])

    return (
        <div>
            <DataTable
                columns={columns}
                data={filterCountry}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='400px'
                selectableRows
                selectableRowsHighlight
                subHeader
                subHeaderComponent={
                    <input
                        type='text'
                        placeholder='Search country...'
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}  
                    />
                }
            />
        </div>
    )
}

export default CountriesTable