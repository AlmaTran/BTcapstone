function SanPham(id,ten,alias,price,description,shortDescription,quantity,deleted,categories,relatedProducts,feature,image){
    this.id=id;
    this.name=ten;
    this.alias=alias;
    this.price=price;
    this.description=description;
    this.shortDescription=shortDescription;
    this.quantity=quantity;
    this.deleted=deleted;
    
    this.categories=categories;
    this.relatedProducts=relatedProducts;
    this.feature=feature;
    
    this.image=image;
    }