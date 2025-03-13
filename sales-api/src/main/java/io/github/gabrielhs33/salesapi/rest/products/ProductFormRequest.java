package io.github.gabrielhs33.salesapi.rest.products;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.github.gabrielhs33.salesapi.model.Product;

import java.math.BigDecimal;
import java.time.LocalDate;

public class ProductFormRequest {

    private Long id;
    private String description;
    private String name;
    private String sku;
    private BigDecimal price;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate registration;

    public ProductFormRequest(Long id, String description,
                              String name, String sku,
                              BigDecimal price, LocalDate registration) {
        super();
        this.id = id;
        this.description = description;
        this.name = name;
        this.sku = sku;
        this.price = price;
        this.registration = registration;
    }

    public ProductFormRequest() {
        super();
    }

    public Product toModel(){

        return  new Product(id,name,description,sku,price);
    }


    public static ProductFormRequest fromModel(Product product){

        return  new ProductFormRequest(
                product.getId(),
                product.getDescription(),
                product.getName(),
                product.getSku(),
                product.getPrice(),
                product.getRegistrationDate());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public LocalDate getRegistarion() {
        return registration;
    }

    public void setRegistarion(LocalDate registration) {
        this.registration = registration;
    }

    @Override
    public String toString() {
        return "ProductFormRequest{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", name='" + name + '\'' +
                ", sku='" + sku + '\'' +
                ", price=" + price +
                '}';
    }
}
