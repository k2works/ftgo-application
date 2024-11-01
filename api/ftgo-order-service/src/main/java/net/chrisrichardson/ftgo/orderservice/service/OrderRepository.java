package net.chrisrichardson.ftgo.orderservice.service;

import net.chrisrichardson.ftgo.orderservice.domain.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
