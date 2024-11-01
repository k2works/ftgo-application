package net.chrisrichardson.ftgo.orderservice.service;

import net.chrisrichardson.ftgo.orderservice.domain.Restaurant;
import org.springframework.data.repository.CrudRepository;

public interface RestaurantRepository extends CrudRepository<Restaurant, Long> {
}
