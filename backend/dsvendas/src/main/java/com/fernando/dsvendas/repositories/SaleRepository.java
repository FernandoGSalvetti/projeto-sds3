package com.fernando.dsvendas.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.fernando.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
