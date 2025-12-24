package com.aghairsalon.resourceserver.controller;

import com.aghairsalon.resourceserver.dto.MessageDTO;
import com.aghairsalon.resourceserver.services.PruebaRsrcService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.aghairsalon.resourceserver.model.PruebaRsrc;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/resource")
public class ResourceController {

    private final PruebaRsrcService pruebaRsrcService;

    @GetMapping("/user")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'OIDC_USER')")
    public ResponseEntity<MessageDTO> user(Authentication authentication) {
        return ResponseEntity.ok(new MessageDTO("Hola " + authentication.getName()));
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<MessageDTO> admin(Authentication authentication) {
        return ResponseEntity.ok(new MessageDTO("Hola Mr." + authentication.getName()));
    }

    @GetMapping("/prueba")
    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'OIDC_USER')")
    public ResponseEntity<List<PruebaRsrc>> findAll() {
        return ResponseEntity.ok(pruebaRsrcService.findAll());
    }

//    @GetMapping("/prueba")
//    @PreAuthorize("hasAnyAuthority('ROLE_USER', 'OIDC_USER')")
//    public ResponseEntity<List<PruebaRsrcDTO>> findAll() {
//        List<PruebaRsrcDTO> aux = new ArrayList<>();
//        pruebaRsrcService.findAll().forEach(e -> {
//            new PruebaRsrcDTO();
//        });
//        return ResponseEntity.ok(pruebaRsrcService.findAll());
//    }

}
