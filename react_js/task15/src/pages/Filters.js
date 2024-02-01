import React, {useCallback, useEffect, useMemo} from 'react';
import Select from "react-select";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, getFilteredProducts} from "../store/actions";
import Products from "../components/Products";

function Filters(props) {
    const [searchParams, setSearchParams] = useSearchParams({'cat': ''});
    const categories = useSelector(state => state.categories);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        if (searchParams.get('cat')) {
            dispatch(getFilteredProducts(searchParams.get('cat')));
        }
    }, [dispatch, searchParams]);

    const categoriesOption = useMemo(() => {
        return categories.map(category => ({value: category, label: category}));
    }, [categories]);

    const handleCategoryChange = useCallback((value) => {
        searchParams.set('cat', value.value);
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);

    return (
        <div className="filters">
            <h2>Filters</h2>
            {
                categoriesOption.length ?
                    <Select
                        defaultValue={categoriesOption.find((elem) => elem.value === searchParams.get('cat'))}
                        className="category_select"
                        onChange={handleCategoryChange}
                        options={categoriesOption}
                    />
                    : null
            }

            <Products/>
        </div>
    );
}

export default Filters;