export type Product = {
    id: number;
    sku: string;
    title: string;
    salePrice: number;
    category: string;
    tags: string[];
    normalPrice: number;
    discountPercentage: number;
    new: boolean;
    description: Description;
    colors: Colors[];
    sizes: string[];
    rating: number;
    images: Images;
    cartQuantity: number;

}

interface Description {
    short: string;
    long: string;
}

interface Colors {
    name: string;
    hex: string;
}
interface Images {
    mainImage: string;
    gallery: string[];
}