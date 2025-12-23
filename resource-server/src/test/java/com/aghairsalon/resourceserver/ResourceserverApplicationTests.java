package com.aghairsalon.resourceserver;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.oauth2.jwt.JwtDecoder;

@SpringBootTest
@ActiveProfiles("test")
class ResourceserverApplicationTests {

    // Mockeamos el decodificador para "engañar" a la seguridad de Spring
    // y que no intente conectarse a nada externo.
    @MockBean
    private JwtDecoder jwtDecoder;

    @Test
    void contextLoads() {
        // Si la aplicación levanta el contexto (DB H2 + Mock Security),
        // este test pasa y JaCoCo genera el reporte.
    }

}