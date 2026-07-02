package com.mitra.auth;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class AuthServiceApplication {

	@PostConstruct
    public void init() {
        // Force the JVM to use UTC or Asia/Kolkata globally
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
    }

	public static void main(String[] args) {
		SpringApplication.run(AuthServiceApplication.class, args);
	}

}
