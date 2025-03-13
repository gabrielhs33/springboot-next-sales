package io.github.gabrielhs33.salesapi.rest.products;

import io.github.gabrielhs33.salesapi.model.Product;
import io.github.gabrielhs33.salesapi.model.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @PostMapping
    public ProductFormRequest save (@RequestBody  ProductFormRequest product){

        Product entityProduct = product.toModel();
        repository.save(entityProduct);
        return ProductFormRequest.fromModel(entityProduct);
    }
}
