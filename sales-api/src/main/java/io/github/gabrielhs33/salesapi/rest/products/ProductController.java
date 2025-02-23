package io.github.gabrielhs33.salesapi.rest.products;

import io.github.gabrielhs33.salesapi.model.Product;
import io.github.gabrielhs33.salesapi.model.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @PostMapping
    public ProductFormRequest save (@RequestBody  ProductFormRequest product){

        Product entityProduct = new Product(
                product.getName(),
                product.getDescription(),
                product.getSku(),
                product.getPrice()
        );

        repository.save(entityProduct);
        System.out.println(entityProduct);
        return product;
    }
}
