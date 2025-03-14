package io.github.gabrielhs33.salesapi.rest.products;

import io.github.gabrielhs33.salesapi.model.Product;
import io.github.gabrielhs33.salesapi.model.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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

    @PutMapping("{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody ProductFormRequest product){

        Optional<Product> existingProduct = repository.findById(id);

        if(existingProduct.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        Product entityProduct = product.toModel();
        entityProduct.setId(id);
        repository.save(entityProduct);

        return ResponseEntity.ok().build();
    }
}
