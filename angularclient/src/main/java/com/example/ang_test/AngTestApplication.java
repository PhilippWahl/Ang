package com.example.ang_test;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;
import java.util.stream.Stream;

@SpringBootApplication
public class AngTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngTestApplication.class, args);
	}

	@Bean
	CommandLineRunner init(CarRepository carRepository) {
		return args -> {
			Stream.of("localhost:4200/standart-user/Standart Felgen#0#0#Schwarz#170#0#0#-#28000").forEach(name -> {
				String[] split= name.split("/");
				split = split[2].split("#");
				System.out.println(Arrays.toString(split));
				Car car = new Car(split[0],Integer.parseInt(split[1]),Integer.parseInt(split[2]),split[3],Integer.parseInt(split[4]),Integer.parseInt(split[5]),Integer.parseInt(split[6]), split[7],Integer.parseInt(split[8]));
//				Car car = new Car( split[0], Integer.parseInt(split[1]),split[2], Integer.parseInt(split[3]), Integer.parseInt(split[4]), split[5].split(","));

				carRepository.save(car);
				System.out.println();
			});
			carRepository.findAll().forEach(System.out::println);
			System.out.println(carRepository.count());
		};
	}

}
