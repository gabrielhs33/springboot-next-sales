package io.github.gabrielhs33.salesapi.model.repository;


import io.github.gabrielhs33.salesapi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {


}
