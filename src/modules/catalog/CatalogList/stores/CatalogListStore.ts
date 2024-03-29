import { makeAutoObservable, runInAction } from "mobx";
import { CatalogData } from "../models/CatalogData";

class CatalogListStore{

    catalogListDataState: CatalogData | undefined = undefined;
    categoriesState: string[] | undefined = undefined;
    awating: boolean = false;

    get allCategories(){
        return this.categoriesState && ["All", ...this.categoriesState]
    }

    get productsData(){
        return this.catalogListDataState?.products;
    }

    constructor(){
        makeAutoObservable(this);    
    }

    loadCategories = async () => {
        try{
            const response = await fetch('https://dummyjson.com/products/categories');
            if(response.status === 200){
                const data: string[] = await response.json();
                runInAction(() => {
                    this.categoriesState = data;
                });
            }
        } catch(error){
            console.log(error);
        }
    }

    loadingData = async (category?: string) => {
        const url = category && category !== "All" ? `https://dummyjson.com/products/category/${category}`: 'https://dummyjson.com/products';
        try{
            runInAction(() => {this.awating = true})
            this.awating = true;
            const response = await fetch(url);
            if(response.status === 200){
                const data: CatalogData =  await response.json();
                runInAction(() => {
                    this.catalogListDataState = data
                });
            }
        } catch(error){
            console.error(error);     
        } finally{
            runInAction(() => {this.awating = false})
        }
    }
}

export const store = new CatalogListStore()