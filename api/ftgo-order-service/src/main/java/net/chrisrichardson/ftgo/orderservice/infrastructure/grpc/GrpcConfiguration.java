package net.chrisrichardson.ftgo.orderservice.infrastructure.grpc;

import net.chrisrichardson.ftgo.orderservice.service.OrderService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GrpcConfiguration {

  @Bean
  public OrderServiceServer helloWorldServer(OrderService orderService) {
    return new OrderServiceServer(orderService);
  }
}
