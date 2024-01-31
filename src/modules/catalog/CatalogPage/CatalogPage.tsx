import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatalogPageStore } from "./stores/CatalogPageStore";
import { Button, Image, Rate } from 'antd';
import { observer } from "mobx-react-lite";
import "./CatalogPage.css";
import { DescriptionItem } from "./components/DescriptionItem";


export const CatalogPage = observer(() => {
    const [store] = useState(() => new CatalogPageStore());
    const {loadProduct, productDataState} = store;
    const { productId } = useParams();

    useEffect(()=>{
        if(productId){
            loadProduct(productId);
        }
    },[productId]);

    console.log(productId);
    return <>
        {productDataState && <div>
                    <h1>{productDataState.title}</h1>
                    <div className="product_card">
                        <div className="products_img">
                            <Image.PreviewGroup >
                                {productDataState.images.map((img)=> <Image className="product_img" key={img} src={img} />)}
                            </Image.PreviewGroup>
                            
                        </div>
                        <div className="product_description">
                            <h2 className="product_description_title">Информормация о товаре</h2>
                            <DescriptionItem name="Описание" value={productDataState.description}/>
                            <DescriptionItem name="Категория товара" value={productDataState.category}/>
                            <DescriptionItem name="Бренд" value={productDataState.brand}/>
                            <DescriptionItem name="Рейтиг" value={<Rate disabled defaultValue={productDataState.rating} />}/>
                            <div className="product_description_price">Стоимость {productDataState.price} $</div>
                            <div className="buttons_block">
                                <Button>Назад</Button>
                                <Button type="primary">Добавить в корзину</Button>
                            </div>
                        </div>
                    </div>
            </div>}
    </>
});