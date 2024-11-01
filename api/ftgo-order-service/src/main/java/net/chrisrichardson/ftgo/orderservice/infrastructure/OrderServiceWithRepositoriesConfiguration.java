package net.chrisrichardson.ftgo.orderservice.infrastructure;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "net.chrisrichardson.ftgo.orderservice.domain")
@EnableAutoConfiguration
@Import({OrderServiceConfiguration.class})
public class OrderServiceWithRepositoriesConfiguration {


}