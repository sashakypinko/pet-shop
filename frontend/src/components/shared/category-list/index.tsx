import {ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Grid} from '@mui/material';
import {selectCategories} from '../../../store/selectors';
import {getCategories} from '../../../store/categories/slice';
import CategoryItem from './category-item';
import {ICategory} from '../../../services/api/category/dto/category.dto';

interface Props {
    limit?: number
}

const CategoryList = ({ limit }: Props): ReactElement => {
    const dispatch = useDispatch();
    const { categories, loading } = useSelector(selectCategories);

    useEffect(() => {
        if (!categories.length) {
            dispatch(getCategories());
        }
    }, []);
    
    if (loading) {
        return <>Loading...</>;
    }

    return (
        <Grid container spacing={4}>
            {categories.slice(0, limit).map(( category: ICategory ) => <CategoryItem key={category.id} category={category}/>)}
        </Grid>
    );
};

export default CategoryList;