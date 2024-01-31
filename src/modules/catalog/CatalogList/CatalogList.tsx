import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { store } from './stores/CatalogListStore';
import { observer } from 'mobx-react-lite';
import { Image, Spin, Button } from 'antd';
import './CatalogList.css'

export const CatalogList = observer(() => {
    const {loadingData, productsData, awating, loadCategories, allCategories} = store;

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        if(allCategories){
            loadingData();
        }
    }, [allCategories]);

    const handleCategoryClick = (selectedCategory: string) => {
        loadingData(selectedCategory);
    }

    console.log(allCategories);

    return <>
        {allCategories && allCategories.map((category) => <Button key={category} onClick={() => {handleCategoryClick(category)}}>{category}</Button>)}
        <Spin spinning={awating}>
            <div className='products'>
                {productsData && productsData.length > 0 && productsData.map((product) => 
                    <div key={product.id} className='product'>
                        <Image className='product__img' src={product.thumbnail}/>
                        <div className='title'><Link to={product.id.toString()}>{product.title}</Link></div>
                    </div>
                )}
            </div>
        </Spin> 
    </>
});