package io.github.gabrielhs33.salesapi.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(scale = 100)
    private String name;
    @Column(scale = 255)
    private String description;
    @Column
    private String sku;
    @Column(precision = 16, scale = 2)
    private BigDecimal price;
    @Column(name="registration_date")
    private LocalDate registrationDate;

    public Product(){
        super();
    }

    public Product(Long id, String name, String description, String sku, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sku = sku;
        this.price = price;
    }

    public Product(String name, String description, String sku, BigDecimal price) {
        this.name = name;
        this.description = description;
        this.sku = sku;
        this.price = price;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }

    @PrePersist
    public void prePersist(){

        setRegistrationDate(LocalDate.now());
    }

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", sku='" + sku + '\'' +
                ", price=" + price +
                '}';
    }
}
